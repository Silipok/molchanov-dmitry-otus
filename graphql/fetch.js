const request=require("request");
const rp=require("request-promise");
const xml2js=require("xml2js");

const parcer= new xml2js.Parser();
const url=`https://roem.ru/rss/roem-top-news.xml`;

const xml=async ()=>{
    let resp=await rp(url);
    //console.log('resp= ',resp);
    let xmldoc=await parcer.parseStringPromise(resp);
    let allnews=xmldoc.rss.channel[0].item;
    //console.log(allnews[0]);    
    let formatedNews=[];
    allnews.forEach((element,i) => {
        i++;
        formatedNews.push({
            id: i,
            title: element.title[0],
            description: element.description[0],
            content: element['content:encoded'][0],
            link: element.link[0],
            category: element.category,
            pubDate: element.pubDate[0]
        });
    });
    //console.log(formatedNews[0]);
    return formatedNews
}
module.exports=xml
