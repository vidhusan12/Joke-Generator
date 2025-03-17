// Arrays of Jokes
const jokes = [
  "Why don't skeletons fight each other? Because they don't have the guts!",
  "I told my wife she was drawing her eyebrows too high. She looked surprised!",
  "Why don’t scientists trust atoms? Because they make up everything!",
  "Parallel lines have so much in common. It’s a shame they’ll never meet.",
  "Why did the scarecrow win an award? Because he was outstanding in his field!"
];

// function that shuffle jokes
const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    //swap Elements
    [arr[i], arr[j]] = [arr[j], arr[i]];

  }
  return arr;
}


console.log(shuffleArray(jokes));
//console.log(jokes);
