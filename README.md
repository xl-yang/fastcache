# fastcache
An easy-to-use lightweight in-memory cache for Node.js

## Installing

```
npm install --save fastcache
```

## Usage

```
cache = require('fastcache');

cache.set('key', 'value');  // save to cache
value = cache.get('key');   // return undefined if no match
values = cache.all();       // return cache itself
cache.del('key');           // delete from cache
cache.reset();              // reset cache to {}

```

Enjoy!