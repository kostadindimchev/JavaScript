class SmartHike {
  constructor(username) {
    this.username = username;
    this.goals = {};
    this.listOfHikes = [];
    this.resources = 100;
  }

  addGoal(peak, altitude) {
    if (this.goals[peak]) {
      return `${peak} has already been added to your goals`;
    } else {
      this.goals[peak] = Number(altitude);
      return `You have successfully added a new goal - ${peak}`;
    }
  }

  hike(peak, time, difficultyLevel) {
    if (!this.goals[peak]) {
      throw new Error(`${peak} is not in your current goals`);
    }

    if (this.resources === 0) {
      throw new Error("You don't have enough resources to start the hike");
    } else if (this.resources < Number(time) * 10) {
      return "You don't have enough resources to complete the hike";
    } else {
      this.resources -= Number(time) * 10;
      this.listOfHikes.push({ peak, time, difficultyLevel });

      return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }
  }

  rest(time) {
    this.resources += Number(time) * 10;
    if (this.resources >= 100) {
      this.resources = 100;
      return `Your resources are fully recharged. Time for hiking!`;
    } else {
      return `You have rested for ${time} hours and gained ${
        time * 10
      }% resources`;
    }
  }

  showRecord(criteria) {
    if (criteria === "hard" || criteria === "easy") {
      let filtered = this.listOfHikes.filter((hike) => hike.difficultyLevel == criteria);

      if (filtered.length === 0) {
        return `${this.username} has not done any ${criteria} hiking yet`
      }
      if (filtered.length > 1) {
        this.listOfHikes.sort((a, b) => a[time] - b[time]);
        return `${this.username}'s best ${criteria} hike is ${filtered[0].peak} peak, for ${filtered[0].time} hours`;
      } else if (filtered.length === 1) {
        return `${this.username}'s best ${criteria} hike is ${filtered[0].peak} peak, for ${filtered[0].time} hours`;
      } else {
        return `${this.username} has not done any ${criteria} hiking yet`;
      }
    } else {
      if (this.listOfHikes.length === 0) {
        return `${this.username} has not done any hiking yet`;
      } else {
        let result = "All hiking records:";
        for (const el of this.listOfHikes) {
          result += `\n${this.username} hiked ${el.peak} for ${el.time} hours`;
        }
        return result;
      }
    }
  }
}

const user = new SmartHike("Vili");
user.addGoal("Musala", 2925);
user.hike("Musala", 8, "hard");
console.log(user.showRecord("easy"));
user.addGoal("Vihren", 2914);
user.hike("Vihren", 4, "hard");
console.log(user.showRecord("hard"));
user.addGoal("Rui", 1706);
user.hike("Rui", 3, "easy");
console.log(user.showRecord("all"));
