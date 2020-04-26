/**
 * Class to encapsulate player functionality
 */

const letters = '56789ABCDEF';

class Player {
  constructor({ name, id }) {
    this.name = 'UNKNOWN'; // default
    this.id = id;
    this.score = 0;
    this.isActive = false;
    this.isReady = false;
    this.color = '#';
    for (let i = 0; i < 6; i++) {
      this.color += letters[Math.floor(Math.random() * 11)];
    }
    console.log(this.color);
    this.progress = 0;
    console.log(`Player ${name} created with ID: ${id}`);
  }

  getInitials (name) {
    const nameArr = name.split(' ');
    if (nameArr.length > 1) {
      return nameArr[0][0].toUpperCase() + nameArr[1][0].toUpperCase()
    }
    const letters = name.split('');
    return letters[0].toUpperCase() + letters[1].toUpperCase();
  }

  setName(name) {
    this.name = name;
    this.initials = this.getInitials(name);
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
