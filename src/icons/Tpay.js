import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgTpay = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#tpay_svg__grad1)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <G fill="#FFF">
      <Path d="M241.945 365.508c-68.178 0-123.453-55.275-123.453-123.453s55.275-123.453 123.453-123.453 123.453 55.275 123.453 123.453-55.275 123.453-123.453 123.453m0-254.771c-72.413 0-131.318 58.905-131.318 131.318s58.905 131.318 131.318 131.318 131.318-58.905 131.318-131.318-58.905-131.318-131.318-131.318" />
      <Path d="M288.189 289.025l-6.853 29.689-1.65 7.183h-7.37l-37.895-.022h-.154c-15.191-.253-27.115-4.29-34.936-11.418 6.754 11.913 21.098 18.81 41.118 19.14h.154l37.884.022h7.37l1.661-7.183 6.853-29.689-5.346-11.341-.836 3.619zm-11.913-127.281l-5.412-11.253-.77 3.52-5.137 23.397h7.876zm27.357 27.071l-6.82 28.875-1.694 7.128h-41.063l-10.428 47.608c-.22 1.364-.352 2.75-.352 3.52 0 .671.077 1.1.143 1.309a6.6 6.6 0 002.453.418h4.488l9.878-45.122h41.063l1.683-7.139 6.82-28.875-5.302-11.396-.88 3.674zm-101.882 36.003H173.14l9.856 7.733h17.072z" />
      <Path d="M246.774 286.946h-1.045c-7.964-.209-11.726-4.356-11.726-11 0-1.584.264-3.685.528-5.258l12.078-55.132h41.184l6.82-28.875h-41.184l7.612-34.65h-33.594l-7.623 34.65H183.37l-6.556 28.875h36.454l-14.19 64.845c-.77 3.146-1.045 6.82-1.045 8.657 0 18.502 14.597 27.192 36.388 27.555l37.884.011 6.853-29.678h-32.384z" />
    </G>
  </Svg>
);

export default SvgTpay;
