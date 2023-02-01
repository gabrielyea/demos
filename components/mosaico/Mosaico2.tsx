import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import MosaicAnimation from "./MosaicAnimation";

const animParams = {
  rotate: [-45, 0, 0],
  translateX: [-100, 0, 0],
  translateY: [-100, 0, 0],
  opacity: [0, 0.8, 1],
};

const animParams2 = {
  rotate: [-80, 0, 0],
  translateX: [-200, 0, 0],
  translateY: [200, 0, 0],
  opacity: [0, 0.8, 1],
};

const animParams3 = {
  rotate: [0, 0, 0],
  translateX: [0, 0, 0],
  translateY: [-400, 0, 0],
  opacity: [0, 0.8, 1],
};

const animParams4 = {
  rotate: [0, 0, 0],
  translateX: [0, 0, 0],
  translateY: [200, 0, 0],
  opacity: [0, 0.8, 1],
};

export default function Mosaico2({ images }): JSX.Element {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const displayContet = () => {
    return (
      <motion.div className="flex h-[360px] w-[538px] flex-col items-start justify-items-start gap-4 py-4">
        <p> TEXTO CHIQUITO </p>
        <h1>Some stuff I have done</h1>

        <p>fechas y fechas</p>
        <p>lugar</p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          deserunt suscipit iure, est qui aliquid consequatur blanditiis veniam
          at iusto dignissimos recusandae exercitationem asperiores, optio cum
          id voluptas? Maxime, reprehenderit.
        </p>

        <button className="border-2 border-neutral-600 p-4">
          {" "}
          Ir a la guia oficial{" "}
        </button>
      </motion.div>
    );
  };

  if (images.length === 4) {
    return (
      <motion.div ref={ref} className="flex  flex-row items-center px-40">
        {/* Content */}
        {displayContet()}
        {/* Squares */}
        <div className="flex w-full flex-row items-center justify-end gap-3">
          <div className="flex flex-col gap-3">
            <MosaicAnimation
              scrollRange={[0, 0.1, 1]}
              scrollYProgess={scrollYProgress}
              animParams={animParams}
            >
              <motion.div className="relative h-[260px] w-[268px]">
                <Image
                  fill
                  alt=""
                  style={{ objectFit: "cover", imageRendering: "crisp-edges" }}
                  src={images[0]}
                />
              </motion.div>
            </MosaicAnimation>
            <MosaicAnimation
              scrollRange={[0, 0.2, 1]}
              scrollYProgess={scrollYProgress}
              animParams={animParams2}
            >
              <motion.div className="relative h-[260px] w-[268px]">
                <Image
                  fill
                  alt=""
                  style={{ objectFit: "cover", imageRendering: "crisp-edges" }}
                  src={images[1]}
                />
              </motion.div>
            </MosaicAnimation>
          </div>
          <div className="flex flex-col gap-3">
            <MosaicAnimation
              scrollRange={[0, 0.3, 1]}
              scrollYProgess={scrollYProgress}
              animParams={animParams3}
            >
              <motion.div className="relative h-[480px] w-[189px]">
                <Image
                  fill
                  alt=""
                  style={{ objectFit: "cover", imageRendering: "crisp-edges" }}
                  src={images[2]}
                />
              </motion.div>
            </MosaicAnimation>

            <MosaicAnimation
              scrollRange={[0, 0.2, 1]}
              scrollYProgess={scrollYProgress}
              animParams={animParams4}
            >
              <motion.div className="relative h-[192px] w-[189px]">
                <Image
                  fill
                  alt=""
                  style={{ objectFit: "cover", imageRendering: "crisp-edges" }}
                  src={images[3]}
                />
              </motion.div>
            </MosaicAnimation>
          </div>
        </div>
      </motion.div>
    );
  }

  if (images.length === 3) {
    return (
      <motion.div
        ref={ref}
        className="flex-col:w flex flex-col items-center
        px-40
         sm:flex-col md:flex-row"
      >
        {/* Content */}
        {displayContet()}
        {/* Squares */}
        <div className="flex w-full flex-col items-center justify-end gap-3">
          <div className="flex flex-row items-end gap-3">
            <MosaicAnimation
              scrollRange={[0, 0.2, 1]}
              scrollYProgess={scrollYProgress}
              animParams={animParams}
            >
              <motion.div className="relative h-[178px] w-[190px] sm:h-[178px] sm:w-[190px] md:h-[178px] md:w-[190px] lg:h-[260px] lg:w-[268px]">
                <Image
                  fill
                  alt=""
                  style={{ objectFit: "cover", imageRendering: "crisp-edges" }}
                  src="/Comet.gif"
                />
              </motion.div>
            </MosaicAnimation>
            <MosaicAnimation
              scrollRange={[0, 0.2, 1]}
              scrollYProgess={scrollYProgress}
              animParams={animParams2}
            >
              <motion.div className="relative h-full w-full md:h-[234px] md:w-[132px] lg:h-[306px] lg:w-[181px]">
                <Image
                  fill
                  alt=""
                  style={{ objectFit: "cover", imageRendering: "crisp-edges" }}
                  src="/another-sunset.png"
                />
              </motion.div>
            </MosaicAnimation>
          </div>
          <div className="flex flex-col gap-3">
            <MosaicAnimation
              scrollRange={[0, 0.3, 1]}
              scrollYProgess={scrollYProgress}
              animParams={animParams3}
            >
              <motion.div className="relative md:h-[176px] md:w-[272px] lg:h-[256px] lg:w-[369px]">
                <Image
                  fill
                  alt=""
                  style={{ objectFit: "cover", imageRendering: "crisp-edges" }}
                  src="/Giant.png"
                />
              </motion.div>
            </MosaicAnimation>
          </div>
        </div>
      </motion.div>
    );
  }

  if (images.length === 2) {
    return (
      <motion.div
        ref={ref}
        className="flex h-[800px] flex-row items-center px-40"
      >
        {/* Content */}
        {displayContet()}
        {/* Squares */}
        <div className="flex w-full flex-col items-center justify-end gap-3">
          <div className="flex flex-row items-center gap-3">
            <MosaicAnimation
              scrollRange={[0, 0.1, 1]}
              scrollYProgess={scrollYProgress}
              animParams={animParams}
            >
              <motion.div className="relative h-[260px] w-[298px]">
                <Image
                  fill
                  alt=""
                  style={{ objectFit: "cover", imageRendering: "crisp-edges" }}
                  src="/Comet.gif"
                />
              </motion.div>
            </MosaicAnimation>
            <MosaicAnimation
              scrollRange={[0, 0.2, 1]}
              scrollYProgess={scrollYProgress}
              animParams={animParams2}
            >
              <motion.div className="relative h-[320px] w-[160px]">
                <Image
                  fill
                  alt=""
                  style={{ objectFit: "cover", imageRendering: "crisp-edges" }}
                  src="/another-sunset.png"
                />
              </motion.div>
            </MosaicAnimation>
          </div>
        </div>
      </motion.div>
    );
  }

  if (images.length === 1) {
    return (
      <motion.div
        ref={ref}
        className="flex h-[800px] flex-row items-center px-40"
      >
        {/* Content */}
        {displayContet()}
        {/* Squares */}
        <div className="flex w-full flex-col items-center justify-end gap-3">
          <div className="flex flex-row items-center gap-3">
            <MosaicAnimation
              scrollRange={[0, 0.1, 1]}
              scrollYProgess={scrollYProgress}
              animParams={animParams}
            >
              <motion.div className="relative h-[320px] w-[466px]">
                <Image
                  fill
                  alt=""
                  style={{ objectFit: "cover", imageRendering: "crisp-edges" }}
                  src="/Comet.gif"
                />
              </motion.div>
            </MosaicAnimation>
          </div>
        </div>
      </motion.div>
    );
  }
}
