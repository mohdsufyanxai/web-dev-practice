


const callback = (arg) => { 
    console.log(arg)
}


const loadscript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback ("sufyan");
  document.head.append(sc)
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-actionscript.js", callback )
