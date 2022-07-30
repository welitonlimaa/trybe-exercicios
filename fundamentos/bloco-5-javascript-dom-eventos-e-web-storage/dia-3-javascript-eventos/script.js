function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

//Ex 1
function createDays() {
    let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const DaysId = document.querySelector('#days');
    
    for (let i = 0; i < decemberDaysList.length; i += 1) {
      let daysNumbers = decemberDaysList[i];
      let daysList = document.createElement('li');
      daysList.className="days";
      daysList.innerHTML = daysNumbers;

      if(decemberDaysList[i]=== 24 || decemberDaysList[i]=== 25 || decemberDaysList[i]=== 31){
        daysList.className=daysList.className + " holiday";
      }
      if(decemberDaysList[i]=== 4 || decemberDaysList[i]=== 11 || decemberDaysList[i]=== 18 || decemberDaysList[i]=== 25){
        daysList.className=daysList.className + " friday";
      }

      DaysId.appendChild(daysList);
    };
}
createDays();

//Ex 2
function createButton(nameButton) {
      const localButton = document.querySelector('.buttons-container');
      const buttonItem = document.createElement('button');
      buttonItem.id="btn-holiday";
      buttonItem.innerHTML = nameButton;
  
      localButton.appendChild(buttonItem);
  };
createButton('Feriados');

//Ex 3
function onClick() {
  let holidayElements = document.getElementsByClassName("holiday");
  for(holidays of holidayElements){
    if(holidays.style.backgroundColor === 'yellow'){
        holidays.style="background-color: rgb(238,238,238)";
    }else{
        holidays.style="background-color: yellow";
    }
  }
}

window.onload = function() {
 let holidayBtn= document.getElementById("btn-holiday");
 holidayBtn.addEventListener('click',onClick);


}

//Ex 4
function createButton2(nameButton) {
    const localButton = document.querySelector('.buttons-container');
    const buttonItem = document.createElement('button');
    buttonItem.id="btn-friday";
    buttonItem.innerHTML = nameButton;

    localButton.appendChild(buttonItem);
};
createButton2('Sexta-feira');