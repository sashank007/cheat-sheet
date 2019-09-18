# Javascript Cheat Sheet

## Map Spread Operator

```javascript
let x = new Map([['first':'second']]);
let y = new Map([['third':'fourth']]);
let z = new Map([[...x] , [...y]]);
//Map { 'first' => 'second', 'third' => 'fourth' }

```

## Truthy and Falsy

```Javascript
1 == '1' //true
1 === '1' //false (must be same type)

"" ==false //true
""===false//false
0==false//true
//use === when you want to check for strict equivalency else if you want to check if value exists, use ==
```

## Ternary Operators

```Javascript
var display = active ? 'bold' : 'normal';

const permissions = title ==='manager'? ['time','pay'] : ['time'];
```

## Short Circuiting

```Javascript
const path = icon.path || 'uploads/default.png';
```

## ES6 arrow functions

```Javascript
//arrow functions adopt the this binding of the enclosing scope (in other words, they don’t change the meaning of this), so things just work automatically.

//normal
function capitalize(name)
{
    return name[0].toUpperCase()  + name.slice(1);
}
//ES6
const capitalize = name =>
{
    return name[0].toUpperCase() + name.slice(1);
}

const formatUser = name => `${capitalize(name)} is logged in.`;


```

## Array Methods

```Javascript
map ()
    //Action :  Changes shape but not size
    //Example : Get the name of everyone on the team

sort()
    //Action : Changes neither size nor shape, only order
    //Example : Get team members in alphabetical order
filter()
    //Action : Changes size but not the shape
    //Example : Get the developers on a team
find()
    //Action : Changes size to exactly one, but not shape. Does not return an array
    //Example : Get the manager
forEach()
    //Action : Uses shape but returns nothin
    //Example : Give all members a bonus
reduce()
    //Action: Changes size and shape to anything
    //Example : Get total developers and non-dev
```

## Map Iterator

```Javascript
//returns array
const data = [
    {
        name : 'Batman',
        color : 'black'
    } ,
     {
         name : 'Green Lantern',
         color : 'green'
     },
     {
         name: 'Wonder Woman',
         color : 'gold'
     }
];

const allColors = data.map(member => member.color);
//returns ['black','green','gold']
```

## filter

```Javascript
const data = [
    {
        name : 'Batman',
        color : 'black'
    } ,
     {
         name : 'Green Lantern',
         color : 'green'
     },
     {
         name: 'Wonder Woman',
         color : 'gold'
     }
];
const greenHero= data.filter(member=>member.color==='green');
//returns [ { name: 'Green Lantern', color: 'green' } ]
```

## forEach

```Javascript
//used for performing action on each item
//does not return anything
const data = [
    {
        name : 'Batman',
        color : 'black'
    } ,
     {
         name : 'Green Lantern',
         color : 'green'
     },
     {
         name: 'Wonder Woman',
         color : 'gold'
     }
];

data.forEach(member=>doSomething(member.name));
```

## chaining methods

```Javascript

const data = [
    {
        name : 'Batman',
        color : 'black'
    } ,
     {
         name : 'Green Lantern',
         color : 'green'
     },
     {
         name: 'Wonder Woman',
         color : 'gold'
     }
];

data.filter(hero =>hero)
    .map(hero=>hero.color || 'no-color')
    .forEach(hero=>doSomething(hero));

//iteration happening 9 times
```

## reduce

```Javascript
//Can change both size and the shape of data
//takes 2 parameters, callback with 2 parameters(accumulator and curr value) and value to initialize for the accumulator

const numbers = [ 1  , -1 , 2, 3];

const sum  = numbers.reduce((accum , currentValue)=>{
    return accum+currentValue;
    }, 0 );

//returns 5


const data = [
    {
        name : 'Batman',
        color : 'black'
    } ,
     {
         name : 'Green Lantern',
         color : 'green'
     },
     {
         name: 'Wonder Woman',
         color : 'gold'
     }
];

const allColors = data.reduce((colors , hero)=>
{
    const count = colors[hero.color] || 0 ;
    return {
        ...colors  , [hero.color]: count+1
    }

} , {} );

//returns { black: 1, green: 1, gold: 1 };
```

## Object destructuring

```Javascript

const data =
    {
        name : 'Batman',
        color : 'black'
    };

const  { color}  = data;
//returns black
```

## Rest parameters

```Javascript
//Enable you to pass a list of arguments and assigns them to a variable
const fun = (...args) => {return args}

fun('a' , 'b' , ['c' ,'d' , 'e' ,'f'])
//returns 'a' , 'b' , ['c' ,'d' , 'e' ,'f']

//separate first item from rest of array
const data  = [ 'firstItem' , 'secondItem' , 'thirdItem'];
const {firstItem , ...restItems} = data;

//rest element must always be the last element
```

## Higher Order Functions ( HOC )

```Javascript
//function that returns another function
// lock in parameters so you can complete function later while still maintaing access to original arguments
// isolate parameters

//Higher order function to return a function with discount initiated
const discounter = discount =>
{
    return price => price * (1-discount);
}

discounter(0.1)(100);
//returns 90

//single responsibility parameters are good for reusing common arguments
//same as initializing variables through constructor in OOP
const vehicleInfo = (build ) =>
{
    const { wheels ,color } = build;
    const defaults = {
        wheels,
        color
    }
    return spec  =>
     {
         return {...defaults , ...spec}
     }
}

const newBike = vehicleInfo({wheels:2 , color:'black'})({brakes:'disc'});

const newCar = vehicleInfo({wheels:4, color:'blue'})({drive:'automatic'});
```

## Currying functions

```Javascript
//Currying is when you take a function that would require multiple arguments and return as eries of functions that take exactly one argument.

const shows = [
    {
        showName : 'breaking bad',
        rating: 9.5
    },
    {
        showName : 'Rick and Morty',
        rating: 9.3
    },
    {
        showName : 'The Office',
        rating: 8.8

    }

];

const getRatingValues = (shows , filterFun) =>
 {
     return shows.filter(filterFun)
                 .map(show =>show.showName);
 }

 const showFilter =  minimumRating => show => show.rating > minimumRating;

 getRatingValues ( shows, showFilter(9))

//returns ['breaking bad' , 'Rick and Morty' ]

```

## Classes

```Javascript
//Javascript classes don't exactly work like other OOP languages.

class Hero {
    constructor(name, color)
    {
        this.name = name;
        this.color = color;
    }
    getHeroName () {
        return `Hero Name : ${this.name}`
    }
}

const hero = new Hero('Superman' , 'Blue');
hero.color
//returns Blue
hero.getHeroName();
//returns Superman

//everything is public for now in JS classes.
//`this` is now pointing to the hero object.
```

## Inheritance

```Javascript
import Hero from './hero';

class MarvelHero extends Hero {

constructor ( name , color)
{
    super(color);
    this.name = `Marvel-${this.name}`;
}

getHeroName () {
    return super.getHeroName() + ` and this is a Marvel hero.`;
}
}

const newMarvelHero = new MarvelHero('Wolverine', 'Yellow')

marvelHero.name;
//returns Marvel-Wolverine

```

## Prototype

```Javascript

//Javascript is a prototype langauge, when you create a new instance of a class, you aren't copying the methods. You are creating a link to a prototype.
//class is just shorthand for a prototype.
//A prototype is an object that's the base for the constructor function. All object instances derive properties from the prototype.

function Hero(name , color)
{
    this.name = name;
    this.color = color;

    Hero.prototype.getName() = function ()
    {
        return `The hero name is ${this.name}`;
    }
}

let hero = new Hero();
hero.getName();
```

## getters and setters

```Javascript
//getters and setters are good in masking methods to appear like properties.

class Hero {
    constructor(name, color)
    {
        this.name = name;
        this.color = color;
    }
    get heroName () {
        return `Hero Name : ${this.name}`
    }

    set heroName (name)
    {
        this.name  = `Hero-${name}`;
    }

}

const hero = new Hero('Superman','Blue')
hero.name;
//returns Superman
hero.heroName='Superman'
hero.heroName;
//returns `Hero Name: Hero=Superman`
```

## Generators

```Javascript
//generator is a function that doesn't fully execute its body immediately when called.
//add * after function to make a generator
//special method called next() is now accessible
//`yield` is used to return a piece of information

function* getCairoTrilogy()
{
    yield `Palace Walk`;
    yield `Palace of Desire`;
    yield `Sugar Street`;
}

const trilogy = getCairoTrilogy();
trilogy.next();
//returns {value : 'Palace Wak' , done : false}
trilogy.next();
//returns {value : 'Palace of Desire' , done : false}
trilogy.next();
//returns {value : 'Sugar Street', done : false }
trilogy.next();
//retunrs {value : undefined , done :true }

[...getCairoTrilogy]
//returns ['Palace Walk', 'Palace of Desire', 'Sugar Street']

//generators are good in having iterators hidden inside classes
//iterators will loop over each node and return the existing node.name

class FamilyTree {
    constructor()
    {
        this.family = {
            name : 'Dolores',
            child :
            {
                name : 'Martha',
                child : {
                    name : 'Dyan',
                    child  : {
                        name : 'Bea',
                    },
                },
            },
        };
    }

    * [Symbol.iterator]() {
        console.log(Symbol.iterator);
        let node = this.family;
        while(node)
        {
            yield node.name;
            node = node.child;
        }
    }
}
const family = new FamilyTree();
[...family];
//returns ['Dolores', 'Martha' , 'Dyan' , 'Bea']

//the iterator generator is called whenever any action that requires an iterable, such as spread or the for...of loop.
```

## binding this

```Javascript
//binding method exists on all function
//lets you state your context explicitly
//if you have a function that does not have a property, you can explicitly bind that property to the function so that at runtime the property exists inside that function

function sayMessage ()
{
    return this.message;
}
const alert = {
    message: 'Danger!';
}
const sayAlert = sayMessage.bind(alert);

sayAlert();
//Danger!

//you can bind a function to this to tell the function to use current context rather than creating a new one.

class Validator {
    constructor()
    {
        this.message = ' is invalid.';
        this.setInvalidMessage  = this.setInvalidMessage.bind(this);
    }
    setInvalidMessage(field)
    {
        return `${field} ${this.message}`;

    }
    setInvalidMessages(...fields)
    {
        return fields.map(this.setInvalidMessage);
    }
}
//this is same as using arrow function in the constructor
//in future spec, class properties can be set outside of the constructor

class Validator {
    message = ' is invalid';
    setMessage => field => `${field} ${this.message}`;

    setInvalidMessage (...fields)
     {
         return fields.map(this.setMessage);
     }
}
```

## Promises

```Javascript
//promise is an object that takes asynchronous action and calls one of two methods based on response : then and catch
//promise takes two arguments : resolve() and reject()
function getUserPref()
{
    const pref = new Promise((resolve, reject) =>
    {
        resolve ({
            theme :'dark'
        });
    });
    return pref;
}

getUserPref()
    .then(pref=> {
        doSomething(pref)
        //returns somethign
    })
    .then(something=>doOtherThing(something))
    .cath(error=> {console.error(error)});
//returns 'dark'

```

## Async/Await

```Javascript

//async/await functions help in code cleanup in place of chaining multiple promises
async function getArtistByPreference()
{
    const {theme} = await getUserPreferences();
    const {album} = await getMusic(theme);
    const {artist} = await getArtist(album);
    return artist;
}

getArtistByPreference()
    .then(artist =>{console.log(artist)})
    .catch(e=>{console.error(e)});

```

## fetch

```Javascript
//fetch isn't part of the javascript spec, it is defined by the WHATWG..
//node uses node-fetch
fetch(uri)
    .then(data=>{return data.json()})
    .then(post=>{console.log(post.title)});

//response has a field called `ok` to check for 200-299 range
fetch(uri)
    .then(data=> {
    if(!data.ok)
        throw Error(data.status)
    }
    return data.json();)
    .then(post=> console.log(post.title))
    .catch(e=> console.error(e));

//for post you pass in special options as second argument
const options = {
    method : 'POST',
    headers: {
        'Content-Type' : 'application/json',
    },
    body: JSON.stringify(data)
};
fetch(uri , options).then ...
```

## LocalStorage

```Javascript
//local storage is a tiny database that exists only in your browser
//isn't accesible by javascript in your browser
//save data onto local storage like this :

function saveBreed(breed)
{
    localStorage.setItem('breed' , breed);
}
function getSavedBreed()
{
    return localStorage.getItem('breed');
}
function removeBreed()
{
    return localStorage.removeItem('breed');
}

function savePref(filters)
{
    const filterString = JSON.stringify([...filters]);
    localStorage.setItem('filters',filterString);
}

function retrievePref()
{
    const pref = JSON.parse(localStorage.getItem('filters'))
    return new Map(pref);
}
localStorage.clear();
//value must always be a string
//sessionoStorage does not persist after tab is closed
```

## Babel

```Javascript

npm i --save-dev babel-cli babel-preset-env babel-preset-react

//create .babelrc at root
{presets : ["env" , "react"]}
//babel converts the code but doesn't include a module loader which handles the compiled imports and exports
```

## Webpack

```Javascript
//webpack is a project that can handle everything from combining JS to processing CSS or SASS.
npm i --save-dev babel-loader webpack

const path = require('path');
module.exports = {
    entry : './src/index.js',
    module: {
        loaders : [
            {
                test : /\.js?/,
                use: 'babel-loader',
            },
        ],
    },
    output:
    {
        filename : 'build/bundle.js',
        paths: path.resolve(__dirname)
    }
    };

//inside scripts
"build" : "webpack"
```
