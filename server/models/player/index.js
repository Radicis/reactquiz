/**
 * Class to encapsulate player functionality
 */
class Player {
	constructor ({name, id, isOwner}) {
		this.name = 'UNKNOWN'; // default
		this.id = id;
		this.score = 0;
		this.isOwner = isOwner || false;
		console.log(`Player ${name} created.`);
	}

	setName (name) {
		this.name = name;
	}

	setScore (score) {
		this.score = score;
	}
}

module.exports = Player;
