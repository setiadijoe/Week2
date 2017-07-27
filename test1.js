function reverse(s){
    return s.split("").reverse().join("");
}


var test= "hello world!";
reverse(test);

// fungsi untuk mengubah menit ke bentuk jam dan menit
function TimeConvert(num) { 

  if (num%60 === 0){
      return num/60+':'+num%60;
  }else{
      return (num - num%60)/60 +':'+ num%60;
  }  
  return num; 
         
}


function time(num){
var jam = Math.floor(num/60);
var menit = num % 60;
return jam +':'+menit;


}
console.log(126);




function CheckNums(num1,num2) { 
    if (num2 > num1){
        return 'true'
    }else if(num2 == num1){
        return '-1';
    }else{
        return 'false';
    }
   
  return num1 + num2; 
         
}

function OtherProducts(arr) { 
    var result = [];
    for (var i in arr) {
        var n = 1;
        for (var j in arr) {
            if (i != j) {
                n *= arr[j];
            }
        }
        result.push(n);
    }
   arr = result;
  return arr; 
         
}
   
// keep this function call here 
OtherProducts(readline());