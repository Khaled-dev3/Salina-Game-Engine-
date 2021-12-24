# This a tutorial of how to use Kegfw
# 1: Shape drawing
# 1-1: Circles
if you want to draw a circle first of all your going to create the circle object by typing
```
let Circle = new Circluarobject(x,y, radius,speed, gravity,"color", distance, jump)
```
you can name the Circle object whatever you want
after you set the x,y, radius,speed, gravity,"color",distance,jump values to whatever you want
you need to go to the animate function and type inside it
```
function animate(){

  c.clearRect(0, 0, canvas.width, canvas.height)
  requestAnimationFrame(animate)
  Circle.draw()
}

animate()
```
after this open the project in your browser and you will see a circle has been drawn with the exact same values you typed

And if you want to add gravity to it just type in the animate function
```
function animate(){

  c.clearRect(0, 0, canvas.width, canvas.height)
  requestAnimationFrame(animate)
  Circle.draw()
  Circle.update()
}

animate()
```
# 1-2: Rectangles 
if you want to draw a Rectangles you're going to creat the Rectangle object by typing
```
let Rectangle = new Rectangularobject(x,y,width,height,"color", speed, gravity, jump)
```
you can name the Rectangle object whatever you want after you set the x,y, width, height,"color", speed, gravity, jump values to whatever you want 
you need to go to the animate function and type
```
function animate(){

  c.clearRect(0, 0, canvas.width, canvas.height)
  requestAnimationFrame(animate)
  Rectangle.draw()
}

animate()
```
after this open the project in your browser and you will see a Rectangle has been drawn with the exact same values you typed

and if you want to add gravity to it you need to type in the animate function
```
function animate(){

  c.clearRect(0, 0, canvas.width, canvas.height)
  requestAnimationFrame(animate)
  Rectangle.draw()
  Rectangle.update()
}

animate()
```
# 2: Text
# 2-1: Displaying Text
if you want to display text in your project just type in/outside of the animate function
```
drawtext("text",x,y, "font", "color")
```
# 2-2: Fonts
First of all you need to download the font you like from any website

to declare fonts you need to go to the Style.css file and type inside it 
```
@font-face{
  font-family: "name it here"
  src:url("the path to it")
}
```
# 3: Movement
# 3-1: Platformer Movement
if you want to add Platformer Movement for let's say a square "this applys to circles too"
you type in the animate function
```
function animate(){

  c.clearRect(0, 0, canvas.width, canvas.height)
  requestAnimationFrame(animate)
  square.draw()
  square.update()
  square.add_Platformer_Movement()
} 
animate()
```
# 3-2: Top Down Movement

if you want to add Top Down Movement for let's say a square "this applys to circles too"
you type in the animate function
```
function animate(){

  c.clearRect(0, 0, canvas.width, canvas.height)
  requestAnimationFrame(animate)
  square.draw()
  square.update()
  square.add_Top_Down_Movement()
}
animate()
```
this tutorial will change over time when more and more updates come