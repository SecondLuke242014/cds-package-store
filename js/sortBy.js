var sortByDropdown = document.getElementById("sortByDropdown");
var sortByOwner = document.getElementById("owner");
var sortByCommunity = document.getElementById("community");

sortByDropdown.addEventListener("change",function(){
  if (sortByDropdown.value == "all") {
    sortByOwner.style.display = "block";
    sortByCommunity.style.display = "block";
  } else if (sortByDropdown.value == "owner") {
    sortByOwner.style.display = "block";
    sortByCommunity.style.display = "none";
  } else if (sortByDropdown.value == "community") {
    sortByOwner.style.display = "none";
    sortByCommunity.style.display = "block";
  };
});
