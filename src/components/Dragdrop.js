import React from 'react';
import {useDropzone} from 'react-dropzone';
import './Dragdrop.css'
function Basic(props) {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>You can upload any .csv, .tsv file with any set of columns as long as it has 1 record per row. The next step will allow you to match your spreadsheet columns to the right data points. You'll be able to clean up or remove any corrupted data before finalizing your report.</p>
      </div>
      <aside>
        <h4>Selected File</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}
export default Basic;