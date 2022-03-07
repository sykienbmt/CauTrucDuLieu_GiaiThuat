/**
 * 
 * @param {string} a
 * @param {number} b
 * @returns {string}
 */
//1 xuat chu ra man hinh
const showMess =(a,b)=>{
    for(let i=0;i<b;i++){
        console.log(a);
    }
}

showMess(`today is good day`)

/**
 * 
 * @param {number} n
 * @returns {number}
 */
//2 sum from 1 to n
const sum =(n)=>{
    let sum=0;
    for(let i=0;i<=n;i++){
        sum+=i
    }
    return sum
}

console.log(`sum 1 to 100 : ${sum(100)}`);
console.log(`sum 1 to 100 : ${sum(500)}`);


/**
 * 
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
//3 sum from a to b
const sumFrom =(a,b)=>{
    let sum=0;
    for(let i=a;i<=b;i++){
        sum+=i
    }
    return sum
}
console.log(`sum ${20} to ${76} is : ${sumFrom(20,76)}`);



/**
 * 
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
//Tong so le tu a-> b
 const sumOdd=(a,b)=>{
    let sum=0;
    for(let i=a;i<=b;i++){
        if(i%2!=0){
            sum+=i
        }
    }
    return sum
}

console.log(`sumOdd ${1} to ${100} is : ${sumOdd(1,100)}`);
console.log(`sumOdd ${20} to ${76} is : ${sumOdd(20,76)}`);

/**
 * 
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

//xuat ra n so le nho nhat
const listOdd = (n)=>{
    let list =[]
    let i=0
    do{
        if(i%2!=0){
            list.push(i);
        }
        i++;
    }while(list.length<n)

    return list
}
console.log(listOdd(100));


/**
 * 
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

//xuat ra n so le nho nhat tu m
const listOddFrom = (m,n)=>{
    let list =[]
    let i=m
    do{
        if(i%2!=0){
            list.push(i);
        }
        i++;
    }while(list.length<n)

    return list
}
console.log(listOddFrom(1005,57));


/**
 * 
 * @param {number} a
 * @returns {boolean}
 */

//kiem tra so nguyen to
const isPrime = (a)=>{
    if(a<2){
        return false
    }
    for(let i=2;i<a;i++){
        if(a%i==0){
            return false
        }
    }
    return true
}

console.log(isPrime(4));


//xuat ra n so nguyen to nho nhat

/**
 * 
 * @param {number} n
 * @returns {Array}
 */

const listPrime = (n)=>{
    let list =[]
    let i=0
    do{
        if(isPrime(i)){
            list.push(i)
        }
        i++;
    }while(list.length<n)

    return list
}

console.log(listPrime(20 ));


//xuat ra n so nguyen to nho nhat tu m

/**
 * 
 * @param {number} m
 * @param {number} n
 * @returns {Array}
 */

 const listPrimeFrom = (m,n)=>{

    let list =[]
    let i=m
    do{
        if(isPrime(i)){
            list.push(i)
        }
        i++;
    }while(list.length<n)

    return list
}

console.log(listPrimeFrom(1000,20));