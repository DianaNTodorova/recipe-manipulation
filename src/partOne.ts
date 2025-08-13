import { correctHTML } from './correct';

export function partOne() {

  const titleName = correctHTML.querySelector<HTMLHeadingElement>('#recipe-name');
  if (titleName) {
    console.log('Title element:', titleName);
    console.log('Tag name:', titleName.tagName);
  }


  const descriptionEl = correctHTML.querySelector('.description') as HTMLElement | null;
  if (descriptionEl) {
    console.log('Font size:', descriptionEl.style.fontSize);
  }


  const imgEl = correctHTML.querySelector<HTMLImageElement>('img');
  if (imgEl) {
    console.log('Alt text:', imgEl.alt);
    const imgD = {
      width: imgEl.width,
      height: imgEl.height,
      src: imgEl.src
    };
    console.log('Image info:', imgD);
  }


  const ingredientsList = correctHTML.querySelectorAll<HTMLUListElement>('.ingredients-list-paste');
  ingredientsList.forEach((ul) => {
    const liElements = ul.querySelectorAll('li');
    console.log(`Total ingredients: ${liElements.length}`);
    console.log('Example ingredient:', liElements[3]?.textContent);
  });

 
  const instructionItems = correctHTML.querySelectorAll<HTMLElement>('.instructions-list li');
  const instructionsText = Array.from(instructionItems).map((el, index) => ({
    order: index + 1,
    text: el.textContent?.trim() || '',
  }));
  console.log('Instructions:', instructionsText);
}
