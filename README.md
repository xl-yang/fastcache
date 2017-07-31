# fastcache
A lightweight in-memory cache for Node.js

## Installing

```
npm install --save fastcache
```

## Usage

```
cache = require('fastcache');

cache.set('key', 'value'); // save to cache
value = cache.get('key'); // query from cache, return undefined if no match
cache.del('key'); // delete from cache
all = cache.all(); // return all contents in cache
```

Enjoy!