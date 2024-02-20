import $ from 'jquery'
export function resetPositionCss() {
  let bars = document.getElementsByClassName("bar");
  Array.from(bars).forEach((bar) => {
    bar.style.left = "";
    bar.style.top = "";
  });
}

// function disableHandler(){

// }
export function disableInput(what = true) {
    $(".form-range").attr("disabled", what);
    $(".selectSort").attr("disabled", what).removeClass("selectSortHover")
    // $("#stop-btn").attr("disabled", true).addClass("btn-disabled").removeClass("btn-hover")
    // $("#sort-btn").attr("disabled", false).removeClass("btn-disabled").addClass('btn-hover')
    const sortBtn = document.getElementById("stop-btn")
    sortBtn.innerHTML = "Resume"

    if(what == true){ 
    sortBtn.innerHTML = "Stop"
        $("#stop-btn").attr("disabled", false).removeClass("disabled").addClass("btn-hover")
        $("#sort-btn").attr("disabled", true).addClass("btn-disabled").removeClass('btn-hover')
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
}
