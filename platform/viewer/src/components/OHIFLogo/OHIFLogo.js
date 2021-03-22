import './OHIFLogo.css';

import { Icon } from '@ohif/ui';
import React from 'react';

function OHIFLogo() {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="header-brand"
      href="https://ajn404.github.io/log.github.io/2021/03/22/%E6%AF%95%E4%B8%9A%E8%AE%BE%E8%AE%A1/bishe/"
    >
      <Icon name="ohif-logo" className="header-logo-image" />
      {/* Logo text would fit smaller displays at two lines:
       *
       * Open Health
       * Imaging Foundation
       *
       * Or as `OHIF` on really small displays
       */}
      {/*<Icon name="ohif-text-logo" className="header-logo-text" />*/}
      <div className="header-logo-text">胆道肿瘤精准辅助决策系统</div>
    </a>
  );
}

export default OHIFLogo;
