// let rev = "helloooo";
// const res = rev.split('').reverse().join('');
// console.log(res);
//helloo
//oolleh


//2nd

function reverseString(str){
    let newString = "";
    for (let i = str.length -1; i>=0;i--){
        newString += str[i]
    }
    return newString;
    
}
console.log(reverseString("hello"))
