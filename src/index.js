const foodImageLinks = [
    "./assets/food/cheeseburger.jpeg",
    "./assets/food/maple-bacon-burger.jpeg",
    "./assets/food/mushroom-burger.webp",
    "./assets/food/avocado-bun-burger.jpeg",
    "./assets/food/ramen-burger.jpeg",
    "./assets/food/french-fries.jpeg",
    "./assets/food/burrito.webp",
    "./assets/food/taco.jpeg",
    "./assets/food/hot-dog.jpeg",
    "./assets/food/onion-rings.jpeg"
]

function sum(num1, num2){
    return num1 + num2
}

function getSumString(num1, num2){
    return `${num1} + ${num2} = ${sum(num1, num2)}`
}

function addSumStringToPage(num1, num2){
    let h1 = document.createElement('h1')
    h1.textContent = getSumString(num1, num2)
    document.body.append(h1)
}

function getRandomNumber(){
    return Math.ceil(Math.random() * 100)
}

// for(let counter = 1; counter <= 100; counter++){
//     addSumStringToPage(getRandomNumber(), getRandomNumber())
// }

function addFoodImageToMenu(foodLink){
    const imgElement = document.createElement('img')
    imgElement.src = foodLink
    restaurantMenu.appendChild(imgElement)
}

const restaurantMenu = document.getElementById('restaurant-menu')

for(let index = 0; index < foodImageLinks.length; index++){
    addFoodImageToMenu(foodImageLinks[index])
}

// function sum(num1, num2){
//     return num1 + num2
// }

function average(sum, num1, num2){
    return sum(num1, num2) / 2
}

const avg = average((num1, num2) => {
    return num1 + num2
}, 4, 5)
console.log(`The average is ${avg}`)