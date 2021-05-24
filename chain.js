class Chain{
 constructor(ba,bb){
var option ={
bodyA:ba,
bodyB:bb,
stiffness:0.04,
length:10    
}     
this.chain=Constraint.create(option);
World.add(world,this.chain);
 }   
 display(){
     var pos=this.chain.bodyA.position;
     var pos1=this.chain.bodyB.position;
strokeWeight(4);
line (pos.x,pos.y,pos1.x,pos1.y);
 }
}