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

## map Iterator

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
