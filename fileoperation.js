const fs = require('fs');

// 1. Create a file
const fileName = 'sample.txt';

fs.open(fileName, 'w', (err, fd) => {
  if (err) {
    console.error('Error creating the file:', err);
  } else {
    console.log('File created successfully.');
    
    // 2. Write some paragraphs into the file
    const paragraphs = [
      'Ashlesha good girl',
    ];

    const content = paragraphs.join('\n');

    fs.writeFile(fileName, content, (writeErr) => {
      if (writeErr) {
        console.error('Error writing to the file:', writeErr);
      } else {
        console.log('Content written to the file successfully.');
      }
    });
  }
});