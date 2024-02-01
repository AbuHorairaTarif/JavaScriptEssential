const arr = ['Tarif', 23, "Abir","College"];
let arr1 = arr.map(function(item){
    return item;
});
console.log(arr1);

let arr2 = arr.map(item=>item);
console.log(arr2);