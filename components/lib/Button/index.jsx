import React from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

const styles = createUseStyles((theme) => {
  return {
    root: {
      background: theme.colors.primary,
      border: 'none',
      borderRadius: theme.border.radius,
      padding: '8px 16px',
      color: '#fff',
      fontSize: '1.1rem',
      cursor: 'pointer',
    },
    grey: {
      background: theme.common.grey,
    },
    secondary: {
      background: theme.colors.secondary,
    },
  };
});

function Button({ children, disabled, variant, ...props }) {
  const classes = styles();
  function getVariants() {
    let variants = [];
    if (variant === 'grey') {
      variants.push(classes.grey);
    }
    if (variant === 'secondary') {
      variants.push(classes.secondary);
    }
    return clsx(classes.root, variants);
  }
  return (
    <button className={getVariants()} disabled={disabled} {...props}>
      {children}
    </button>
  );
}

export default Button;
