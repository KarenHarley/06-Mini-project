//Karen created js file
//didnt need an event Listener for go back has an anchor tag
var placeWhereInfoGoes = document.getElementById("result-content");
//var search = localStorage.getItem("search"); //getting the variables form the other file
//var format = localStorage.getItem("format");

//console.log("HI"); //testing
//console.log(search); //testing
//console.log(format); //testing

//if they search something else i need to replace it search and format

getInfo();
function getInfo(search, format) {
  var search = localStorage.getItem("search"); //getting the variables form the other file
  var format = localStorage.getItem("format");

  console.log("HI"); //testing
  console.log(search); //testing
  console.log(format); //testing
  var libraryAPI =
    "https://www.loc.gov/" + format + "/?q=" + search + "&fo=json";

  fetch(libraryAPI).then(function (response) {
    if (response.ok) {
      console.log(response);
      response.json().then(function (data) {
        console.log(data);
        console.log(data.results[7].url); //this is the stuff for pics
        makingInfo(data.results);
      });
    } else {
      console.log("nothing");
    }
  });
}

function makingInfo(info) {
  for (var i = 0; i < info.length; i++) {
    console.log("title: " + info[i].title);
    console.log("date: " + info[i].date);
    console.log("description: " + info[i].description);
    console.log("url" + info[i].url);

    var divForInfo = document.createElement("div");
    divForInfo.classList = "bg-light text-black p-5 my-5"; //justify-space-between align-center does nothing

    var headingForInfo = document.createElement("h4");
    headingForInfo.textContent = info[i].title;

    var date = document.createElement("p");
    date.textContent = "Date: " + info[i].date;

    var subject = document.createElement("p");
    subject.textContent = "Subjects: " + info[i].subject;

    var description = document.createElement("p");
    description.textContent = "Description: " + info[i].description;

    var button = document.createElement("a");
    button.textContent = "Read More";
    button.classList = "btn btn-black";
    button.setAttribute("target", "_blank");
    button.href = info[i].url;
    //add anchor tag and info[i].url

    placeWhereInfoGoes.appendChild(divForInfo);
    divForInfo.appendChild(headingForInfo);
    divForInfo.appendChild(date);
    divForInfo.appendChild(subject);
    divForInfo.appendChild(description);
    divForInfo.appendChild(button);
  }
}

//search

var searchBtn = document.querySelector("#search-Btn");
var formatInput = document.getElementById("format-input");
var searchInput = document.getElementById("search-input");

var selectedOptions = function (event) {
  event.preventDefault();
  location.reload();
  console.log("button");
  search = searchInput.value; //what the user typed
  format = formatInput.options[formatInput.selectedIndex].value; //retriving the value of selected format

  if (format && search) {
    //call another function to display results

    console.log("format selected: " + format);
    console.log("search input: " + search);
    localStorage.setItem("search", search);
    localStorage.setItem("format", format);

    getInfo();
  } else {
    console.log("no format selected");
    return;
  }
};

searchBtn.addEventListener("click", selectedOptions);
