console.log('We are connected!');

const terminal = document.querySelector('#faux-terminal');
// terminal.scrollTop = terminal.scrollHeight;

function upMovement() {
  const newPara = document.createElement('p');
  const command = newPara.innerHTML = 'stick-figure-macbook-air: Arm going up';
  terminal.appendChild(newPara);
}

function rightMovement() {
  const newPara = document.createElement('p');
  const command = newPara.innerHTML = 'stick-figure-macbook-air: Arm going right';
  terminal.appendChild(newPara);
}

function downMovement() {
  const newPara = document.createElement('p');
  const command = newPara.innerHTML = 'stick-figure-macbook-air: Arm going down';
  terminal.appendChild(newPara);
}

function leftMovement() {
  const newPara = document.createElement('p');
  const command = newPara.innerHTML = 'stick-figure-macbook-air: Arm going left';
  terminal.appendChild(newPara);
}
