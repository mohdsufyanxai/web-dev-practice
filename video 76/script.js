// async function getdata() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455)
//     }, 3500);
//   })
// }



async function getdata() {
  let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  let data = await x.json()
  console.log(data) 
}



async function main() {

  console.log("loading modules")

  console.log("do something else")

  console.log("load data")

  let data = await getdata()

  console.log(data)

  console.log("process data")

  console.log("task 2")

}

main()


// Example POST method implementation:
async function postData(url = "", data = {}) {
  const response = await fetch(url, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
  });
  return response.json();
}

postData("https://example.com/answer", { answer: 42 }).then((data) => {
  console.log(data);
});