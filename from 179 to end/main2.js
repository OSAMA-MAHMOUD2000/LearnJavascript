const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Iam The Good Promise");
    reject(Error("Iam The Bad Promise"));
  }, 3000);
});

async function readData() {
  console.log("Before Promise");
  // myPromise.then((resolvedValue) => console.log(resolvedValue));
  // console.log(await myPromise);
  console.log(await myPromise2.catch((err) => err));
  console.log("After Promise");
}

readData();
