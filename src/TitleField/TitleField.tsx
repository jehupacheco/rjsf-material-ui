import React from 'react';

import { FieldProps } from 'react-jsonschema-form';

import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const TitleField = ({ title }: FieldProps) => (
  <>
    <Box mb={1}>
      <Typography variant="h5">{title}</Typography>
      <Divider />
    </Box>
  </>
);

export default TitleField;
