const fs= require('fs')
/**
 * function to find no of files in directory
 * @param {*} dir
 * @returns 
 */

 module.exports= function noofdirectories(path){
    const dir = 'C:/Users/kadavakollu.vineetha/Desktop/Tasks/Task1'
    return(fs.readdirSync(dir).filter(file => (fs.lstatSync(file).isDirectory() && file !== "node_modules")).length);
}