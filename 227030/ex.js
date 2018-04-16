// case1 
// arguments 라는 이름으로 function 내부에서 파라메터를 배열처럼 사용할 수 있습니다. 

function toggle() {
    console.log(arguments[0]);
    console.log(arguments[1]);
}

toggle(1,2,3,4,5,6)



// case2 
// 필요에 따라서는 JSON을 만들어 넘기면 한개 이상일 경우 유용하게 사용할 수 있기도 합니다. 

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
