const fs = require('fs');
const path = require('path');

module.exports = {
  getReadStream: ({ file, next }) => {
    const readStream = fs.createReadStream(path.join(__dirname, 'data', file));
    readStream.on('error', (err) => {
      next(err);
    });
    return readStream;
  },
};
