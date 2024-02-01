const arr=["Asif", "Habib", "Jamil", 34,45,1,34];
let arr1 = arr.filter(function(item){
    if(arr.includes('Asif'))
    return item;
});
console.log(arr1);