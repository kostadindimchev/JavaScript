function passwordGenerator(array) {
  let [first, second, third] = array;
  let vowels = ["a", "e", "i", "o", "u"];
  let concat = first + second;
  concat = concat.split("");
  let password = "";
  let arrThird = third.split("");

  for (let i = 0; i < concat.length; i++) {
    if (vowels.includes(concat[i])) {
      password += arrThird.shift().toLocaleUpperCase();

      if (arrThird.length <= 0) {
        arrThird = third.split("");
      }
    } else {
      password += concat[i];
    }
  }

  console.log(`Your generated password is ${password.split("").reverse().join("")}`);
}

passwordGenerator(["ilovepizza", "ihatevegetables", "orange"]);
passwordGenerator(["easymoneyeazylife", "atleasttencharacters", "absolute"]);
passwordGenerator([
  "areyousureaboutthisone",
  "notquitebutitrustyou",
  "disturbed",
]);
