'use strict'

var assert = require('assert');
var cache = require('../index');

cache.set('k','v');
assert.equal(cache.get('k'),'v');
assert.equal(cache.all().k,'v');

cache.del('k');
assert.equal(cache.get('k'), undefined);