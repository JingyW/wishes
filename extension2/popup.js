// var express = require('express');
// var exphbs = require('express-handler');
//
// var app = express();

// app.get('/login',function(req,res) {
document.addEventListener('DOMContentLoaded', function(a) {
    $.ajax({
      url:'https://ronchon-croissant-34901.herokuapp.com/authenticate',
      method:'post',
      success:function(data) {
        if (data.facebookid !== "") {
          alert("yeah~~")
          chrome.browserAction.setIcon({path: "IMG_0017.png"});
          alert("notworking");
          let div = document.createElement('button');
          div.innerText="view wish list";
          div.setAttribute('id','viewWishList');
          document.body.appendChild(div);
          document.getElementById('viewWishList').addEventListener('click',function() {
            window.open('https://ronchon-croissant-34901.herokuapp.com/'+data.facebookid+'/friendList');
          })
        } else {
          let div = document.createElement('button');
          div.innerText="connect to facebook";
          div.setAttribute('id','connectFB');
          document.body.appendChild(div);
          document.getElementById('connectFB').addEventListener('click',function() {
            window.open('https://ronchon-croissant-34901.herokuapp.com');
          })
        }
      }
    })

    function onClickHandler(e,tabs) {
      alert("clicked");
      if (e.mediaType === "image") {
        $.ajax({
          url:'https://ronchon-croissant-34901.herokuapp.com/addWish'
        })
        alert("image");
        alert(e.srcUrl)
        alert(e.pageUrl)
      }
    };

  // Set up context menu tree at install time.
    chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({"title": "Choose your wish list", "contexts": ["image"],"id": "parent"});
    chrome.contextMenus.create({"title": "Save to public", "parentId": parent, "id": "picture", "onClick": onClickHandler});
    chrome.contextMenus.create({"title": "Save to privacy", "parentId": parent, "id": "picture"});
    // chrome.contextMenus.onClicked.addListener(onClickHandler);
  });
    });
  });
