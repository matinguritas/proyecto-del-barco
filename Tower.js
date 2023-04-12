class Tower{
    //diceño
constructor(x, y, width, height){
var options = {
isStatic: true

}
this.image = loadImage("assets/tower.png")
this.width = width
this.heigth = height
this.body = Bodies.rectangle(x, y, this.width, this.height, options);

}
display(){
    var pos = this.body.positon

    push()
    translate(pos.x, pos.y)
    imageMode(CENTER)
    image(this.image, 0, 0, this.width, this.heigth);
    pop()
}

}