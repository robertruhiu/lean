var Frontend = require('../app/models/frontend');
var mongoose = require('mongoose');
var configDB = require('../config/database.js');
mongoose.connect(configDB.url);

var projects = [

    new Frontend({
        imagePath: 'https://cdn.dribbble.com/users/1833200/screenshots/4701866/shot.jpg',
        projectname: 'Kuruka flex',
        type:'frontend',
        concept:'ui/ux experience',
        description:'A representative of kuruka flex approaches you to create a website that embodies the feelings of modernism and coolness.The ui elements chosen to implement should make for a good users experience ',
        basic1:'Improved UI/UX',
        basic2:'Sign up for users at your Client\'s company',
        basic3:'Login (you are free to use a package such as Passport for Authentication)',
        basic4:'Integration with at least 3 exchanges (with Websocket API for their market data). Examples of such exchanges are Bitstamp, OKCoin, etc.',
        advanced1:'Implement javascript effects',
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

