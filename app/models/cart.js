module.exports = function Cart(oldCart) {
    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;

    this.add = function (item, id) {
        var storedItem = this.items[id];
        if (!storedItem) {
            storedItem = this.items[id] = {item:item ,name:item.projectname,
                picture:item.imagePath,
                concept:item.concept,
                description:item.description,
                basic1:item.basic1,
                basic2:item.basic2,
                basic3:item.basic3,
                basic4:item.basic4,
                advanced1:item.advanced1,
                advanced2:item.advanced2,

                qty: 0,
                price: 0,};
        }

        storedItem.qty++;
        storedItem.price = storedItem.item.price * storedItem.qty;
        this.totalQty++;
        this.totalPrice += storedItem.price;

    };

    this.generateArray = function () {
        var arr = [];
        for (var id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;

    };
};
