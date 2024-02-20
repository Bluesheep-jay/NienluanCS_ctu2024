import $ from "jquery";

/// --- reset CSS(left) after runAlgo --- ///
export function resetPositionCss() {
  let bars = document.getElementsByClassName("bar");
  Array.from(bars).forEach((bar) => {
    bar.style.left = "";
    bar.style.top = "";
  });
}

/// --- Generate Array Bar --- ///
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const generateArrayBar = (totalElements, setArrayBar) => {
  resetPositionCss();
  const newArray = Array.from({ length: totalElements }, () =>
    randomInt(5, 500)
  );
  setArrayBar(newArray);
};

export function disabledStopBtn(what = true) {
  const stopBtn = document.getElementById("stop-btn");
  $(".form-range").attr("disabled", true);
  $(".selectSort").attr("disabled", true).removeClass("selectSortHover");
  $("#sort-btn").attr("disabled", true).removeClass("btn-hover");
  stopBtn.innerHTML = "Resume";

  /// --when runAlgo everything is disabled except reset, restart, stop (btn)
  if (what == true) {
    stopBtn.innerHTML = "Stop";
    $("#stop-btn")
      .attr("disabled", false)
      .removeClass("disabled")
      .addClass("btn-hover");
  } 
  
}

export function disabledResetBtn() {
  $(".form-range").attr("disabled", false);
  $(".selectSort").attr("disabled", false).addClass("selectSortHover");
  $("#sort-btn").attr("disabled", false).addClass("btn-hover");
  const stopBtn = document.getElementById("stop-btn");
  stopBtn.innerHTML = "Stop";
  $("#stop-btn").attr("disabled", true);
}
//   $(".sort").attr("disabled", what);
//   $(".slider-input").attr("disabled", what);
//   $("select#algorithms").attr("disabled", what);
//   $("select#order").attr("disabled", what);

//   // Swap colors
//   $("#stop").attr("disabled", true).removeClass("green");

//   if (what) {
//     $(".sort").removeClass("green");
//     $("#stop").attr("disabled", false).addClass("green");

//     return;
//   }

//   $(".sort").addClass("green");
