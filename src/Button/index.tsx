import React, { type FC } from 'react';

import { Button, ButtonProps } from 'antd';

export interface IGBIButtonProps extends ButtonProps {
  text?: string;
}
const GBIButton: FC<IGBIButtonProps> = ({text, ...antdButtonkProps}) => <Button {...antdButtonkProps }>{text || antdButtonkProps.children}</Button>;

export default GBIButton;
