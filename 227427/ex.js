/* case1 */

function func1() {}
function func2() {}

switch( el.id ) {
    case 'type-foo':
        func1(); 

        break;
    case 'type-bar':
        func2(); 

        break;
    default
        break; 
}


/* case2 */

var typeList = {
    'type-foo': function() {},
    'type-bar': function() {}
};

typeList[el.id](); 