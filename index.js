const puppeteer= require('puppeteer');
const fs=require('fs');

(async () => {

    var config = JSON.parse(fs.readFileSync('./config.json','utf8'));

    //collecting data from configuration file
    const newAccount=config.isNewAccount;
    const dirName=config.dirName;
    const pageToGo=config.pageToGo;
    const actionLike=config.actionLike;
    const actionComment=config.actionComment;
    const delay=config.delay;
    const comment=config.comment;
    const username= config.username;
    const password=config.password;
    const postCount=config.postCount;
    const setLimit=config.setLimit;

    const browserOption= {headless:false, userDataDir: dirName};
    const browser = await puppeteer.launch(browserOption);
    const page = await browser.newPage();

    const doLogin = async () => {

    await page.goto("https://www.instagram.com/");
    await (await page.$("body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.bIiDR")).click();
    await page.waitForSelector("#loginForm > div > div:nth-child(1) > div > label > input");
    const username_input= await page.$("#loginForm > div > div:nth-child(1) > div > label > input");
    await username_input.type(username, {delay:100});
    const password_input = await page.$("#loginForm > div > div:nth-child(2) > div > label > input");
    await password_input.type(password, {delay:100});
    await page.keyboard.press("Enter");
    await page.waitForSelector("#react-root > section > main > div > div > div > section > div > button");

    };

    if(newAccount)
        await doLogin();

    const selectorAccount="#react-root > section > main > div > div._2z6nI > article > div:nth-child(1) > div div div a"
    const selectorPlace="#react-root > section > main > article > div:nth-child(4) > div > div > div a "
    const selectorHashtag="#react-root > section > main > article > div:nth-child(3) > div > div > div a "

    let selector="";

    const doLike = async() => {

        await page.waitForSelector("#react-root > section > main > div > div.ltEKP > article > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button > div")
        await (await page.$("#react-root > section > main > div > div.ltEKP > article > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button > div")).click();

    }

    const doComment = async() => {

        await page.waitForSelector("#react-root > section > main > div > div.ltEKP > article > div.eo2As > section.sH9wk._JgwE > div > form > textarea");
        await( await page.$("#react-root > section > main > div > div.ltEKP > article > div.eo2As > section.sH9wk._JgwE > div > form > textarea")).type(comment, {delay:200});
        await page.keyboard.press("Enter");

    }

    const doLikeAndComment = async() => {

        await page.waitForSelector("#react-root > section > main > div > div.ltEKP > article > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button > div");
        await (await page.$("#react-root > section > main > div > div.ltEKP > article > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button > div")).click();
        await page.waitForTimeout(700);
        await( await page.$("#react-root > section > main > div > div.ltEKP > article > div.eo2As > section.sH9wk._JgwE > div > form > textarea")).type(comment, {delay:200});
        await page.keyboard.press("Enter");

    }

    var anchors= [];

    for(let i=0; i<pageToGo.length; i++){

        selector=pageToGo[i].includes("tags") == true ? selectorHashtag : pageToGo[i].includes("locations") == true ? selectorPlace : selectorAccount;
        await page.goto(pageToGo[i])
        await page.waitForSelector(selector);
        let anch= await page.$$eval(selector, anchors=> [].map.call(anchors, a => a.href));
        let sliced=setLimit == true ? anch.slice(0,postCount) : anch;
        anchors= anchors.concat(sliced);
    }
 
        // const distance = 100; // should be less than or equal to window.innerHeight
        // const delay = 100;
        // while (await page.evaluate(() => document.scrollingElement.scrollTop + window.innerHeight < document.scrollingElement.scrollHeight)) {
        //   await page.evaluate((y) => { document.scrollingElement.scrollBy(0, y); }, distance);
        //   await page.waitFor(delay);
        // }

        console.log(anchors.length);

        for(let i=0; i<anchors.length; i++){
            await page.goto(anchors[i]);
    
            if(actionLike && actionComment)
                await doLikeAndComment();
            if(actionLike && !actionComment)
                await doLike()
            if(!actionLike && actionComment)
                await doComment()
            
            console.log(i +" "+ new Date());
            await page.waitForTimeout(delay);
    
        }


})


();
