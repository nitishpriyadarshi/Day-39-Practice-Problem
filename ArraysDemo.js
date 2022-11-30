let origDogs = ["bulldog","Beagle","Labrador"];
let cats = new Array("American curel","Bengal Tiger");
let birds = new Array("Falcons","Ducks","Flamingoes");

let sliceDogs= oriDogs.sliceDogs(1,2);
let copyDogs = [...origDogs];
let dogs = origDogs.slice(0);

let pushDog = dogs.push("Golden Retriver");
let popDog = dogs.pop();
dogs[dogs.length] = dogs.shift();

let addFirst = dogs.unshift("Golden Retriver");
letshiftDog = dogs.shift();

dogs.splice(2,1,"pug","Boxer");

let animals = dogs.concat(cats,birds);