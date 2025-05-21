import BentoTilt from "./BentoTilt";
import BentoCard from "./BentoCard";
import BentoCardImage from "./BentoCardImage";

const Features = () => {
  return (
    <section id="about" className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-general text-lg text-blue-50">
            What we believe in
          </p>
          <p className="max-w-md font-general text-lg text-blue-50 opacity-50">
            Learn about our company values
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/features-2.webm"
            title={<>greatness</>}
            description="Strive for your best self"
          />
        </BentoTilt>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 border-hsla row-span-1 md:col-span-1 md:row-span-2 text-black">
            <BentoCardImage
              src="img/33thomas.jpeg"
              title={<>order</>}
              description="Let our mandates guide your actions"
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 border-hsla row-span-1 ms-32 md:col-span-1 md:ms-0 text-s-white-50">
            <BentoCardImage
              src="img/rackham-horizontal.jpg"
              title={<>comfort</>}
              description="We all deserve a time of rest and relaxation"
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 border-hsla me-14 md:col-span-1 md:me-0 text-s-white-50">
            <BentoCardImage
              src="img/Euglena1.png"
              title={<>balance</>}
              description="Remember, you are one"
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-s-white-50 p-5">
              <h1 className="bento-title">
                We know <br /> all
              </h1>
            </div>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <video
              src="videos/serverloop3.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
