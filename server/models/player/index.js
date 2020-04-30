const UUID = require('uuid').v4;

/**
 * Class to encapsulate player functionality
 */
const letters = '56789ABCDEF';

class Player {
  constructor({ name, id }) {
    this.name = name;
    this.id = UUID();
    this.score = 0;
    this.isActive = false;
    this.isReady = false;
    this.isOwner = false;
    this.socketId = id;
    this.initials = this.getInitials(name);
    this.color = '#';
    for (let i = 0; i < 6; i++) {
      this.color += letters[Math.floor(Math.random() * 11)];
    }
    this.progress = 0;
    console.log(`Player ${name} created with ID: ${this.id}`);
  }

  getInitials (name) {
    const nameArr = name.split(' ');
    if (nameArr.length > 1) {
      return nameArr[0][0].toUpperCase() + nameArr[1][0].toUpperCase()
    }
    const letters = name.split('');
    return letters[0].toUpperCase() + letters[1].toUpperCase();
  }

  setActiveSocketId(id) {
    this.socketId = id;
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
