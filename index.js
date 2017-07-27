'use strict'

var cacheStore = {};

function CacheObj() {
    return new Cache();
}

function Cache() {
}


Cache.prototype.get = function (key) {
    var value = cacheStore[key];
    return value;
}

Cache.prototype.set = function (key, value) {
    cacheStore[key] = value;
}

// return cacheStore object that contains all the keys and values 
Cache.prototype.all = function () {
    return cacheStore;
}



module.exports = CacheObj;
