import React from 'react';
import { Container } from '@material-ui/core';
import { useSelector } from 'react-redux';

import AppBar from 'components/AppBar';
import Footer from 'components/Footer';
import Typography from 'components/Typography';
import useStyles from './Layout.styles';

const Layout = ({ children }) => {
  const classes = useStyles();
  const formattedDate = useSelector((state) => state?.data?.lastUpdateTime);

  return (
    <>
      <AppBar />
      <Container className={classes.container} maxWidth="lg" component="main">
        <Typography variant="h2" component="h2">
          <em>
            R<sub>t</sub>
          </em>{' '}
          de COVID-19 por departamento en Perú
        </Typography>
        <Typography variant="h6" color="primary">
          Atualizado diariamente.
        </Typography>
        <Typography variant="h6">
          Datos hasta: <strong>{formattedDate}</strong>
        </Typography>
        {children}
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
