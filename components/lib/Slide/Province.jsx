import React from 'react';
import { createUseStyles } from 'react-jss';
import Button from '../Button';
import Slide from '../Slide';
import Text from '../Text';

const provinces = [
  {
    value: '',
    text: 'Select a province',
  },
  {
    value: 'newfoundland',
    text: 'Newfoundland and Labrador',
  },
  {
    value: 'novaScotia',
    text: 'Nova Scotia',
  },
  {
    value: 'newBrunswick',
    text: 'New Brunswick',
  },
  {
    value: 'pei',
    text: 'Prince Edward Island',
  },
  {
    value: 'quebec',
    text: 'Quebec',
  },
  {
    value: 'ontario',
    text: 'Ontario',
  },
  {
    value: 'manitoba',
    text: 'Manitoba',
  },
  {
    value: 'saskachewan',
    text: 'Saskatchewan',
  },
  {
    value: 'alberta',
    text: 'Alberta',
  },
  {
    value: 'britishColombia',
    text: 'British Colombia',
  },
  {
    value: 'nwt',
    text: 'Northwest Territories',
  },
  {
    value: 'yukon',
    text: 'Yukon',
  },
  {
    value: 'nunavut',
    text: 'Nunavut',
  },
];

const style = createUseStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '24px',
    maxWidth: '1140px',
    margin: '0 auto',
    alignItems: 'center',
  },
  image: {
    maxWidth: '100%',
    transform: 'scale(0.65)',
  },
  select: {
    padding: '16px 24px',
    background: 'transparent',
    display: 'block',
    marginBottom: '24px',
  },
}));

function Province({ setProvince, handleIncrease }) {
  const classes = style();

  return (
    <Slide>
      <div className={classes.root}>
        <img className={classes.image} src="/assets/canada.svg" />
        <section>
          <Text variant="header">Select a Province</Text>
          <select
            className={classes.select}
            onChange={(e) => setProvince(e.target.value)}
          >
            {provinces.map((province) => (
              <option key={province.value} value={province.value}>
                {province.text}
              </option>
            ))}
          </select>
          <Button onClick={handleIncrease}>Next Step</Button>
        </section>
      </div>
    </Slide>
  );
}

export default Province;
