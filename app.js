 let people = document.querySelector("#people");
 let bill = document.querySelector("#bill");
 let tipAmountDisplay = document.querySelector("#tipAmount");
 let totalAmountDisplay = document.querySelector("#totalAmount");
 let errMsg= document.querySelector("#errMsg");
 let custom = document.querySelector("#custom");
 
 let percent = 1;
 let tipAmount=0;
 let tipAmountPerson=0;
 let clicked ;

 //Checking if a tip percentage  has already beeen selected
 //if it has, then unselect it
 function checkClicked() {
     if(custom){
         custom.value=""
     }
     if(typeof clicked!=='undefined'){
        clicked.removeAttribute('class', 'target')
        clicked.setAttribute('class','badge dark')
     }
 }

 //adds EventListener on all percentage options
 document.querySelectorAll('.badge').forEach(item => {
    item.addEventListener('click', event => {
      checkClicked();
      clicked=item;
      percent= item.value;
      if(bill.value!==" " && people.value!==" "){
        calculate()
    }
      item.setAttribute('class','target')
    })
  }) 

  //adding eventListener on our custom percentage
  //and checking if different option has been selected previously
  //and unselects it
custom.addEventListener('keyup', event =>{
    percent=custom.value;
    if(typeof clicked!=='undefined'){
        clicked.removeAttribute('class', 'target')
        clicked.setAttribute('class','badge dark')
     }
     if(bill.value!==" " && people.value!==" "){
        calculate()
    }
    console.log(percent);
})

//checking if number of people is zero
//prints error msg if it is
function checkZero() {
    if(people.value<=0){
        errMsg.textContent = "Can't be zero";
        people.setAttribute('class' , 'red');
        
    }else {
        errMsg.textContent=" ";
        people.removeAttribute('class', 'red')
    }
}

//event listener on our number of people input to calculate
people.addEventListener('keyup',calculate);

//function calculating the tip and the bill per person
 function calculate(){
    checkZero()
    tipAmount=(bill.value*(percent/100)).toFixed(2);
    tipAmountPerson = (tipAmount/people.value);
    tipAmountDisplay.textContent=`$${tipAmountPerson.toFixed(2)}`;
    totalAmountDisplay.textContent=((bill.value/people.value)+tipAmountPerson).toFixed(2) ;
 }

 //reset button
 document.querySelector(".button").addEventListener('click',event => {
     bill.value="";
     people.value="";
     tipAmount=0;
     tipAmountPerson=0;
     tipAmountDisplay.textContent="$0.00"
     totalAmountDisplay.textContent="$0.00"
     custom.value="";
     if(clicked) {
     clicked.removeAttribute('class', 'target')
     clicked.setAttribute('class','badge dark')
     }
 })

