var cacheStore = {};

function CacheObj() {
    return new Cache();
}

function Cache() {
    var err = null;
}

Cache.prototype.finalize = function () {
    console.log(JSON.stringify('error = ' + this.err))
    console.log(JSON.stringify(cacheStore))
    this.err = null;
}

Cache.prototype.set = function (key, value) {

    if (!key) {
        this.err = 'key is needed!';
    }

    if (cacheStore[key]) {
        this.err = 'key = ' + key + ' already exist'
    }

    cacheStore[key] = value;
    this.finalize();

}


Cache.prototype.get = function (key) {

    if (!key) {
        this.err = 'key is needed!';
    }

    if (!cacheStore[key]) {
        this.err = 'key = ' + key + ' not exist'
    }

    this.finalize();
}

module.exports = CacheObj;
