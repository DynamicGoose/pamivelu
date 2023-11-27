fetch('vocab.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });

function appendData(data) {
  var vocabContainer = document.getElementById("Vocab");
  console.log(vocabContainer);
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.className = "vocab-entry";
    div.innerHTML = '<h3 style="margin: 0">' + data[i].word + '</h3>' + '<p style="margin: 0px; font-style: italic">' + data[i].type + '<p>' + '<p style="margin-bottom: 0px">' + data[i].translation + '</p>';
    vocabContainer.appendChild(div);
  }
}

function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}