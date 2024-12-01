function bonusTime(salary, bonus) {
  return bonus === true ? `£${salary * 10}` : `£${salary}`;
}

console.log(bonusTime(52400, false));
