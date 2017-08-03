var sha256 = require('sha256');
var fs = require('fs');

var NEW_LINE = '\r\n';
var FILE_ENCODING = 'utf8'; 


// Make sure we got a filename on the command line.
/* if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}*/

var logger = fs.createWriteStream('encryptFile.csv', {
  flags: 'w' 
});

function addNewMessageWithNewLine(logger, message) {
  logger.write(message + NEW_LINE);
}

fs.readFile('./input.csv', FILE_ENCODING, function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;
    console.log(data);
    var content = data.split("\r\n");
    for(var i=0;i<content.length;i++) {
      addNewMessageWithNewLine(logger,sha256(content[i]));
    }
    console.log(content);
});

