const icons =[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];


function creatBox (icons){

	const containerBox = document.querySelector(".container");

	const{name, prefix, type, family, color} = icons;

	//Costruisco il box
	const box = document.createElement('div');
	box.classList.add("box");
	containerBox.appendChild(box);

	//Costruisco l'icona
	const fontIcon = document.createElement('i');
	fontIcon.classList.add(family);
	fontIcon.classList.add(prefix+name);
	fontIcon.style.color = color;
	box.appendChild(fontIcon);


	//Costruisco il testo
	const text = document.createElement('span');
	box.appendChild(text);
	text.innerHTML = name;
}

// Creo i box
// icons.forEach(element => creatBox(element));


// Creo i box secondo le opzioni selezionate
const selecElement = document.getElementById("categoriesFilter");


selecElement.addEventListener('change', function(){

	// Ad ogni cambio svuto il container
	const containerBox = document.querySelector(".container");
	containerBox.innerHTML = '';

	if(selecElement.value == 'all'){
		icons.forEach(element => creatBox(element));
	}

	if(selecElement.value == 'animal'){
		const animal = icons.filter(item => item.type == 'animal');
		animal.forEach(element => creatBox(element));
	}

	if(selecElement.value == 'vegetable'){
		const vegetable = icons.filter(item => item.type == 'vegetable');
		vegetable.forEach(element => creatBox(element));
	}

	if(selecElement.value == 'user'){
		const user = icons.filter(item => item.type == 'user');
		user.forEach(element => creatBox(element));
	}
});