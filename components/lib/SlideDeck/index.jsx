import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import Province from '../Slide/Province';
import Company from '../Slide/Company';
import Dot from './Dot';
import Calculator from '../Slide/Calculator';

const styles = createUseStyles((theme) => ({
  root: {},
}));

function SlideDeck() {
  const classes = styles();
  const [index, setIndex] = useState(0);
  const [province, setProvince] = useState('');
  const [companySize, setCompanySize] = useState('');

  function handleIncrease() {
    if (index === 2) return;
    setIndex((index) => index + 1);
  }

  function handleDecrease() {
    if (index === 0) return;
    setIndex((index) => index - 1);
  }

  function handleSubmit() {
    const payload = {
      province,
      companySize,
    };
    console.log(payload);
  }

  return (
    <section className={classes.root}>
      {index === 0 && (
        <Province setProvince={setProvince} handleIncrease={handleIncrease} />
      )}
      {index === 1 && (
        <Company
          companySize={companySize}
          setCompanySize={setCompanySize}
          handleDecrease={handleDecrease}
          handleIncrease={handleIncrease}
        />
      )}
      {index === 2 && <Calculator handleDecrease={handleDecrease} />}
    </section>
  );
}

export default SlideDeck;
