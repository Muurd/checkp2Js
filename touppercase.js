function caplitalize(){
    let c = "hi hello wssup"
    let c2 ="";
    c2+= c[0].toUpperCase();
    for (let i=1; i<c.length;i++){
        if (c[i-1] == " "){
            c2+= c[i].toUpperCase()
        } else {
            c2+= c[i]
        }
    }
    return c2;
}
console.log(caplitalize())