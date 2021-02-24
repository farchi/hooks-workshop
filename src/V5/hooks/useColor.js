import { useState, useEffect } from 'react';
import * as ColorSubscriptions from '../../shared/ColorSubscriptions';

// const useColor = () => {
//   const [color, setColor] = useState(null);
//   useEffect(() => {
//     ColorSubscriptions.subscribe(setColor);
//     return () => {
//       ColorSubscriptions.unsubscribe(setColor);
//     };
//   }, []);

//   return color;
// };

export default useColor;
