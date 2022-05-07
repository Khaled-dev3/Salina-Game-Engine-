import {c} from './canvas.js'

export class Circluarobject{
  constructor(x, y, raduis, speed, gravity, color, distance, jump){
    this.x = x
    this.y = y
    this.raduis = raduis
    this.speed = speed
    this.gravity = gravity
    this.color = color
    this.distance = distance
    this.jump = jump
  }
  update() {
    this.y += this.gravity
  }
  draw(){
    c.fillStyle = this.color
    c.beginPath()
    c.arc(this.x, this.y, this.raduis, 0, Math.PI * 2)
    c.fill()
    c.closePath()
  }
  add_platformer_movement(){
    if(keyboard.up_key){
      this.y -= this.jump
    }
    if(keyboard.left_key){
      this.x -= this.speed
    }
    if(keyboard.right_key){
      this.x += this.speed
      console.log('right')
    }
  }
  add_Top_Down_Movement(){
    if(keyboard.up_key){
      this.y -= this.speed
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
