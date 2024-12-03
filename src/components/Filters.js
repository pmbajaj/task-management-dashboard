import React from 'react';
import { Button, ButtonGroup } from '@mui/material';

const Filters = () => {
  return (
    <ButtonGroup variant="contained" color="primary">
      <Button>All</Button>
      <Button>Completed</Button>
      <Button>Pending</Button>
      <Button>Overdue</Button>
    </ButtonGroup>
  );
};

export default Filters;
