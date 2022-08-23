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


document.getElementById('button-calculate').addEventListener('click',function(){
    const playerCost = getInputElementValueById('player-cost');
    const allPlayerExpense = playerCost*(arr.length);
    
    const playerExpenses = setTextElementValue('player-expense',allPlayerExpense);
 
})

document.getElementById('total-calculate').addEventListener('click',function(){
    const managerField = getInputElementValueById('manager-field');
    const coachField = getInputElementValueById('coach-field');
    const allPlayerExpensetext = document.getElementById('player-expense');
    const allPlayerExpenseString = allPlayerExpensetext.innerText;
    const allPlayerExpense = parseInt(allPlayerExpenseString);
    

    // total expenses 
    const totalCalculation = managerField + coachField + allPlayerExpense;
    const total = setTextElementValue('total-expense',totalCalculation);


})

