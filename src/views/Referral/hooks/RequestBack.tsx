const backendUrl = "localhost:3001"

export async function RequestLink () {
   fetch(backendUrl).then(res => res.json).then((res) => {
     console.log(res);
     Promise.resolve(1)
   })
}