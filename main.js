let rating_value = 1;
const buttons = document.getElementsByClassName('buttons')[0];
const span_to_fill = document.getElementsByClassName('rating-score')[0];
const rating_section = document.getElementById('rating');
const thanks_section = document.getElementById('thanks');

function removeClassActive(){
    for (let i = 0; i < buttons.childElementCount; i++) {
        const element = buttons.children.item(i);
        element.classList.remove('active');
    }
}

function getValue(){
    console.log(event.target)
    rating_value = event.target.innerText;
    removeClassActive();
    event.target.classList.add('active');
}

function postValue(){
    if(confirm('Are you sure about your choice ?')){
        span_to_fill.innerText = rating_value;
        rating_section.classList.add('switch');
        thanks_section.classList.add('switch');
    }
    else{
        return;
    }
}