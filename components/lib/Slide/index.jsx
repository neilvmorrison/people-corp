import React from 'react';
import { createUseStyles } from 'react-jss';

const slideStyles = createUseStyles((theme) => ({
  root: {
    height: '85vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function Slide({ children, title }) {
  const classes = slideStyles();
  return (
    <div className={classes.root}>
      {title && <h2>{title}</h2>}
      <section className={classes.root}>{children}</section>
    </div>
  );
}

export default Slide;
