const myPromise=()=>{
    return new Promise((resolve,reject)=>{
        resolve('Promise executed')
    })
}
console.log(myPromise());