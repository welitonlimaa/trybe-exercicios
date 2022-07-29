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