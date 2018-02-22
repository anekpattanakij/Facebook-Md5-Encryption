# Facebook-Sha256-Encryption
For batch encrypt customer profile with SHA 256 to encryption format before submit to facebook as custom audience

## Usage 
npm start [customerInputFilename[customerOnputFilename[ IncludeHeader(Y/N)]]]

i.e. npm start inputContactList.csv encryptedContactList.csv Y

* Default input filename is input.csv
* Default output filename is encryptFile.csv
* Default is not include header in the file, should be defined as 'Y' or 'N'

## Instruction for non-node.js developer

1. Install node.js
2. download zip file from this respository and unzip its.
3. run "npm install" where respository was unzipped.
4. run "npm start" with arguments that you want.

# Good Luck!!
Note : For phone number before encrypt, it should be inital with country code without any symbol.

