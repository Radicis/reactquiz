/**
 * Class to encapsulate player functionality
 */
class Player {
	constructor ({name, id, isOwner}) {
		this.name = 'UNKNOWN'; // default
		this.id = id;
		this.score = 0;
		this.isActive = false;
		this.isOwner = isOwner || false;
		console.log(`Player ${name} created.`);
	}

	setName (name) {
		this.name = name;
		this.isActive = true;
	}

	setScore (score) {
		this.score = score;
	}

	setIsOwner () {
		this.isOwner = true;
	}
}

module.exports = Player;
