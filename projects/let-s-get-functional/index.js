// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown_tyl3r");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = arr => _.filter(arr, ele => ele.gender === "male").length;

var femaleCount = arr => _.reduce(arr,
    function(inc, ele) {
        if (ele.gender === "female") {
            inc++;
        }
        return inc;
    }, 0);

var oldestCustomer = arr => {
    let old;
    _.each(arr,
        function(ele, i) {
            if (i === 0) {
                old = ele;
            }
            else if (ele.age > old.age) {
                old = ele;
            }
        });
    return old.name;
};

var youngestCustomer = arr => {
    let young;
    _.each(arr,
        function(ele, i) {
            if (i === 0) {
                young = ele;
            }
            else if (ele.age < young.age) {
                young = ele;
            }
        });
    return young.name;
};

var averageBalance = arr => {
    let balance = [];
    let sum = 0;
    let ave;
    _.each(arr,
        function(cust) {
            let bal = cust.balance.split(",");
            let bal2 = bal[0].split("");
            balance.push(Number(bal2[1] + bal[1]));
        });

    _.each(balance, ele => sum += ele);
    ave = sum / balance.length;
    return ave;
};


var firstLetterCount = (arr, char) => {
    return _.reduce(arr,
        function(inc, cus) {
            if (cus.name[0] === char.toUpperCase()) {
                inc++;
            }
            return inc;
        }, 0);
};


var friendFirstLetterCount = (arr, cus, char) => {
    return _.reduce(arr,
        function(inc, cust) {
            if (cust.name.toUpperCase() === cus.toUpperCase()) {
                _.each(cust.friends, obj => { if (obj.name[0].toUpperCase() === char.toUpperCase()) { inc++ } });
            }
            return inc;
        }, 0);
};

var friendsCount = (arr, name) => {
    var array = [];
    if (name === undefined) return [];
    _.each(arr, cus => {
        _.each(cus.friends, friend => {
            if (friend.name.toUpperCase() === name.toUpperCase()) { array.push(cus.name); }
        });
    });
    return array;
};

var topThreeTags = arr => {
    let topTag = [];
    let tag = {};
    _.each(arr, function(cust) {
        _.each(cust.tags, function(currentTag) {
            let key = Object.keys(tag);
            if (_.contains(key, currentTag)) {
                tag[currentTag]++;
            }
            else { tag[currentTag] = 1; }
        });
    });

    let vals = Object.keys(tag).map(function(key) {
        return tag[key];
    });
    let sort = _.unique(vals.sort(function(a, b) { return b - a }));
    _.each(sort, function(elem, index) {
        _.each(tag, function(value, key) {
            if (topTag.length === 3) {
                return;
            }
            else if (tag[key] >= elem) {
                topTag.push(key);
            }
        });
    });
    return _.unique(topTag);
};

var genderCount = arr => {
    var genders = {
        male: 0,
        female: 0,
        transgender: 0,
    };
    _.each(arr, function(cust) {
        if (cust.gender === "male") {
            genders.male++;
        }
        else if (cust.gender === "female") {
            genders.female++;
        }
        else {
            genders.transgender++;
        }
    });
    return genders;
};



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
