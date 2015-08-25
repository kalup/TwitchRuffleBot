// ==UserScript==
// @name        twitch spam bot
// @namespace   void.com
// @description SpamBot for twitch, it send desired message
// @include     http://www.twitch.tv/*
// @version     1.1.6
// @updateURL   https://raw.githubusercontent.com/kalup/TwitchRuffleBot/master/twitchRuffleBot.user.js
// @grant       GM_getValue
// @grant       GM_setValue
// ==/UserScript==

var streamerName = window.location.pathname.replace("/","");

var botRefreshTime = 10000; // 10000 millisecondi == 10 secondi

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
    wordButton.innerHTML = "Spamma";
    wordButton.addEventListener('click',function() {
      
      GM_setValue('wordToSpam_'+streamerName,document.getElementById('KS_wordTextInput').value);
      setTimeout(function() {
        
        GM_setValue('wordToSpam_'+streamerName,"");
        
      },botRefreshTime*1.01);
      
    },false);
    
    var hr = document.createElement('hr');
    
    wordDiv.appendChild(wordTextInput);
    wordDiv.appendChild(wordButton);
    
    chatContainer.insertBefore(hr,chatContainer.firstChild);
    chatContainer.insertBefore(wordDiv,chatContainer.firstChild);
    
    setInterval(function() {
        var focusF = function() {
            document.getElementById('chat_text_input').focus();
            window.removeEventListener(
                'focus',
                focusF,
                false);
        };
        var blurF = function() {
            document.querySelector('.send-chat-button').click();
            window.removeEventListener(
                'blur',
                blurF,
                false);
        };
        
        var wordToSpam = GM_getValue('wordToSpam_'+streamerName,"");
        if(wordToSpam !== "") {
          document.getElementById('chat_text_input').value = wordToSpam;
          window.addEventListener(
              'focus',
              focusF,
              false);
          window.addEventListener(
              'blur',
              blurF,
              false);
        }
        
      },botRefreshTime);
    
  },
  false
);
