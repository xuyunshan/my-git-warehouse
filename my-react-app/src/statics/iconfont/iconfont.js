import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1528386054325'); /* IE9*/
    src: url('./iconfont.eot?t=1528386054325#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1528386054325') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1528386054325#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
