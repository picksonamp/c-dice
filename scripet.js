////////////////////////////// Функция по генерации числа//////////////////////////

function getRandomInt(max) {

  return Math.floor(Math.random() * max + 1);

}

const max = 6;

////////////////////////////// Функция подгрузки картинок и таймеры ////////////////

function resetFunction() {

     let randomVisualizer = setInterval( () => {
             
                let ramdon = getRandomInt(max);

                let ramdonBlack = getRandomInt(max);

                switch (ramdon) {
                case 1: document.getElementById('dice').src = `${ramdon}.png`; break;
                case 2: document.getElementById('dice').src = `${ramdon}.png`; break;
                case 3: document.getElementById('dice').src = `${ramdon}.png`; break;
                case 4: document.getElementById('dice').src = `${ramdon}.png`; break;
                case 5: document.getElementById('dice').src = `${ramdon}.png`; break;
                case 6: document.getElementById('dice').src = `${ramdon}.png`; break;
                }

                switch (ramdon) {
                case 1: document.getElementById('blackDice').src = `${ramdonBlack}b.png`; break;
                case 2: document.getElementById('blackDice').src = `${ramdonBlack}b.png`; break;
                case 3: document.getElementById('blackDice').src = `${ramdonBlack}b.png`; break;
                case 4: document.getElementById('blackDice').src = `${ramdonBlack}b.png`; break;
                case 5: document.getElementById('blackDice').src = `${ramdonBlack}b.png`; break;
                case 6: document.getElementById('blackDice').src = `${ramdonBlack}b.png`; break;
                }

      } , 100);

     setTimeout( () => {clearInterval(randomVisualizer)}, 1500);

     }

//////////////////////////////// onClick для смены значения костей ///////////////////////

resetButton.onclick = resetFunction;

dice.onclick = resetFunction;

blackDice.onclick = resetFunction;
     

//////////////////////////////// режим выбора количество костей ///////////////////////

document.getElementById('blackDice').style.display = "none";

 one.onclick = () => {
   document.getElementById('blackDice').style.display = "none";
 }

 two.onclick = () => {
   document.getElementById('blackDice').style.display = "block";
 }
