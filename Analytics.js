/**
 * 
 * @param {*} region 
 * @param {*} Revenue 
 * @param {*} Category 
 * @param {*} UnitSold 
 * @param {*} Onlinesale 
 * @param {*} Offlinesale 
 * @param {*} countrynames 
 * @param {*} countrysale 
 * @param {*} sales 
 */

function Analytics(region,Revenue,Category,UnitSold,Onlinesale,Offlinesale,countrynames,countrysale,sales){
let sortedsales=sortingarray(sales);
    console.log("Region with Lowest Sale ",region[Lowestindex(sales,sortedsales)]);
    console.log("Region with Highest Sale ",region[Highestindex(sales,sortedsales)]);

    let sortedcountrysale=sortingarray(countrysale);
    console.log("Country with Highest Sale ",countrynames[Lowestindex(countrysale,sortedcountrysale)]);
    console.log("Country with Lowest Sale ",countrynames[Highestindex(countrysale,sortedcountrysale)]);

    let sortedOnline=sortingarray(Onlinesale);
    console.log("Country with Highest Online Sale ",region[Highestindex(Onlinesale,sortedOnline)]);

    let sortedOffline=sortingarray(Offlinesale);
    console.log("Country with Highest Offline Sale ",region[Highestindex(Offlinesale,sortedOffline)]);

    let sortedRevenue=sortingarray(Revenue);
    console.log("Category with highest revenue is  ",Category[Highestindex(Revenue,sortedRevenue)],"has revenue",sortedRevenue[sortedRevenue.length-1]);
    console.log("Category with lowest revenue is  ",Category[Lowestindex(Revenue,sortedRevenue)],"has revenue",sortedRevenue[0]);

    let sortedCategoryUnits=sortingarray(UnitSold);
    console.log("Category with Highest UnitsSold ",Category[Highestindex(UnitSold,sortedCategoryUnits)]);

function sortingarray(unsorted){
    let sorted=unsorted.slice();
    return sorted.sort((a,b)=>a-b);

}
function Highestindex(unsorted,sorted){
    return unsorted.indexOf(sorted[sorted.length-1]);
}
function Lowestindex(unsorted,sorted){
    return unsorted.indexOf(sorted[0]);

}
}
module.exports.Analytics=Analytics;