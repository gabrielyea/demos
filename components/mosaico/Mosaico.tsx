import { motion, useScroll, useTransform, useSpring } from "framer-motion";
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
        <p>something</p>
        <h1> Title</h1>
        <p className="font-bold"> more stuff</p>
        <p>
          En el marco del Día Internacional de la Visibilidad Trans Ambulante
          anuncia Tonalidades, un ciclo de cine que resalta historias de
          personas trans en diferentes territorios de México.
        </p>
      </motion.div>
      {/* Squares */}
      <div className="flex w-full flex-row items-center justify-end gap-3">
        <div className="flex flex-col gap-3">
          <MosaicAnimation
            scrollRange={[0, 0.3, 1]}
            scrollYProgess={scrollYProgress}
            animParams={animParams}
          >
            <motion.div className="h-[260px] w-[268px] bg-purple-300"></motion.div>
          </MosaicAnimation>
          <MosaicAnimation
            scrollRange={[0, 0.3, 1]}
            scrollYProgess={scrollYProgress}
            animParams={animParams2}
          >
            <motion.div className="h-[260px] w-[268px] bg-green-300"></motion.div>
          </MosaicAnimation>
        </div>
        <div className="flex flex-col gap-3">
          <MosaicAnimation
            scrollRange={[0, 0.3, 1]}
            scrollYProgess={scrollYProgress}
            animParams={animParams3}
          >
            <motion.div className="h-[480px] w-[189px] bg-blue-300"></motion.div>
          </MosaicAnimation>

          <MosaicAnimation
            scrollRange={[0, 0.3, 1]}
            scrollYProgess={scrollYProgress}
            animParams={animParams4}
          >
            <motion.div className="h-[182px] w-[189px] bg-pink-300"></motion.div>
          </MosaicAnimation>
        </div>
      </div>
    </motion.div>
  );
}
