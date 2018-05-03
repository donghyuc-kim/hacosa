// https://kin.naver.com/qna/detail.nhn?d1id=1&dirId=1040202&docId=300555284&qb=Y3NzIHwgZXM2IHwgaHRtbCB8IGh0bWw1IHwgamF2YXNjcmlwdCB8IGpxdWVyeSB8IOuwmOydke2YlSB8IOybue2RnOykgCB8IOyekOuwlOyKpO2BrOumve2KuCB8IOygkeq3vOyEsSB8IO2NvOu4lOumrOyFlA==&enc=utf8&section=kin.qna.all&rank=16&search_sort=2&spq=0&searchFlag=ALL

var arr = []; // arr.length === 0

var max = 100; 
var min = 90;
// 90 이상 100 이하 

var su; 


// 7보다 작을때까지만 작동
// 0~6까지 실행 (총 7번)
while(arr.length < 7) {
    su = Math.floor(Math.random() * max) + 1; // 랜덤

    if ( su < min ) {
        continue;
    }

    // 배열안에 랜덤수가 존재하는지 확인 
    // -1은 존재하지 않는다. 
    if ( arr.indexOf(su) === -1 ) { 

        // 배열에 추가 
        arr.push(su); 
    }
}

// 완성된 코드 
// 총 7개의 중복되지 않은 랜덤한 숫자가 있는 배열을 얻을 수 있습니다. 
console.log(arr);