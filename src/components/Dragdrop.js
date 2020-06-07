import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import Dropzone from 'react-dropzone'
import './Dragdrop.css'
import csv from 'csv'
function Basic({columndata}) {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        const binaryStr = reader.result
        console.log(binaryStr)
        csv.parse(reader.result, (err, data) => {
console.log(columndata)
          var userList = [];

          for (var i = 0; i < data.length; i++) {
            const  newUser=[];
            for (var j=0 ; j<columndata.length;j++){
             newUser.push(data[i][j])
            }
            // const name = data[i][0];
            // const phoneNumber = data[i][1];
            // const address = data[i][2];
            // const newUser = { 0: name, 1: phoneNumber, 2: address };
            userList.push(newUser);
            console.log(userList)
            
        
          };
        });
      }
      reader.readAsText(file)
    })
  }, [])
  const {getRootProps, getInputProps} = useDropzone({accept:'.csv', onDrop});
  
  // const files = acceptedFiles.map(file => (
  //   <li key={file.path}>
  //     {file.path} - {file.size} bytes
  //   </li>
  // ));


  return (
    <section className="container">
      

      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>You can upload any .csv, .tsv file with any set of columns as long as it has 1 record per row. The next step will allow you to match your spreadsheet columns to the right data points. You'll be able to clean up or remove any corrupted data before finalizing your report.</p>
      </div>
      <aside>
        <h4>Selected File</h4>
        <ul></ul>
      </aside>
    </section>
  );
}
export default Basic;