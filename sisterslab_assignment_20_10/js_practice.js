// const person = { 
//     name:"John"
// }


// if (person.name !== "undefined" && person.name !== "null"){
//     console.log(person.name)
// }

 // Functions
 // old way
//  function greeting(name, lastName){
//     console.log("Hi , Is your name "+ name + " and your last name "+ lastName+ " ? ")
//  }
//  greeting("Samet","Aslan")

//  function getPerson(name, lastName){
//     return{
//         name,
//         lastName
//     };
//  }
//  getPerson("Samet","Aslan");


// function get_name(name, lastName){
//     const fullName = `${name} ${lastName}`
//     return{
//         name,   
//         lastName,
//         yourFullName : fullName,
//     }
// }
// console.log(get_name("Samet Aslan"))

// destructing
// function getCar(car){
//     console.log(car.name);
//     console.log(car.color);
//     console.log(car.date);
// }
// const car = {
//         name: "Togg",
//         color: "Blue",
//         date: "2023"
// } 
// getCar(car)

// arrays
// old version
// const fruit = ["Apple","Banana"]

// function getFruit(fruit){
//     console.log(fruit[0]);
//     console.log(fruit[1]);
// }
// getFruit(fruit)

// new version
// const fruit = ["Apple","Red"]
// function getFruit(fruit){    
//     const [name,color] =fruit;
//     console.log(name);
//     console.log(color);
// }
// getFruit(fruit)

// template literal and parameter default values

// function greetingNew(name, lastName="soyad"){
//     console.log(`Hosgeldiniz isminiz ${name} ve soyadiniz ${lastName}`)
// }
// greetingNew("Samet")

// rest and spread operators
// if there is an expression starting with ... , it is rest operator
// const person= {
//     name:"John",
//     lastName:"Shelby"
// }

// // old version
// const personCopy = JSON.parse(JSON.stringify(person));
// console.log(personCopy)
// // new version :

// const personCopy2 = {...person};
// console.log(personCopy2)

// const personCopyWithAge = {age:25, ...personCopy2};
// console.log(personCopyWithAge)

// // for Array:

// const numbers = [1,2];
// const otherNumbers = [3,4,5];

// const allNumbers = [...numbers, ...otherNumbers]
// console.log(allNumbers)

// // old version
// const latest = [].concat(numbers).concat(otherNumbers)
// console.log(latest)

// arrow Function :

// const hello = () =>{
//     console.log("Hello World!");
// };
// hello()
// // or: 
// const hello2 = () => console.log("Hello World");
// hello2()

// Array methods


const pokemons = [
    { id: 3, name: 'Bulbasaur', type: 'Grass', experience: 64 },
    { id: 7, name: 'Charmander', type: 'Fire', experience: 62 },
    { id: 13, name: 'Squirtle', type: 'Water', experience: 63 },
    { id: 56, name: 'Caterpie', type: 'Bug', experience: 39 },
    { id: 1408, name: 'Ekans', type: 'Poison', experience: 58 },
    { id: 63, name: 'Eevee', type: 'Normal', experience: 65 },
    { id: 27, name: 'Pikachu', type: 'Electric', experience: 112 },
    { id: 31, name: 'Pidgey', type: 'Flying', experience: 50 },
    { id: 21, name: 'Meowth', type: 'Normal', experience: 58 },
    { id: 22, name: 'Snorlax', type: 'Normal', experience: 154 },
    { id: 35, name: 'Psyduck', type: 'Water', experience: 64 },
  ];

// forEach : 

// pokemons.forEach((pokemon)=>{
//     console.log(pokemon.name);
// });

// undefined :
// const newArray = pokemons.forEach((pokemon)=>{
//     console.log(pokemon.name);
// });
// console.log(newArray)

// map

// const names = pokemons.map((pokemon)=>{
//     return pokemon.name
// })

// console.log(names)

// const pokemonWithColored = pokemons.map((pokemon,index)=>{
//     const newPokemon = pokemon;
//     newPokemon.color = "red";
//     return newPokemon
// });
// console.log("New pokemons",pokemonWithColored)

// const coloredPokemonsCopy = pokemons.map((pokemon,index)=>{
//     const newPokemon = {...pokemon};
//     newPokemon.color="red";
//     return newPokemon
// })
// console.log(coloredPokemonsCopy)

// filter

// const moreThan80 = pokemons.filter((pokemon)=>{
//     return pokemon.experience >80;
// });

// console.log("more than 80", moreThan80)

// const normalPokemons = pokemons.filter((pokemon)=>{
//     return pokemon.type === "Normal";
// }).map((pokemon)=>{
//     return pokemon.name
// })
// console.log(normalPokemons) 

// find : Returns firs element which can satisfy the condition 
// const pokemon1408 = pokemons.find((pokemon)=>{
//     return pokemon.id=== 1408;
// });
// console.log(pokemon1408)

// const moreThan80Find = pokemons.find((pokemon)=>{
//     return pokemon.experience >80;
// });
// console.log(moreThan80Find)

// // findIndex 
// const pokemon1408Index = pokemons.findIndex((pokemon)=>{
//     return pokemon.id == 1408;
// });
// console.log(pokemon1408Index)

// // some 

// const hasGrassPokemon = pokemons.some((pokemon)=>{
//     return pokemon.type === "Grass"
// })
// console.log(hasGrassPokemon)

// // every

// const allPokemonsAreGrass = pokemons.every((pokemon)=>{
//     return pokemon.type ==="Grass";
// })
// console.log(allPokemonsAreGrass)

// reduce 

// const totalExperience = pokemons.reduce((total,pokemon)=>{
//     return total + pokemon.experience;
// },0)
// console.log(totalExperience)

// const sayilar = [1, 2, 3, 4];
// const toplama = (oncekiDegerler, suankiDeger) => {
//   console.log(
//     `oncekiDegerler: ${oncekiDegerler} ve suankiDeger: ${suankiDeger}`
//   );

//   return oncekiDegerler + suankiDeger;
// };
// toplama()

// console.log(sayilar.reduce(toplama))

// const toplam = sayilar.reduce((prev, curr)=>{
//     return prev+curr
// },0);
// console.log(toplam)

// const typeCounts = pokemons.reduce((count,pokemon)=>{
//     if (count[pokemon.type]){
//         count[pokemon.type] = count[pokemon.type] +1;
//     } else{
//         count[pokemon.type] = 1;
//     }
//     return count;
// },{});
// console.log(typeCounts)

// push
// const numbers = [1,2,3,4]
// numbers.push(5)
// console.log(numbers)

// const newNumbers = [...numbers , 7];
// console.log(newNumbers)

// const slicedNumbers = numbers.slice(0,2)
// console.log(slicedNumbers)

// const splicedNumbers = numbers.splice(2,4);
// console.log(splicedNumbers)

// asyncrone operations
// setTimeout

// console.log(1)
// setTimeout(()=>{
//     console.log(2);
// },1000);

// setTimeout(()=>{
//     console.log(3)
// },0)
// console.log(4)


// const promise = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve()
//     },1000);
// })
// console.log(promise);

// const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Bitti")     
//     },1000);
// });
// console.log(promise);
// setTimeout(() => {
//     console.log(promise);
// }, 2000);

// const promise = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("Bitti")
//     }, 1000);
// });
// promise.then((result)=>{
//     alert(result);
// });

// const promise = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         reject("Bitti")
//     }, 1000);
// });
// promise.then((result)=>{
//     alert(result)
// });

// const promise = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         reject("Bitti")
//     }, 1000);
// });
// promise.then((result)=>{
//     alert(result);
// }).catch((err)=>{
//     alert(err);
// });

// fetch
fetch('/users');

// async wait

const getUser = fetch('/users')

async function logUser()=>{
    const user = await getUser();
    console.log(user)
}