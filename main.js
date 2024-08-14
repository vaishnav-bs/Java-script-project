
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

  let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";


const insertX = ["Willy the Goblin","Big Daddy","Father Christmas"];
const insertY = ["the soup kitchen","Disneyland","the White House"];
const insertZ = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];



 randomize.addEventListener('click', function () {
  
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem= randomValueFromArray(insertZ);

  let name = "Bob";
 
  if(customName.value !== "")
  {
    name = customName.value;
  }
  storyText = `It was 94 fahrenheit outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. ${name} saw the whole thing, but was not surprised — ${xItem} weighs 300 pounds, and it was a hot day.`;
  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    storyText = storyText.replaceAll('94 fahrenheit', temperature);
    storyText = storyText.replaceAll('300 pounds', weight);
  }
  story.style.visibility = "visible";
  story.innerText = storyText
 })




  
