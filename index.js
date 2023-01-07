const addForm = document.querySelector('#addForm');
const listItems = document.querySelector('#list-items');
const searchItem = document.querySelector('#searchItem');

//Form Submit Event
addForm.addEventListener('submit', addItem);

//Delete event
listItems.addEventListener('click', deleteItem);

//Filter event
searchItem.addEventListener('keyup', filterItem);

//addItem function
function addItem(e) {
    e.preventDefault();

    //Get input value
    const input = document.querySelector('#input');

    //Create new <li>
    const li = document.createElement('li');
    //Add class to the <li>
    li.className = 'list-group-item';
    //Add textNode with input's vale to <li>
    li.appendChild(document.createTextNode(input.value));

    //Create delete <button>
    const deleteButton = document.createElement('button');
    //Add classes to delete <button>
    deleteButton.classList = 'btn badge bg-danger float-end';
    //Add textNode to delete <button>
    deleteButton.appendChild(document.createTextNode("X"));

    li.appendChild(deleteButton);

    //Add <li> to the <ul>>
    listItems.appendChild(li);
}

//deleteItem function
function deleteItem(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm('Delete the item?')) {
            const li = e.target.parentElement; //parentElement of the clicked button which is the <li>
            listItems.removeChild(li);
        }
    }
}

//filterItem function
function filterItem(e) {
    //Convert text input to lowercase
    let text = e.target.value.toLowerCase();

    //Get <li> inside of <ul>
    let items = listItems.getElementsByTagName('li');

    //Convert HTMLCollection into an array
    let itemsArray = Array.from(items);
    
    //Loop through the itemsArray
    itemsArray.forEach((item) => {
        //Get the text inside of each <li>
        let itemTextContent = item.firstChild.textContent;

        //Convert itemContent to lowercase so that we can compare it with the input in the search box
        if(itemTextContent.toLowerCase().indexOf(text) != -1) {
            //If itemTextContent contains text, we show it
            item.style.display = 'block';
        }
        else { //we hide it
            item.style.display = 'none';
        }
    });
}