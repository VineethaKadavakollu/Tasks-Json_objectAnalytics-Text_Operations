const sortingarray=require('./sortingarray.js')
const Highestindex=require('./Highestindex.js')
module.exports=function onlinesalesbyregion(region,Onlinesale){
let sortedOnline=sortingarray(Onlinesale);
    return "Country with Highest Online Sale : "+region[Highestindex(Onlinesale,sortedOnline)]+" with "+parseInt(sortedOnline[sortedOnline.length-1]);
}
