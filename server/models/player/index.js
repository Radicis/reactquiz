/**
 * Class to encapsulate player functionality
 */
class Player {
	constructor ({name, id, isOwner, quizId}) {
		this.name = 'UNKNOWN'; // default
		this.id = id;
		this.score = 0;
		this.quizId = quizId;
		this.isActive = false;
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
}

module.exports = Player;
