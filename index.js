// Write your solution here!
const cats = [
    'Milo', 'Otis', 'Garfield'
]
function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}

function destructivelyRemoveLastCat(){
    cats.pop()
}
function prependCat(name){
    const copyOfCats = [name, ...cats];
    return copyOfCats
}

function appendCat(name){
    const copyOfCats2 = [...cats, name ];
    return copyOfCats2
}
function removeFirstCat(){
    const copyOfCats3 = cats.slice(1)
    return copyOfCats3
}

function removeLastCat(){
 const copyOfCats7 = cats.slice(0,2)
 return copyOfCats7
}