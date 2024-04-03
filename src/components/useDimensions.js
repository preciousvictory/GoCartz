import { useRef } from "react";

export const useDimensions = ref => {
  // const dimensions = useRef({ width: 0, height: 0 });

  const windowSize = useRef([
    window.innerWidth,
    window.innerHeight,
  ]);

  // useEffect(() => {
  //   dimensions.current.width = ref.current.offsetWidth;
  //   dimensions.current.height = ref.current.offsetHeight;
  // }, []);

  // return dimensions.current;
  return windowSize.current;
};
