import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgTks = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#tks_svg__grad1)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <G fill="#FFF">
      <Path d="M261.47 222.75a44 44 0 015.28 0c16.28 1.1 23.76 23.21 34.1 22a89.76 89.76 0 01-33 17.05 22 22 0 01-23.87-14.3v44L308 254.98V198l-46.53 24.75zm-31.79-.11a22.55 22.55 0 01-8.14-16.39v-.88c0-12.76 20.57-33 21.23-33 .66.66 21.23 20.35 21.23 33v.99a22 22 0 01-6.6 14.96l50.6-27.17-66-32.34-66 32.01 53.68 28.82zm10.78 25.3a22 22 0 01-23.87 14.41 89.76 89.76 0 01-33-17.05c10.34.77 17.71-21.45 34.1-22a44 44 0 015.28 0L176 198v57.09l64.57 37.29-.11-44.44z" />
      <Path d="M242 110c-72.897 0-132 59.103-132 132s59.103 132 132 132 132-59.103 132-132a132 132 0 00-132-132zm-73.7 79.09l73.7-35.75 73.81 35.75v70.29L242 301.95l-73.7-42.57v-70.29zm147.73 99l-73.48 42.46-74.36-42.9v-4.07l74.36 42.9 73.48-42.46v4.07zm0-8.25l-73.48 42.46-74.36-42.9V275l74.36 43.01 73.48-42.46v4.29zm0-8.25l-73.48 42.46-74.36-42.9v-4.07l74.36 43.01 73.48-42.46v3.96z" />
    </G>
  </Svg>
);

export default SvgTks;
