module.exports = function Cart(oldCart) {
    this.item = oldCart.item || {};



    this.add = function (item, id) {

        var storedItem = this.item[id];
        //if not stored make  item empty object then add item.to ensure one item at a time in the cart
        if (!storedItem) {
            this.item={};
            storedItem = this.item[id] ={
                    item:item ,
                    name:item.projectname,
                    type:item.type,
                    picture:item.imagePath,
                    concept:item.concept,
                    description:item.description,
                    basic1:item.basic1,
                    basic2:item.basic2,
                    basic3:item.basic3,
                    basic4:item.basic4,
                    advanced1:item.advanced1,
                    advanced2:item.advanced2,
                    language:item.language,
                    framework:item.framework,
                    database:item.database,
                    vcs:item.vcs,
                    time:item.time



            };
        }


    };






    this.generateArray = function () {
        var arr = [];
        for (var id in this.item) {
            arr.push(this.item[id]);

        }
        return arr;

    };
};
