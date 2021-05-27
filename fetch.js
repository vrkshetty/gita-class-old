myListLen = myList.length;

for (var i = 0; i < myListLen; i++) {
  slokaTittle = myList[i].Tittle;
  slokaParaText = myList[i].Text;
  slokaAudoSrc = myList[i].audoSrc;
  newDiv = document.createElement("div");
  childDiv = document.createElement("div");
  newDiv.id = "container";
  newDiv.className = "chapter";
  h2Text = document.createElement("h2");
  h2Text.innerText = slokaTittle;
  audio = document.createElement("AUDIO");
  audio.setAttribute("controls", "src");
  audio.setAttribute("src", slokaAudoSrc);
  audio.setAttribute("controlsList", "nodownload");
  audio.className = "audio";
  newDiv.appendChild(h2Text);
  childDiv.innerHTML = slokaParaText;
  childDiv.className = "shlokaText";
  h2Text.className = "chapterNumber";
  newDiv.appendChild(childDiv);
  newDiv.appendChild(audio);
  document.body.appendChild(newDiv);
}

window.addEventListener("load", function () {
  setTimeout(function () {
    // This hides the address bar:
    window.scrollTo(0, 1);
  }, 0);
});

//original//
// for (var i = 0; i < myListLen; i++) {
//   slokaTittle = myList[i].Tittle;
//   slokaParaText = myList[i].Text;
//   slokaAudoSrc = myList[i].audoSrc;
//   newDiv = document.createElement("div");
//   childDiv = document.createElement("div");
//   newDiv.id = "container";
//   newDiv.className = "chapter";
//   h2Text = document.createElement("h2");
//   h2Text.innerText = slokaTittle;
//   audio = document.createElement("AUDIO");
//   audio.setAttribute("controls", "src");
//   audio.setAttribute("src", slokaAudoSrc);
//   audio.setAttribute("controlsList", "nodownload");
//   newDiv.appendChild(h2Text);
//   childDiv.innerHTML = slokaParaText;
//   newDiv.appendChild(childDiv);
//   newDiv.appendChild(audio);
//   document.body.appendChild(newDiv);
// }
