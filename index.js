// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    const domloaded = document.getElementById("text");
   if (domloaded != " "){
    //console.log(domloaded);

   domloaded.textContent ="This is really cool!";
}
    else{
      /*  console.log(
        "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
      );*/
      domloaded.textContent ="shit - This console.log() fires when index.js loads - before DOMContentLoaded is triggered";}
  });
  
  