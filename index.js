'use strict'

var cacheStore = {};
var cacheInd = true;

function Cache() {
}

Cache.prototype.get = function (key) {
    return get(key);
}

Cache.prototype.set = function (key, value) {
    set(key, value);
}

Cache.prototype.del = function (key) {
    del(key);
}

// return cacheStore object that contains all the keys and values 
Cache.prototype.all = function () {
    return all();
}

Cache.prototype.reset = function () {
    reset();
}

Cache.prototype.switchToCache = function () {
    cacheInd = true;
}

Cache.prototype.switchToFile = function () {
    cacheInd = false;
}

function get(key) {
    var value = cacheStore[key];
    return value;
}

function set(key, value) {
    cacheStore[key] = value;
}

function del(key) {
    delete cacheStore[key];
}

function all() {
    return cacheStore;
}

function reset() {
    cacheStore = {};
}


module.exports = new Cache();

