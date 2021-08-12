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

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth(monthDaysList){
  
  for (i=0; i < monthDaysList.length; i+=1) {

    var currentDay = document.createElement("li");
    let listaDias = document.getElementById("days");
    
    currentDay.className = "day";
    currentDay.innerText = monthDaysList[i];

    if (currentDay.innerText == 24 ||currentDay.innerText == 25 ||currentDay.innerText == 31){
      currentDay.classList.add("holiday");
    }

    if (currentDay.innerText == 4 ||currentDay.innerText == 11 ||currentDay.innerText == 18||currentDay.innerText == 25){
      currentDay.classList.add("friday");
    }

    listaDias.appendChild(currentDay); 
  }
}

  createDaysOfTheMonth(dezDaysList);

  
  
  
  
  function createButton(buttonName){
    let button = document.createElement("btn");
    button.id = "btn-holiday"
    button.innerText = buttonName;
    buttonsContainer = document.querySelector(".buttons-container");
    buttonsContainer.appendChild(button);

  }

  createButton("Feriados");


  