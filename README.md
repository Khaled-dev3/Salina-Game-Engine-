# What is Salina
A JavaScript game framework for drawing shapes/sprites and audio and text etc...
# Things to add 
A tutorial 
Collision detection 
Button Creation 
Removing text after a certain amount of time
# How to use 
Copy the engine.js,index.html,style.css files to your project and create an index.js file and paste this code in 
``` 
import * as Salina from './engine.js'
 



//type your code here 




function animate(){

 Salina.c.clearRect(0, 0, canvas.width, canvas.height)
  requestAnimationFrame(animate)

}

animate()
```
