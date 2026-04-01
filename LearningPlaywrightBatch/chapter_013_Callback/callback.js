function print(){
    console.log("Callback functions");
}
 
function placeholder(print){
    console.log("Placeholder function");
    print();
    
}

placeholder(print);