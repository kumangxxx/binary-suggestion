'use strict';

const Combinatorics = require('js-combinatorics')

var binary = (array, offset) => {
    var comb = Combinatorics.power(array)
    let result = comb.filter(item => item != []).map(i => i.reduce((a, b) => a+b, 0)).map(i => i+offset)
    return result
}

module.exports = binary