import React from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';
import Slide from '.';
import Button from '../Button';

const styles = createUseStyles((theme) => ({
  root: {},
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '24px',
  },
  card: {
    cursor: 'pointer',
    padding: '16px 24px',
    transition: '0.3s',
    width: '175px',
    textAlign: 'center',
    border: '2px solid transparent',
    borderRadius: theme.border.radius,
    '&:hover': {
      boxShadow: theme.boxShadow,
    },
  },
  active: {
    border: `2px solid ${theme.colors.primary}`,
  },
  actions: {
    marginTop: '24px',
  },
}));

const companySizes = [
  {
    value: 1,
    text: '1 - 2 person firm',
    image: '/assets/couple.png',
  },
  {
    value: 2,
    text: '3 - 9 person firm',
    image: '/assets/team.png',
  },
  {
    value: 3,
    text: '10+ person firm',
    image: '/assets/group.png',
  },
];

function Company({
  handleDecrease,
  handleIncrease,
  setCompanySize,
  companySize,
}) {
  const classes = styles();
  function handleClick(value) {
    setCompanySize(value);
  }
  return (
    <Slide title="How Large is Your Company?">
      <div className={classes.container}>
        {companySizes.map((option) => (
          <div
            className={clsx(
              classes.card,
              companySize === option.value && classes.active,
            )}
            role="button"
            key={option.value}
            onClick={() => handleClick(option.value)}
          >
            <img src={option.image} />
            <p>{option.text}</p>
          </div>
        ))}
      </div>
      <div className={classes.actions}>
        <Button variant="grey" onClick={handleDecrease}>
          Back
        </Button>
        <Button onClick={handleIncrease}>Next</Button>
      </div>
    </Slide>
  );
}

export default Company;
