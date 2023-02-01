import Mosaico from "@/components/mosaico/Mosaico";
import ScrollSection from "@/components/mosaico/ScrollSection";
import Trigger from "@/components/mosaico/Trigger";
import Slime from "@/components/Slime";
import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const parentAnim = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 1,
      delayChildren: 1,
    },
  },
};

const childAnimations = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const randomPos = (max: number) => {
  return Math.floor(Math.random() * max) + 1;
};

export default function index() {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log(isInView);
    if (isInView) {
      setIndex(1);
    }
  }, [isInView]);
  return (
    <div className="bg-[#09010d]">
      <Slime message={index} />
      <div>
        <section className="sticky top-[-1px] h-[1000px]">
          <ScrollSection />
        </section>
        <div className="h-[3000px]" />
      </div>
      <div>
        <section className="sticky "></section>
        <Trigger index={1} setIndex={setIndex} />
        <motion.div
          variants={parentAnim}
          initial="initial"
          animate="animate"
          exit="exit"
          className="h-[2000px]"
        >
          {[1, 2, 3, 4, 5].map((i) => {
            return (
              <motion.div
                key={i}
                variants={childAnimations}
                style={{
                  left: `${randomPos(70)}%`,
                  transform: `scale(${randomPos(2)})`,
                }}
                className="relative top-[20%] w-fit"
              >
                <img src="explotion.gif" width={256} height={256} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      <div className="flex justify-center">
        <section className="sticky pt-10">
          <Trigger index={2} setIndex={setIndex} />
          <Mosaico images={[1, 2, 3, 4]} />
        </section>
        <div className="h-[2000px]" />
      </div>
    </div>
  );
}
