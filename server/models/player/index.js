/**
 * Class to encapsulate player functionality
 */
class Player {
	constructor ({name, id}) {
		this.name = name;
		this.id = id;
		this.score = 0;
		console.log(`Player ${name} created!`);
	}

	setName (name) {
		this.name = name;
	}
}

module.exports = Player;
