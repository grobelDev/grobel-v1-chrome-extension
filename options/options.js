function navigationColumnV3() {
  // Should have the id's of all the stuff in the document.

  chrome.storage.sync.get(
    {
      currentPage: -1,
      webhookDataArray: ''
    },
    function(items) {
      let currentPage = items.currentPage;
      let webhookDataArray = items.webhookDataArray;
      let extraNavigationObjects = extraNavigationInit();

      createExtraNavigationElement(1000);

      // Discord Webhooks
      createNavigationHeader('Settings');
      if (webhookDataArray !== '') {
        // Iterate through objects
        Object.keys(webhookDataArray).forEach(key => {
          let object = webhookDataArray[key];
          let inUseString = '';

          if (
            object.webhookAddressInput !== '' ||
            object.whitelistInput !== '' ||
            object.blacklistInput !== ''
          ) {
            inUseString = ' (live)';
          }

          // Set-up
          let num = object.id;
          let name = object.name;
          var li = createNewLi();
          li.setAttribute('id', num);

          if (num === currentPage) {
            var a = createNewA(name, inUseString, true);
            a.setAttribute('id', 'a' + String(num));
          } else {
            var a = createNewA(name, inUseString, false);
            a.setAttribute('id', 'a' + String(num));
          }

          // Putting it together
          li.appendChild(a);
          document.getElementById('navigationColumn').appendChild(li);

          // Header Exception
          if (object.id === 0) {
            // createExtraNavigationElement(1001);
            createNavigationHeader('Discord Webhooks');
          }

          document.getElementById(num).onclick = function() {
            clickSaveV3(num);
          };
        });

        // Creating the empty space at the bottom
        var li = document.createElement('li');
        li.setAttribute('class', 'header');

        document.getElementById('navigationColumn').appendChild(li);
      }

      function createExtraNavigationElement(_id) {
        let object = extraNavigationObjects[_id];
        let inUseString = '';

        if (
          object.webhookAddressInput !== '' ||
          object.whitelistInput !== '' ||
          object.blacklistInput !== ''
        ) {
          inUseString = ' (live)';
        }

        // Set-up
        let num = object.id;
        let name = object.name;
        var li = createNewLi();
        li.setAttribute('id', num);

        if (num === currentPage) {
          var a = createNewA(name, inUseString, true);
          a.setAttribute('id', 'a' + String(num));
        } else {
          var a = createNewA(name, inUseString, false);
          a.setAttribute('id', 'a' + String(num));
        }

        if (object.id === 1000) {
          createNavigationHeader('Information');
        } else if (object.id === 1001) {
          // createNavigationHeader("Settings");
        }

        // Putting it together
        li.appendChild(a);
        document.getElementById('navigationColumn').appendChild(li);

        document.getElementById(num).onclick = function() {
          clickSaveV3(num);
        };
      }
    }
  );

  function createNavigationHeader(headerTitle) {
    var li = document.createElement('li');
    li.setAttribute('class', 'header');
    li.innerHTML = headerTitle;
    document.getElementById('navigationColumn').appendChild(li);
  }

  function createNewLi() {
    var li = document.createElement('li');
    li.setAttribute('class', 'chapter');

    return li;
  }

  function createNewA(name, inUseString, currentPageBool) {
    if (currentPageBool) {
      var a = document.createElement('a');
      a.setAttribute('href', 'options.html');

      a.innerHTML = '>>> ' + name + inUseString;
    } else {
      var a = document.createElement('a');
      a.setAttribute('href', 'options.html');

      a.innerHTML = name + inUseString;
    }

    return a;
  }

  function clickSaveV3(id) {
    let currentNavScroll = document.getElementById('book-summary').scrollTop;

    chrome.storage.sync.set(
      {
        currentNavScroll: currentNavScroll,
        currentPage: id
      },
      function() {}
    );
  }
}

function loadHTMLAll() {
  chrome.storage.sync.get(
    {
      currentNavScroll: 0,
      currentPage: 1,
      webhookDataArray: '',
      extraNavigationObjects: ''
    },
    function(items) {
      // Other navigation

      // If not the special Navigation
      if (items.currentPage < 1000) {
        let currentObject = items.webhookDataArray[items.currentPage];
        createWebhookWebpage(currentObject, items.currentNavScroll);

        chrome.storage.sync.set(
          {
            currentPage: items.currentPage,
            webhookDataArray: items.webhookDataArray
          },
          function() {}
        );
      } else {
        let currentObject = items.extraNavigationObjects[items.currentPage];
        createExtraWebpage(currentObject, items.currentNavScroll);
      }
    }
  );

  var section = 'pageInnerPrime';

  function createExtraWebpage(currentObject, currentNavScroll) {
    // createHeaderExtra(currentObject);

    // Getting Started Page
    if (currentObject.id === 1000) {
      createHeaderExtra(currentObject);
      createGettingStartedEmbed();

      document
        .getElementById(section)
        .appendChild(document.createElement('hr'));

      createHeader('Text Instructions:');
      createLabel('Step 1: Create a Discord Account');
      insertImage(1);
      insertImage(2);

      createLabel('Step 2: Create a Discord Server');
      insertImage(3);
      insertImage(4);
      insertImage(5);

      createLabel(
        'Step 3: Click on the SETTINGS for a Discord Text Channel (the GEAR icon)'
      );
      // insertImage(6);

      // createLabel("Step 3: Click on the SETTINGS for a Discord Text Channel (the cog icon)");
      insertImage(7);

      createLabel('Step 4: Click on the WEBHOOKS option');
      insertImage(8);
      createLabel('Step 5: Click on the CREATE WEBHOOKS button');
      insertImage(9);

      // insertImage(10);
      createLabel("Step 6: Click on the Webhook URL's COPY button");
      insertImage(11);

      createLabel(
        'Step 7: Right-click the Grobel Extension icon and click on OPTIONS'
      );
      insertImage(12);

      createLabel(
        'Step 8: Use CTRL-V to paste the link into the WEBHOOK ADDRESS'
      );
      insertImage(13);

      createLabel('NOTE: Settings are automatically saved');
      insertImage(14);

      createLabel(
        'Set-up is complete! Try using the extension on other websites.'
      );
      insertImage(15);

      createLabel('Step 9: Enjoy the Extension!');
      insertImage(16);

      function createHeader(headerText) {
        let header = document.createElement('h4');
        header.innerHTML = headerText;
        document.getElementById(section).appendChild(header);
      }

      function createLabel(labelText) {
        let label = document.createElement('h5');
        label.innerHTML = labelText;
        document.getElementById(section).appendChild(label);
      }

      function insertImage(imageNum) {
        let image = document.createElement('img');
        image.src = 'supportingFiles/images/' + String(imageNum) + '.png';
        document.getElementById(section).appendChild(image);
      }
    }

    if (currentObject.id === 1001) {
      currentObject.name = 'Premium Settings';
      createHeaderExtra(currentObject);

      // createLabelWithNewline("Get the PREMIUM version of Grobel here!");
      // createLabelWithNewline("Premium is exactly the same as regular Grobel, except that it has unlimited Webhooks.");
      // createLabelWithNewline("I never wanted to gate any of the features behind a paywall.");
      // createLabelWithNewline("Thanks for using the extension. I hope you enjoy it!");

      // createLabelWithNewline("Change the Total Webhook Number here.");
      createLabelWithNewline(
        'NOTE: Be careful making this number smaller. Webhooks in excess will be erased!'
      );
      createLabelWithNewline('');
      createWebhookRadioArray();

      function createWebhookRadioArray() {
        // Setup
        var form = document.createElement('form');
        var fieldset = document.createElement('fieldset');
        var legend = document.createElement('legend');
        legend.innerHTML = 'Total Number of Webhooks';

        form.appendChild(fieldset);
        fieldset.appendChild(legend);

        // Creating sets of RadioDivs

        Array(26)
          .fill()
          .map((x, i) => i)
          .forEach(int => {
            if (int > 0) {
              let intMultiple = int * 20;
              fieldset.appendChild(createRadioDiv(intMultiple));
            }
          });

        // Putting it all together
        document.getElementById(section).appendChild(form);
      }

      function createRadioDiv(num) {
        var radioDiv = document.createElement('div');
        var radioInput = document.createElement('input');
        radioInput.setAttribute('type', 'radio');
        radioInput.setAttribute('value', num);
        radioInput.setAttribute('id', num);
        var radioLabel = document.createElement('label');
        radioLabel.innerHTML = ' ' + num;

        radioDiv.appendChild(radioInput);
        radioDiv.appendChild(radioLabel);

        return radioDiv;
      }

      function createHeader(headerText) {
        let header = document.createElement('h4');
        header.innerHTML = headerText;
        document.getElementById(section).appendChild(header);
      }

      function createLabel(labelText) {
        let label = document.createElement('label');
        label.innerHTML = labelText;
        document.getElementById(section).appendChild(label);
      }

      function createLabelWithNewline(labelText) {
        let label = document.createElement('label');
        label.innerHTML = labelText;
        document.getElementById(section).appendChild(label);
        document
          .getElementById(section)
          .appendChild(document.createElement('br'));
      }
    }

    document.getElementById('book-summary').scrollTo(0, currentNavScroll);

    // For

    // function createGettingStartedPage() {
    //     createGettingStartedEmbed();
    // }

    function createHeaderExtra(currentObject) {
      var h1 = document.createElement('h1');
      h1.setAttribute('id', 'header');
      h1.innerHTML = currentObject.name;
      document.getElementById(section).appendChild(h1);
    }

    function createGettingStartedEmbed() {
      var div = document.createElement('div');
      div.innerHTML =
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/memQMYknbpY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
      document.getElementById(section).appendChild(div);
    }
  }

  function createWebhookWebpage(currentObject, currentNavScroll) {
    let num = currentObject['id'];

    // For Global Settings Only
    if (num === 0) {
      // Setting up the document
      // HMMM
      currentObject.name = 'Global Settings';

      createHeaderV2(currentObject);

      // Custom Info for Global Settings
      var globalSettingsInfoLabel = document.createElement('label');
      globalSettingsInfoLabel.innerHTML =
        'NOTE: These settings will apply to ALL webhooks.';
      document.getElementById(section).appendChild(globalSettingsInfoLabel);

      createRequiredSettingsFormV2(currentObject);
      createFilteringSettingsFormV2(currentObject);
      createAutoGrobelSettingsFormV2(currentObject);
      createResetDefaultsButton(currentObject);
      renderDocument();

      document.getElementById('requiredSettingsForm').style.display = 'none';
      document.getElementById('autoGrobelSettingsForm').style.display = 'none';
      document.getElementById('editButton').style.display = 'none';
    } else {
      // Setting up the document
      createHeaderV2(currentObject);
      createRequiredSettingsFormV2(currentObject);
      createFilteringSettingsFormV2(currentObject);
      createAutoGrobelSettingsFormV2(currentObject);
      createResetDefaultsButton(currentObject);
      renderDocument();
    }

    document.getElementById('book-summary').scrollTo(0, currentNavScroll);
  }

  // 1. Header
  function createHeaderV2(obj) {
    // 1. Set-up
    let num = obj.id;

    var div = document.createElement('div');
    div.className = 'flex-container';

    var h1 = document.createElement('h1');
    h1.setAttribute('id', 'header');
    h1.innerHTML = obj.name;

    var wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'divWrapperTest');

    var editButton = document.createElement('div');
    editButton.setAttribute('id', 'editButton');
    editButton.innerHTML = '[edit]';

    var headerInputDiv = document.createElement('input');
    headerInputDiv.setAttribute('id', 'headerInputDiv');
    headerInputDiv.setAttribute('value', obj.name);
    headerInputDiv.style.display = 'none';

    // NEW STUFF CORDON OFF
    var headerInputForm = document.createElement('form');
    headerInputForm.appendChild(headerInputDiv);
    headerInputForm.onsubmit = function(e) {
      e.preventDefault();
      // alert('hi');
      editButton.click();
    };

    // 2. Code Stuff
    editButton.onclick = function() {
      if (this.innerHTML === '[edit]') {
        this.innerHTML = '[save]';

        headerInputDiv.setAttribute('value', h1.innerHTML);

        headerInputDiv.style.display = 'block';
        h1.style.display = 'none';

        // headerInputDiv.focus();
        headerInputDiv.select();
      } else if (this.innerHTML === '[save]') {
        this.innerHTML = '[edit]';
        h1.style.display = 'block';

        h1.innerHTML = headerInputDiv.value;

        headerInputDiv.style.display = 'none';
        autosave(obj);
      }
    };

    // Putting it all Together
    div.insertBefore(headerInputForm, div.childNodes[0]);

    div.appendChild(h1);
    wrapper.appendChild(editButton);
    div.appendChild(wrapper);

    document.getElementById(section).appendChild(div);
  }

  // 2. Required Form V2
  function createRequiredSettingsFormV2(currentObject) {
    // A. Setup

    var form = document.createElement('form');
    form.setAttribute('autocomplete', 'off');
    form.setAttribute('id', 'requiredSettingsForm');

    var fieldset = document.createElement('fieldset');

    // fieldset children
    var legend = document.createElement('legend');
    legend.innerHTML = 'Required Settings';

    var label = document.createElement('label');
    label.innerHTML = 'Webhook Address: ';

    var aHref = document.createElement('a');
    aHref.setAttribute('href', 'options.html');
    aHref.innerHTML = 'Need Help?';

    aHref.onclick = function() {
      let currentNavScroll = document.getElementById('book-summary').scrollTop;

      chrome.storage.sync.set(
        {
          currentNavScroll: currentNavScroll,
          currentPage: 1000
        },
        function() {}
      );
    };

    var lineBreak = document.createElement('br');

    var input = document.createElement('input');
    input.setAttribute('type', 'requiredWebhookInput');
    input.setAttribute(
      'placeholder',
      'https://discordapp.com/api/webhooks/...'
    );
    input.setAttribute('id', 'webhookAddressInput');
    input.setAttribute('value', '');

    // B. Code Stuff

    form.addEventListener('input', function() {
      autosave(currentObject);
    });
    form.addEventListener('input', enableResetButton);

    let webhookAddressInput = currentObject['webhookAddressInput'];

    if (webhookAddressInput !== '') {
      input.setAttribute('value', webhookAddressInput);
    }

    // C. Putting it all together
    form.appendChild(fieldset);

    fieldset.appendChild(legend);
    fieldset.appendChild(label);
    label.appendChild(aHref);
    fieldset.appendChild(lineBreak);
    fieldset.appendChild(input);

    document.getElementById(section).appendChild(form);
  }

  // 3. Filtering Settings Form V2
  function createFilteringSettingsFormV2(currentObject) {
    // A. Setup

    var form = document.createElement('form');

    var fieldset = document.createElement('fieldset');

    // fieldset children
    var legend = document.createElement('legend');
    legend.innerHTML = 'Filtering Settings';

    var label = document.createElement('label');
    label.innerHTML = 'Filtering Options:';

    var radioDiv1 = document.createElement('div');
    var radioInput1 = document.createElement('input');
    radioInput1.setAttribute('type', 'radio');
    radioInput1.setAttribute('name', 'drone');
    radioInput1.setAttribute('value', 'None');
    radioInput1.setAttribute('id', 'filterRadioNone');
    var radioLabel1 = document.createElement('label');
    radioLabel1.setAttribute('id', 'noneRadioLabel');
    radioLabel1.setAttribute('for', 'None');
    radioLabel1.innerHTML = ' None'; // ???

    var radioDiv2 = document.createElement('div');
    var radioInput2 = document.createElement('input');
    radioInput2.setAttribute('type', 'radio');
    radioInput2.setAttribute('name', 'drone');
    radioInput2.setAttribute('value', 'Whitelist');
    radioInput2.setAttribute('id', 'filterRadioWhitelist');
    var radioLabel2 = document.createElement('label');
    radioLabel2.setAttribute('id', 'whitelistRadioLabel');
    radioLabel2.setAttribute('for', 'Whitelist');
    radioLabel2.innerHTML =
      ' Whitelist: Websites will be allowed ONLY IF the URL contains these terms.';

    var radioDiv3 = document.createElement('div');
    var radioInput3 = document.createElement('input');
    radioInput3.setAttribute('type', 'radio');
    radioInput3.setAttribute('name', 'drone');
    radioInput3.setAttribute('value', 'Blacklist');
    radioInput3.setAttribute('id', 'filterRadioBlacklist');
    var radioLabel3 = document.createElement('label');
    radioLabel3.setAttribute('id', 'blacklistRadioLabel');
    radioLabel3.setAttribute('for', 'Blacklist');
    radioLabel3.innerHTML =
      ' Blacklist: Websites will be allowed UNLESS the URL contains these terms.';

    var br = document.createElement('br');

    var whitelistLabel = document.createElement('label');
    whitelistLabel.setAttribute('id', 'whitelistLabel');
    // whitelistLabel.innerHTML = "Websites will be allowed ONLY IF the URL contains these terms.";
    var whitelistInput = document.createElement('input');
    whitelistInput.setAttribute('class', 'radioInput');
    whitelistInput.setAttribute('type', 'requiredWebhookInput');
    whitelistInput.setAttribute(
      'placeholder',
      "Example: 'reddit nytimes arstechnica'"
    );
    whitelistInput.setAttribute('id', 'whitelistInput');
    whitelistInput.setAttribute('value', '');

    var blacklistLabel = document.createElement('label');
    blacklistLabel.setAttribute('id', 'blacklistLabel');
    // blacklistLabel.innerHTML = "Websites will be allowed UNLESS the URL contains these terms.";
    var blacklistInput = document.createElement('input');
    blacklistInput.setAttribute('class', 'radioInput');
    blacklistInput.setAttribute('type', 'requiredWebhookInput');
    blacklistInput.setAttribute(
      'placeholder',
      "Example: 'mail drive braisers'"
    );
    blacklistInput.setAttribute('id', 'blacklistInput');
    blacklistInput.setAttribute('value', '');

    // B. Code Stuff
    form.addEventListener('input', function() {
      autosave(currentObject);
    });
    form.addEventListener('input', enableResetButton);

    // Radio Options
    let filteringOptionsRadio = currentObject['filteringOptionsRadio'];

    // alert(filteringOptionsRadio);

    if (filteringOptionsRadio === 'None') {
      radioInput1.setAttribute('checked', 'true');
    } else if (filteringOptionsRadio === 'Whitelist') {
      radioInput2.setAttribute('checked', 'true');
    } else if (filteringOptionsRadio === 'Blacklist') {
      radioInput3.setAttribute('checked', 'true');
    }

    // Whitelist Input
    let whitelistInputText = currentObject['whitelistInput'];

    if (whitelistInputText !== '') {
      whitelistInput.setAttribute('value', whitelistInputText);
    }

    // Blacklist Input
    let blacklistInputText = currentObject['blacklistInput'];

    if (blacklistInputText !== '') {
      blacklistInput.setAttribute('value', blacklistInputText);
    }

    // C. Putting it all together
    form.appendChild(fieldset);

    fieldset.appendChild(legend);
    fieldset.appendChild(label);

    fieldset.appendChild(radioDiv1);
    radioDiv1.appendChild(radioInput1);
    radioDiv1.appendChild(radioLabel1);

    fieldset.appendChild(radioDiv2);
    radioDiv2.appendChild(radioInput2);
    radioDiv2.appendChild(radioLabel2);

    fieldset.appendChild(whitelistInput);

    fieldset.appendChild(radioDiv3);
    radioDiv3.appendChild(radioInput3);
    radioDiv3.appendChild(radioLabel3);

    fieldset.appendChild(blacklistInput);

    fieldset.appendChild(document.createElement('br'));

    document.getElementById(section).appendChild(form);
  }

  // 4. Auto-Grobel Settings V2
  function createAutoGrobelSettingsFormV2(currentObject) {
    // A. Setup

    var form = document.createElement('form');
    form.setAttribute('id', 'autoGrobelSettingsForm');

    var fieldset = document.createElement('fieldset');

    var legend = document.createElement('legend');
    legend.innerHTML = 'Auto-Grobel Settings';

    var label = document.createElement('label');
    label.innerHTML =
      'Description: Auto-Grobel will automatically save webpages whenever a page is loaded.';

    var radioDiv1 = document.createElement('div');
    var radioInput1 = document.createElement('input');
    radioInput1.setAttribute('type', 'radio');
    radioInput1.setAttribute('name', 'drone');
    radioInput1.setAttribute('value', 'Disabled');
    radioInput1.setAttribute('id', 'autoGrobelRadioDisabled');
    var radioLabel1 = document.createElement('label');
    radioLabel1.setAttribute('for', 'Disabled');
    radioLabel1.innerHTML = ' Disabled'; // ???

    var radioDiv2 = document.createElement('div');
    var radioInput2 = document.createElement('input');
    radioInput2.setAttribute('type', 'radio');
    radioInput2.setAttribute('name', 'drone');
    radioInput2.setAttribute('value', 'Enabled');
    radioInput2.setAttribute('id', 'autoGrobelRadioEnabled');
    var radioLabel2 = document.createElement('label');
    radioLabel2.setAttribute('for', 'Enabled');
    radioLabel2.innerHTML = ' Enabled';

    var noteLabel = document.createElement('label');
    noteLabel.innerHTML =
      '(Note: Auto-Grobel follows all Whitelist/Blacklist rules.)';
    var noteLabel2 = document.createElement('label');
    noteLabel2.innerHTML =
      '(Note 2: Auto-Grobel will disable the Manual-Button-Press Grobel for this webhook.)';

    // B. Code Stuff
    form.addEventListener('input', function() {
      autosave(currentObject);
    });
    form.addEventListener('input', enableResetButton);

    let autoGrobelRadio = currentObject['autoGrobelRadio'];
    // alert(autoGrobelRadio);
    if (autoGrobelRadio === 'Disabled') {
      radioInput1.setAttribute('checked', 'true');
    } else if (autoGrobelRadio === 'Enabled') {
      radioInput2.setAttribute('checked', 'true');
    }

    // C. Putting it all together
    form.appendChild(fieldset);

    fieldset.appendChild(legend);
    fieldset.appendChild(label);

    fieldset.appendChild(radioDiv1);
    radioDiv1.appendChild(radioInput1);
    radioDiv1.appendChild(radioLabel1);

    fieldset.appendChild(radioDiv2);
    radioDiv2.appendChild(radioInput2);
    radioDiv2.appendChild(radioLabel2);

    fieldset.appendChild(noteLabel);
    fieldset.appendChild(document.createElement('br'));
    fieldset.appendChild(noteLabel2);

    document.getElementById(section).appendChild(form);
  }

  // 5. Reset Defaults Button
  function createResetDefaultsButton(obj) {
    var p = document.createElement('p');
    p.setAttribute('class', 'discordStyledResetButtonAligner');

    var resetButton = document.createElement('button');
    resetButton.setAttribute('id', 'resetButton');
    resetButton.setAttribute('class', 'discordStyledResetButton');
    resetButton.setAttribute('type', 'button');
    resetButton.innerHTML = 'Reset Defaults';
    // resetButton.addEventListener('click', resetDefaults);

    resetButton.addEventListener('click', function() {
      resetDefaults(obj);
    });

    resetButton.addEventListener('click', disableResetButton);

    p.appendChild(resetButton);

    document.getElementById(section).appendChild(p);
  }

  // Helper Functions:
}

function resetDefaults(obj) {
  if (obj.id === 0) {
    // obj.name = "Global Settings";
    obj.defaultName = 'Global Settings';
  }

  // 1. Reset the Input Categories
  document.getElementById('webhookAddressInput').value = '';
  document.getElementById('whitelistInput').value = '';
  document.getElementById('blacklistInput').value = '';

  // 2. Reset the Radio Categories
  document.getElementById('filterRadioNone').checked = true;
  document.getElementById('autoGrobelRadioDisabled').checked = true;

  // 3. Reset Header Input Categories
  document.getElementById('headerInputDiv').value = obj.defaultName;
  document.getElementById('header').innerHTML = obj.defaultName;

  // Unmanagable Code Addition
  // Immediate Navigation Name Changes
  let aCurrentId = 'a' + String(obj.id);
  let currentA = document.getElementById(aCurrentId);

  currentA.innerHTML = '>>> ' + obj.defaultName;

  autosave(obj);
}

// MISC (Buttons and Things)
function disableResetButton() {
  document.getElementById('resetButton').disabled = true;
}
function enableResetButton() {
  document.getElementById('resetButton').disabled = false;
}

function webhookObjectArrayInit() {
  // alert("resetting?");
  let webhookObjectArray = {};

  webhookObjectArray[0] = createNewGlobalSettingsObject(0);

  Array(20)
    .fill()
    .map((x, i) => i)
    .forEach(notNum => {
      let num = notNum + 1;
      webhookObjectArray[num] = createNewWebhookObject(num);
    });

  // let globalSettings = createNewWebhookObject(0);
  // globalSettings.name = "Global Settings";
  // globalSettings.defaultName = "Global Settings";
  // globalSettings

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
    name: 'Global Settings',
    defaultName: 'Global Settings'
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
    name: 'Webhook ' + String(_id),
    defaultName: 'Webhook ' + String(_id)
  };
  return obj;
}

function extraNavigationInit() {
  let extraNavigationObjects = {};

  extraNavigationObjects[1000] = createExtraNavigationObject(
    1000,
    'Getting Started'
  );
  extraNavigationObjects[1001] = createExtraNavigationObject(
    1001,
    'Premium Settings'
  );
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

function autosave(currentObject) {
  chrome.storage.sync.get(
    {
      currentPage: -1,
      webhookDataArray: ''
    },
    function(items) {
      if (items.currentPage !== -1 && items.webhookDataArray !== '') {
        var newObject = createNewWebhookObject(items.currentPage);

        let documentIdArray = [];
        documentIdArray.push('webhookAddressInput');
        documentIdArray.push('whitelistInput');
        documentIdArray.push('blacklistInput');

        let documentFilterRadioArray = [];
        documentFilterRadioArray.push('filterRadioNone');
        documentFilterRadioArray.push('filterRadioWhitelist');
        documentFilterRadioArray.push('filterRadioBlacklist');

        documentAutoGrobelRadioArray = [];
        documentAutoGrobelRadioArray.push('autoGrobelRadioDisabled');
        documentAutoGrobelRadioArray.push('autoGrobelRadioEnabled');

        documentIdArray.forEach(id => {
          if (document.getElementById(id).value !== '') {
            newObject[id] = document.getElementById(id).value;
          }
        });

        documentFilterRadioArray.forEach(id => {
          if (document.getElementById(id).checked) {
            newObject['filteringOptionsRadio'] = id.split('filterRadio')[1];
          }
        });

        documentAutoGrobelRadioArray.forEach(id => {
          if (document.getElementById(id).checked) {
            newObject['autoGrobelRadio'] = id.split('autoGrobelRadio')[1];
          }
        });

        // NavBar Stuff
        if (
          newObject.webhookAddressInput !== '' ||
          newObject.whitelistInput !== '' ||
          newObject.blacklistInput !== ''
        ) {
          // alert(object.id + " is empty!");
          // inUseString = ' (live)';
          let aCurrentId = 'a' + String(currentObject.id);
          let currentA = document.getElementById(aCurrentId);
          if (currentA.innerHTML.includes('(live)') === false) {
            currentA.innerHTML = currentA.innerHTML + ' (live)';
          }
        }

        // Header Stuff
        if (headerInputDiv.value !== '') {
          let obj = currentObject;
          let newObjectName = headerInputDiv.value;
          newObject.name = newObjectName;

          //
          // Immediate Navigation Name Changes
          let aCurrentId = 'a' + String(obj.id);
          let currentA = document.getElementById(aCurrentId);
          let stringArray = currentA.innerHTML.split(' ');
          var liveCheck = [...stringArray].pop();

          if (liveCheck === '(live)') {
            currentA.innerHTML = '>>> ' + headerInputDiv.value + ' (live)';
          } else {
            currentA.innerHTML = '>>> ' + headerInputDiv.value;
          }
          //
        }

        // Y. Creating newObjectArray
        let newObjectArray = items.webhookDataArray;
        let oldObject = newObjectArray[newObject['id']];

        let compareSaveValue = compareSave(oldObject, newObject);
        if (compareSaveValue !== -1) {
          newObject['filteringOptionsRadio'] = compareSaveValue;
          renderDocument();
        }

        // alert(newObject.name);

        newObjectArray[newObject['id']] = newObject;

        // NavScroll Stuff
        let currentNavScroll = document.getElementById('book-summary')
          .scrollTop;

        // Z. Saving Everything Together
        chrome.storage.sync.set(
          {
            currentNavScroll: currentNavScroll,
            currentPage: items.currentPage,
            webhookDataArray: newObjectArray
          },
          function() {
            // console.log(items.webhookDataArray);
          }
        );
      } else {
        alert('error in saving');
      }
    }
  );

  renderDocument();
}

function renderDocument() {
  let documentState = getDocumentState();

  renderFilteringSettings();

  // Helper Functions
  function getDocumentState() {
    var newObject = {};

    let documentIdArray = [];
    documentIdArray.push('webhookAddressInput');
    documentIdArray.push('whitelistInput');
    documentIdArray.push('blacklistInput');

    let documentFilterRadioArray = [];
    documentFilterRadioArray.push('filterRadioNone');
    documentFilterRadioArray.push('filterRadioWhitelist');
    documentFilterRadioArray.push('filterRadioBlacklist');

    documentAutoGrobelRadioArray = [];
    documentAutoGrobelRadioArray.push('autoGrobelRadioDisabled');
    documentAutoGrobelRadioArray.push('autoGrobelRadioEnabled');

    documentIdArray.forEach(id => {
      if (document.getElementById(id).value !== '') {
        newObject[id] = document.getElementById(id).value;
      }
    });

    documentFilterRadioArray.forEach(id => {
      if (document.getElementById(id).checked) {
        newObject['filteringOptionsRadio'] = id.split('filterRadio')[1];
      }
    });

    documentAutoGrobelRadioArray.forEach(id => {
      if (document.getElementById(id).checked) {
        newObject['autoGrobelRadio'] = id.split('autoGrobelRadio')[1];
      }
    });

    return newObject;
  }

  function renderFilteringSettings() {
    let filteringOptionsRadio = documentState.filteringOptionsRadio;

    // Rendering Selective Highlight Based on Radio Input
    if (filteringOptionsRadio === 'None') {
      document.getElementById('noneRadioLabel').classList.remove('disabled');
      document
        .getElementById('whitelistRadioLabel')
        .setAttribute('class', 'disabled');
      document
        .getElementById('blacklistRadioLabel')
        .setAttribute('class', 'disabled');
    } else if (filteringOptionsRadio === 'Whitelist') {
      document
        .getElementById('noneRadioLabel')
        .setAttribute('class', 'disabled');
      document
        .getElementById('whitelistRadioLabel')
        .classList.remove('disabled');
      document
        .getElementById('blacklistRadioLabel')
        .setAttribute('class', 'disabled');
    } else if (filteringOptionsRadio === 'Blacklist') {
      document
        .getElementById('noneRadioLabel')
        .setAttribute('class', 'disabled');
      document
        .getElementById('whitelistRadioLabel')
        .setAttribute('class', 'disabled');
      document
        .getElementById('blacklistRadioLabel')
        .classList.remove('disabled');
    }
  }
}

function compareSave(oldObject, newObject) {
  console.log('NewObject:');
  console.log(newObject);
  console.log('OldObject:');
  console.log(oldObject);

  if (
    Math.abs(
      oldObject['whitelistInput'].length - newObject['whitelistInput'].length
    ) === 1
  ) {
    document.getElementById('filterRadioWhitelist').checked = true;

    return 'Whitelist';
  } else if (
    Math.abs(
      oldObject['blacklistInput'].length - newObject['blacklistInput'].length
    ) === 1
  ) {
    document.getElementById('filterRadioBlacklist').checked = true;

    return 'Blacklist';
  } else {
    return -1;
  }
}

document.addEventListener('DOMContentLoaded', navigationColumnV3);
document.addEventListener('DOMContentLoaded', loadHTMLAll);
