
import { wrongHTML } from './wrong';
import cheesecake from './assets/frozen-cheesecake-slice.jpg';


export function partTwo() 
{
 const correctedColor = document.querySelector<HTMLElement>('.logo-text');
  if (correctedColor) {
    correctedColor.style.color = "#384241";
  }
  
  const correctAlignment = document.querySelector<HTMLElement>('header');
    if (correctAlignment) {
        correctAlignment.style.justifyContent = 'start';
        correctAlignment.style.borderBottom = '1px solid lightgray';
    }

    const correctName = wrongHTML.querySelector<HTMLHeadingElement>('#recipe-name');
    if (correctName) {
        correctName.textContent = 'Frozen Cheescake';
    }
    const correctClock = wrongHTML.querySelector('.time-container > *:first-child');
    if (correctClock) {
        correctClock.classList.add('material-symbols-outlined');
    }
    const correctTime = wrongHTML.querySelector('.time');
    if (correctTime) {
        correctTime.textContent = '60+ min';
    }
  const correctImage = wrongHTML.querySelector<HTMLImageElement>('img');
  if (correctImage) {
    correctImage.src = cheesecake;
  }
  const correctBackgroundColor = wrongHTML.querySelector<HTMLElement>('.ingredients-container');
    if (correctBackgroundColor) {
        correctBackgroundColor.style.backgroundColor = '#f9f9f9';
    }
    const correctText= wrongHTML.querySelector<HTMLElement>('.ingredients-list-bottom');
    const removeText=correctText?.querySelector('p');
    if (removeText) {
        removeText.remove();
    }
    if (correctText) {
        correctText.innerHTML = `
            <li>15st digistivetex</li>  
            <li>Lite smör</li>
        `;
    }
    const correctIngreadients = wrongHTML.querySelectorAll<HTMLUListElement>('.ingredients-list-paste');
    correctIngreadients.forEach((ul) => {
        const liElements = ul.querySelectorAll('li');
        if (liElements) {
            liElements[2].remove();
            liElements[3].textContent="3tsk vaniljsocker";
        }
   
      const newEl= ["3dl vispgrädde", "400g naturell philadelphiaost"];
        newEl.forEach((ingredient) => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            ul.appendChild(li);
        });
    });
    const removeClass = wrongHTML.querySelector('.instructions');
    if (removeClass) {
        removeClass.classList.remove('shadow');
    }
    const correctInstructions = wrongHTML.querySelectorAll<HTMLElement>('.instructions-list li');
    if(correctInstructions[8] && correctInstructions[1])
    {
       
        correctInstructions[8].textContent = 'Ställ in i frysen över natten.';
        correctInstructions[1].textContent = 'Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.';

    }
    

}