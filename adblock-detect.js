document.addEventListener('DOMContentLoaded', function () {
  var adBlockEnabled = false;

  // Create a dummy ad element to check if it's blocked
  var adTest = document.createElement('div');
  adTest.innerHTML = '&nbsp;';
  adTest.className = 'adsbox';
  adTest.style = 'display:none;';
  document.body.appendChild(adTest);

  window.setTimeout(function () {
    if (adTest.offsetHeight === 0) {
      adBlockEnabled = true;
    }
    adTest.remove();

    if (adBlockEnabled) {
      // Show the popup if adblock is detected
      document.getElementById('adblock-popup').style.display = 'block';
    }
  }, 100);

  // Close popup button functionality
  document.getElementById('close-popup').addEventListener('click', function () {
    document.getElementById('adblock-popup').style.display = 'none';
  });
});
