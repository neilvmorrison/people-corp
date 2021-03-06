import React from 'react';
import { createUseStyles } from 'react-jss';
import Button from '../lib/Button';

const navBarStyles = createUseStyles((theme) => ({
  '@global': {
    body: {
      margin: 0,
      fontFamily: 'Verdana',
    },
    h1: {
      fontSize: '1.25rem',
    },
  },
  root: {
    padding: '8px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: theme.colors.primary,
    color: '#fff',
    position: 'sticky',
  },
}));

function NavBar() {
  const classes = navBarStyles();
  function handleClick() {
    alert(
      'This is where an action goes! Probably a login button for an administrator.',
    );
  }
  return (
    <div className={classes.root}>
      <h1>PeopleCorp</h1>
      <Button variant="secondary" onClick={handleClick}>
        Call to Action!
      </Button>
    </div>
  );
}

export default NavBar;
