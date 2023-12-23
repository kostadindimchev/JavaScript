function birthdayParty(arg1) {
    let rent = Number(arg1);
    
    let cake = 0.2 * rent;
    let drinks = cake - (0.45 * cake);
    let animator = (1 / 3) * rent;

    let budget = rent + cake + drinks + animator
    console.log(budget);

}
birthdayParty(["3720"])