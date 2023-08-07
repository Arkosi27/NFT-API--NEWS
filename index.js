// Backend instances and Libraries necessaries for the backend of the API client. For more information 

const PORT = 8000 // port number to connect
const express = require('express') // express instance
const axios = require('axios') //
const cheerio = require('cheerio'); // Cheerio installation
const app = express()
const articles = [];
const newspapers = [
    {
        name : 'Binance',
        address : 'https://www.binance.com/en/blog/nft',
        base: ''


    },
    {
        name : 'cryptonewsn',
        address : 'https://cryptonews.net/news/bitcoin/',
        base: 'https://cryptonews.net'


    }
    , {
        name : 'thebloc.co',
        address : 'https://www.theblock.co/latest',
        base:'https://www.theblock.co'
    }
]

newspapers.forEach(newspaper =>  
    axios.get(newspaper.address)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html) 

        $('a:contains("NFT")', html).each(function(){
            const title =  $(this).text()
            const url = $(this).attr('href')

            articles.push({ title, url, source: newspaper.base + url })

    
        })
    })
)

app.get('/', (req, res) => {
    res.json("This is my API to get all the news related to NFT market, just add /nft-news");
});

app.get('/nft-news', (req, res) => {

    res.json(articles)




})



app.listen(PORT, () => console.log('escuchando en el puerto ' + PORT))