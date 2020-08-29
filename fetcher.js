const url = process.argv[2];
const downloadPath = process.argv[3];
const fs = require('fs');

const request = require('request');  

const pageDownloader = function (downloadUrl) {

  request(downloadUrl, (error, response, body) => {
    if(error) {
      return console.log("OOPS~~We've got an ERROR~~~~~~ \n", error);
    }
    if(response.statusCode !== 200) {
      return console.log(`Request Failed; Status Code: ${response.statusCode}`);
    }
    fs.writeFile(downloadPath, body, 'utf8', (error) => {
      if (error){
        return console.log(`INVALID PATH: ${error}`);
      }
      const {size} = fs.statSync(downloadPath);
      console.log(`Downloaded and saved ${size} bytes to ${downloadPath}`);
    });    

  });
}

pageDownloader(url);

