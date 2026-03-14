let ans = ["Block", "Blink", "Blue", "Black", "Brown"];
console.log(ans.length);
while(ans.length>0){
    console.log(ans.pop());
}
ans.unshift("White");
ans.shift("Black");