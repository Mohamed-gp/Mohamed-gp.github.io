import { useActiveSectionContext } from "@/context/activeSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function useSectionInView(sectionName: string, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    console.log(`Section: ${sectionName}, In View: ${inView}`);
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
      console.log(`Active Section set to: ${sectionName}`);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
