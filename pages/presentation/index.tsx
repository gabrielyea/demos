import Mosaico from "@/components/mosaico/Mosaico";
import ScrollSection from "@/components/mosaico/ScrollSection";
import Trigger from "@/components/mosaico/Trigger";
import Slime from "@/components/Slime";
import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

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
        <div className="h-[4000px]" />
      </div>
      <div>
        <section className="sticky "></section>
        <div className="h-[2000px]">
          <div className="relative top-[30%] left-[20%] w-fit">
            <Trigger index={1} setIndex={setIndex} />
            <img src="explotion.gif" width={256} height={256} />
          </div>
        </div>
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
