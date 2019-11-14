chrome.browserAction.onClicked.addListener(function (tab) { grobelMainV5(true) });

// Auto-Grobel Settings (this is what causes the errors)
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

  // Check to see if the Page has loaded.
  if (changeInfo.status == 'complete' && tab.active === true) {

    // Delay for Grobel.
    var delayInMilliseconds = 1250; //1 second

    setTimeout(function () {
      grobelMainV5(false);
      // grobelAuto();
    }, delayInMilliseconds);
  }
});



// Helper Functions
function grobelMainV5(grobelManualBool) {

  // 1. Get current Tab Url
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.storage.sync.get({
      webhookDataArray: '',
    }, function (items) {
      if (items.webhookDataArray !== '') {

        // 2. Check to see if webhook data is valid
        let objectArray = items.webhookDataArray;
        var objectArrayMailbox = [];

        // alert(globalObject.filteringOptionsRadio);

        Object.keys(objectArray).forEach(key => {

          // URL Setup
          let tabUrl = tabs[0].url

          // Global Settings Setup
          let globalObject = objectArray[0];

          // Specific Webhook Setup
          let object = objectArray[key];
          let webhookUrl = object["webhookAddressInput"];
          let autoGrobelValue = object["autoGrobelRadio"];


          if (grobelManualBool) {
            if (autoGrobelValue === 'Disabled') {
              validityMain();
            }
          } else {
            if (autoGrobelValue === 'Enabled') {
              validityMain();
            }
          }


          // Helper Functions

          // Order is 1. Global -> 2. Specific
          function validityMain() {
            // 1. Global
            if (webhookUrl !== '') {
              if (checkUrlValidity(tabUrl, globalObject)) {
                // 2. Specific
                if (checkUrlValidity(tabUrl, object)) {
                  objectArrayMailbox.push(object);
                }
              }
            }
          }

          function checkUrlValidity(url, _object) {

            let filteringOptionsRadio = _object.filteringOptionsRadio;
            let blacklistInput = _object.blacklistInput;
            let whitelistInput = _object.whitelistInput;

            if (filteringOptionsRadio === "None") {
              return true;
            } else if (filteringOptionsRadio === "Whitelist") {
              return checkIfUrlContains(url, whitelistInput);
            } else if (filteringOptionsRadio === "Blacklist") {
              return !checkIfUrlContains(url, blacklistInput);
            } else {
              return false;
            }
          }

          function checkIfUrlContains(url, list) {
            if (list !== '') {
              let result = false;

              list.split(' ').forEach(item => {
                if (url.includes(item)) {
                  result = true;
                }
              });

              return result;
            } else {
              return false;
            }
          }

        });

        // There is at least one Webhook to send!
        if (objectArrayMailbox.length > 0) {
          chrome.tabs.captureVisibleTab(null, { format: 'png' }, function (screen) {

            // Prepare the Data Payload
            var data = dataPayloadV2(screen, tabs[0]);

            // Send to Necessary Locations
            Object.keys(objectArrayMailbox).forEach(key => {

              let object = objectArrayMailbox[key];
              let webhookUrl = object["webhookAddressInput"];

              // Sending to Discord
              sendDataToDiscordV2(data, webhookUrl);
            });
          });
        }
      }
    });
  });

  function dataPayloadV2(screen, tabObj) {
    // Initializing FormData
    var data = new FormData();

    // Set up the Screenshot
    var screenshotImage = dataURLtoFile(screen, 'screenshot.png');
    data.append('screenshot.png', screenshotImage);

    // Setting up the Embed Data
    let descriptionString = tabObj.url;
    let contentString = tabObj.title;

    let embedJSON = {
      "avatar_url": tabObj.favIconUrl,
      "content": "**" + String(tabObj.title) + "**",
      "embeds": [{
        "description": descriptionString,
        "image": {
          "url": "attachment://screenshot.png"
        }
      }]
    }
    data.append("payload_json", JSON.stringify(embedJSON));

    return data;
  }

  function sendDataToDiscordV2(data, webhookUrl) {

    document.cookie = 'cross-site-cookie=discordapp.com; SameSite=None; Secure';

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });
    xhr.open("POST", webhookUrl);
    xhr.send(data);
  }
}


// Other Helper Functions

function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}


chrome.storage.sync.get({
  currentPage: -1,
  webhookDataArray: ''

}, function (items) {
})

// 
// 
// On First Install
chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason == "install") {
    // alert("This is a first install!");
    chrome.storage.sync.get({
      currentNavScroll: 0,
      currentPage: 1000,
      webhookDataArray: webhookObjectArrayInit(),
      extraNavigationObjects: extraNavigationInit()

    }, function (items) {
      let currentNavScroll = 0;
      let currentPage = items.currentPage;
      let webhookDataArray = items.webhookDataArray;
      let extraNavigationObjects = items.extraNavigationObjects;

      chrome.storage.sync.set({
        currentNavScroll: currentNavScroll,
        currentPage: currentPage,
        webhookDataArray: webhookDataArray,
        extraNavigationObjects: extraNavigationObjects
      }, function () {
        // var newURL = "http://stackoverflow.com/";
        // chrome.tabs.create({ url: newURL });
        chrome.runtime.openOptionsPage();
        // console.log(items.webhookDataArray);
      });

    });




  } else if (details.reason == "update") {
    var thisVersion = chrome.runtime.getManifest().version;
    // alert("Updated from " + details.previousVersion + " to " + thisVersion + "!");
  }

  function webhookObjectArrayInit() {

    let webhookObjectArray = {};
    webhookObjectArray[0] = createNewGlobalSettingsObject(0);

    Array(40).fill().map((x, i) => i).forEach(notNum => {
      let num = notNum + 1;
      webhookObjectArray[num] = createNewWebhookObject(num);
    });

    return webhookObjectArray;
  }

  function createNewGlobalSettingsObject(_id) {
    let obj = {
      id: _id,
      webhookAddressInput: '',
      filteringOptionsRadio: 'None',
      whitelistInput: '',
      blacklistInput: '',
      autoGrobelRadio: 'Disabled',
      name: "Global Settings",
      defaultName: "Global Settings"
    };
    return obj;
  }

  function createNewWebhookObject(_id) {
    let obj = {
      id: _id,
      webhookAddressInput: '',
      filteringOptionsRadio: 'None',
      whitelistInput: '',
      blacklistInput: '',
      autoGrobelRadio: 'Disabled',
      name: "Webhook " + String(_id),
      defaultName: "Webhook " + String(_id)
    };
    return obj;
  }

  function extraNavigationInit() {
    let extraNavigationObjects = {};

    extraNavigationObjects[1000] = createExtraNavigationObject(1000, "Getting Started");
    extraNavigationObjects[1001] = createExtraNavigationObject(1001, "Upgrading to Premium");
    // extraNavigationObjects[1002] = createExtraNavigationObject(1002, "Global Settings");

    return extraNavigationObjects;

    function createExtraNavigationObject(_id, _name) {
      let obj = {
        id: _id,
        name: _name,
        webhookAddressInput: '',
        filteringOptionsRadio: 'None',
        whitelistInput: '',
        blacklistInput: '',
        autoGrobelRadio: 'Disabled'
      };
      return obj;
    }
  }

});

// 
// 
// 

// function whiteBlackUrlChecker(url, webhook, whitelist, blacklist) {

//   // Setup
//   let testWebhookUrl = webhook;
//   let testWhitelist = whitelist;
//   let testBlacklist = blacklist;

//   // Whitelist Stuff
//   if (testWhitelist !== '') {

//     let whitelistResult = false;

//     whitelist.split(' ').forEach(_whitelist => {
//       if (url.includes(_whitelist)) {
//         whitelistResult = true;
//       }
//     });

//     if (whitelistResult) {
//       return true;
//     } else {
//       return false;
//     }

//     // Blacklist Stuff  
//   } else if (testBlacklist !== '') {

//     let blacklistResult = false;

//     blacklist.split(' ').forEach(_blacklist => {
//       if (url.includes(_blacklist)) {
//         blacklistResult = true;
//       }
//     });

//     if (blacklistResult) {
//       return false;
//     } else {
//       return true;
//     }
//   }
//   return true;
// }

// function whiteBlackUrlCheckerVerbose(url, webhook, whitelist, blacklist) {

//   // Setup
//   let testWebhookUrl = webhook;
//   let testWhitelist = whitelist;
//   let testBlacklist = blacklist;

//   // Whitelist Stuff
//   if (testWhitelist !== '') {

//     let whitelistResult = false;

//     whitelist.split(' ').forEach(_whitelist => {
//       if (url.includes(_whitelist)) {
//         whitelistResult = true;
//       }
//     });

//     if (whitelistResult) {
//       // var data2 = new FormData();

//       // let embedJSON = {
//       //   "content": "**" + "[WHITELISTED URL]" + "**",
//       // };
//       // data2.append("payload_json", JSON.stringify(embedJSON));

//       // // Sending to Discord
//       // var xhr = new XMLHttpRequest();
//       // xhr.addEventListener("readystatechange", function () {
//       //   if (this.readyState === 4) {
//       //     console.log(this.responseText);
//       //   }
//       // });
//       // xhr.open("POST", testWebhookUrl);
//       // xhr.send(data2);
//       return true;
//     } else {
//       var data2 = new FormData();

//       let embedJSON = {
//         "content": "**" + "[ONLY WHITELISTED ALLOWED]" + "**",
//       };
//       data2.append("payload_json", JSON.stringify(embedJSON));

//       // Sending to Discord
//       var xhr = new XMLHttpRequest();
//       xhr.addEventListener("readystatechange", function () {
//         if (this.readyState === 4) {
//           console.log(this.responseText);
//         }
//       });
//       xhr.open("POST", testWebhookUrl);
//       xhr.send(data2);
//       return false;
//     }

//     // Blacklist Stuff  
//   } else if (testBlacklist !== '') {

//     let blacklistResult = false;

//     blacklist.split(' ').forEach(_blacklist => {
//       if (url.includes(_blacklist)) {
//         blacklistResult = true;
//       }
//     });

//     if (blacklistResult) {
//       var data2 = new FormData();
//       let embedJSON = {
//         "content": "**" + "[ONLY NOT BLACKLISTED ALLOWED]" + "**",
//       };
//       data2.append("payload_json", JSON.stringify(embedJSON));

//       // Sending to Discord
//       var xhr = new XMLHttpRequest();
//       xhr.addEventListener("readystatechange", function () {
//         if (this.readyState === 4) {
//           console.log(this.responseText);
//         }
//       });
//       xhr.open("POST", testWebhookUrl);
//       xhr.send(data2);
//       return false;
//     } else {
//       return true;
//     }


//   }

//   return true;
// }

