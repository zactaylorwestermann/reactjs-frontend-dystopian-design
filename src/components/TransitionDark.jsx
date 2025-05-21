import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const TransitionDark = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#transition-dark-clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path2", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="release" className="min-h-screen w-screen bg-black">
      <div className="relative mb-8 pt-32 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[16px] text-s-white-50">
          Free your mind
        </h2>

        <AnimatedTitle
          title="Dont <br /> think"
          containerClass="mt-5 !text-s-white-50 text-center"
        />

        <div className="about-subtext !text-s-white-50">
          <p>Let us take control</p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="transition-dark-clip">
        <div className="mask-clip-path2 transition-image">
          <img
            src="img/corridor.jpg"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TransitionDark;
