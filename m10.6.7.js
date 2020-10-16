let myArr = [1,4,3,2,5,6,7,3,12,34,56,12,11,56,78];
for(let i=0; i < myArr.length;i++){
    if(myArr[i] %2 ==0){
    console.log(myArr[i]+ "- четное числа");
}else{
    console.log(myArr[i]+ "- не четное число");
}
}