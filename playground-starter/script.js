
function showName() {
    let inputField = document.getElementById('name-text')
    console.log("The Input Field is: ", inputField.value) 
    console.dir(inputField)
    alert("Hello" + inputField.value)
}
