let opcion1points= 20;
let opcion2points= 20;

let opcion1= prompt("Introduce tu primera opcion ")
let opcion2= prompt("Introduce tu segunda opcion")

document.write ("tu opcion uno es : "+ opcion1 +" y tu opcion dos es: " + opcion2)

console.log (opcion1points);
console.log(opcion2points);

while (opcion1points> 0 && opcion2points > 0){

      let winningOpcion1 = Math.ceil(Math.random()*10)
      console.log("winningOpcion1 " + winningOpcion1)
      
      let winningOpcion2 = Math.ceil(Math.random()*10)
      console.log("winningOpcion2 " + winningOpcion2)
      
      if (winningOpcion1 > winningOpcion2){
           opcion1points -= winningOpcion2
      }else{
           opcion2points -= winningOpcion1
      }
 
      }
      
       function opcionGanadora (){
            if (opcion1points > 0){
                  confirm("La Ganadora es... " + opcion1)
            }else{
                  confirm("la ganadora es..." + opcion2)
            }
          }

       
      
     