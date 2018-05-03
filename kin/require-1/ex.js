// router.js 


var consoleout = require("./hello/test.js");  

router.get("/", function(req, res) {  
    consoleout.foo(); 
});  




// hello/test.js

module.exports = {
    data: {
        values: 1
    }, 
    foo: function() {
        console.log("hello!"); 
        return this.values; 
    }
};