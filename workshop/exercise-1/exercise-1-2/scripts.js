const title = document.createElement("h1");
title.innerText = "The best How I Met Your Mother\n episode (according to fans)";
document.getElementById("main").appendChild(title);
title.classList.add("titles");

const par1 = document.createElement("p");
par1.innerText = "As impossible as it seems to name just 1 of the 208 legendary episodes as the\n “best”, the fans have spoken and the highest rated episode is… wait for it…";
document.getElementById("main").appendChild(par1);
par1.classList.add("information");

const subTitle = document.createElement("h2");
subTitle.innerText = "The Slap Bet (Season 2, Episode 9)";
document.getElementById("main").appendChild(subTitle);
subTitle.classList.add("titles");
subTitle.classList.add("subtitle");

const rating = document.createElement("p");
rating.innerText = "IMDB Rating: 9.5";
document.getElementById("main").appendChild(rating);
rating.classList.add("information");

const picture = document.createElement("img");
picture.setAttribute("src", "images/robin-sparkles.jpg");
picture.setAttribute("alt", "robin");
document.getElementById("main").appendChild(picture);
picture.classList.add("pictures");

const par2 = document.createElement("p");
par2.innerText = "In this episode, Ted is learning a few secrets about Robin, namely that she has\n an unexplained aversion to the mall. Robin refuses to tell Ted and the others\n why she won’t go to the mall, so the gang forms their own theories. Marshall\n believes it’s because she got married in a mall and is still married. Barney\n believes it has something to do with Robin having performed in a porn video.\n The two of them make a slap bet with each other: whoever is right gets to slap\n the other across the face as hard as he can. Lily is named the Slap Bet\n Commissioner, as long as she promises to be unbiased.";
document.getElementById("main").appendChild(par2);
par2.classList.add("information");

const par3 = document.createElement("p");
par3.innerText = "In the end, Robin’s big secret was revealed- she was a Canadian, teen pop\n sensation named Robin Sparkles. Barney finds the music video for her hit\n single “Lets Go To The Mall”. The slap bet takes a few turns throughout the\n episode, but ends with Marshall having the right to slap Barney 5 times-\n available for all of eternity (horrible call Barney).";
document.getElementById("main").appendChild(par3);
par3.classList.add("information");

const source = document.createElement("a");
source.innerText = "Source";
source.setAttribute("href", "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/");
document.getElementById("main").appendChild(source);
source.classList.add("links");

const looks = document.createElement("link");
looks.setAttribute("rel", "stylesheet");
looks.setAttribute("href", "./styles.css");
document.querySelector("head").appendChild(looks);

