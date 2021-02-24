import { useState, useEffect } from "react";
import * as ColorSubscriptions from "../../shared/ColorSubscriptions";

const useColor = () => {
  const [color, setColor] = useState(null);
  useEffect(() => {
    const changeColor = (color) => {
      setColor(color);
    };
    // TODO why not just pass `setColor`?
    ColorSubscriptions.subscribe(changeColor);
    return () => {
      ColorSubscriptions.unsubscribe(changeColor);
    };
  }, []);

  return color;
};

export default useColor;
