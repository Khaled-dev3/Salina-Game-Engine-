// keyboard
export const keyboard = {
  left_key: false,
  right_key: false,
  up_key: false,
  down_key: false
}
document.addEventListener('keydown', function(e){
  if(e.keyCode == 37){
    keyboard.left_key = true
    console.log('left')
  }
  if(e.keyCode == 39) {
    keyboard.right_key = true
    console.log('right')
  }
  if(e.keyCode == 38){
    keyboard.up_key = true
  }
  if(e.keyCode == 40){
    keyboard.down_key = true
  }
})
document.addEventListener('keyup', function(){
  keyboard.left_key = false
  keyboard.up_key = false
  keyboard.right_key = false
  keyboard.down_key = false
})