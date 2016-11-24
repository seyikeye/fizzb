module.exports={
	findMinMax: function (array){
		  
  var minNumber = array[0];
  var maxNumber = array[array.length -1];
  var minMax = [];
  
  for(var loop = 0; loop<array.length;loop++ ){
    
    if (array[loop] < minNumber){
      
      minNumber = array[loop];
      
    }else if (array[loop] > maxNumber){
      
      maxNumber = array[loop]; 
      
    }
  }
  
  if(minNumber == maxNumber){
    
    minMax.push(minNumber);
    
  }else{
    
    minMax.push(minNumber);
    minMax.push(maxNumber);
    
  }
  return minMax;
	}
}