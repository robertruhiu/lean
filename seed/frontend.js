var Frontend = require('../app/models/frontend');
var mongoose = require('mongoose');
var configDB = require('../config/database.js');
mongoose.connect(configDB.url);

var projects = [
    new Frontend({
        imagePath: 'https://codeln.herokuapp.com/images/capture.PNG',
        projectname: 'Crypto-price watcher',
        type:'frontend',
        concept:'Web socket api',
        description:'You have been approached by a client who has a healthy interest in Cryptocurrency. He wants to know how the various coins are performing against US Dollars. His Company is mostly interested in Bitcoin. What his team needs is a dashboard that shows the price of Bitcoin at any point in time without having to refresh the browser. They need the pricing information in realtime because that\'d influence their decision whether to buy or sell.',
        basic1:'Improved UI/UX',
        basic2:'Sign up for users at your Client\'s company',
        basic3:'Login (you are free to use a package such as Passport for Authentication)',
        basic4:'Integration with at least 3 exchanges (with Websocket API for their market data). Examples of such exchanges are Bitstamp, OKCoin, etc.',
        advanced1:'Persist the market data in a PostgreSQL database (node-postgres)',
        advanced2:'Allow users to set up alerts for a certain price point',



    }),
    new Frontend({
        imagePath: 'https://codeln.herokuapp.com/images/capture.PNG',
        projectname: 'Kuruka flex',
        type:'frontend',
        concept:'ui/ux',
        description:'A representive of kuruka flex approaches you to create a website that embodies the feelings of modernism and coolness.The ui elements should make a users improve a users experience ',
        basic1:'Improved UI/UX',
        basic2:'Sign up for users at your Client\'s company',
        basic3:'Login (you are free to use a package such as Passport for Authentication)',
        basic4:'Integration with at least 3 exchanges (with Websocket API for their market data). Examples of such exchanges are Bitstamp, OKCoin, etc.',
        advanced1:'Impliment javascript effects',
        advanced2:'Implement Jquery of choice'



    })



];

var done = 0;
for (var i = 0; i < projects.length; i++) {
    projects[i].save(function (err, result) {
        done++;
        if (done === projects.length) {
            exit();
        }

    });
}

function exit() {
    mongoose.disconnect();

}

