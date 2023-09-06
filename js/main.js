document.addEventListener("DOMContentLoaded", () => {
  const advice = document.getElementById('advice');
  const adviceGenBtn = document.getElementById('advice-gen');
  const adviceNum = document.getElementById('adviceNum');
  
  let adviceNumber = 0;
  
        // advice.textContent = 'It is easy to sit up and take notice...whats difficult is getting up and taking action';
  function generate() {
    fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      adviceNumber++;
      adviceNum.textContent = `#${adviceNumber}`;
      advice.textContent = data.slip.advice;
    })
    .catch(error => {
      console.log('error');
    });
  }
  
  adviceGenBtn.addEventListener("click", generate);
  
  generate();
});

