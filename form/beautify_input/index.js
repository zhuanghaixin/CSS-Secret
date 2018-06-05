keyword.oninput = function(e){
    console.log(1);
    if(keyword.value){
        suggestion.classList.add('active')
    }else{
        suggestion.classList.remove('active')
    }
}