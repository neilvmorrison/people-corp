import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import Button from '../Button';
import Slide from '../Slide';
import Text from '../Text';
import { dentalOptions, selfOrDependantOptions, planOptions } from './consts';

const styles = createUseStyles((theme) => ({
  root: {
    display: 'flex',
    maxWidth: '1440px',
  },
  image: {
    display: 'none',
    '@media(min-width: 992px)': {
      display: 'block',
      marginRight: '48px',
      maxWidth: '100%',
      transform: 'scale(0.7)',
      flexBasis: '300px',
    },
  },
  formGroup: {
    marginBottom: '36px',
  },
  form: {
    padding: '24px 36px',
    borderRadius: theme.border.radius,
    boxShadow: theme.boxShadow,
    border: '1px solid #ededed',
  },
}));

function Calculator({ handleDecrease }) {
  const [formData, setFormData] = useState({
    salary: '',
    lifeInsurance: false,
    disability: false,
    planOptions: '',
    selfOrDependant: '',
    dental: '',
  });
  const classes = styles();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <Slide>
      <div className={classes.root}>
        <div>
          <img src="/assets/person.png" className={classes.image} />
        </div>
        <form onSubmit={handleSubmit} className={classes.form}>
          <Text variant="header">Let's Calculate!</Text>
          <div className={classes.formGroup}>
            <Text variant="subHeader">What is your annual salary?</Text>
            <input
              placeholder="enter your annual salary"
              type="number"
              onChange={(e) =>
                setFormData({ ...formData, salary: e.target.value })
              }
            />
          </div>
          <div className={classes.formGroup}>
            <Text variant="subHeader">
              {'Would you like Life and AD&D Insurance?'}
            </Text>
            <input
              id="life-insurance-yes"
              type="radio"
              checked={formData.lifeInsurance}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  lifeInsurance: true,
                })
              }
            />
            <label for="life-insurance-yes">Yes</label>
            <input
              id="life-insurance-no"
              type="radio"
              checked={!formData.lifeInsurance}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  lifeInsurance: false,
                })
              }
            />
            <label for="life-insurance-no">No</label>
          </div>
          <div className={classes.formGroup}>
            <Text variant="subHeader">
              Would you like Long Term Disability protection?
            </Text>
            <input
              id="disability-yes"
              type="radio"
              value={true}
              checked={formData.disability}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  disability: true,
                })
              }
            />
            <label for="disability-yes">Yes</label>
            <input
              id="disability-no"
              type="radio"
              value={false}
              checked={!formData.disability}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  disability: false,
                })
              }
            />
            <label for="disability-no">No</label>
          </div>
          <div className={classes.formGroup}>
            <Text variant="subHeader">
              For Extended Health (and optional Dental): Bronze, Silver or Gold?
            </Text>
            <select
              onChange={(e) =>
                setFormData({ ...formData, planOptions: e.target.value })
              }
            >
              {planOptions.map((option) => (
                <option
                  key={`plan-option-${option.value}`}
                  value={option.value}
                >
                  {option.text}
                </option>
              ))}
            </select>
          </div>
          <div className={classes.formGroup}>
            <Text variant="subHeader">
              Is coverage for yourself (single) or do you have eligible
              dependents?
            </Text>
            <select
              onChange={(e) =>
                setFormData({ ...formData, selfOrDependant: e.target.value })
              }
            >
              {selfOrDependantOptions.map((option) => (
                <option
                  key={`self-or-dependent-${option.value}`}
                  value={option.value}
                >
                  {option.text}
                </option>
              ))}
            </select>
          </div>
          <div className={classes.formGroup}>
            <Text variant="subHeader">Would you like to add Dental Care?</Text>
            <select
              onChange={(e) =>
                setFormData({ ...formData, dental: e.target.value })
              }
            >
              {dentalOptions.map((option) => (
                <option
                  key={`dental-option-${option.value}`}
                  value={option.value}
                >
                  {option.text}
                </option>
              ))}
            </select>
          </div>
          <Button type="subit">Submit</Button>
        </form>
      </div>
    </Slide>
  );
}

export default Calculator;
