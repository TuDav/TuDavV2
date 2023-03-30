import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';



const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    // const formData = new FormData();
    // formData.append('file', selectedFile);
    console.log(selectedFile)
        const reader = new FileReader();
    var url = reader.readAsDataURL(selectedFile);

    reader.onloadend = function(e) {
      this.setState({
        selectedFile: [reader.result]
      });
    }.bind(this);
    console.log(url); // Would see a path?

    // Send formData to the server using axios or fetch
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <input
          accept="image/*"
          id="contained-button-file"
          type="file"
          onChange={handleFileChange}
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" component="span">
            Select File
          </Button>
        </label>
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={handleSubmit}>
          Upload
        </Button>
      </Grid>
    </Grid>
  );
};

export default FileUpload;