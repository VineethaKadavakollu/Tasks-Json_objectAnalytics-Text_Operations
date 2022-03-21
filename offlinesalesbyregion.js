const sortingarray=require('./sortingarray.js')
const Highestindex=require('./Highestindex.js')
module.exports=function offlinesalesbyregion(region,Offlinesale){
let sortedOffline=sortingarray(Offlinesale);
    return "Region with Highest Offline Sale : "+region[Highestindex(Offlinesale,sortedOffline)]+" with "+parseInt(sortedOffline[sortedOffline.length-1]);
}
