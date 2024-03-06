let fiveData;
let todayData;

async function getApi(event){
    event.preventDefault()
    const cityName = document.querySelector('#cityName').value
    const weather = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=a4d20a728b63e7469a525e2ba3e247e1`



    let answer = await fetch(weather)
    let data = await answer.json()

    console.log(data)

    let lat = data[0].lat
    let lon = data[0].lon

    console.log(lat)
    console.log(lon)

    let today = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=a4d20a728b63e7469a525e2ba3e247e1`
    let forecast = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=a4d20a728b63e7469a525e2ba3e247e1`

    let todays = await fetch(today)
    let one = await todays.json()
    console.log (one)
    todayData = one

    let future = await fetch(forecast)
    let five = await future.json()
    console.log(five)
    fiveData = five
}

const search = document.querySelector('#button')
search.addEventListener('click', getApi)

document.addEventListener('click', function(event){
    idName = event.target.id

})
function weatherCard() {

    for (i = 3; i < fiveData.list.length; i+=8){

    

    let weatherCards = document.createElement('h3')
    weatherCards.setAttribute('class',)

    //generates the word cost I put this here so the word "cost" sits about the actuall number
    //(there is probably a better way to do this)
    let costText = document.createElement('h4')
    costText.textContent = `Cost:`

    //generates the cost in credits
    let starshipCost = document.createElement('h4')
    starshipCost.textContent = `${searchedData.results[i].cost_in_credits} Credits`
    }
}


// function weatherCard() {
//     let taskCard = $('<div>')
//     taskCard.addClass('card project-card draggable my-3')
//     taskCard.attr('data-project-id' , task.id)
    
    
   
    
//     const title = $('<h3>')
//     title.addClass('card-header h4')
//     title.text(task.title)
   
//     const body = $('<div>')
//     body.addClass = $('card-body')
    
//     const dueDate = $('<p>')
//     dueDate.addClass('card-text')
//     dueDate.text(task.dueDate)
  
    
//     const desc =$('<p>')
//     desc.addClass('card-text')
//     desc.text(task.desc)

    
//   const cardDeleteBtn = $('<button>')
//   cardDeleteBtn.addClass('btn btn-danger delete')
//   cardDeleteBtn.text('Delete')
//   cardDeleteBtn.attr('data-project-id' , task.id)








// `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=a4d20a728b63e7469a525e2ba3e247e1`

