


function selectingElement(p) {
  let htmlElement = document.querySelector(`${p}`);
  console.log(htmlElement);
  
  if(htmlElement.classList.contains('act')){
    htmlElement.classList.remove('act');
  }else{
    removeActive();
    htmlElement.classList.add('act');
  }
}

function removeActive() {
  let element = document.querySelector('.act');
  if(element)
    {element.classList.remove('act');}
}