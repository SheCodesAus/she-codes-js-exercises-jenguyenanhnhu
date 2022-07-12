
function add() {
    // Get DOM element
    let count1 = document.getElementById('number')

    // Add 7 to current value
    let newValue = parseInt(count1.innerHTML) + 7

    // Re-assign value to DOM element
    count1.innerHTML = newValue

    console.log("WE LIVE", typeof 'number', newValue)

}

function minusfive() {
    let count2 = document.getElementById('number')
    let newValue2 = parseInt(count2.innerHTML) - 5
    count2.innerHTML = newValue2
}

function multiply() {
    let count3 = document.getElementById('number')
    let newValue3 = parseInt(count3.innerHTML) * 10
    count3.innerHTML = newValue3
}

function fractionalise() {
    let count4 = document.getElementById('number')
    let newValue4 = parseInt(count4.innerHTML) / 2
    count4.innerHTML = newValue4
}

function random() {
    let count5 = document.getElementById('number')
    let add_number = document.getElementById('t').value
    let newValue5 = parseInt(count5.innerHTML) + parseInt(add_number)
    count5.innerHTML = newValue5
}