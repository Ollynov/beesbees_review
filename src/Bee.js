var Grub = function() {
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';

};

Grub.prototype.eat = () => {
  return 'we eatin bruh!';
};


var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
  console.log('this is ', this);

};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

Bee.prototype.showColor = function() {
  console.log('inside the function ', this.color);
};

var wittleBee = new Bee();
console.log('ok so wittleBee.color is ', wittleBee.color);

