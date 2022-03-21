/**
 * @description
 * function to read data in the file
 * @returns Data inthe text file- dummy.txt.
 */
const fs=require('fs')
const data = fs.readFileSync("source/dummy.txt", "utf8");
module.exports=data