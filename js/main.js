//this app will take user input and display it on the page

    /*

    var theButton = document.querySelector('.btn');
    
    var theField = document.querySelector('.inputfields');

    function showMe() {
        console.log('yo');
    }
    
      function doIt() {
      // grab the input field id and put it in a variable 
        var grab = document.querySelector('#exampleInputName2').value;
          console.log(grab);
    }

    //theField.onkeydown = doIt;

    var addli = document.createElement('li');

    var list = document.querySelector('ul');
    
    */

    // append it to the empty <ul>

    // display on the body

    var theButton = document.querySelector('.btn');

    //grab the ul from the html
    
    var list = document.querySelector('ul');

    theButton.addEventListener('click', addItem, false);

    function addItem() {
    
    // grab the input value and put it in a variable 
    var theItem = document.querySelector('#inputItem').value;
 
    //create new li element to append to ul
    var addLi = document.createElement('li');
 
    //add input value to li
    addLi.textContent = theItem;
 
    //add new li to list (ul)
    list.appendChild(addLi);
    console.log('clicked the button');
    
}