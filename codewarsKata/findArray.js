function findArray(arr1, arr2){
    const outPutArray=[]; //an array to accept element from arr1
    for (element of arr2){//loop to loop over all element of arr2 and later compare to arr1 index
        if(element < arr1.length){
            outPutArray.push(arr1[element]);}//statement to determine element equivalent to arr1 index which is equal to arr2 element. 
            else if (arr1===[]||arr2===[]){// statement that return [] in case of any argument = []
                return outPutArray;
            }
        else {outPutArray.push()};//statement that inhibit presence of undefined in case arr2 element > arr1.length
        }
    
    return outPutArray;
  }
  
  