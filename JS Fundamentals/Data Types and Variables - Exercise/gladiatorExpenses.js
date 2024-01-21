function gladiatorExpenses(
  losts,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let expenses = 0;
  let armorRepairNeeded = 0;

  for (let lostCounter = 1; lostCounter <= losts; lostCounter++) {
    if (lostCounter % 2 === 0) {
      expenses += helmetPrice;
    }
    if (lostCounter % 3 === 0) {
      expenses += swordPrice;
    }
    if (lostCounter % 2 === 0 && lostCounter % 3 === 0) {
      expenses += shieldPrice;
      armorRepairNeeded++;
    }
    if ((armorRepairNeeded === 2)) {
      expenses += armorPrice;
      armorRepairNeeded = 0;
    }
  }

  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.5, 21.5, 40, 200);
