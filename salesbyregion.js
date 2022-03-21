const sortingarray=require('./sortingarray.js')
const Lowestindex=require('./Lowestindex.js')
const Highestindex=require('./Highestindex.js')
module.exports =function salesbyregion(region,sales){
let sortedsal=sortingarray(sales);
    return "Region with Lowest Sale: "+region[Lowestindex(sales,sortedsal)]+"\n"+" with "+parseInt(sortedsal[0])+"  And  Region with Highest Sale: "+region[Highestindex(sales,sortedsal)]+" with "+parseInt(sortedsal[sortedsal.length-1]);
}