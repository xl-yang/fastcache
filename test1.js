var cache = require('./index')();

module.exports = function(){
cache.set('key1', 'value1');
cache.get();
}




