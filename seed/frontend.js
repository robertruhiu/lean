var Frontend = require('../app/models/frontend');
var mongoose = require('mongoose');
var configDB = require('../config/database.js');
mongoose.connect(configDB.url);

var projects = [
    new Frontend({
        imagePath: 'https://codeln.herokuapp.com/images/capture.PNG',
        projectname: 'project1',
        concept:'Web socket api',
        description:'You have been approached by a client who has a healthy interest in Cryptocurrency',
        basic1:'Improved UI/UX',
        basic2:'Sign up for users at your Client\'s company',
        basic3:'Login (you are free to use a package such as Passport for Authentication)',
        basic4:'Integration with at least 3 exchanges (with Websocket API for their market data). Examples of such exchanges are Bitstamp, OKCoin, etc.',
        advanced1:'Persist the market data in a PostgreSQL database (node-postgres)',
        advanced2:'Allow users to set up alerts for a certain price point'


    }),
    new Frontend({
        imagePath: 'https://codeln.herokuapp.com/images/capture.PNG',
        projectname: 'project2',
        concept:'Web socket api',
        description:'You have been approached by a client who has a healthy interest in Cryptocurrency',
        basic1:'Improved UI/UX',
        basic2:'Sign up for users at your Client\'s company',
        basic3:'Login (you are free to use a package such as Passport for Authentication)',
        basic4:'Integration with at least 3 exchanges (with Websocket API for their market data). Examples of such exchanges are Bitstamp, OKCoin, etc.',
        advanced1:'Persist the market data in a PostgreSQL database (node-postgres)',
        advanced2:'Allow users to set up alerts for a certain price point'


    }),
    new Frontend({
        imagePath: 'https://codeln.herokuapp.com/images/capture.PNG',
        projectname: 'project3',
        concept:'Web socket api',
        description:'You have been approached by a client who has a healthy interest in Cryptocurrency',
        basic1:'Improved UI/UX',
        basic2:'Sign up for users at your Client\'s company',
        basic3:'Login (you are free to use a package such as Passport for Authentication)',
        basic4:'Integration with at least 3 exchanges (with Websocket API for their market data). Examples of such exchanges are Bitstamp, OKCoin, etc.',
        advanced1:'Persist the market data in a PostgreSQL database (node-postgres)',
        advanced2:'Allow users to set up alerts for a certain price point'


    }),
    new Frontend({
        imagePath: 'https://codeln.herokuapp.com/images/capture.PNG',
        projectname: 'project4',
        concept:'Web socket api',
        description:'You have been approached by a client who has a healthy interest in Cryptocurrency',
        basic1:'Improved UI/UX',
        basic2:'Sign up for users at your Client\'s company',
        basic3:'Login (you are free to use a package such as Passport for Authentication)',
        basic4:'Integration with at least 3 exchanges (with Websocket API for their market data). Examples of such exchanges are Bitstamp, OKCoin, etc.',
        advanced1:'Persist the market data in a PostgreSQL database (node-postgres)',
        advanced2:'Allow users to set up alerts for a certain price point'


    }),
    new Frontend({
        imagePath: 'https://codeln.herokuapp.com/images/capture.PNG',
        projectname: 'project5',
        concept:'Web socket api',
        description:'You have been approached by a client who has a healthy interest in Cryptocurrency',
        basic1:'Improved UI/UX',
        basic2:'Sign up for users at your Client\'s company',
        basic3:'Login (you are free to use a package such as Passport for Authentication)',
        basic4:'Integration with at least 3 exchanges (with Websocket API for their market data). Examples of such exchanges are Bitstamp, OKCoin, etc.',
        advanced1:'Persist the market data in a PostgreSQL database (node-postgres)',
        advanced2:'Allow users to set up alerts for a certain price point'


    }),
    new Frontend({
        imagePath: 'https://codeln.herokuapp.com/images/capture.PNG',
        projectname: 'project6',
        concept:'Web socket api',
        description:'You have been approached by a client who has a healthy interest in Cryptocurrency',
        basic1:'Improved UI/UX',
        basic2:'Sign up for users at your Client\'s company',
        basic3:'Login (you are free to use a package such as Passport for Authentication)',
        basic4:'Integration with at least 3 exchanges (with Websocket API for their market data). Examples of such exchanges are Bitstamp, OKCoin, etc.',
        advanced1:'Persist the market data in a PostgreSQL database (node-postgres)',
        advanced2:'Allow users to set up alerts for a certain price point'


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

