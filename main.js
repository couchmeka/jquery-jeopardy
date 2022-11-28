let hundred = document.querySelectorAll('#oneHundred div');
let twoHundred = document.querySelectorAll('#twoHundred div');
let fourHundred = document.querySelectorAll('#fourHundred div');
let sixHundred= document.querySelectorAll('#sixHundred div');
let eightHundred = document.querySelectorAll('#eightHundred div');
let question = document.querySelector('#question');
let form = document.querySelector('form');
let input = document.querySelector('#answer');
let score = 0;


console.log(hundred)


//hundred Row
hundred.forEach(item => {

    item.addEventListener('click', () => {

        console.log(`clicked at item ${item}`)
        item.style.background = "lightgrey"

        let readJeopardyData = async () => {

            let rawJeopardyData = await fetch ('jeopardy.json');
            let data = await rawJeopardyData.json();
            console.log(data);
        
            let groupData = _.groupBy(data, 'value');
        
            
            let newQuestion = groupData.$100[Math.ceil(Math.random() * 2000)].question
            let newAnswer = groupData.$100[Math.ceil(Math.random() * 2000)].answer
            let category = groupData.$100[Math.ceil(Math.random() * 2000)].category
            console.log(newQuestion)
            console.log(newAnswer)

        let p = document.querySelector('p')
        p.innerHTML = `Category || ${category}|| Question: ${newQuestion}`
        

        form.addEventListener('submit', (event) => {

            event.preventDefault();
            let newScore = document.querySelector("#score")
            newScore.style.color = "white"

            if(input.value == newAnswer){

               console.log('correct')
               p.innerHTML =`What is ${newAnswer} is correct`
               score += 100;
               
            } else {

                console.log('wrong')
                p.innerHTML = `wrong the answer is what is ${newAnswer}`
                score = score - 100;
                
            }
           
            newScore.innerHTML = score;
          })
        
        }
        
        readJeopardyData();

        


    })


   

})





//two hundred Row

twoHundred.forEach(item => {

    item.addEventListener('click', () => {

        console.log(`clicked at item ${item}`)
        item.style.background = "lightgrey"
        let readJeopardyData = async () => {

            let rawJeopardyData = await fetch ('jeopardy.json');
            let data = await rawJeopardyData.json();
            console.log(data);
        
            let groupData = _.groupBy(data, 'value');
            
            let newQuestion = groupData.$200[Math.ceil(Math.random() * 2000)].question
            let newAnswer = groupData.$200[Math.ceil(Math.random() * 2000)].answer
            let category = groupData.$200[Math.ceil(Math.random() * 2000)].category
            console.log(newQuestion)
            console.log(newAnswer)

            let p = document.querySelector('p')
            p.innerHTML = `Category || ${category}|| Question: ${newQuestion}`
            
    
            form.addEventListener('submit', (event) => {
    
                event.preventDefault();
                let newScore = document.querySelector("#score")
                newScore.style.color = "white"
    
                if(input.value == newAnswer){
    
                   console.log('correct')
                   p.innerHTML =`What is ${newAnswer} is correct`
                   score += 100;
                   
                } else {
    
                    console.log('wrong')
                    p.innerHTML = `wrong the answer is what is ${newAnswer}`
                    score = score - 100;
                    
                }
               
                newScore.innerHTML = score;
              })


        }
        
        readJeopardyData();

    })

})





//four hundred

fourHundred.forEach(item => {

    item.addEventListener('click', () => {

        console.log(`clicked at item ${item}`)
        item.style.background = "lightgrey"
        let readJeopardyData = async () => {

            let rawJeopardyData = await fetch ('jeopardy.json');
            let data = await rawJeopardyData.json();
            console.log(data);
        
            let groupData = _.groupBy(data, 'value');
              
            let newQuestion = groupData.$400[Math.ceil(Math.random() * 2000)].question
            let newAnswer = groupData.$400[Math.ceil(Math.random() * 2000)].answer
            let category = groupData.$400[Math.ceil(Math.random() * 2000)].category
            console.log(newQuestion)
            console.log(newAnswer)
            let p = document.querySelector('p')
            p.innerHTML = `Category || ${category}|| Question: ${newQuestion}`
            
    
            form.addEventListener('submit', (event) => {
    
                event.preventDefault();
                let newScore = document.querySelector("#score")
                newScore.style.color = "white"
    
                if(input.value == newAnswer){
    
                   console.log('correct')
                   p.innerHTML =`What is ${newAnswer} is correct`
                   score += 100;
                   
                } else {
    
                    console.log('wrong')
                    p.innerHTML = `wrong the answer is what is ${newAnswer}`
                    score = score - 100;
                    
                }
               
                newScore.innerHTML = score;
              })
        }
        
        readJeopardyData();
    })

})




//sixhundred



sixHundred.forEach(item => {

    item.addEventListener('click', () => {

        console.log(`clicked at item ${item}`)
        item.style.background = "lightgrey"
        let readJeopardyData = async () => {

            let rawJeopardyData = await fetch ('jeopardy.json');
            let data = await rawJeopardyData.json();
            console.log(data);
        
            let groupData = _.groupBy(data, 'value');
         
            let newQuestion = groupData.$600[Math.ceil(Math.random() * 2000)].question
            let newAnswer = groupData.$600[Math.ceil(Math.random() * 2000)].answer
            let category = groupData.$600[Math.ceil(Math.random() * 2000)].category
            console.log(newQuestion)
            console.log(newAnswer)

            let p = document.querySelector('p')
            p.innerHTML = `Category || ${category}|| Question: ${newQuestion}`
            
    
            form.addEventListener('submit', (event) => {
    
                event.preventDefault();
                let newScore = document.querySelector("#score")
                newScore.style.color = "white"
    
                if(input.value == newAnswer){
    
                   console.log('correct')
                   p.innerHTML =`What is ${newAnswer} is correct`
                   score += 100;
                   
                } else {
    
                    console.log('wrong')
                    p.innerHTML = `wrong the answer is what is ${newAnswer}`
                    score = score - 100;
                    
                }
               
                newScore.innerHTML = score;
              })
        }
        
        readJeopardyData();
    })

})




//eighthundred



eightHundred.forEach(item => {

    item.addEventListener('click', () => {

        console.log(`clicked at item ${item}`)
        item.style.background = "lightgrey"
        let readJeopardyData = async () => {

            let rawJeopardyData = await fetch ('jeopardy.json');
            let data = await rawJeopardyData.json();
            console.log(data);
        
            let groupData = _.groupBy(data, 'value');
        
            let newQuestion = groupData.$800[Math.ceil(Math.random() * 2000)].question
            let newAnswer = groupData.$800[Math.ceil(Math.random() * 2000)].answer
            let category = groupData.$800[Math.ceil(Math.random() * 2000)].category
            console.log(newQuestion)
            console.log(newAnswer)

            let p = document.querySelector('p')
            p.innerHTML = `Category || ${category}|| Question: ${newQuestion}`
            
    
            form.addEventListener('submit', (event) => {
    
                event.preventDefault();
                let newScore = document.querySelector("#score")
                newScore.style.color = "white"
    
                if(input.value == newAnswer){
    
                   console.log('correct')
                   p.innerHTML =`What is ${newAnswer} is correct`
                   score += 100;
                   
                } else {
    
                    console.log('wrong')
                    p.innerHTML = `wrong the answer is what is ${newAnswer}`
                    score = score - 100;
                    
                }
               
                newScore.innerHTML = score;
              })
        
        }
        
        readJeopardyData();
    })

})















let readJeopardyData = async () => {

    let rawJeopardyData = await fetch ('jeopardy.json');
    let data = await rawJeopardyData.json();
    console.log(data);

    let groupData = _.groupBy(data, 'value');

    console.log(groupData);


}

readJeopardyData();



