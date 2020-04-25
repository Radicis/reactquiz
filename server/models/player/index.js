/**
 * Class to encapsulate player functionality
 */
class Player {
  constructor({ name, id }) {
    this.name = 'UNKNOWN'; // default
    this.id = id;
    this.score = 0;
    this.isActive = false;
    this.isReady = false;
    this.progress = 0;
    console.log(`Player ${name} created with ID: ${id}`);
  }

  setName(name) {
    this.name = name;
    this.isActive = true;
  }

  setIsOwner () {
    this.isOwner = true;
  }

  incrementProgress () {
    this.progress++;
  }

  getProgress () {
    return this.progress;
  }

  resetProgress () {
    this.progress = 0;
  }

  setReady() {
    this.isReady = true;
  }

  setScore(score) {
    this.score = score;
  }
}

module.exports = Player;
