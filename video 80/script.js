let obj = {
    a: 1,
    b: "sufyan"
}
console.log(obj)

class animal {

    constructor(name) {
        this.name = name
        console.log("object is created")
    }

    eats() {
        console.log("khana kha raha hu");
    }
    jumps() {
        console.log("kood kha raha hu");
    }
}

class lion extends animal {
    constructor(name) {
        super(name)
        console.log("meow meow oh my little baby loin dare dare dare dare oh")
    }


}

let a = new animal("bunny");
console.log(a)

let l = new loin("shareba");
console.log(l)
