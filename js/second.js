console.log('second line js');


const secondList = document.getElementById('second-list');


const li = document.createElement('li');
li.innerText = 'My dynamic Item';
secondList.appendChild(li);

document.getElementById('second-title').style.fontSize