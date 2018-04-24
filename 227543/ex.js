function c() {
    try {
        xxx
    } catch(e) {
        // throw e;
        // output : ReferenceError: xxx is not defined

        throw new Error('Error가 발생했습니다.');
        // output : Error: Error가 발생했습니다.

        // return e.message;
        // output : cv xxx is not defined
    } finally {
        return 'return-c-finally';
        // output : cv return-c-finally
    }

    return 'return-c'; 
}

function b() {
    var cv = c(); 

    console.log('cv', cv);
}

function a() {
    b(); 
}

a();