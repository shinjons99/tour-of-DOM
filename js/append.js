//where two add

const placesList = document.getElementById('places-list');
//what to be added
const li = document.createElement('li');
li.innerText = 'Pahartoli bon';
//add to the child
placesList.appendChild(li);


//where to add
const mainContainer = document.getElementById('mian-container');

//what to be added
const section = document.createElement('section');

const h1 = document.createElement('h1');

h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'biriyani'
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Salad'
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'borhani'
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);



//set inner html directly

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress Section</h1>
<ul>
<li>T-Shirt</li>
<li>Lungi</li>
<li>T-Shirt</li>
</ul>
`
mainContainer.appendChild(sectionDress);