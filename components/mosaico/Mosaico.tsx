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

export default function Mosaico({ images }): JSX.Element {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  return (
    <motion.div
      ref={ref}
      className="flex h-[800px] flex-row items-center px-40"
    >
      {/* Content */}
      <motion.div className="flex h-[360px] w-[538px] flex-col items-start justify-items-start gap-4 py-4">
        <h1 className="rounded-md border-2 border-r-[8px] border-b-[8px] border-[#ff0546] border-r-[#660f31] border-b-[#660f31] bg-[#17001d] p-10 text-[30px] font-bold text-[#0ce6f2]">
          Some stuff I have done
        </h1>
      </motion.div>
      {/* Squares */}
      <div className="flex w-full flex-row items-center justify-end gap-3">
        <div className="flex flex-col gap-3">
          <MosaicAnimation
            scrollRange={[0, 0.1, 1]}
            scrollYProgess={scrollYProgress}
            animParams={animParams}
          >
            <motion.div className="relative rounded-lg border-[8px] border-transparent border-l-[#0ce6f2]">
              <img
                alt=""
                style={{ objectFit: "cover", imageRendering: "crisp-edges" }}
                src="/Comet.gif"
                width={260}
                height={260}
              />
            </motion.div>
          </MosaicAnimation>
          <MosaicAnimation
            scrollRange={[0, 0.2, 1]}
            scrollYProgess={scrollYProgress}
            animParams={animParams2}
          >
            <motion.div className="relative rounded-lg border-[8px] border-transparent border-l-[#ff0546]">
              <img
                alt=""
                style={{ objectFit: "cover", imageRendering: "crisp-edges" }}
                src="/another-sunset.png"
                width={280}
                height={400}
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
            <motion.div className="relative rounded-lg border-[8px] border-transparent border-l-[#ff0546]">
              <img
                alt=""
                style={{ objectFit: "cover", imageRendering: "crisp-edges" }}
                src="/Giant.png"
                width={280}
                height={400}
              />
            </motion.div>
          </MosaicAnimation>

          <MosaicAnimation
            scrollRange={[0, 0.2, 1]}
            scrollYProgess={scrollYProgress}
            animParams={animParams4}
          >
            <motion.div className="relative rounded-lg border-[8px] border-transparent border-l-[#0ce6f2]">
              <img
                alt=""
                style={{ objectFit: "cover", imageRendering: "crisp-edges" }}
                src="/attackAnim.gif"
                width={348}
                height={456}
              />
            </motion.div>
          </MosaicAnimation>
        </div>
      </div>
    </motion.div>
  );
}
