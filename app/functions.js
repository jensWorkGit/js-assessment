exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
    argsAsArray: function (fn, arr) {
        return fn.apply(null, arr)
    },

    speak: function (fn, obj) {
        return fn.call(obj)
    },

    functionFunction: function (str) {
        return function (arg) {
            return str + ', ' + arg;
        };
    },

    makeClosures: function (arr, fn) {
        var newArr = [];

        for (var i = 0; i < arr.length; i++) {
            var numValue = arr[i];
            newArr.push(getSquare(numValue));
        }

        function getSquare(num) {
            //return function () {
            //    return num * num;
            //}

            return function () {
                return fn(num)
            };
        }

        return newArr;
    },

    partial: function (fn, str1, str2) {
        return function (str3) {
            var newFn = fn.call(null, str1, str2, str3);
            console.log(newFn);
            return newFn;
        };
    },

    useArguments: function () {
        var result = 0;
        for (var i = 0; i < arguments.length; i++) {
            result += arguments[i];
        }
        return result;
    },

    // The splice() method adds/removes items to/from an array, and returns the removed item(s).
    // var fruits = ["Banana", "Orange", "Apple", "Mango"];
    // fruits.splice(2, 0, "Lemon", "Kiwi");
    // Banana,Orange,Lemon,Kiwi,Apple,Mango

    // Die slice() Methode schreibt eine flache Kopie eines Teil-Arrays in ein neues Array Objekt.
    // Our good friend the citrus from fruits example
    // var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
    // var citrus = fruits.slice(1, 3);
    // citrus contains ['Orange','Lemon']

    callIt: function (fn) {
        //console.log(arguments);

        var args = Array.prototype.slice.call(arguments, 1, arguments.length);
        //console.log(args);
        fn.apply(null, args);
    },

    partialUsingArguments: function (fn) {

    },

    curryIt: function (fn) {

    }
};
