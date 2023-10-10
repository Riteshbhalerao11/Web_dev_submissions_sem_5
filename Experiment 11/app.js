function delayedCallback(callback) {
    const delay = Math.floor(Math.random() * 5000) + 1000;
    setTimeout(() => {
      callback(`Callback executed after ${delay} milliseconds`);
    }, delay);
  }
  

  function callback1(result) {
    console.log(`Callback 1: ${result}`);
  }
  
  function callback2(result) {
    console.log(`Callback 2: ${result}`);
  }
  
  function callback3(result) {
    console.log(`Callback 3: ${result}`);
  }
  

  delayedCallback(callback1);
  delayedCallback(callback2);
  delayedCallback(callback3);
  