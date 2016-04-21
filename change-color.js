var value, backgroundColor, mainColor, borderColor;
backgroundColor = $('#material-app-bar, .paper-progress-0 #primaryProgress.paper-progress, .paper-slider-0 #sliderKnobInner.paper-slider, sj-paper-button.material-primary, paper-button.material-primary, .material .song-row .explicit, .paper-progress-1 #primaryProgress.paper-progress, .paper-slider-1 #sliderKnobInner.paper-slider, #current-loading-progress, .material-card .explicit, paper-toggle-button.paper-toggle-button-0[checked]:not([disabled]) .toggle-button.paper-toggle-button, paper-toggle-button.paper-toggle-button-0[checked]:not([disabled]) .toggle-bar.paper-toggle-button, .paper-fab-0, .paper-progress-2 #primaryProgress.paper-progress, .paper-checkbox-0 #checkbox.checked.paper-checkbox, .material-container-details .info .title .explicit');

$('input:text').on('keyup', function(){
  value = $(this).val();
  console.log(value);
  $('#color-block').text(value);
  $('#color-block').css('background-color', value);
  chrome.tabs.executeScript(null,
      {code:"document."});
});

// function click(e) {
//   chrome.tabs.executeScript(null,
//       {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
//   window.close();
// }

// document.addEventListener('DOMContentLoaded', function () {
//   var divs = document.querySelectorAll('div');
//   for (var i = 0; i < divs.length; i++) {
//     divs[i].addEventListener('click', click);
//   }
// });



// "browser_action": {
//     "default_icon": "/images/icon.png",
//     "default_popup": "popup.html",
//     "default_title": "Change the main color"
//   },