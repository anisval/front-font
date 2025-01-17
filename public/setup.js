const texts = [
  "The quick brown fox jumps over the lazy dog",
  "Pack my box with five dozen liquor jugs",
  "How vexingly quick daft zebras jump",
];

const title = "FRONT FONT STYLEGUIDE";

const actualLetter = (l) => {
  if (l === " ") return "space";
  if (l === "-") return "dash";
  return l;
};

title
  .toUpperCase()
  .split("")
  .forEach((letter) => {
    const letterElement = document.createElement(
      `letter-${actualLetter(letter)}`,
    );
    letterElement.classList.add("letter-element");
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("h2-wrapper");
    containerDiv.appendChild(letterElement);
    document.getElementById("textContainer-h2-title").appendChild(containerDiv);
  });

texts.forEach((text, index) => {
  text
    .toUpperCase()
    .split("")
    .forEach((letter) => {
      const letterElement = document.createElement(
        `letter-${actualLetter(letter)}`,
      );
      letterElement.classList.add("letter-element");
      const containerDiv = document.createElement("div");
      containerDiv.classList.add("h2-wrapper");
      containerDiv.appendChild(letterElement);
      document
        .getElementById(`textContainer-h2-${index}`)
        .appendChild(containerDiv);
    });

  text
    .toUpperCase()
    .split("")
    .forEach((letter) => {
      const letterElement = document.createElement(
        `letter-${actualLetter(letter)}`,
      );
      letterElement.classList.add("letter-element");
      const containerDiv = document.createElement("div");
      containerDiv.classList.add("h3-wrapper");
      containerDiv.appendChild(letterElement);
      document
        .getElementById(`textContainer-h3-${index}`)
        .appendChild(containerDiv);
    });

  text
    .toUpperCase()
    .split("")
    .forEach((letter) => {
      const letterElement = document.createElement(
        `letter-${actualLetter(letter)}`,
      );
      letterElement.classList.add("letter-element");
      const containerDiv = document.createElement("div");
      containerDiv.classList.add("h4-wrapper");
      containerDiv.appendChild(letterElement);
      document
        .getElementById(`textContainer-h4-${index}`)
        .appendChild(containerDiv);
    });

  text
    .toUpperCase()
    .split("")
    .forEach((letter) => {
      const letterElement = document.createElement(
        `letter-${actualLetter(letter)}`,
      );
      letterElement.classList.add("letter-element");
      const containerDiv = document.createElement("div");
      containerDiv.classList.add("h5-wrapper");
      containerDiv.appendChild(letterElement);
      document
        .getElementById(`textContainer-h5-${index}`)
        .appendChild(containerDiv);
    });

  text
    .toUpperCase()
    .split("")
    .forEach((letter) => {
      const letterElement = document.createElement(
        `letter-${actualLetter(letter)}`,
      );
      letterElement.classList.add("letter-element");
      const containerDiv = document.createElement("div");
      containerDiv.classList.add("h6-wrapper");
      containerDiv.appendChild(letterElement);
      document
        .getElementById(`textContainer-h6-${index}`)
        .appendChild(containerDiv);
    });
});
