function a(callback) {
  setTimeout(() => {
    console.log("result of a");
  }, 1000);
  callback()
}

function b(callback) {
  setTimeout(() => {
    console.log("result of b");
    callback()
  }, 500);
}

function c(callback) {
  setTimeout(() => {
    console.log("result of c");
    callback()
  }, 1200);
}

a(()=>console.log("A foi chamada"));
b(()=>console.log("B foi chamada"));
c(()=>console.log("C foi chamada"));
