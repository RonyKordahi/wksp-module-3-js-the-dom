const title = document.createElement("h1");
title.innerText = "The best How I Met Your Mother\n episode (according to fans)";
document.getElementById("main").appendChild(title);

const par1 = document.createElement("p");
par1.innerText = "As impossible as it seems to name just 1 of the 208 legendary episodes as the\n “best”, the fans have spoken and the highest rated episode is… wait for it…";
document.getElementById("main").appendChild(par1);

const subTitle = document.createElement("h2");
subTitle.innerText = "The Slap Bet (Season 2, Episode 9)";
document.getElementById("main").appendChild(subTitle);

const rating = document.createElement("p");
rating.innerText = "IMDB Rating: 9.5";
document.getElementById("main").appendChild(rating);

const picture = document.createElement("img");
picture.setAttribute("src", "images/robin-sparkles.jpg");
picture.setAttribute("alt", "robin");
document.getElementById("main").appendChild(picture);
picture.style.borderRadius = "4px";

const par2 = document.createElement("p");
par2.innerText = "In this episode, Ted is learning a few secrets about Robin, namely that she has\n an unexplained aversion to the mall. Robin refuses to tell Ted and the others\n why she won’t go to the mall, so the gang forms their own theories. Marshall\n believes it’s because she got married in a mall and is still married. Barney\n believes it has something to do with Robin having performed in a porn video.\n The two of them make a slap bet with each other: whoever is right gets to slap\n the other across the face as hard as he can. Lily is named the Slap Bet\n Commissioner, as long as she promises to be unbiased.";
document.getElementById("main").appendChild(par2);

const par3 = document.createElement("p");
par3.innerText = "In the end, Robin’s big secret was revealed- she was a Canadian, teen pop\n sensation named Robin Sparkles. Barney finds the music video for her hit\n single “Lets Go To The Mall”. The slap bet takes a few turns throughout the\n episode, but ends with Marshall having the right to slap Barney 5 times-\n available for all of eternity (horrible call Barney).";
document.getElementById("main").appendChild(par3);

const source = document.createElement("a");
source.innerText = "Source";
source.setAttribute("href", "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/");
document.getElementById("main").appendChild(source);


document.body.style.backgroundImage = "url('./images/yellow-umbrella.jpg')";
const box = document.getElementById("main");
box.style.backgroundColor = "white";
box.style.width = "630px";
box.style.borderRadius = "4px";
box.style.paddingLeft = "30px";
document.body.style.fontFamily = "Playfair Display, sans-serif";
title.style.textAlign = "center";
source.setAttribute("style", "text-decoration:none");