function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      battleLog: []
    }
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + '%' }
    },
    playerBarStyles() {
      return { width: this.playerHealth + '%' }
    },
    toggleSpecialAttack() {
      return this.currentRound % 3 !== 0 || this.currentRound === 0;
    }
  },
  watch: {
    monsterHealth(val) {
      if (val > 100) {
        this.monsterHealth = 100;
      }
      if (val <= 0) {
        this.monsterHealth = 0;
        if (this.playerHealth <= 0) {
          this.winner = 'draw';
        } else {
          this.winnder = 'player';
        }
      }
    },
    playerHealth(val) {
      if (val > 100) {
        this.playerHealth = 100;
      }
      if (val <= 0) {
        this.playerHealth = 0;
        if (this.monsterHealth <= 0) {
          this.winner = 'draw';
        } else {
          this.winner = 'monster';
        }
      }
    }
  },
  methods: {
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.battleLog = [];
    },
    attackMonster() {
      this.currentRound += 1;
      const attackVal = getRandomValue(5, 12);
      this.monsterHealth -= attackVal;

      this.addLogMessage('player', 'attack', attackVal)

      this.attackPlayer();
    },
    attackPlayer() {
      this.currentRound += 1;
      const attackVal = getRandomValue(8, 15);
      this.playerHealth -= attackVal;

      this.addLogMessage('monster', 'attack', attackVal)
    },
    specialAttackMonster() {
      this.currentRound += 1;
      const attackVal = getRandomValue(10, 25);
      this.monsterHealth -= attackVal;

      this.addLogMessage('player', 'attack', attackVal);

      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound += 1;
      const healValue = getRandomValue(8, 20);
      this.playerHealth += healValue;

      this.addLogMessage('player', 'heals', healValue);
      this.attackPlayer();
    },
    surrender() {
      this.playerHealth = 0;
    },
    addLogMessage(who, what, value) {
      this.battleLog.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value
      })
    }
  },
})

app.mount('#game')