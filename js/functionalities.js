const buttons = document.getElementsByClassName('playerBtn');
let arr = [];
for (let button of buttons){
    button.addEventListener('click',function(event){
        event.target.disabled = true;
        const element = event.target.parentNode.children[0].innerText;
        const playername = {
            element:element,
        };
        
        const listContainer = document.getElementById('ordered-list');
        const li = document.createElement('li');
        li.innerText = element;
        arr.push(playername);
        if(arr.length>5){
            alert('can not add more than 5');
            return;
        }

        listContainer.appendChild(li);
    
    })
}


document.getElementById('button-calculate').addEventListener('click',function(){
    const playerCost = getInputElementValueById('player-cost');
    const allPlayerExpense = playerCost*5;
    
    const playerExpenses = setTextElementValue('player-expense',allPlayerExpense);
 
})

document.getElementById('total-calculate').addEventListener('click',function(){
    const managerField = getInputElementValueById('manager-field');
    const coachField = getInputElementValueById('coach-field');
    
    const allPlayerExpense = getTextElementValueById('player-expense')
    

    // total expenses 
    const totalCalculation = managerField + coachField + allPlayerExpense;
    const total = setTextElementValue('total-expense',totalCalculation);


})

