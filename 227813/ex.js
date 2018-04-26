let result; 

console.log('1'); 

axios
    .get('/user/12345')
    .then(function(response) {
        // result = response;

        then이후에result처리( response ); 

        console.log('3'); 
    });

console.log('2');

function then이후에result처리( data ) {
    console.log('4');
    console.log(data); 

    result = data; 

    또다른처리(); 
}  

function 또다른처리() {
    console.log('5'); 
    console.log(JSON.stringify(result)); 
}