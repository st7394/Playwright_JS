let res =["pass","fail","pass"];
let cons = res.reduce((acc,curr)=>{
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
},{})
console.log(cons.pass);