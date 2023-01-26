import React, { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

const messages: string[] = [
  "Hey! try scroling down!",
  "Watch out!, explosions!",
  "Mmm... check this stuff out",
];
export default function Slime({ message }) {
  const [dialog, setDialog] = useState(messages[0]);
  const controls = useAnimationControls();

  useEffect(() => {
    console.log("dialgo");
    setDialog(messages[message]);
  }, [message]);

  useEffect(() => {
    console.log("Change");
    controls.start({
      scale: [0, 1, 1, 0],
      opacity: [0, 1, 1, 0],
      transition: { duration: 5, ease: "anticipate" },
    });
  }, [message]);

  return (
    <motion.div>
      <motion.div
        animate={controls}
        className="fixed top-[10px] left-56 w-[250px] rounded-t-2xl rounded-br-2xl border-2 border-[#0ce6f2] bg-[#17001d] p-4"
      >
        <p className="text-[30px] font-bold text-[#0ce6f2]">{dialog}</p>
      </motion.div>
      <motion.div>
        <img
          className="fixed"
          width={320}
          height={320}
          src="SlimeIdleSheet.gif"
          alt=""
        />
      </motion.div>
    </motion.div>
  );
}
