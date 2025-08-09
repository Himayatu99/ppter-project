const puppeteer = require('puppeteer')

describe('My First puppeteer Test', () => {
    it('Should luch the browser', async () => {
        const browser = await puppeteer.launch({
            headless: false, slowMo: 150, devtools: false

        })

        const page = await browser.newPage()
        await page.goto('https://example.com/')
        await page.waitForSelector('h1')
        await page.goto('https://dev.to/')
        await page.waitForSelector('.side-bar')
        await page.goBack()
        await page.waitForSelector('h1')
        await page.goForward()
        await page.waitForSelector('.side-bar')
        await browser.close()





    })
})