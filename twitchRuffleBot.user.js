// ==UserScript==
// @name        twitch spam bot
// @namespace   void.com
// @description SpamBot for twitch, it send desired message
// @include     http://www.twitch.tv/*
// @version     1.0.4
// @updateURL   https://raw.githubusercontent.com/kalup/TwitchRuffleBot/master/twitchRuffleBot.user.js
// @grant       GM_getValue
// @grant       GM_setValue
// ==/UserScript==

var botRefreshTime = 10000;

window.addEventListener
(
  "load",
  function()
  {
    var chatContainer =  document.querySelector('.ember-chat');
    
    var wordDiv = document.createElement('div');
    wordDiv.setAttribute('style','padding:10px');
    
    var wordTextInput = document.createElement('input');
    wordTextInput.setAttribute('type','text');
    wordTextInput.setAttribute('id','KS_wordTextInput');
    wordTextInput.setAttribute('style','margin-right:10px; margin-left:50px');
    
    var wordButton = document.createElement('button');
    wordButton.value = "Spamma";
    wordButton.addEventListener('click',function() {
      
      GM_setValue('wordToSpam',document.getElementById('KS_wordTextInput').value);
      setTimeout(function() {
        
        GM_setValue('wordToSpam',"");
        
      },botRefreshTime*2);
      
    },false);
    
    var hr = document.createElement('hr');
    
    wordDiv.appendChild(wordTextInput);
    wordDiv.appendChild(wordButton);
    wordDiv.appendChild(hr);
    
    chatContainer.insertBefore(wordDiv,chatContainer.firstChild);
    
  },
  false
);
