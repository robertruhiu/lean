var Frontend = require('../app/models/frontend');
var mongoose = require('mongoose');
var configDB = require('../config/database.js');
mongoose.connect(configDB.url);

var projects = [
    new Frontend({
        projectname: 'Crypto-price-watcher',
        concept:'Web socket api',
        description:'You have been approached by a client who has a healthy interest in Cryptocurrency'

    }),
    new Frontend({
        projectname: 'Crypto-price-watcher',
        concept:'Web socket api',
        description:'You have been approached by a client who has a healthy interest in Cryptocurrency'

    }),
    new Frontend({
        projectname: 'Crypto-price-watcher',
        concept:'Web socket api',
        description:'You have been approached by a client who has a healthy interest in Cryptocurrency'

    }),
    new Frontend({
        projectname: 'Crypto-price-watcher',
        concept:'Web socket api',
        description:'You have been approached by a client who has a healthy interest in Cryptocurrency'

    }),
    new Frontend({
        projectname: 'Crypto-price-watcher',
        concept:'Web socket api',
        description:'You have been approached by a client who has a healthy interest in Cryptocurrency'

    }),
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

