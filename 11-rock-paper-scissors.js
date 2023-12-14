/*local storage out*/
const score =  JSON.parse(localStorage.getItem('score'));

updateScoreElement(); 

   let computerMove ='';

   let isAutoPlaying = false;
   let intervalId;

   function autoplay(){
    if(!isAutoPlaying){
      intervalId = setInterval(function () {
        const playerMove = pickCompuerMove();
        playGame(playerMove);
      },1000);
      isAutoPlaying = true;
    } else {
      clearInterval(intervalId);
      isAutoPlaying = false;
    }
   }


   function playGame(playerMove){

        pickCompuerMove();    
        
          let result = '';

          if(playerMove === 'scissors'){

                  if(computerMove === 'rock'){
                  result ='You lose';
                }
                else if(computerMove === 'paper'){
                  result ='You win';
                }
                else if(computerMove === 'scisser'){
                  result = 'Tie';
                }
          }

          else if(playerMove === 'paper'){

            if(computerMove === 'rock'){
                  result ='You win';
                }
                else if(computerMove === 'paper'){
                  result ='Tie';
                }
                else if(computerMove === 'scisser'){
                  result = 'You lose';
                }

          }

          else if(playerMove === 'rock'){

            if(computerMove === 'rock'){
                  result ='Tie';
                }
                else if(computerMove === 'paper'){
                  result ='You lose';
                }
                else if(computerMove === 'scisser'){
                  result = 'You win';
                }
          }

          if(result === 'You win'){
            score.wins++;
          }
          else if(result === 'You lose'){
            score.losses++;
          }
          else if(result === 'Tie'){
            score.ties++;
          }

         /*local storage only supports string*/
          localStorage.setItem('score',JSON.stringify(score));

     updateScoreElement();     
     
     
     document.querySelector('.js-result').innerHTML = result ;

     document.querySelector('.js-moves').innerHTML
      =  `You
       <img src="images/${playermove}-emoji.png" class="move-icon">
       <img src="images/${computerMove}-emoji.png" class="move-icon">
       Computer`;
          
        }


  function updateScoreElement(){

          document.querySelector('.js-score')
            .innerHTML = `Wins=${score.wins},Losses=${score.losses},Ties=${score.ties}`;


        }
         
   

  function pickCompuerMove(){

    const randomNumber = Math.random() ;

  

        if (randomNumber >= 0 && randomNumber< 1/3){
          computerMove ='rock';
        }
        else if (randomNumber >= 1/3 && randomNumber < 2/3){
          computerMove ='paper';
        }
        else if (randomNumber >= 2/3 && randomNumber < 1){
          computerMove ='scisser';
        }

        console.log(computerMove);

       
   
  }