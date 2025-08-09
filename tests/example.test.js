const puppeteer = require('puppeteer')

describe('My First puppeteer Test', () => {
    it('Should luch the browser', async () => {
        const browser = await puppeteer.launch({
            headless: false, slowMo: 50, devtools: false

        })

        const page = await browser.newPage()
        await page.goto('https://example.com/')
        // await page.waitFor(3000)
        await page.waitForSelector('h1')
        await page.reload()
        await page.waitForSelector('h1')
        
        await browser.close()



    })
})