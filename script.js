console.log('Welcome to the Number Guessing Game!')
console.log('I am thinking of a number between 1 and 100.')
console.log('And you need to guess correct number')
let choises = prompt('Please select the difficulty level: Easy (10 chances), Medium (5 chances), Hard (3 chances)')
let num = Math.floor(Math.random()*100)+1
// console.log(num)
if (choises == 'Easy' || choises == 'easy'){
    for(let i=0; i<=9; i++){
        let ans = prompt('Enter your choice:')
        if(ans>num){
            console.log('Incorrect! The number is less than ' + ans)
        }else if (ans < num){
            console.log('Incorrect! The number is greater than ' + ans)
        }else if(ans==num){
            console.log('Congratulations! You guessed the correct number in '+i+' attempts')
            break
        }if (i == 9){
            console.log('You chances is 0')
        }
    }
}
if (choises == 'Medium' || choises == 'medium'){
    for(let i=0; i<=4; i++){
        let ans = prompt('Enter your choice:')
        if(ans>num){
            console.log('Incorrect! The number is less than ' + ans)
        }else if (ans < num){
            console.log('Incorrect! The number is greater than ' + ans)
        }else if(ans==num){
            console.log('Congratulations! You guessed the correct number in '+i+' attempts')
            break
        }if (i == 4){
            console.log('You chances is 0')
        }
    }
}
if (choises == 'Hard' || choises == 'hard'){
    for(let i=0; i<=2; i++){
        let ans = prompt('Enter your choice:')
        if(ans>num){
            console.log('Incorrect! The number is less than ' + ans)
        }else if (ans < num){
            console.log('Incorrect! The number is greater than ' + ans)
        }else if(ans==num){
            console.log('Congratulations! You guessed the correct number in '+i+' attempts')
            break
        }if (i == 2){
            console.log('You chances is 0')
        }
    }
}