    document.querySelector('.dropdown__button').addEventListener('click', function(){
    document.querySelector('.dropdown__list').classList.toggle('dropdown__list--visible');
    
});

document.querySelectorAll('.dropdown__list-item').forEach(function(listItem){
    listItem.addEventListener('click', function(e){
        e.stopPropagation();
        document.querySelector('.dropdown__button').innerText = this.innerText;
        document.querySelector('.dropdown__button').focus();
        document.querySelector('.dropdown__input-hidden').value = this.dataset.value;
        document.querySelector('.dropdown__list').classList.remove('dropdown__list--visible');
    })
})

document.addEventListener('click', function(e){
    if (e.target !== document.querySelector('.dropdown__button')){
        document.querySelector('.dropdown__list').classList.remove('dropdown__list--visible');
    }
})

