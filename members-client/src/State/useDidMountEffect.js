import { useEffect, useRef } from "react";

const useDidMountEffect = (func, deps) => {
  const didMount = useRef(0);

  useEffect(() => {
    if (didMount.current > 3) {
      func();
    } else {
      didMount.current++;
    }
  }, deps);
};

export default useDidMountEffect;
