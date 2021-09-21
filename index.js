const container = document.getElementById('color');
const inputs = document.querySelectorAll('.container input');
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const splitValue = document.getElementById('split').value;
const body = document.querySelectorAll('body');
var percentage1 = "20%";
var percentage2 = "80%";
console.log(body);

// setting gradient
function setGradient(){
    percentage1 = this.value + "%";
    //console.log(percentage1);
    secondValue = 100 - this.value;
    percentage2 = secondValue + "%";
    container.style.backgroundImage = `linear-gradient(to right,  ${color1.value} ${percentage1} , ${color2.value} ${percentage2})`;
    setContrast();
}
document.getElementById('split').addEventListener('change', setGradient);

// setting random gradient
function randomColor(){
  var randomColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
  return randomColor;

}

function randomGradient(){
  color1.value = randomColor();
  color2.value = randomColor();
  console.log(color1.value);
  container.style.backgroundImage = `linear-gradient(to right,  ${color1.value} ${percentage1} , ${color2.value} ${percentage2})`;
  setContrast();
}

// changing text color contrast to background
const rgb = [255, 0, 0];
function setContrast() {
 
  rgb[0] = Math.round(Math.random() * 255);
  rgb[1] = Math.round(Math.random() * 255);
  rgb[2] = Math.round(Math.random() * 255);
  const brightness = Math.round(((parseInt(rgb[0]) * 299) +
                      (parseInt(rgb[1]) * 587) +
                      (parseInt(rgb[2]) * 114)) / 1000);
  const textColor = (brightness > 125) ? 'black' : 'white';
  container.style.color = `${textColor}`;
}
