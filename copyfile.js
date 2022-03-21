const fs = require('fs')
/**
 * @description copy a file from source folder to destination folder
 */
module.exports = function copyFile() {
    fs.copyFile("source/dummy.txt", "destination/copieddummy.txt", (err) => {
        if (err) {
            console.log('error found');
        }
    })
    return "File Copied";
}