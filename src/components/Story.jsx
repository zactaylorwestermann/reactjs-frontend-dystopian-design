import React, { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import RoundedCorners from "./RoundedCorners";
import Button from "./Button";

const Story = () => {
  const frameRef = useRef("null");

  const handleMouseLeave = () => {
    // upon leaving the element, reset the element positioning

    // get the current element
    const element = frameRef.current;

    // reset the animations
    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.inOut",
    });
  };

  const handleMouseMove = (e) => {
    // get mouse position
    const { clientX, clientY } = e;
    // get current element hovered
    const element = frameRef.current;

    // if there is no element being hovered, exit function
    if (!element) return;

    // get the properties of the currently hovered element - x and y position
    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    // calculate the center of the element/image
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // calculate the rotation values based on the mouse position relative to the center of the hovered element
    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    // animate with gsap
    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  return (
    <section
      id="discover"
      className="min-h-dvh w-screen bg-black text-s-white-50"
    >
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-microgramma text-sm uppercase md:text-[10px]">
          Accomplish great things
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="Our work is important"
            sectionId="#story"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  src="/img/horrores.png"
                  alt="entrance"
                  className="object-contain"
                />
              </div>
            </div>
            {/*<RoundedCorners />*/
            /* this made the website really laggy on chrome */}
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              There is little time left. The floodgates have opened. Join
              together your spirit with ours or be left behind in the coming
              rapture.
            </p>

            <Button
              id="realm-button"
              title="Meld Spirit"
              containerClass="mt-5  "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
