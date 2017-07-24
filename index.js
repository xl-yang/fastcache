'use strict'

var cacheStore = {};

function CacheObj() {
    return new Cache();
}

function Cache() {
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

    // if (!key) {
    //     err = 'key is needed!';
    // }
    var value = cacheStore[key];

    return cacheStore[key];
}


function logJSONString(log) {
    var jsonString;
    try {
        console.log(JSON.stringify(log));
    } catch (ex) {
        console.log(ex)
    }

}

function log(log) {
    console.log(log);
}

module.exports = CacheObj;
