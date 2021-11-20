/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, CSSObject } from '@emotion/react';
import styled from '@emotion/styled';
import Head from 'next/head';
import React from 'react';
import type { NextPage } from 'next';
import { Typography, CssBaseline, Grid, Container } from '@mui/material';
import ImageMasonry from '../components/Masonry/ImageMasonry';
import Header from '../components/Layout/Header';

export const container: CSSObject = {
  padding: '7rem 1rem',
  height: 'auto',
  display: 'flex',
  alignItems: 'center'
};

export const background: CSSObject = {
  backgroundColor: '#282a36',
  display: 'flex',
  height: '100vh'
};

export const text: CSSObject = {
  color: '#f8f8f2',
};

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | Robert Inez</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <CssBaseline />
          <Header header='About' />
      <main css={background}>
        <Container css={container} maxWidth='xl'>
          <Grid
            container
            justifyContent='center'
            alignItems='center'
            spacing={6}
            direction='row'
          >
            <Grid item md={6}>
              <Typography variant='h4' css={text}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Nice to meet you! I'm Robert Inez, a Fullstack Web Developer
              </Typography>
              <Typography variant='body1' css={text}>
                I love building beautiful and functional websites that allow
                people of all walks of life to connect. As someone with small
                business owning family members, building projects for small
                businesses makes my work feel even more worthwhile.
              </Typography>
              <Typography
                variant='body1'
                align='center'
                gutterBottom
                css={text}
              >
                {' '}
                Critical Thinking <span>&#8226;</span> Attention to Detail{' '}
                <span>&#8226;</span> Complex Problem Solving{' '}
                <span>&#8226;</span> Time Sharing{' '}
              </Typography>
              <Typography variant='body1' gutterBottom css={text}>
                Spending 4 years in the Marine Corps I have developed
                indispensable traits and a great work ethic. I strive to live
                with a growth mindset knowing that I can always learn something
                new and always improve my abilities.
              </Typography>
              <Typography variant='body1' align='center' css={text}>
                {' '}
                Leadership <span>&#8226;</span> Team Work <span>&#8226;</span>{' '}
                Communication <span>&#8226;</span> Reliability{' '}
                <span>&#8226;</span> Project Management{' '}
              </Typography>
            </Grid>
            <Grid item md={6}>
              <ImageMasonry />
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default About;
