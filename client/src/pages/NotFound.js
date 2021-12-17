import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Box, Button, Container, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

const NotFound = () => {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>{'Not Found'}</title>
      </Helmet>
      <Box
        sx={{
          alignItems: 'center',
          backgroundColor: 'background.paper',
          display: 'flex',
          minHeight: '100%',
          px: 3,
          py: '80px',
        }}
      >
        <Container maxWidth={'lg'}>
          <Typography align={'center'} color={'textPrimary'} variant={'h1'}>
            {'Not Found'}
          </Typography>
          <Typography
            align={'center'}
            color={'textSecondary'}
            sx={{ mt: 0.5 }}
            variant={'subtitle2'}
          >
            {'Not Found'}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 6,
            }}
          >
            <Box
              alt={'Under development'}
              component={'img'}
              src={`/static/error/error404_${theme.palette.mode}.svg`}
              sx={{
                height: 'auto',
                maxWidth: '100%',
                width: 400,
              }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 6,
            }}
          >
            <Button
              color={'primary'}
              component={RouterLink}
              to={'/'}
              variant={'outlined'}
            >
              {'Go Back'}
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default NotFound;
