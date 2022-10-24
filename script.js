let container = document.getElementById("container");

for (let i = 1; i <= 100; i++) {
  
  if((i%3 == 0) && (i%5 == 0)){
    console.log ("FizzBuzz");
    container.innerHTML += 'fizzbuzz';
  } else if((i%3 == 0)) {
    console.log ("Fizz");
    container.innerHTML += 'fizz';
  } else if ((i%5 == 0)) {
    console.log ("Buzz");
    container.innerHTML += 'buzz';
  } else {
    console.log (i); 
    container.innerHTML += '<div class="box">' + i + '</div>';
}
}