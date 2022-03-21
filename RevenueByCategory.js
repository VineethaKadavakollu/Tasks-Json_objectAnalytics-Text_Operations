const sortingarray=require('./sortingarray.js')
const Highestindex=require('./Highestindex.js')
const Lowestindex=require('./Lowestindex.js')
module.exports=function RevenueByCategory(Category,Revenue){
    let sortedRevenue=sortingarray(Revenue);
    return "Category with highest revenue is:  "+Category[Highestindex(Revenue,sortedRevenue)]+"  has revenue  "+"  "+parseInt(sortedRevenue[sortedRevenue.length-1])+" And      Category with lowest revenue is :  "+Category[Lowestindex(Revenue,sortedRevenue)]+"  has revenue  "+parseInt(sortedRevenue[0]);
}