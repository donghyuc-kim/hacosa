// case1

function foo() {
    this.func1 = function() {
        // .. 
    };
}



// case2 

function bar() {}

bar.prototype.func1 = function() {
    // ...
};