import { TinyColor } from '@ctrl/tinycolor';
import { theme } from 'antd';
import { ConfigContext } from 'antd/es/config-provider';
import { useContext } from 'react';
import SiteContext from '../slots/SiteContext';

const { useToken } = theme;

const boxShadowCard = `
0 1px 2px -2px ${new TinyColor('rgba(0, 0, 0, 0.16)').toRgbString()},
0 3px 6px 0 ${new TinyColor('rgba(0, 0, 0, 0.12)').toRgbString()},
0 5px 12px 4px ${new TinyColor('rgba(0, 0, 0, 0.09)').toRgbString()}
`;

const useSiteToken = () => {
  const result = useToken();
  const { getPrefixCls, iconPrefixCls } = useContext(ConfigContext);
  const { theme: siteTheme } = useContext(SiteContext);
  const rootPrefixCls = getPrefixCls();
  const { token } = result;
  const siteMarkdownCodeBg = token.colorFillTertiary;

  return {
    ...result,
    token: {
      ...token,
      headerHeight: 64,
      menuItemBorder: 2,
      mobileMaxWidth: 767.99,
      siteMarkdownCodeBg,
      antCls: `.${rootPrefixCls}`,
      iconCls: `.${iconPrefixCls}`,
      /** 56 */
      marginFarXS: (token.marginXXL / 6) * 7,
      /** 80 */
      marginFarSM: (token.marginXXL / 3) * 5,
      /** 96 */
      marginFar: token.marginXXL * 2,
      codeFamily: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
      boxShadowCard,
      siteTheme
    },
    /** dumi-theme-antd 站点 class 前缀 */
    siteCls: 'dumi-antd'
  };
};

export default useSiteToken;
