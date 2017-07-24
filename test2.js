var cache = require('./index')();

module.exports = function(){
cache.set('key2', 'value2');
cache.get('key2');
}

