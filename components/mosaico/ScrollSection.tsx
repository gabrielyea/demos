import {
  LayoutGroup,
  useScroll,
  useSpring,
  useTransform,
  motion,
} from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

export default function ScrollSection() {
  const ref = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const sx = useSpring(
    useTransform(scrollY, [0, 1000], [1, 1200])
  ) as unknown as number;

  const sy = useSpring(
    useTransform(scrollY, [0, 1000], [1, 600])
  ) as unknown as number;

  const mx = useSpring(
    useTransform(scrollY, [1500, 2000], [0, -600])
  ) as unknown as number;

  const mo = useSpring(
    useTransform(scrollY, [1500, 2000], [0, 1])
  ) as unknown as number;

  return (
    <section
      style={{
        display: "flex",
        gap: "4rem",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        zIndex: 10,
      }}
    >
      <LayoutGroup>
        <motion.div layout>
          <motion.div
            className="relative h-auto rounded-md"
            layout
            style={{
              height: sy,
              width: sx,
            }}
          >
            <img
              className="rounded-md"
              style={{ objectFit: "cover", imageRendering: "crisp-edges" }}
              alt="something"
              src="/clouds.png"
            />
          </motion.div>
          <motion.div className=" right-[200px]" style={{ opacity: mo }}>
            <h1 className="text-xl font-bold text-white">Clouds</h1>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute top-[800px] right-[200px]"
          style={{ translateX: mx, opacity: mo }}
        >
          <h1 className="text-[100px] font-bold text-[#fe6c90]">
            {" "}
            Hello there!!{" "}
          </h1>
        </motion.div>
      </LayoutGroup>
    </section>
  );
}
