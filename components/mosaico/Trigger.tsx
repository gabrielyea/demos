import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

export default function Trigger({ setIndex, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log(isInView);
    if (isInView) {
      setIndex(index);
    }
  }, [isInView]);
  return <div ref={ref}></div>;
}
