import { useState } from "react";
import Globe from "react-globe.gl";

import Button from "../components/Button.jsx";

const About = () => {
  const [hasCopied, setHasCopied] = useState({ email: false, phone_no: false });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("arpitabiswal777@gmail.com");
    setHasCopied({ ...hasCopied, email: true });

    setTimeout(() => {
      setHasCopied({ ...hasCopied, email: false });
    }, 2000);
  };

  const handleCopyPhoneno = () => {
    navigator.clipboard.writeText("(+91)6303179710");
    setHasCopied({ ...hasCopied, phone_no: true });

    setTimeout(() => {
      setHasCopied({ ...hasCopied, phone_no: false });
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3 ">
          <div className="grid-container silver-glow-border">
            <img
              src="/assets/dp.jpg"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hi, I’m Arpita Biswal</p>
              <p className="grid-subtext">
                With 7 years of experience, I have honed my skills in frontend,
                creating dynamic and responsive websites.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container silver-glow-border">
            <img
              src="/assets/tech_stack.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in Javascript/Typescript with a focus on React
                ecosystems that allow me to build robust and scalable
                applications
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container silver-glow-border">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 40,
                    lng: -100,
                    text: "Bhubaneswar, India",
                    color: "white",
                    size: 15,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I’m very flexible with time zone communications & locations
              </p>
              <p className="grid-subtext">
                I&apos;m based in Bhubaneswar, India and open to remote work
                worldwide.
              </p>
              <a href="#contact">
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container silver-glow-border">
            <img
              src="assets/passion.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code.
                Programming isn&apos;t just my profession—it&apos;s my passion.
                I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container silver-glow-border">
            <img
              src="assets/contact_me.png"
              alt="grid-4"
              className="w-full md:h-[147px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <a href="#contact">
                <p className="grid-subtext text-center">Contact me</p>
              </a>

              <div className="copy-container" onClick={handleCopyEmail}>
                <img
                  src={hasCopied.email ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  arpitabiswal777@gmail.com
                </p>
              </div>

              <div className="copy-container" onClick={handleCopyPhoneno}>
                <img
                  src={
                    hasCopied.phone_no ? "assets/tick.svg" : "assets/copy.svg"
                  }
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  (+91)6303179710
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
