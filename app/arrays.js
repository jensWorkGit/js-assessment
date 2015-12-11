exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

    indexOf: function (arr, item) {
        /*
         if (Array.prototype.indexOf) { return arr.indexOf(item); }
         */

        for (var i = 0, len = arr.length; i < len; i++) {
            if(arr[i] === item) {
                return i;
            }
        }

        return -1;
    },

    sum: function (arr) {
        var _sum = 0;
        for (var i = 0; i < arr.length; i++) {
            _sum += arr[i]
        }
        return _sum;
    },

    remove: function (arr, item) {
        for (var i = 0; i < arr.length; i++) {
            if(arr[i] === item) {
                arr.splice(arr.indexOf(item), 1);
            }
        }
        return arr;
    },

    removeWithoutCopy: function (arr, item) {
        //console.log(arr);
        var arrayLength = arr.length;

        for (var i = 0; i < arrayLength; i++) {
            if(arr[i] === item) {
                arr.splice(arr.indexOf(item), 1);

                --i;
                --arrayLength;
            }
        }
        //console.log(arr);
        return arr;
    },

    append: function (arr, item) {
        arr.push(item);
        return arr;
    },

    truncate: function (arr) {
        arr.pop();
        return arr;
    },

    // unshift() method adds one or more elements to the beginning of an array
    // works also with unshift
    prepend: function (arr, item) {
        var newArr = [];
        newArr.push(item);

        for (var i = 0; i < arr.length; i++) {
            newArr.push(arr[i]);
        }
        arr = newArr;
        return arr;
    },

    // The shift method removes the element at the zeroeth index and shifts the values at consecutive indexes down, then returns the removed value.
    // works also with shift
    curtail: function (arr) {
        var newArr = [];

        for (var i = 1; i < arr.length; i++) {
            newArr.push(arr[i]);
        }
        arr = newArr;
        return arr;
    },

    // Die join() methode kombiniert alle Elemente von einem Array zu einem String.
    // Die Methode concat() konkateniert Arrays. Sie gibt einen neuen Array zurück, der aus dem als Argument übergebenen Array und/oder den übergebenen Werten sowie dem Array besteht, auf dem diese Methode aufgerufen wurde.
    concat: function (arr1, arr2) {
        var newArr = arr1.concat(arr2);
        return newArr;
    },

    insert: function (arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count: function (arr, item) {
        var counter = 0;
        for (var i = 0; i < arr.length; i++) {
            if(arr[i] === item) {
                counter++;
            }
        }
        return counter;
    },

    duplicates: function (arr) {
        var obj = {};
        var newArr = [];

        for (var i = 0; i < arr.length; i++) {
            if(obj[arr[i]]) {
                obj[arr[i]] = obj[arr[i]] + 1;
            } else {
                obj[arr[i]] = 1;
            }
        }

        for (var key in obj) {
            if(obj[key] > 1) {
                newArr.push(parseInt(key));
            }
        }

        return newArr;
    },

    square: function (arr) {
        for (var i = 0; i < arr.length; i++) {
            //arr[i] = arr[i] * arr[i];
            arr[i] = Math.pow(arr[i], 2)
        }
        return arr;
    },

    findAllOccurrences: function (arr, target) {
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            if(arr[i] === target) {
                //newArr.push(arr.indexOf(target));
                //arr[i] = 'noob';
                newArr.push(i);
            }

        }
        return newArr;
    }
};
