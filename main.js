function emailVerification(){
    const imput = document.getElementById('email').value;
    const re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    const valid = re.test(imput);
    if(!valid){
        document.querySelector(".email__input").classList.add("error");
    }else{
        document.querySelector(".email__input").classList.remove("error");
        console.log('fgfh')
    }
}