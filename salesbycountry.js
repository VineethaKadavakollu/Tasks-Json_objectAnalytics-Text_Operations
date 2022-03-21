const sortingarray=require('./sortingarray.js')
const Lowestindex=require('./Lowestindex.js')
const Highestindex=require('./Highestindex.js')
module.exports =function salesbycountry(countrynames,countrysale){
    let sortedcountrysale=sortingarray(countrysale);
    return "Country with Highest Sale: "+countrynames[Lowestindex(countrysale,sortedcountrysale)]+" with "+parseInt(sortedcountrysale[0])+" And  Country with Lowest Sale: "+countrynames[Highestindex(countrysale,sortedcountrysale)]+" with "+parseInt(sortedcountrysale[sortedcountrysale.length-1]);
}