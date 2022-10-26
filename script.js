const body = document.querySelector('.gridWrapper')
const btnAdd = document.querySelector('.btnAdd')
const darkbg = document.querySelector('.darkbg')
const addPatient = document.querySelector('.addPatient')

btnAdd.addEventListener('click', () => {
    body.classList.toggle('overlay')
    addPatient.classList.toggle('show')
    darkbg.classList.toggle('hidden')
    console.log('buxexa');
})