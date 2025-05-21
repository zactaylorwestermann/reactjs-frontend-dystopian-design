import BentoTilt from "./BentoTilt";
import BentoCard from "./BentoCard";

const EndSection = () => {
  return (
    <div id="freedom" className="py-20 min-h-96 w-screen px-10 bg-black">
      <div className="container mx-auto px-3 md:px-10">
        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard src="videos/features-1.mp4" />
        </BentoTilt>
      </div>
    </div>
  );
};

export default EndSection;
