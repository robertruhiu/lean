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
                    constrain1:item.constrain1,
                constrain2:item.constrain2,
                constrain3:item.constrain3,
                constrain4:item.constrain4,
                constrain5:item.constrain5,
                constrain6:item.constrain6,
                constrain7:item.constrain7,
                constrain8:item.constrain8,
                constrain9:item.constrain9,
                constrain10:item.constrain10



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
