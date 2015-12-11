/**
 * Created by jhoffmann on 11.12.2015.
 */

var timeoutCancel = setTimeout(function () {
    console.log('test');
}, 100);
clearTimeout(timeoutCancel);

var fizzBuzz = function (num) {
    if(num === undefined || isNaN(parseFloat(num)) && !isFinite(num)) {
        console.log(num === undefined);
        console.log(isNaN(num));

        console.log('not a number or undefined');

        return false;
    } else if((num % 3 === 0) && (num % 5 === 0)) {
        return 'fizzbuzz';
    } else if(num % 3 === 0) {
        return 'fizz'
    } else if(num % 5 === 0) {
        return 'buzz'
    } else {
        return num;
    }
};

fizzBuzz('blabla');

// works
var fizzBuzz = function (num) {
    if(typeof num !== 'number') {
        console.log(num === undefined);
        console.log(isNaN(num));

        console.log('not a number or undefined');

        return false;
    } else if((num % 3 === 0) && (num % 5 === 0)) {
        return 'fizzbuzz';
    } else if(num % 3 === 0) {
        return 'fizz'
    } else if(num % 5 === 0) {
        return 'buzz'
    } else {
        return num;
    }
};

fizzBuzz('blabla');

var nums = [1, 2, 3, 4, 5, 6, 7]

function calculateSquares() {
    for (var i = 0; i < nums.length; i++) {
        var numValue = nums[i];

        var squareNum = getSquare(numValue)();
        console.log(squareNum);
    }
}

function getSquare(num) {
    return function () {
        return num * num;
    }
}

calculateSquares();

/////////////////////////////////////////////////

var sayItCalled = false;
var sayIt = function (greeting, name, punctuation) {
    sayItCalled = true;
    return greeting + ', ' + name + (punctuation || '!');
};

function partial(fn, str1, str2) {
    return function (str3) {
        var newFn = fn.call(null, str1, str2, str3);
        return newFn;
    };
};


var funPartial = partial(sayIt, 'Hello', 'Ellie');
funPartial('!!!');

//////////////////////////////////


function test(arg1, arg2, arg3) {
    //console.log(arguments);

    var args = Array.prototype.slice.call(arguments, 0, arguments.length);
    console.log(args);
}

test.call(null, 'test1', 'test2', 'test3');

