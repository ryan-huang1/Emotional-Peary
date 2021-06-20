console.log('content.js has been loaded: ryanhuang');

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    console.log(request.greeting);
    var messageText = request.greeting
    if (request.greeting == "https://app.peardeck.com/join") {

      let filenames = [
        "angryPearSmolFinal.png",
        "sadPearSmol.png",
        "kindaSadPear.png",
        "happyPear.png",
        "happyPear.png",
        "happyPear.png",
      ];

      let r = Math.floor(Math.random() * filenames.length);
      let file = 'pears/' + filenames[r];
      var path = chrome.extension.getURL(file);
      console.log(path);
      console.log(r);

      document.getElementsByClassName("join__logo")[0].src=path;

      console.log("join page");
      console.log(request.greeting);
      sendResponse({farewell: "goodbye"});
      console.log("end of content.js");
    } else if (request.greeting == 'HAPPYhttps://app.peardeck.com/join') {
        var path = chrome.extension.getURL("pears/happyPear.png");
        document.getElementsByClassName("join__logo")[0].src = path;
        sendResponse({farewell: "goodbye"});
        console.log('button -> happy join page');
        console.log(path);
    } else if (request.greeting == 'MADhttps://app.peardeck.com/join') {
        var path = chrome.extension.getURL("pears/angryPearSmolFinal.png");
        document.getElementsByClassName("join__logo")[0].src = path;
        sendResponse({farewell: "goodbye"});
        console.log('button -> mad join page');
        console.log(path);
    } else if (request.greeting == 'SADhttps://app.peardeck.com/join') {
        var path = chrome.extension.getURL("pears/sadPearSmol.png");
        document.getElementsByClassName("join__logo")[0].src = path;
        sendResponse({farewell: "goodbye"});
        console.log('button -> sad join page');
        console.log(path);
    } else if (request.greeting == 'KINDASADhttps://app.peardeck.com/join') {
      var path = chrome.extension.getURL("pears/kindaSadPear.png");
      document.getElementsByClassName("join__logo")[0].src = path;
      sendResponse({farewell: "goodbye"});
      console.log('button -> kinda sad join page');
      console.log(path);
    } else if (messageText.slice(0, 39) == 'HAPPYhttps://app.peardeck.com/presenter') {
        var path = chrome.extension.getURL("pears/join-modal-logo.png");
        document.querySelector('.alpha-modal__peary img').src = path;
        sendResponse({farewell: "goodbye"});
        console.log(path);
        console.log('button -> happy code page');
    } else if (messageText.slice(0, 37) == 'MADhttps://app.peardeck.com/presenter') {
        var path = chrome.extension.getURL("pears/join-modal-pear-mad.png");
        document.querySelector('.alpha-modal__peary img').src = path;
        sendResponse({farewell: "goodbye"});
        console.log(path);
        console.log(messageText.slice(0, 37));
        console.log('button -> angry code page');
    } else if (messageText.slice(0, 42) == 'KINDASADhttps://app.peardeck.com/presenter') {
        var path = chrome.extension.getURL("pears/join-modal-logo-kinda-sad.png");
        document.querySelector('.alpha-modal__peary img').src = path;
        sendResponse({farewell: "goodbye"});
        console.log(path);
        console.log(messageText.slice(0, 37));
        console.log('button -> kinda sad code page');
    } else if (messageText.slice(0, 37) == 'SADhttps://app.peardeck.com/presenter') {
        var path = chrome.extension.getURL("pears/join-modal-logo-sad.png");
        document.querySelector('.alpha-modal__peary img').src = path;
        sendResponse({farewell: "goodbye"});
        console.log(path);
        console.log(messageText.slice(0, 37));
        console.log('button -> angry code page');
    } else if (request.greeting == 'RANDOMhttps://app.peardeck.com/join') {
      let filenames = [
        "angryPearSmolFinal.png",
        "sadPearSmol.png",
        "kindaSadPear.png",
      ];

      let r = Math.floor(Math.random() * filenames.length);
      let file = 'pears/' + filenames[r];
      var path = chrome.extension.getURL(file);
      console.log(path);
      console.log(r);

      document.getElementsByClassName("join__logo")[0].src=path;

      console.log("join page");
      console.log(request.greeting);
      sendResponse({farewell: "goodbye"});
      console.log("end of content.js");
    } else if (messageText.slice(0, 42) == 'RANDOMhttps://app.peardeck.com/presenter') {

      let filenames = [
        "join-modal-pear-mad.png",
        "join-modal-logo-sad.png",
        "join-modal-logo-kinda-sad.png",
      ];

      let r = Math.floor(Math.random() * filenames.length);
      let file = 'pears/' + filenames[r];
      var path = chrome.extension.getURL(file);
      console.log(path);
      console.log(r);

      function pollDOM () {
        const el = document.querySelector('.alpha-modal__peary img');

        if (el != null) {
          // Do something
          document.querySelector('.alpha-modal__peary img').src = path;
        } else {
          setTimeout(pollDOM, 200); // try again in milliseconds
        }
      }

      pollDOM();

      console.log("teacher page");
      console.log(request.greeting);
      sendResponse({farewell: "goodbye"});
      console.log("end of content.js");
      console.log(messageText.slice(0, 37));
    } else {

      let filenames = [
        "join-modal-pear-mad.png",
        "join-modal-logo-sad.png",
        "join-modal-logo-kinda-sad.png",
        "join-modal-logo.png",
        "join-modal-logo.png",
        "join-modal-logo.png",
      ];

      let r = Math.floor(Math.random() * filenames.length);
      let file = 'pears/' + filenames[r];
      var path = chrome.extension.getURL(file);
      console.log(path);
      console.log(r);

      function pollDOM () {
        const el = document.querySelector('.alpha-modal__peary img');

        if (el != null) {
          // Do something
          document.querySelector('.alpha-modal__peary img').src = path;
        } else {
          setTimeout(pollDOM, 200); // try again in milliseconds
        }
      }

      pollDOM();

      console.log("teacher page");
      console.log(request.greeting);
      sendResponse({farewell: "goodbye"});
      console.log("end of content.js");
      console.log(messageText.slice(0, 37));
    }
    return true;
  }
  );
