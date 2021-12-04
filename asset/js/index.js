let btn = document.querySelector('#btn')
const pash = window.location.origin

btn.addEventListener('click', ()=>{
    let input_email = document.querySelector('#email')

       if (input_email.value == '') {
        alert('entrez un email valide')
    } else {
        localStorage.setItem('email',JSON.stringify(input_email.value))
        setTimeout(()=>{
            location.href=`${pash}/verification_du_mail.html` 
        },1000)
    }
    
})



