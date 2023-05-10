console.log("Script running");

// Helper function - gets a random integer up to (but not including) the maximum
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

// Capture the three major foci of user interaction in variables.
const submitButton = document.querySelector("#submit");
const queryField = document.querySelector("#search");
const imageHolderDiv = document.querySelector("#imageholder");

// Log the elements to confirm that the querySelectors worked.
console.log(submitButton);
console.log(queryField);
console.log(imageHolderDiv);

submitButton.addEventListener("click", async (e) => {

  // API keys are very private. never reveal them.
  const myKey = prompt('paste your API key');
  // NOTE: pay attention to attribution (and other API policies)

  const topic = queryField.value;
  console.log({ topic });


  // Send the topic to the API server
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${myKey}&q=${topic}&limit=25&offset=0&rating=g&lang=en`;
  console.log(apiURL);

  const response = await fetch(apiURL);
  const dataObj = await response.json();
  
  const imgURL = dataObj.data[6].images.downsized.url;
  // console.log(imgURL);
  
  const imgHTML = `<img src="${imgURL}"/>`;

  imageHolderDiv.innerHTML = imgHTML + imageHolderDiv.innerHTML;
});


