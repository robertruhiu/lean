module.exports = function Cart() {
    this.item =  {};


    this.add = function (item, id) {
        var storedItem = this.item[id];
        if (!storedItem) {
            storedItem = this.item[id] = {name:item.projectname};
        }

    };

};
