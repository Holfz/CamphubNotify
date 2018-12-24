const curl = require("curl");
const jsdom = require("jsdom");
const low = require('lowdb')
const request = require('request')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)
const cron = require('node-cron');

const url = "https://www.camphub.in.th/computer/";

function init() {
    db.defaults({ camp: []}).write()
    curlGet();
}

init();

function curlGet() {
    curl.get(url, null, (err,resp,body)=>{
        if(resp.statusCode == 200){
           console.log('[curlGet] Status Code : 200 - Calling parseData function');
           parseData(body);
        } else {
           console.log("[curlGet] error while fetching url... - Status Code : ", resp.statusCode);
        }
    });
}

function parseData(html){
    console.log('[ParseData] Function Triggered - Start Jquery Scraping.')
    const {JSDOM} = jsdom;
    const dom = new JSDOM(html);
    const $ = (require('jquery'))(dom.window);
    let queryOpen = $('.main-box-inside .vce-loop-wrap article.vce-post header.entry-header span.closedate:not(.close-black-rev)').parents('article');
    let OpenCamp = [];
    queryOpen.each(function(k,element){
        let thisElement = $(element);
        let imagesrc = thisElement.find('div.meta-image img').attr('src');
        let title = thisElement.find('header h2').text();
        let url = thisElement.find('header h2 a').attr('href');
        let desc = thisElement.find('div.entry-content').text();
        //console.log(db.get('camp').find({ title: title }).value());
        if(db.get('camp').find({ title: title }).value() == undefined) {
            OpenCamp.push({
                imagesrc: imagesrc,
                title: title,
                url: url,
                desc: desc,
            });
            db.get('camp').push({ title: title}).write()
        }
    });
    console.log('[ParseData] Scraping Done.');
    console.log('[ParseData] NewCamp Array : ', OpenCamp);
    console.log('[ParseData] Sent Result Array to NotiLine Function.')
    NotiLine(OpenCamp)
}

function NotiLine(OpenCamp) {
    for(var i in OpenCamp) {
        let title = OpenCamp[i].title;
        let img = OpenCamp[i].imagesrc;
        let desc = OpenCamp[i].desc;
        let url = OpenCamp[i].url;
        request({
            method: 'POST',
            uri: 'https://notify-api.line.me/api/notify',
            header: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
              bearer: '', //Your Line Notify Token Here
            },
            form: {
              message: `⛺ มีค่ายใหม่ ⛺\n\nหัวข้อ : ${title}\n\nคำอธิบาย : ${desc}\n\nลิงค์ค่าย : ${url}`,
              imageThumbnail: img,
              imageFullsize: img
            },
          }, (err, httpResponse, body) => {
            if (err) {
              console.log(err)
            } else {
                if(body.status == 200) {
                    console.log('[NotiLine] Alert Message send!');
                } else {
                    console.log('[NotiLine] Something error! Response Code : ',body.status);
                }
            }
        })
    }
}

cron.schedule('*/1 * * * *', () => {
    console.log('[Schedule] Trigger the curlGet function.')
    curlGet();
});
