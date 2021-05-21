import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgGsc = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#gsc_svg__grad1)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M341.77 198.517H241.142a42.636 42.636 0 1039.908 57.464h-39.908a11.242 11.242 0 01-11.253-11.253v-1.364a11.242 11.242 0 0111.253-11.253h66.517c.484 3.102.715 6.237.682 9.372a67.199 67.199 0 11-67.199-67.529l2.057-.341c.429.198.88.308 1.364.341h59.686c32.571 0 45.87-17.391 45.87-41.954H241.142C180.95 132 132.11 180.763 132 240.977c-.088 60.214 48.598 109.12 108.812 109.318 60.214.187 109.197-48.422 109.483-108.636v-34.452a8.525 8.525 0 00-8.525-8.69z"
      fill="#FFF"
    />
  </Svg>
);

export default SvgGsc;
