function filterarray(arr){
    let arr2 = [];
    for (let i=0;i<arr.length;i++){
        if (typeof arr[i] === "number"){
            arr2.push(arr[i])
        }
    }
    console.log(arr2);
}
arr = [4,3,2,6,"hello",3,1,"yo"];
filterarray(arr)