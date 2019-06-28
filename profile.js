window.addEventListener('input',setup)

function createFormData(){
    const formData = new FormData()
    const name = document.querySelector("input[name='username'").Value
    formData.append('name',name)
    const avatar = document.querySelector("input[name='avatar'").value
    formData.append('avatar', avatar)
    return formData
}

function saveProfile(event){
    event.preventDefault()
    const formData = createFormData()
    sendFormData('http://localhost:9000/profile',formData)
        .then(console.log)
        .catch(console.error)

}

function sendFormData(url,formData){
    fetch(url,{
        method: 'PUT',
        body: formData
    })
}

function setup(){
    const event = document.getElement('form')
    saveProfile(event)

}