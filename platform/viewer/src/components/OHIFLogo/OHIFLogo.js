import './OHIFLogo.css';

import { Icon } from '@ohif/ui';
import React from 'react';

function OHIFLogo() {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="header-brand"
      href="https://ajn404.github.io/log.github.io/"
    >
      <Icon name="ohif-logo" className="header-logo-image" />
      <div className="header-logo-text">胆道肿瘤精准辅助决策系统</div>
    </a>
  );
}

export default OHIFLogo;
