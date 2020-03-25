import React from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

const styles = createUseStyles((theme) => ({
  root: {},
}));

function Dot({ active }) {
  return <input type="radio" checked={active} readOnly />;
}

export default Dot;
