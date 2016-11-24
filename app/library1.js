module.exports={
 aritGeo:function(myArray){
    if(myArray.length === 0){
      return 0;
    }

    var AP = 0,
        GP = 0,
        d = myArray[1] - myArray[0],
        r = myArray[1] / myArray[0];
    for(var i = myArray.length -1; i > 0; i--){
      if((myArray[i] - myArray[i - 1]) == d){
        AP++;
      }
      if((myArray[i] / myArray[i - 1]) == r){
        GP++;
      }
    }
    if(AP == myArray.length - 1){
      return "Arithmetic";
    }
    else if(GP == myArray.length - 1){
      return "Geometric";
    }
    else{
      return -1;
    }

  }
}