import React from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

const styles = createUseStyles((theme) => ({
  root: {
    margin: 0,
    color: '#022144',
  },
  header: {
    marginBottom: '36px',
  },
  subHeader: {
    fontSize: '1.1rem',
    marginBottom: '8px',
  },
  paragraph: {
    fontSize: '0.87rem',
    color: '#697A89',
  },
}));

function Text({ variant, children }) {
  const classes = styles();
  if (variant === 'header') {
    return <h2 className={clsx(classes.root, classes.header)}>{children}</h2>;
  }
  if (variant === 'subHeader') {
    return (
      <h2 className={clsx(classes.root, classes.subHeader)}>{children}</h2>
    );
  }
  if (variant === 'paragraph') {
    return <p className={clsx(classes.root, classes.paragraph)}>{children}</p>;
  }
}

Text.defaultProps = {
  variant: 'paragraph',
};

export default Text;
