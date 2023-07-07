function countNums(){
    let array = [0,1,2,3,0,6,7,0,null];
    let odd = 0;
    let even = 0;
    let zeros = 0;
    for (i = 0; i < array.length; i++){
        if(typeof(array[i]) == "number"){
            if(array[i] != 0){
                if (array[i] % 2 == 0){
                     even++;
                }else{
                     odd++;
                 }
             }else{
                 zeros++;
             }
         }
    }
    console.log("Кол-во четных чисел: " + even);
    console.log("Кол-во  нечетных чисел: " + odd);
    console.log("Кол-во нулей : " + zeros);
}
countNums();