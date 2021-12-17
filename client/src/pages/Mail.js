import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
import ChipInput from 'material-ui-chip-input';
import FormControl from '@material-ui/core/FormControl';
import axios from 'axios';
import Config from '../config.json';
import { toast } from 'react-hot-toast';

const Mail = () => {
  const [emails, setEmails] = useState([]);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const handleDeleteChip = chip => {
    let oldEmails = emails;
    oldEmails = oldEmails.filter(item => item !== chip);
    setEmails(oldEmails);
  };

  function validateEmail(email) {
    const test =
      // eslint-disable-next-line security/detect-unsafe-regex
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return test.test(String(email).toLowerCase());
  }

  const checkEmail = emailInput => {
    if (emailInput === '') {
      setErrors({ ...errors, email: 'Email Cannot Be Empty' });
    } else if (!validateEmail(emailInput)) {
      setErrors({
        ...errors,
        email: 'Invalid Email',
      });
    } else {
      setErrors({
        ...errors,
        email: undefined,
      });
      setEmails([...emails, emailInput]);
    }
  };
  const handleEmail = chip => {
    checkEmail(chip);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (emails.length === 0) {
      setErrors({ ...errors, email: 'Email Cannot Be Empty' });
    } else if (message.length === 0) {
      setErrors({ ...errors, message: 'Message Cannot Be Empty' });
    } else {
      axios
        .post(`${Config.baseUrl}/contact`, { emails: emails, message: message })
        .then(res => {
          if (res.status === 200) {
            toast.success('Message Sent Successfully');
          } else {
            toast.error(
              'Error Occurred While Sending Emails! Check Connection',
            );
          }
        });
    }
  };
  return (
    <Grid style={{ paddingTop: '10%' }}>
      <Card
        style={{
          maxWidth: '80%',
          maxHeight: '100%',
          margin: '0 auto',
        }}
      >
        <Typography gutterBottom variant={'h3'} align={'center'}>
          {'Contact Form'}
        </Typography>
        <CardContent>
          <Typography gutterBottom variant={'h5'}>
            {'Contact Us'}
          </Typography>
          <Typography
            variant={'body2'}
            color={'textSecondary'}
            component={'p'}
            gutterBottom
          >
            {'Fill up the form and our team will get back to you within 24'}
            {'hours.'}
          </Typography>
          <FormControl variant={'outlined'} fullWidth>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  placeholder={'Enter first name'}
                  label={'First Name'}
                  variant={'outlined'}
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  placeholder={'Enter last name'}
                  label={'Last Name'}
                  variant={'outlined'}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <ChipInput
                  label={'Email'}
                  type={'email'}
                  variant={'outlined'}
                  error={Boolean(errors.email)}
                  helperText={errors.email ? errors.email : ''}
                  required
                  fullWidth
                  value={emails}
                  onAdd={chip => handleEmail(chip)}
                  onDelete={(chip, index) => handleDeleteChip(chip, index)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type={'number'}
                  placeholder={'Enter phone number'}
                  label={'Phone'}
                  variant={'outlined'}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={Boolean(errors.message)}
                  helperText={errors.message ? errors.message : ''}
                  onChange={e => {
                    setErrors({
                      ...errors,
                      message: undefined,
                    });
                    setMessage(e.target.value);
                  }}
                  label={'Message'}
                  value={message}
                  multiline
                  rows={4}
                  placeholder={'Type your message here'}
                  variant={'outlined'}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sx={{ flex: 1, textAlign: 'center' }}>
                <Button
                  type={'submit'}
                  variant={'contained'}
                  color={'primary'}
                  size={'large'}
                  sx={{ width: '30%', borderRadius: '8px' }}
                  onClick={handleSubmit}
                >
                  {'Submit'}
                </Button>
              </Grid>
            </Grid>
          </FormControl>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Mail;
