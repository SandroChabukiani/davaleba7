function makeToy(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Toy is ready");
      resolve("Toy");
    }, time);
  });
}

function deliverToys(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Toys delivered");
      resolve("Delivered");
    }, time);
  });
}

function sellToy(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Toy sold");
      resolve("Sold");
    }, time);
  });
}

async function toyMakingProcess() {
  try {
    const toy = await makeToy(3000);
    console.log("Toy received:", toy);
    
    deliverToys(2000).then(() => {
      console.log("Toys delivered");
      
      sellToy(1000).then(() => {
        console.log("Toy sold");
        console.log("Process complete");
      }).catch((error) => {
        console.error("Error selling toy:", error);
      });
      
    }).catch((error) => {
      console.error("Error delivering toys:", error);
    });
    
  } catch (error) {
    console.error("Error making toy:", error);
  }
}

toyMakingProcess();
