//alert('hello world2')
function ensure(value){
    if(value === undefined) {
        throw new Error('no arguments');
      }
    return value;
}

try {
    console.log(ensure(123));
    console.log(ensure());
  }
  catch(err) {
    console.log ('this is error processing part')
    console.log(err);
  }
