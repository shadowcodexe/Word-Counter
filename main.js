const input = document.querySelector('#input')

const words = document.querySelector('#words')
words.innerHTML = 'Words: 0'

const numbers = document.querySelector('#numbers')
numbers.innerHTML = 'Numbers: 0'

const characters = document.querySelector('#characters')
characters.innerHTML = 'Characters: 0'

input.addEventListener('input',() => {
    // characters
    let charactersString = input.value.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()^\d]/g,"").replace(/\s{1,}/g,"")
    characters.innerHTML = `Characters: ${charactersString.length}`

    // words
    let wordsInput = input.value.split(' ')
    let wordsArr = []

    wordsInput.forEach((el) => {
        if (el.length >= 1 && el.length !== '') {
            wordsArr.push('+1')
        }
    })

    // numbers
    words.innerHTML = `Words: ${wordsArr.length}`
    numbers.innerHTML = `Numbers: ${input.value.replace(/[^\d]/g,'').length}`
})
