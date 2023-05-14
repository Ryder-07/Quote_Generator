fetch("./quotes.json")
  .then((response) => response.json())
  .then((data) => {
    // Process the retrieved JSON data
    realdata = data.quotes;
    console.log(realdata); // Assuming the quotes are stored in the "quotes" property
    getnewquotes();
  })
  .catch((error) => {
    // Handle any errors that occurred during the request
    console.log("Error:", error);
  });
let tagdata;
fetch("./tags.json")
  .then((response) => response.json())
  .then((data) => {
    // Process the retrieved JSON data
    tagdata = data.tags;
    console.log(tagdata); // Assuming the quotes are stored in the "quotes" property
    const gettags = () => {
        for (let i = 0; i < tagdata.length; i++) {
          let tag = document.createElement("button");
          tag.textContent = tagdata[i];
          document.getElementById("genre_type").appendChild(tag);
        }   
      };
      gettags();
      
  })
  .catch((error) => {
    // Handle any errors that occurred during the request
    console.log("Error:", error);
  });


const getnewquotes = () => {
  var text = document.getElementById("quote_text");
  var author = document.getElementById("author");
  let random = Math.floor(Math.random() * realdata.length);
  let quote = realdata[random];
  let quotetext = quote.text;
  let quoteauthor = quote.author;
  let quotetag = quote.tags;
  console.log(quotetext);
  console.log(quoteauthor);
  console.log(quotetag);
  text.textContent = quotetext;
  author.textContent = quoteauthor;
};

function nextw() {
  var randombtw = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));
  var r = randombtw(0, 255);
  var g = randombtw(0, 255);
  var b = randombtw(0, 255);
  var rgb = `rgb(${r},${g},${b})`;
  document.documentElement.style.setProperty("--tertiarycolor", rgb);
  getnewquotes();
}
var count = 1;
function theme() {
  count++;
  if (count % 2 == 0) {
    document.documentElement.style.setProperty("--secondarycolor", "white");
    document.documentElement.style.setProperty(
      "--primarycolor",
      "rgb(48,49,52)"
    );
  } else {
    document.documentElement.style.setProperty(
      "--secondarycolor",
      "rgb(48,49,52)"
    );
    document.documentElement.style.setProperty("--primarycolor", "white");
  }
}


var genretype =document.getElementById("genre_type");
var nav =document.getElementById("nav");
var close =document.getElementById("close");
const navigation_on = () => {
    genretype.style.marginRight="0%";
    nav.style.display="none";
    close.style.display="flex";

}
const navigation_off = () => {
    genretype.style.marginRight="-25%";
    close.style.display="none";
    nav.style.display="flex";

}