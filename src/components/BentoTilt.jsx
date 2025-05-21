import { useRef, useState } from "react";

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef();

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    //get the properties of the position of the card to be transformed
    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    //get the relative X and relative Y properties - X and Y relative to the cursor
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    //using the relative distance of our cursor and the card, get the tilt. Increase the * 5 / * -5 values for a stronger effect
    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    //put the new transform css styling into a variable
    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;

    //call the function to set the transform style of the given element using the newTransform variable containing css styling
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export default BentoTilt;
