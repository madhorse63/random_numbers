var text = document.querySelector('.numbers');
var createBtn = document.querySelector('#create_numbers');
var deleteBtn = document.querySelector('#delete_numbers');

function getRandomNums(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}
createBtn.addEventListener('click', function(){    
    for(i = 0; i < 7; i++){
        var newNum = getRandomNums(1, 50);
        text.innerHTML += newNum + ' ';
    }
});

deleteBtn.addEventListener('click', function(){
    text.innerText = 'Ваши случайные числа: ';
})