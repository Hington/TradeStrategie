
window.onload =()=>{
    const pash = window.location.origin
const geted = localStorage.getItem('email')

if(geted!=""||geted!=null){
    window.location.replace(`${pash}/page_strategie500.html`)

}else{
    window.location.replace(`${pash}/index.html`)
 
}

}


