const input = document.getElementById('input');
const btnSubmit = document.getElementById('btn-submit');

btnSubmit.addEventListener('click', (e) => {
    if(input.value.length <= 30) {
        addItem(input.value);
    } else {
        swal("List tittle can't have more than 30 characters");
    }
    input.value = '';
})

const addItem = (input) => {
    //item,tittle and actions generate
    const listItem = document.createElement('div');
    const listTittle = document.createElement('div');
    const p = document.createElement('p');

    const listActions = document.createElement('div');
    const checkSquareIcon = document.createElement('i');
    const trashIcon = document.createElement('i');


    //apply className to elements
    listItem.className = 'list__item';
    p.innerHTML = input;

    checkSquareIcon.className = 'fas fa-check-square';
    trashIcon.className = 'fas fa-trash';

    checkSquareIcon.addEventListener('click', () => {
        checkSquareIcon.style.color = 'green';
    })

    trashIcon.addEventListener('click', () => {
        listItem.remove();
    })

    //append child to parents element
    listItem.appendChild(listTittle).appendChild(p);
    listItem.appendChild(listActions);
    listActions.appendChild(checkSquareIcon);
    listActions.appendChild(trashIcon);
    document.getElementById('main').appendChild(listItem);

}