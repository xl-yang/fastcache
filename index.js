'use strict'

var cacheStore = {};

function CacheObj() {
    return new Cache();
}

function Cache() {
}

Cache.prototype.finalize = function () {
    console.log(JSON.stringify(cacheStore))
}

Cache.prototype.error = function (err) {

    console.log(err);
    return err;
}

Cache.prototype.set = function (key, value) {

    var err;

    if (!key) {
        err = 'key is needed!';
    }
    if (err) {
        return this.error(err);
    }

    cacheStore[key] = value;
    this.finalize();

}


Cache.prototype.get = function (key) {


    var err;


    if (!key) {
        err = 'key is needed!';
    }

    if (!cacheStore[key]) {
        err = 'key = ' + key + ' not exist'
    }

    if (err) {
        return this.error(err);
    }

    this.finalize();
}

module.exports = CacheObj;
