module.exports = function Cart(oldCart) {
    this.item = oldCart.item || {};


    this.add = function (item, id) {
        var storedItem = this.item[id];
        if (!storedItem) {
            storedItem = this.item[id] = {name:item.projectname};
        }

    };

};
