let n1=9
let n2=3

/**
 * 
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
//1 tinh Tong hieu 2 so

const tong = (a,b)=>{
    return a+b
}

const hieu = (a,b)=>{
    return a-b
}

//2 
console.log(` tong của ${n1} và ${n2} là: ${tong(n1,n2)}`);
console.log(` hieu của ${n1} và ${n2} là: ${hieu(n1,n2)}`);

/**
 * 
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
//3 tich cua 2 so

const nhan = (a,b)=>{
    return a*b
}


//4
console.log(`Tich cua 2 so la: ${nhan(n1,n2)}`);

/**
 * 
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
//5 chia cua 2 so
const thuong = (a,b)=>{
    return a/b
}

//6
console.log(` THương của ${n1} và ${0} là: ${thuong(n1,0)}`);
//7
console.log(` THương của ${0} và ${n2} là: ${thuong(0,n2)}`);


/**
 * 
 * @param {number} a
 * @returns {number}
 */
//8 
const binhPhuong=(a)=>{
    return a*a
}


//9
console.log(`binh phuong cua ${n1} la: ${binhPhuong(n1)} va ${n2} la: ${binhPhuong(n2)}`);

/**
 * 
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
//10 
const max =(a,b)=>{
    if(a>b){
        return `${a} lon hon ${b}`
    }else{
        return `${b} lon hon ${a}`
    }
}

//11
console.log(max(n1,n2));


/**
 * 
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
//12
const min =(a,b)=>{
    if(a<b){
        return `${a} be hon ${b}`
    }else{
        return `${b} be hon ${a}`
    }
}

//13
console.log(min(n1,n2));

/**
 * 
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
//14
const trungBinh =(a,b)=>{
    return (a+b)/2
}

//15
console.log(`trung binh cua ${n1 + "va " +n2 + "la: " + trungBinh(n1,n2) }`);

/**
 * 
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
//16
const chiaLayDu =(a,b)=>{
    return a%b
}

//17
console.log(`so du cua phep chia ${n1 +" "+n2 } la ${chiaLayDu(n1,n2)}`);
//18
console.log(`so du cua phep chia ${n2 +" "+n1 } la ${chiaLayDu(n2,n1)}`)


/**
 * 
 * @param {number} a
 * @param {number} b
 * @returns {string}
 */
//19
const coChiahet =(a,b)=>{
    if(a%b==0){
        return `${a} chia het cho ${b}`
    }else{
        return `${a} khong het cho ${b}`
    }
}

//20 
console.log(coChiahet(n1,n2));
//21
console.log(coChiahet(n2,n1));


/**
 * 
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
//22
const chuViChuNhat =(a,b)=>{
    return (a+b)*2
}



/**
 * 
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
//23
const dienTichChuNhat =(a,b)=>{
    return a*b
}


//24
console.log(`Chu vi hinh chu nhat canh ${n1} va ${n2} la: ${chuViChuNhat(n1,n2)}`);
console.log(`dien tich chu nhat canh ${n1} va ${n2} la: ${dienTichHcn(n1,n2)}`);

/**
 * 
 * @param {number} r
 * @returns {number}
 */
//25
const chiViHinhTron =(r)=>{
    return 2*r*3.14
}


/**
 * 
 * @param {number} r
 * @returns {number}
 */
//26
const dienTichHinhTron =(r)=>{
    return r*r*3.14
}

//27
console.log(`Chu vi hinh tron ban kinh ${n1}  la: ${chuViHinhTron(n1)}`)
console.log(`dien tich hinh tron ban kinh ${n1}  la: ${dienTichHinhTron(n1)}`)
//28

console.log(`Chu vi hinh tron ban kinh ${n2}  la: ${chuViHinhTron(n2)}`)
console.log(`dien tich hinh tron ban kinh ${n2}  la: ${dienTichHinhTron(n2)}`)


// ! Chuỗi
let s1 = 'Xin';
let s2 = 'Chào';
let s3 = 'Các';
let s4 = 'Bạn';
let s5 = 'Nhỏ';

// ? 1. Nối chuỗi 
/**
 * 
 * @param {String} s1 
 * @param {String} s2 
 * @returns {String}
 */
const noiChuoi=(s1,s2)=>{
    let noi= s1+s2;
    return noi;
}

console.log(` Chuỗi sau khi nối là: ${noiChuoi(s1,s2)+ noiChuoi(s3,s4) +s5}`);

// ? 2. In hoa chuỗi truyền vào

/**
 * 
 * @param {String} s1 
 * @returns {String}
 */
const inHoa=(s1)=>{
    return s1.toLocaleUpperCase();
}
console.log(inHoa(s1));
console.log(inHoa(s2));
console.log(inHoa(s3));
console.log(inHoa(s4));
console.log(inHoa(s5));

console.log(inHoa(s1+s2+s3+s4+s5));

// ? 5.Kiểm tra sự tồn tại của chuỗi

/**
 * 
 * @param {String} s1 
 * @param {String} s2 
 * @returns {boolean}
 */
const coTonTai=(s1,s2)=> {
    return s1.includes(s2);
}
console.log(` Kiểm tra sự tồn tại của ${s2} trong ${s1}: ${coTonTai(s1,s2)}`);

// ? Xuất độ dài chuỗi
console.log(`Độ dài của chuỗi ${s1} là: ${s1.length}`);
console.log(`Độ dài của chuỗi ${s2} là: ${s2.length}`);
console.log(`Độ dài của chuỗi ${s3} là: ${s3.length}`);
console.log(`Độ dài của chuỗi ${s4} là: ${s4.length}`);
console.log(`Độ dài của chuỗi ${s5} là: ${s5.length}`);
console.log(`Độ dài của chuỗi ${S} là: ${S.length}`);

// ? Cắt chuỗi
console.log(`Cắt chuỗi ${s1} là: ${s1.substring(1,3)}`);
console.log(`Cắt chuỗi ${s2} là: ${s2.substring(1,3)}`);
console.log(`Cắt chuỗi ${s3} là: ${s3.substring(1,3)}`);
console.log(`Cắt chuỗi ${s4} là: ${s4.substring(1,3)}`);
console.log(`Cắt chuỗi ${s5} là: ${s5.substring(1,3)}`);

// ? Ktra tồn tại
/**
 * 
 * @param {String} s1 
 * @param {String} s2 
 * @returns {String}
 */
 const chuoiTonTai=(s1,s2)=> {
    if(s1.includes(s2)){
        return`${s2} có tồn tại trong ${s1}`;
    }else return `${s2} không tồn tại trong ${s1}`;
}

console.log(chuoiTonTai(s5,s1));
console.log(chuoiTonTai(s5,s2));
console.log(chuoiTonTai(s5,s3));
console.log(chuoiTonTai(s5,s4));
