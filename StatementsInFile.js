
/**
 * @description counts the number of statements in the file
 * @param {*} data 
 * @return count of statements
 */
module.exports=function statementsInFile(data) {
    var statements = data.split('.');
    return statements.length;
}