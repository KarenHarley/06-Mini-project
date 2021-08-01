//Karen is here

var searchBtn = document.querySelector("#search-Btn"); //to that it applies to all ??? 
var formatInput = document.getElementById("format-input");
var searchInput = document.getElementById("search-input");
var otherHtml = "./search-results.html";

var selectedOptions = function (event) {
  event.preventDefault(); //for now
  console.log("button");
  var search = searchInput.value; //what the user typed
  var format = formatInput.options[formatInput.selectedIndex].value; //retriving the value of selected format

  if (format && search) {
    //call another function to display results

    console.log("format selected: " + format);
    console.log("search input: " + search);
    localStorage.setItem("search",search)
    localStorage.setItem("format",format)
    location.replace(otherHtml);
  } else {
    console.log("no format selected");
    return;
  }
};

searchBtn.addEventListener("click", selectedOptions);
//when we click it needs to go to the next page

