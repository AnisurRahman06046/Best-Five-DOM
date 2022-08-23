const buttons = document.getElementsByClassName('playerBtn');
const arr = []
for (let button of buttons){
    button.addEventListener('click',function(event){
        const element = event.target.parentNode.children[0].innerText;
        
        const playername = {
            element:element,
        }
        
        const listContainer = document.getElementById('ordered-list');
        const li = document.createElement('li');
        li.innerText = element;
        arr.push(playername)
        if(arr.length>5){
            alert('can not add more than five');
            return;
        }
        
        listContainer.appendChild(li);
        
       
        
        
    })
}

