const countLines = require('file-lines-count')
/**
 * @description count the number of lines in the file
 */
 module.exports=function countLinesinFile(data) {
   return (data.split("\n").length);
 }