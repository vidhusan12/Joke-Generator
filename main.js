// Arrays of Jokes
const jokes = [
  "Why don't skeletons fight each other? Because they don't have the guts!",
  "I told my wife she was drawing her eyebrows too high. She looked surprised!",
  "Why don’t scientists trust atoms? Because they make up everything!",
  "Parallel lines have so much in common. It’s a shame they’ll never meet.",
  "Why did the scarecrow win an award? Because he was outstanding in his field!"
];

let jokeTrack = [];
let shuffledJokes = [];

// Function to shuffle jokes
const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Function to get random jokes
const getRandomJokes = () => {
  // Initialize shuffledJokes if it is empty
  if (shuffledJokes.length === 0) {
    shuffledJokes = shuffleArray([...jokes]); // Shuffle a fresh copy of jokes
  }

  // If all jokes have been used, reset and reshuffle
  if (jokeTrack.length === jokes.length) {
    jokeTrack = []; // Clear jokeTrack
    shuffledJokes = shuffleArray([...jokes]); // Reshuffle a fresh copy of jokes
  }

  const randomJoke = shuffledJokes.pop(); // Pop the last joke from shuffledJokes
  jokeTrack.push(randomJoke); // Add it to jokeTrack

  console.log(randomJoke); // Output the random joke
  return randomJoke;
}

// Call the function multiple times to test
getRandomJokes(); // Test function call

