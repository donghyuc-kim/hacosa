
function familyTree_popup(){
  $(document).on('click','.person',function(){
    var name = $(this).children('p:nth-child(1)').text;
    console.log(name);
    var htm = '<div class="familyTree_popup"><a href="#/" class="fmailyTree_close"></a><p class="name">'+name+'</p><ul><li><a href="#">추가</a></li><li><a href="#">수정</a></li><li><a href="#">가족카드</a></li></ul></div>';
      // $(this).append(htm);
    if($(this).find().is('.familyTree_popup') == false){
      // $(this).remove('.familyTree_popup');
      console.log('없음');
    }
    else{
      // $(this).remove();
      $(this).append(htm);
      console.log('있음');
    }
  })
};




// 수정 > 

var state__familyTree_popup = false; 
// true : 팝업이 활성화 
// false : 팝업이 비활성화 

function familyTree_popup(){
  $(document).on('click','.person',function(){
    var name = $(this).children('p:nth-child(1)').text;
    var htm = '<div class="familyTree_popup"><a href="#/" class="fmailyTree_close"></a><p class="name">'+name+'</p><ul><li><a href="#">추가</a></li><li><a href="#">수정</a></li><li><a href="#">가족카드</a></li></ul></div>';

    if ( state__familyTree_popup === true ) {
      return false; 
    }

    state__familyTree_popup = true; 
    $(this).append(htm);
  })
};