// https://kin.naver.com/qna/detail.nhn?d1id=1&dirId=1040202&docId=300587344

var arr = []; // arr.length === 0
var su; 


// 10보다 작을때까지만 작동
// 0~9까지 실행 (총 10번)
while(arr.length < 10) {
    su = Math.floor(Math.random() * 100) + 1; // 랜덤

    // 배열안에 랜덤수가 존재하는지 확인 
    // -1은 존재하지 않는다. 
    if ( arr.indexOf(su) === -1 ) { 

        // 배열에 추가 
        arr.push(su); 
    }
}

// 완성된 코드 
// 총 10개의 중복되지 않은 랜덤한 숫자가 있는 배열을 얻을 수 있습니다. 
console.log(arr);