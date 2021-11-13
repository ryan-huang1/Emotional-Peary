console.log('content.js has been loaded: ryanhuang');

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    var messageText = request.greeting

    //join function
    function join_function(pear) {
      if (request.greeting == "https://app.peardeck.com/join") {

        //on load change image
        let filenames = [
          "blush-pear.png",
          "mad-pear.png",
          "confused-pear.png",
          "content-pear.png",
          "crying-pear.png",
          "sad-pear.png",
          "sleeping-pear.png",
          "sunglass-pear.png",
          "tongue-pear.png",
          "very-confused-pear.png",
          "happy-pear.png",
          "happy-pear.png",
          "happy-pear.png",
          "happy-pear.png",
        ];

        let r = Math.floor(Math.random() * filenames.length);
        let file = "pears/" + filenames[r];
        var path = chrome.extension.getURL(file);

        document.getElementsByClassName("join__logo")[0].src=path;
        console.log("on load join function called");
        console.log(r);
        console.log(path);
        sendResponse({farewell: "goodbye"});

      } else if (messageText.includes("dice")){

        //on dice button click
        let filenames = [
          "blush-pear.png",
          "mad-pear.png",
          "confused-pear.png",
          "content-pear.png",
          "crying-pear.png",
          "sad-pear.png",
          "sleeping-pear.png",
          "sunglass-pear.png",
          "tongue-pear.png",
          "very-confused-pear.png",
        ];

        let r = Math.floor(Math.random() * filenames.length);
        let file = 'pears/' + filenames[r];
        var path = chrome.extension.getURL(file);
        console.log(path);
        console.log(r);

        document.getElementsByClassName("join__logo")[0].src=path;

        sendResponse({farewell: "goodbye"});
        console.log("on dice click join function called");

      } else {

        //on button click
        var path = chrome.extension.getURL(pear);
        document.getElementsByClassName("join__logo")[0].src = path;
        sendResponse({farewell: "goodbye"});
        console.log("on button click join function called");

      }
    }

    //presenter function
    function presenter_function(pear) {
      if (messageText.slice(-7) == "gslides") {

        //on load change image
        let filenames = [
          "join-blush-pear.png",
          "join-mad-pear.png",
          "join-confused-pear.png",
          "join-content-pear.png",
          "join-crying-pear.png",
          "join-sad-pear.png",
          "join-sleeping-pear.png",
          "join-sunglass-pear.png",
          "join-tongue-pear.png",
          "join-very-confused-pear.png",
          "join-happy-pear.png",
          "join-happy-pear.png",
          "join-happy-pear.png",
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

        sendResponse({farewell: "goodbye"});

      } else if (messageText.includes("dice")){

        //on dice button click
        let filenames = [
          "join-blush-pear.png",
          "join-mad-pear.png",
          "join-confused-pear.png",
          "join-content-pear.png",
          "join-crying-pear.png",
          "join-sad-pear.png",
          "join-sleeping-pear.png",
          "join-sunglass-pear.png",
          "join-tongue-pear.png",
          "join-very-confused-pear.png",
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

        sendResponse({farewell: "goodbye"});
        console.log("on dice click join function called");

      } else {

        //on button click
        var path = chrome.extension.getURL(pear);
        document.querySelector('.alpha-modal__peary img').src = path;
        console.log("presenter function called")
        sendResponse({farewell: "goodbye"});
      }
    }

    if (messageText.slice(0, 29) == 'https://app.peardeck.com/join') {
        let button_name = messageText.slice(29)
        var final_path = "pears/" + button_name + ".png"
        join_function(final_path);
        console.log(final_path);

    } else if (messageText.slice(0, 34) == 'https://app.peardeck.com/presenter') {
        let button_name = messageText.slice(71)
        var final_path = "pears/join-" + button_name + ".png"
        presenter_function(final_path);
        console.log(final_path);

    } else {

      let filenames = [
        "join-blush-pear.png",
        "join-mad-pear.png",
        "join-confused-pear.png",
        "join-content-pear.png",
        "join-crying-pear.png",
        "join-sad-pear.png",
        "join-sleeping-pear.png",
        "join-sunglass-pear.png",
        "join-tongue-pear.png",
        "join-very-confused-pear.png",
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

      sendResponse({farewell: "goodbye"});
    }
    return true;
  }
  );
