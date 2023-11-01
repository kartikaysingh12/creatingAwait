console.log("person1:shows ticket");
console.log("person2:shows ticket");
var receive=true;
const preMovie=async()=>{
const pwbt=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(receive)
        resolve('got Ticket')
    else{
        reject('didn,t got the Tickets')
    }
    },2000)
})
const getColdDrinks=new Promise((resolve,reject)=>{
    resolve("got Cold Drinks")
})
let Ticket=await pwbt;
let Colddrink=await getColdDrinks;
var items=Ticket+" And "+Colddrink;
return Ticket;
}
preMovie().then((tick)=>{
    console.log(tick)
}).catch((err)=>{
    console.log(err);
});
console.log("person4:shows ticket");
console.log("person5:shows ticket");