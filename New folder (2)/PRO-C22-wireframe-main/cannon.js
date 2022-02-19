class Cannon {
  constructor (x,y,w,h,a) {
    
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.a=a;
    this.cannon_image = loadImage("assets/canon.png");
    this.cannonBase= loadImage("assets/cannonBase.png");
  

  }
show(){
push();
translate(this.x,this.y);
rotate(this.a);
imageMode(CENTER);
//rect(this.x,this.y,this.w,this.h);
image(this.cannon_image,0,0,this.w,this.h);
pop();
image(this.cannonBase,50,20,200,200);

//rect(70,200,50,60);
noFill();

}


}