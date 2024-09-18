/*Instructions
Something is wrong with our Warrior class. The strike method does not work correctly. The following shows an example of this code being used:

var ninja = new Warrior('Ninja');
var samurai = new Warrior('Samurai');

samurai.strike(ninja, 3);
// ninja.health should == 70
Can you figure out what is wrong?
 */

//Solution
class Warrior {
	constructor(name) {
		this.name = name;
		this.health = 100;
	}

	strike(enemy, damage) {
		enemy.health = enemy.health - (damage * 10);
	}
}
const samurai = new Warrior('Samurai');
const ninja = new Warrior('Ninja');
samurai.strike(ninja, 2);