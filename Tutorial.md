# This a tutorial of how to use Kegfw
# 1: Shape drawing
# 1-1: Circles
if you want to draw a circle first of all your going to create the circle object by typing
```
let Circle = new Kegfw.Circluarobject(x,y, radius,speed, gravity,"color", distance, jump)
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
let Rectangle = new Kegfw.Rectangularobject(x,y,width,height,"color", speed, gravity, jump)
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
Kegfw.drawtext("text",x,y, "font", "color")
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
and to apply it to a text type
```
Kegfw.drawtext("text", x, y, "the font you added", "color")
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
# 4: Random colors
if you want to set a random color lets say to a circle you would type 
```
const Circle = new Kegfw.Circluarobject(60,40, 30,10, 16, Kegfw.RandomColor(), undefined, 20)
```
this applys to squares
# 5: Collision
# 5-1: Collision between Circles
to check collision between two circles you'd type in the animate function this
```
Kegfw.Check_circle_collision(the first circle name, the second circle name)
```
and when a collision happens a variable named "Kegfw.collison.Circular_Collision" will become true
and from this you can make anything you want to happen when a collison happens let's say i want to make the second circle disappear
```
if(Kegfw.collision.Circular_Collision){
   Circle2.raduis = 0
}
```
# 5-2: Collision between Rectangles
to check collision between two rectangles you'd type in the animate function this
```
Kegfw.Check_Rectangular_Collision(the first rectangle name, the second rectangle name)
```
and when a collision happens a variable named "Kegfw.collison.Rectangular_Collision" will become true
and from this you can make anything you want to happen when a collison happens let's say i want to make the second Rectangle disappear
```
if(Kegfw.collison.Rectangular_Collision){
   rectangle2.width = 0
   rectangle2.height = 0
}
```
# 6: Adding a timer
if you want to add a timer to your game you'd type in the animate function
```
Kegfw.timer()
kegfw.drawtimer()
```
# 7: Deleting text
Disclamer "you're text needs to be in a variable berfore drawing it to delete it"
to deleted text at any time just type 
```
Kegfw.deletetext(text variable)
```
this tutorial will change over time as more and more updates come
