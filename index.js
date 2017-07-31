'use strict'

var cacheStore = {};

function Cache() {
}

Cache.prototype.get = function (key) {
    var value = cacheStore[key];
    return value;
}

Cache.prototype.set = function (key, value) {
    cacheStore[key] = value;
}

Cache.prototype.del = function (key) {
    delete cacheStore[key];
}

// return cacheStore object that contains all the keys and values 
Cache.prototype.all = function () {
    return cacheStore;
}

Cache.prototype.reset = function () {
    cacheStore = {};
}

module.exports = new Cache();
