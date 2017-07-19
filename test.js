var cache = require('./index')();

cache.set('key1', 'value1');
cache.get('key2');
cache.set('key2', 'value2');

