import React from 'react';
import { IconType } from 'react-icons';

type ButtonProps = {
  label?: string;
  classes: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  icon?: IconType | undefined;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  classes,
  type,
  icon: Icon,
  onClick,
  disabled,
}) => {
  return (
    <button
      className={classes}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {Icon ? <Icon /> : null}
      {label}
    </button>
  );
};
