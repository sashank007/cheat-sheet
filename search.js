const all = document.getElementsByTagName("pre");

function showContent(searchText) {
  let allVals = [...all];
  for (let i = 0; i < allVals.length; i++) {
    if (!allVals[i].innerHTML.includes(searchText)) {
      allVals[i].style.display = "none";
    } else {
      allVals[i].style.display = "block";
    }
  }
}
showAll = all => {
  for (let i = 0; i < all.length; i++) {
    all[i].style.display = "block";
  }
};
$(document).ready(function() {
  $("input.reset").click(function() {
    $("input.input").val("");
    showAll(all);
  });

  $("input.input").on("keyup change", function() {
    showContent($(this).val());
  });
});
