//1 Consecutive call
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep() {
//     console.log(this.step);
//   }
// };

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();

// 2 Chain calls
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
    return this;
  },
};

ladder.up().up().down().showStep();
