/*let env = "Staging";
function settings() {
    console.log(env);
    env = "Production";
    console.log(env);
    let timeout = 3000;
    console.log(timeout);
}
settings();
console.log(env);
console.log(timeout);
*/
function outer() {
    let x = 20;
    function inner() {
        let y = 30;
        console.log(x);

    }
    console.log("At inner:" + y);

}
outer();
