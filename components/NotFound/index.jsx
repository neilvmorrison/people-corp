import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import Text from '../lib/Text';
import Button from '../lib/Button';

const styles = createUseStyles((theme) => ({
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
  },
}));

function NotFound() {
  const classes = styles();
  const [url, setUrl] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!url) return;
    console.log(window.location);
    window.location.href = `${url}.${process.env.domain}`;
  }

  return (
    <div>
      <Text variant="header">This isn't what you're looking for!</Text>
      <Text variant="subHeader">
        Enter your company's url to start calculating your benefit costs!
      </Text>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={classes.inputContainer}>
          <input
            placeholder="enter your company's url"
            onChange={(e) => setUrl(e.target.value)}
          />
          <Text>.{process.env.domain}</Text>
        </div>
        <Button type="submit">Let's Go!</Button>
      </form>
    </div>
  );
}

export default NotFound;
