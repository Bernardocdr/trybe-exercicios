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




let listaDias = document.getElementById("days");

function createDaysOfTheMonth(monthDaysList){
  
  for (i=0; i < monthDaysList.length; i+=1) {

    var currentDay = document.createElement("li");
    
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

  


  
  var buttonsContainer = document.querySelector(".buttons-container");
  
  function createButton(buttonName){
    var button = document.createElement("btn");
    button.id = "btn-holiday"
    button.innerText = buttonName;
    buttonsContainer.appendChild(button);

  }

  createButton("Feriados");


  button.addEventListener("click", function mudarCorFeriados(){
    console.log("oi")
    for (let i = 0; i < listaDias.length; i += 1 )
    if (backgroundColor = rgb(238,238,238)){
      backgroundColor = blue;}
    else {
      backgroundColor = rgb(238,238,238);
    }
  })