console.log(`this is promise`);

let prom1 = new promise((resolve, reject) => {
    let = Math.random();
    if (a < 0.5) {
        reject("no random numbers not are suporting you")
    }
    else {
        setTimeout(() => {
            console.log("yes i im done")
            resolve("sufyan")
        }, 3000);
    }
})

prom1.then((a) => {
    console.log(a)
}).catch((err)=>{
    console.log(err)
})