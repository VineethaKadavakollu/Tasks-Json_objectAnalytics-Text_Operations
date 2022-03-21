const sortingarray=require('./sortingarray.js')
const Highestindex=require('./Highestindex.js')
const Lowestindex=require('./Lowestindex.js')
module.exports=function unitssoldbycategory(Category,UnitSold){
    let sortedCategoryUnits=sortingarray(UnitSold);
    return "Category with Highest UnitsSold : "+Category[Highestindex(UnitSold,sortedCategoryUnits)]+" with "+parseInt(sortedCategoryUnits[sortedCategoryUnits.length-1]);
}