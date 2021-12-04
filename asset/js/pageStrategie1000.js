

window.onload =()=>{
    const pash = window.location.origin
const geted = localStorage.getItem('email')

if(geted!=""||geted!=null){
    window.location.assign(`${pash}/page_strategie500.html`)

}else{
    window.location.assign(`${pash}/index.html`)
 
}

}