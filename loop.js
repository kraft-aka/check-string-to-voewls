// function checks string to a vowel chars

function checkTheLetters(word) {
  // array of vowels if letters e and u are present in string , they will be doubled
  const vowels = ["a", "e", "i", "o", "u"];

  // placeholder array to push vowel chars
  let resultArray = [];

  // loops through string and vowel array to check each char in string against vowel array
  for (let i = 0; i < word.length; i++) {
    if (word[i] === "e" || word[i] === "u") {
      resultArray.push(word[i]);
    }
    //console.log(i)
    for (let j = 0; j < vowels.length; j++) {
      if (word[i] === vowels[j]) {
        resultArray.push(vowels[j]);
      }
    }
  }

  // transform array to a string with capital letters
  const resultString = resultArray.join("").toUpperCase();

  console.log(resultString);
  return resultString;
}

checkTheLetters("hello");
