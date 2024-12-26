function maxmin(arr){
    let max = arr[0];
    let min = arr[0];
    for (let i=0;i<arr.length-1;i++){
        if (arr[i] > max){
            max = arr[i];
        }
        else if (arr[i] < min){
            min = arr[i];
        }
    }
    console.log(max,min)
}
arr = [2,1,5,3,7,9,8];
maxmin(arr)