import {c} from './canvas.js'

export class Rectangle{
  constructor(x, y, width, height, color, speed, gravity, jump){
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
    this.speed = speed
    this.gravity = gravity
    this.jump = jump
  }
  update() {
    this.y += this.gravity
  }
  draw() {
    c.fillStyle = this.color
    c.beginPath()
    c.fillRect(this.x, this.y, this.width, this.height)
    c.fill()
    c.closePath()
  }
  add_platformer_movement(){
    if(keyboard.up_key && is_ground){
      this.y -= this.jump
    }
    if(keyboard.left_key){
      this.x -= this.speed
    }
    if(keyboard.right_key){
      this.x += this.speed
    }
  }
  add_Top_Down_Movement(){
    if(keyboard.up_key){
      this.y -= this.jump
    }
    if(keyboard.left_key){
      this.x -= this.speed
    }
    if(keyboard.right_key){
      this.x += this.speed
    }
    if(keyboard.down_key){
      this.y += this.speed
    }
  }
}
