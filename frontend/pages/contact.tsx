/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useRef } from 'react';
import { Container, CssBaseline, Grid, TextField, Button } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import Header from '../components/Layout/Header';
import { background, container } from './about';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import { Formik, Form, Field } from 'formik';

interface ContactForm {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  token: string;
}

const initialValues: ContactForm = {
  fullName: '',
  email: '',
  subject: '',
  message: '',
  token: '',
};

const Contact: React.FC = () => {
  const reRef = useRef<any>();
  const handleSubmit = async (values: any) => {
    const token = await reRef.current?.executeAsync();
    reRef.current.reset();
    // console.log(token);

    const response = await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify({
        fullName: values.fullName,
        email: values.email,
        subject: values.subject,
        message: values.message,
        token,
      }),
    });
    if (response.status === 200) {
      alert(
        'Email sent successfully. I will respond to your inquiry as soon as possible.'
      );
    } else {
      alert('Oops! Unable to send email with email sender');
    }
  };

  const validator = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string()
      .email('Please provide a valid email')
      .required('email is required'),
    subject: Yup.string().required('Please provide a subject for your message'),
    message: Yup.string()
      .required('Please provide a subject for your message')
      .max(2000),
  });
  return (
    <>
      <Head>
        <title>Contact | Robert Inez</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <CssBaseline />
          <Header header='Contact' />
      <main css={background}>
        <Container css={container} maxWidth='xl'>
          <Grid
            container
            justifyContent='center'
            alignItems='center'
            spacing={2}
            direction='row'
          >
            <Grid item md={8}>
              {/* <Paper sx={{ padding: '1rem', backgroundColor: '#f8f8f2' }}> */}
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validator}
              >
                {({ values }) => (
                  <Form>
                    <Field
                      name='fullName'
                      id='fullName'
                      placeholder='Paul Fernandez'
                      as={TextField}
                      label='Full Name'
                      margin='normal'
                      variant='filled'
                      color='secondary'
                      InputLabelProps={{
                        style: { color: '#f8f8f2' },
                      }}
                      InputProps={{
                        style: { color: '#f8f8f2', backgroundColor: '#44475a' },
                      }}
                      fullWidth
                    />
                    <Field
                      name='email'
                      id='email'
                      type='email'
                      placeholder='Email'
                      as={TextField}
                      label='Email'
                      margin='normal'
                      variant='filled'
                      color='secondary'
                      InputLabelProps={{
                        style: { color: '#f8f8f2' },
                      }}
                      InputProps={{
                        style: { color: '#f8f8f2', backgroundColor: '#44475a' },
                      }}
                      fullWidth
                    />
                    <Field
                      name='subject'
                      id='subject'
                      placeholder='Subject'
                      as={TextField}
                      label='Subject'
                      margin='normal'
                      variant='filled'
                      color='secondary'
                      InputLabelProps={{
                        style: { color: '#f8f8f2' },
                      }}
                      InputProps={{
                        style: { color: '#f8f8f2', backgroundColor: '#44475a' },
                      }}
                      fullWidth
                    />
                    <Field
                      name='message'
                      id='message'
                      placeholder='Message'
                      as={TextField}
                      label='Message'
                      margin='normal'
                      variant='filled'
                      color='secondary'
                      InputLabelProps={{
                        style: { color: '#f8f8f2' },
                      }}
                      InputProps={{
                        style: { color: '#f8f8f2', backgroundColor: '#44475a' },
                      }}
                      multiline
                      maxRows={10}
                      fullWidth
                    />
                    {/* <pre>{JSON.stringify(values, null, 4)}</pre> */}
                    <ReCAPTCHA
                      ref={reRef}
                      size='invisible'
                      sitekey='6LeJxrocAAAAAFN_MAE9U-wSKSPOsz0v_ND6nhym'
                    />
                    <Button
                      variant='contained'
                      type='submit'
                      color='secondary'
                      css={{ marginTop: '1rem', textAlign: 'right' }}
                    >
                      Submit
                    </Button>
                  </Form>
                )}
              </Formik>
              {/* </Paper> */}
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default Contact;
