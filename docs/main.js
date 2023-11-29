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

window.addEventListener("load", function () {
  this.document.getElementById("defaultOpen").click()
});

function appendData(data) {
  var vocabContainer = document.getElementById("Vocab");
  var sortedData = data.sort(function (a, b) {
    return (a.word.toUpperCase() > b.word.toLowerCase()) ? 1 : ((b.word.toLowerCase() > a.word.toLowerCase()) ? -1 : 0)
  });

  for (var i = 0; i < sortedData.length; i++) {
    var div = document.createElement("div");
    div.className = "site-entry";
    div.innerHTML = '<h3 style="margin: 0">' + sortedData[i].word + '</h3>' + '<p style="margin: 0px; font-style: italic">' + sortedData[i].type + '<p>' + '<p style="margin-bottom: 0px">' + sortedData[i].translation + '</p>';
    vocabContainer.appendChild(div);
  }
}

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}