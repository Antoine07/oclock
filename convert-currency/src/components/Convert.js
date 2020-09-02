import React from 'react';
import FormConvert from './Form/Form';
import { Container, Grid } from './Grid';

const Convert = ({history}) => {
  return (
    <Container>
      <Grid>
          <FormConvert history={history} />
      </Grid>
    </Container>
  );
}

export default Convert;