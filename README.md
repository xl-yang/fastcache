# fastcache
A lightweight in-memory cache for Node.js

## how to use
npm install --save fastcache
cache = require('fastcache');

## save key/value to cache
cache.set('key', 'value');

## get from cache
value = cache.get('key');

## delete from cache
cache.del('key');

## show all content in cache
all = cache.all();
