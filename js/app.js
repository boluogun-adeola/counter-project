const buttons = document.querySelectorAll('.counterBtn');
let count = 0;
//adding event listeners and button functionality
buttons.forEach(function(button){
button.addEventListener('click', ()=>{
  if(button.classList.contains('prevBtn')){
    count--
  }
  else if(button.classList.contains('nextBtn')){
    count++
  }
  else if(button.classList.contains('resetBtn')){
    count = 0
  }
  //the counter text
  const counter = document.querySelector('#counter')
      counter.textContent = count

      if (count < 0 ){
        counter.style.color = 'teal'
      } else if (count > 0){
        counter.style.color = 'maroon'
      } else {
        counter.style.color = '#333333'
      }
})
})