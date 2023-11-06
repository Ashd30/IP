const fs = require('fs');

const existingFileName = 'sample.txt'; // Name of the existing file
const appendedText = 'This is some text to append.'; // Text to append
const newFileName = 'SAMPLE.txt'; // New file name

// 1. Append some text to an existing file
fs.appendFile(existingFileName, appendedText, (err) => {
  if (err) {
    console.error('Error appending text to the file:', err);
  } else {
    console.log('Text appended to the file successfully.');

    // 2. Rename the file
    fs.rename(existingFileName, newFileName, (renameErr) => {
      if (renameErr) {
        console.error('Error renaming the file:', renameErr);
      } else {
        console.log('File renamed successfully.');
      }
    });
  }
});