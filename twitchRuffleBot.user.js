// ==UserScript==
// @name        twitch spam bot
// @namespace   void.com
// @description SpamBot for twitch, it send desired message
// @include     http://www.twitch.tv/*
// @version     1.0.2
// @updateURL   https://raw.githubusercontent.com/kalup/TwitchRuffleBot/master/twitchRuffleBot.user.js
// @grant       GM_getValue
// @grant       GM_setValue
// ==/UserScript==

window.addEventListener
(
  "load",
  function()
  {
    var chatContainer =  document.querySelector('.ember-chat');
    
    var wordDiv = document.createElement('div');
    var wordTextInput = document.createElement('input');
    wordTextInput.setAttribute('type','text');
    wordTextInput.setAttribute('id','KS_wordTextInput');
    var wordButton = document.createElement('button');
    wordButton.addEventListener('click',function(){alert("Mi hai premuto");},false);
    
    wordDiv.appendChild(wordTextInput);
    wordDiv.appendChild(wordButton);
    
    chatContainer.insertBefore(wordDiv,chatContainer.firstChild);
  },
  false
);
