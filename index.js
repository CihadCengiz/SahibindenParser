const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const alert = require('alert');
const app = express();


// const page_url = 'https://www.sahibinden.com/kiralik-daire?address_quarter=10019&address_quarter=10020&address_quarter=10016&a811=40593&a811=40594&a811=40595&a811=40596&a811=40597&a811=40598&a811=40599&a811=40600&a811=40601&a811=62364&a811=62365&a811=62366&a811=62367&a811=62368&a811=62369&a811=62370&a811=62371&a811=62372&a811=62373&a811=97308&a811=97309&a811=97310&a811=97311&a811=97312&a811=97313&a811=97314&a811=97315&a811=97316&a811=97317&address_town=189&a20=38470&a20=1227923&a20=38496&a20=38474&a20=1227924&address_city=16'

const page_url = 'https://www.sahibinden.com/en/for-rent/bursa?sorting=date_desc'

var saved = 0;
let msg = 'Sayı Değişti!'

setInterval(async function getData() {
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);
    const span = $('#searchResultsSearchForm > div > div.searchResultsRight > div.relativeContainer > div.infoSearchResults > div.resultsTextWrapper > div.result-text > span').text()
    let number = parseInt(span.replace(',',''));
    console.log(number);
    if(saved !== number){
        alert('İlan sayısı değişti!')
    }
    saved = number;
}, 300000);


app.listen(3000)

// {
//     "args": {}, 
//     "data": "", 
//     "files": {}, 
//     "form": {}, 
//     "headers": {
//       "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9", 
//       "Accept-Encoding": "gzip, deflate, br", 
//       "Accept-Language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7", 
//       "Host": "httpbin.org", 
//       "Referer": "https://understandingdata.com/", 
//       "Sec-Ch-Ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"", 
//       "Sec-Ch-Ua-Mobile": "?0", 
//       "Sec-Fetch-Dest": "document", 
//       "Sec-Fetch-Mode": "navigate", 
//       "Sec-Fetch-Site": "cross-site", 
//       "Sec-Fetch-User": "?1", 
//       "Upgrade-Insecure-Requests": "1", 
//       "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36", 
//       "X-Amzn-Trace-Id": "Root=1-60b7cc1d-2d2931130317738874b3b391"
//     }, 
//     "json": null, 
//     "method": "GET", 
//     "origin": "95.70.129.28", 
//     "url": "https://httpbin.org/anything"
//   }