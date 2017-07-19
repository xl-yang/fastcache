var cacheStore = {};
 
function Cache() {
    var err;
    console.log('cache it')

    var finalize = function () {
        console.log(JSON.stringify('error = ' + err))
        console.log(JSON.stringify(cacheStore))
    }
}


Cache.prototype.set = function (key, value) {

    if (!key) {
        this.err = 'key is needed!';
    }

    if(cacheStore[key]){
        this.err = 'key = ' + key + ' already exist'
    }

    cacheStore[key] = value;
    this.finalize();

}


Cache.prototype.get = function (key) {

    if (!key) {
        this.err = 'key is needed!';
    }

    if(!cacheStore[key]){
        this.err = 'key = ' + key + ' already exist'
    }

    cacheStore[key] = value;
    this.finalize();
}

module.exports = Cache;
