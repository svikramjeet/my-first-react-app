import React from 'react';
import Button from '@material-ui/core/Button';
 
const CustomButton = (props) => {
  return (
    <Button variant="contained" color={props.color}>
      Hello World
    </Button>
  );
};

export default CustomButton;