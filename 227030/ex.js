// case1 

function toggle() {
    console.log(arguments[0]);
    console.log(arguments[1]);
}

toggle(1,2,3,4,5,6)



// case2 

function toggle(obj) {
    if ( 'a' in obj ) {
        console.log(obj['a']); 
    }

    if ( 'b' in obj) {
        console.log(obj['b']); 
    }
}

toggle({a: 'bar'}); 
toggle({b: 'foo'});
toggle({a: 'bar', b: 'foo'}); 