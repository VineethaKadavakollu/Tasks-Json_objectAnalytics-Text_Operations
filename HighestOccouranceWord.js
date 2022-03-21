
/**
 * @description identifies highest occoured word in the file and count of the word
 * @param {*} data
 */

module.exports = function highestOccuranceofWord(data) {
    var array = data.match(/\w+/g);
    const map = {};
    array.forEach(word => {
        if (map[word]) {
            map[word]++;
        }
        else
            map[word] = 1;
    });
    max = 0;
    highestOccouredWord = '';
    array.forEach(word => {
        if (map[word] > max) {
            max = map[word];
            highestOccouredWord = word;
        }
    });
    return highestOccouredWord+ ' occoured '+max+ ' times';
}
