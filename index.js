/**
 * @description To Create a directory named as "source" have dummy text file with content size of 200KB
 * Perform Operations like WordCount,Sentences, readfile, MemoryUsed, HighestOccurance, Copying Fle etc.
 * 
 */


/**
 * required Modules
 */
const http = require('http');
const data = require('./readFile');


/**
 * Function to create server.
 * Import Modules
 * print Output on Server 
 */
function fileAnalysis(){
const server = http.createServer((req, res) => {
    const copyfile = require('./copyfile')
    const wordscount=require('./WordsCount')
    const countLines=require('./CountLines')
    const noofdirectories = require('./noofdirectories');
    const statementsInFile=require('./StatementsInFile')
    const Highestoccoured=require('./HighestOccouranceWord')
    const filesinDirectory=require('./filesInDirectory')
    const memoryUsed=require('./memoryused')
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(`<center><h2 Style="color:blue">${copyfile()}</h2>`+
    `<h2 Style="color:Indigo" >Number of words in the file: ${wordscount(data)}</h2>`+
    `<h2 Style="color:violet">Number of lines in the file: ${countLines(data)}</h2>`+
    `<h2 Style="color:purple">Number of statements in the file: ${statementsInFile(data)}</h2>`+
    `<h2 Style="color:Orange"> ${Highestoccoured(data.toLowerCase())}</h2>`+
    `<h2 Style="color:green">Number of files in path: ${filesinDirectory()}</h2>`+
    `<h2 Style="color:maroon">Number of directories in path: ${noofdirectories()}</h2>`+
    `<h2 Style="color:grey">Memory used: ${memoryUsed()}</h2></center>`)
})
const port = 8081
server.listen(port, () => {
    console.log(`Server running at localhost:${port}`)
})
}
fileAnalysis()