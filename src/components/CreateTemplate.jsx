import { Typography, TextField, Button, Container } from '@mui/material';
import React from 'react';

const CreateTemplate = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Create Template
      </Typography>
      <form>
        <TextField
          label="Template Name"
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        {/* Additional fields as needed */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '1rem' }}
        >
          Create
        </Button>
      </form>
    </Container>
  );
};

export default CreateTemplate;
