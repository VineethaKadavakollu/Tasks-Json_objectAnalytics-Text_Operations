const wordsCount = require('word-counting');
const lowercase=require('lower-case')
/**
 * @description counts the number of words in the file
 * @param {*} data 
 * @returns count of words
 */
module.exports=function wordscount(data) {
    return wordsCount(data).wordsCount;
}