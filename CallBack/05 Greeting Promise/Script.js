function greetWithName(name) {
    return new Promise((resolve, reject) => {
      if (!name || typeof name !== 'string') {
        reject("Please provide a valid name.");
      } else {
        resolve(`Hello, ${name}!`);
      }
    });
  }
  const name = "Mithun";
  greetWithName(name)
    .then(greeting => {
      console.log(greeting);
    })
    .catch(error => {
      console.error(error);
    });
  