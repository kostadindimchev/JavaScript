function changeBureau(input) {
   let bitcoins = Number(input[0]);
   let yuan = Number(input[1]);
   let commission = Number(input[2]);

   let btcToLeva = bitcoins * 1168
   let dollars = yuan * 0.15
   let dollarToLeva = dollars * 1.76
   let euro = (btcToLeva + dollarToLeva) / 1.95

   commission = (commission / 100) * euro

   console.log((euro - commission).toFixed(2));

}
changeBureau(["1",
"5",
"5"])
