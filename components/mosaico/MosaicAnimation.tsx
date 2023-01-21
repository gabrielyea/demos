import { motion, MotionValue, useSpring, useTransform } from "framer-motion";

interface MosaicAnimationProps {
  scrollYProgess: MotionValue;
  scrollRange: number[];
  children: React.ReactNode;
  animParams: {
    rotate: number[];
    translateX: number[];
    translateY: number[];
    opacity: number[];
  };
}
export default function MosaicAnimation({
  scrollYProgess,
  scrollRange,
  children,
  animParams,
}: MosaicAnimationProps) {
  const rotate = useSpring(
    useTransform(scrollYProgess, scrollRange, animParams.rotate)
  );
  const translateX = useSpring(
    useTransform(scrollYProgess, scrollRange, animParams.translateX)
  );
  const translateY = useSpring(
    useTransform(scrollYProgess, scrollRange, animParams.translateY)
  );
  const opacity = useSpring(
    useTransform(scrollYProgess, scrollRange, animParams.opacity)
  );
  return (
    <motion.div
      style={{
        opacity: opacity,
        rotateZ: rotate,
        translateX: translateX,
        translateY: translateY,
      }}
    >
      {children}
    </motion.div>
  );
}
