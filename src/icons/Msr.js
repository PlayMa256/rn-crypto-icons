import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgMsr = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#msr_svg__grad1)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <G fill="#FFF">
      <Path d="M242 132c-60.72 0-110 49.28-110 110 0 1.463.143 2.86.22 4.323h51.623l24.937-42.9L242 251.02l33.143-47.597 24.937 42.9h51.623c.077-1.463.22-2.86.22-4.323C352 181.28 302.72 132 242 132zm75.823 101.057c-4.466-37.917-36.74-67.397-75.823-67.397s-71.357 29.557-75.823 67.397h-13.354c4.477-45.254 42.757-80.674 89.177-80.674 46.42 0 84.623 35.42 89.177 80.674h-13.354z" />
      <Path d="M274.197 228.063L242 274.263l-32.197-46.2-18.326 31.537H133.54C141.977 311.96 187.22 352 242 352c54.78 0 100.023-40.04 108.46-92.477h-57.937l-18.326-31.46zm37.62 44.737h14.223c-12.617 34.243-45.463 58.817-84.04 58.817-38.577 0-71.423-24.574-84.04-58.817h14.223c11.88 26.763 38.654 45.54 69.817 45.54 31.163 0 57.937-18.777 69.817-45.54z" />
    </G>
  </Svg>
);

export default SvgMsr;
