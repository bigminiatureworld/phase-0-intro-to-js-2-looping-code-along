const guests = ["Guadalupe", "Ollie", "Aki"];
const message = "surprise";

function writeCards(names, surprise) {
  console.log(names, surprise);
   const newArray = [] 
   
    for (let i = 0; i < names.length; i++) {
        const newString = `Thank you, ${names[i]}, for the wonderful ${surprise} gift!`;
        newArray.push(newString);
    }
    return newArray;
}
//writeCards(guests, message);

function countDown(number) {
  let i = number;
  while (i >= 0) {
      
    console.log(i);
    i--;
  }
  return number;

}
countDown(40);