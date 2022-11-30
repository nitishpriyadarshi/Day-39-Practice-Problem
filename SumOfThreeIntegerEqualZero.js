var number =[1,2,4,-3,-5,-6,-7];

for(let i = 0; i <number.length; i++){
    for(let j=i+1;j<number.length; j++){
        for( let k = j+1; k<number.length; k++ ){
            if(number[i]+number[j]+number[k]==0){
                console.log(number[i]+" "+number[j]+" "+number[k]);
            }
        }
    }
}