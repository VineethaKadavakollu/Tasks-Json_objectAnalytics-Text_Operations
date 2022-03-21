/**
 * @Description 
 *Create array of JSON object for specific region
 *perform Analytics On data
 *Print the Output On server
  */
 
 /**
  * Modules Required
  */
 //var _=require('lodash')
const csv = require('csvtojson')
const AnalyticsFile=require('./Analytics.js')
const http = require('http');
const arraySort=require('array-sort')
// Invoking csv returns a promise
let region = [];
/**
 * function to create an array of Unique Region
 */
function getRegionWiseArray(json_data) {
    /* uniqueObjects=_.uniqBy(json_data,'Region');
    console.log(uniqueObjects); */
    let category_itr = 0;
    for (let json_itr in json_data) {
        if (region.includes(json_data[json_itr].Region) == false) {
            region[category_itr] = json_data[json_itr].Region;
            category_itr++;
        }
    }
    //console.log(region);
    region_array(region, json_data);
}

let countrysale=[];
    let countrynames=[];
    let Onlinesale=[];
    let Offlinesale=[];
    let UnitSold=[];
    let regi = [];
    let Category = [];
    let Revenue=[];
    let sales=[];

/**
 * Function to Create An array of JSON object 
 * @param {*} region 
 * @param {*} json_data 
 */
function region_array(region, json_data) {
    for (let region_itr in region) {
        let TotalRevenue = 0, TotalCost = 0, TotalProfit = 0, Total_Cost = 0, Total_Profit = 0, Totalcost = 0, Totalprofit = 0;TotalSales=0;
        let array = [];
        let arra = [];
        let country = [];
        let category_itr = 0, country_itr = 0;
        let online_sales = 0, offline_sales = 0;
        for (let json_itr in json_data) {
            if (region[region_itr] == (json_data[json_itr].Region)) {
                TotalRevenue = parseFloat(TotalRevenue) + parseFloat(json_data[json_itr]['Total Revenue'])
                TotalCost = parseFloat(TotalCost) + parseFloat(json_data[json_itr]['Total Cost'])
                TotalProfit = parseFloat(TotalProfit) + parseFloat(json_data[json_itr]['Total Profit'])
                if (json_data[json_itr]['Sales Channel'] === "Online")
                    online_sales++;
                else {
                    offline_sales++;
                }
                TotalSales=online_sales+offline_sales;
                if (Category.includes(json_data[json_itr]['Item Type']) == false) {
                    Category[category_itr] = json_data[json_itr]['Item Type'];
                    category_itr++;
                }
                if (country.includes(json_data[json_itr].Country) == false) {
                    country[country_itr] = json_data[json_itr].Country;
                    country_itr++;
                }
            }
        }
        sales[region_itr]=parseInt(TotalSales);
        Onlinesale[region_itr]=online_sales;
        Offlinesale[region_itr]=offline_sales;
          
        /**
         * To get array of Category 
         * With Category Name , TotalUnitssold, TotalCost, Total Profit, Online Sales, Offline Sales, TotalSales.
         */
        for (let category_itr in Category) {
            TotalUnitsSold = 0; let OnlineSales=0,OfflineSales=0;TotalSales=0,categoryrevenue=0,Total_Cost=0,Total_Profit=0;
            for (let json_itr in json_data) {
               
                    if (Category[category_itr] == json_data[json_itr]['Item Type']) {
                        var Cat = Category[category_itr];
                        TotalUnitsSold = parseFloat(TotalUnitsSold) + parseFloat(json_data[json_itr]['Units Sold'])
                        Total_Cost = parseFloat(Total_Cost) + parseFloat(json_data[json_itr]['Total Cost'])
                        Total_Profit = parseFloat(Total_Profit) + parseFloat(json_data[json_itr]['Total Profit'])
                        categoryrevenue=parseFloat(categoryrevenue) + parseFloat(json_data[json_itr]['Total Revenue'])
                        if(json_data[json_itr]['Sales Channel']=="Online"){
                        OnlineSales++;}
                        else{ OfflineSales++;}
                        TotalSales=OnlineSales+OfflineSales;
                    }
            
            }
            UnitSold[category_itr]=TotalUnitsSold;
            Revenue[category_itr]=categoryrevenue;
            /**
             * Object for Category
             */
            let obj_Category = {
                Category_Name: Category[category_itr],
                TotalUnitsSold: TotalUnitsSold,
                TotalProfit: Total_Profit,
                TotalCost: Total_Cost,
                OnlineSales:OnlineSales,
                OfflineSales:OfflineSales,
                TotalSales:TotalSales
            };
            array.push(obj_Category);
        }
        /**
         * To  get the Array of Country.
         * With properties: Totalsales, Totalcost,Totalprofit
         */
        for (let l in country) {
            TotalSales= 0; Totalcost = 0, Totalprofit = 0
            for (let json_itr in json_data) {
                if (region[region_itr] == json_data[json_itr].Region) {
                    if (country[l] == json_data[json_itr].Country) {
                        Totalcost = parseFloat(Totalcost) + parseFloat(json_data[json_itr]['Total Cost'])
                        Totalprofit = parseFloat(Totalprofit) + parseFloat(json_data[json_itr]['Total Profit'])
                        if(json_data[json_itr]['Sales Channel'])
                        TotalSales++;
                    }
                }
            }
            /**
             * Object of Country with Properties CountryName, TotalProfit, TotalCost, TotalSales.
             */
            let obj_Country = {
                Country_Name: country[l],
                TotalProfit: Totalprofit,
                TotalCost: Totalcost,
                TotalSales:TotalSales
            };
            countrynames.push(country[l]);
            countrysale.push(TotalSales);
            arra.push(obj_Country);
        }
        /**
         * Object- Of Region  with properties RegionName, TotalRevenue, TotalCost, TotalProfit, TotalOnlineSales, TotalOfflineSales, ArrayOfCategories,ArrayOfCountries
         */
        let obj_Region = {
            Region: region[region_itr],
            TotalRevenue: TotalRevenue,
            TotalCost: TotalCost,
            TotalProfit: TotalProfit,
            Total_Online_Sales: online_sales,
            Total_Offline_Sales: offline_sales,
            Total_Categories: array,
            Array_of_Countries: arra
        };
        regi.push(obj_Region);
        //console.log(obj_Region);
    }
}
/**
 * Function to call SeverPort and Print the output on server.
 */
function serverport(){

    const converter = csv().fromFile('./SalesRecords.csv')
    .then(jsondata => { return getRegionWiseArray(jsondata) })
    

    /**
     * To create a server and importing modules.
     *  salesbyregion, salesbycountry, onlinesalesbyregion, offlinesalesbyregion,RevenueByCategory,unitssoldbycategory
     *  to print the output on the server.
     */
const server = http.createServer((req, res) => {
var getTotalSalesByRegion= require('./salesbyregion.js');
var getTotalSalesByCountry= require('./salesbycountry.js');
var getTotalOnlineSalesByRegion= require('./onlinesalesbyregion.js');
var getTotalOfflineSalesByRegion=require('./offlinesalesbyregion.js');
var getTotalRevenueByCategory= require('./RevenueByCategory.js');
var getTotalUnitsSoldByCategory= require('./unitssoldbycategory.js');


res.statusCode = 200
res.setHeader('Content-Type', 'text/html')
res.end(`<center><h2 style="color:Indigo">${getTotalSalesByRegion(region,sales)}</h2>`+
`<h2 style="color: green">${getTotalSalesByCountry(countrynames,countrysale)}</h2>`+
`<h2 style="color:blue">${getTotalOnlineSalesByRegion(region,Onlinesale)}</h2>`+
`<h2 style="color:sea blue">${getTotalOfflineSalesByRegion(region,Offlinesale)}</h2>`+
`<h2 style="color:orange">${getTotalRevenueByCategory(Category,Revenue)}</h2>`+
`<h2 style="color:purple">${getTotalUnitsSoldByCategory(Category,UnitSold)}</h2><center>`)
})


const port = 3000
server.listen(port, () => {
    console.log(`Server running at localhost:${port}`)
})
}

serverport();

