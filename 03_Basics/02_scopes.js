let a =100
const b = 200
var c = 300
if(true){
    let a = 10
    const b = 20
    var c = 30
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Arshad"

    function two(){
        const website = "wikipedia"
        console.log(username);
    }
    // console.log(website);
    two()
    
}
one()


