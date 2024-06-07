let selectedValue = document.querySelector('.product__form input[name="id"]').value;
let locationInfo = document.querySelector('.iia-location-info');
document.addEventListener("DOMContentLoaded", function() {
  selectedValue = document.querySelector('.product__form input[name="id"]').value;
  locationInfo = document.querySelector('.iia-location-info');
  
  if (selectedValue && selectedValue !== '') {
    if (locationInfo) {
       locationInfo.style.display = "block"; 
    }
  } else {
    setTimeout(function() {
      locationInfo = document.querySelector('.iia-location-info');
      if (locationInfo) {
        selectedValue = document.querySelector('.product__form input[name="id"]').value;
        if (selectedValue && selectedValue !== '') {
          locationInfo.style.display = "block";
        } else {
          locationInfo.style.display = "none";
        }
      } else {
        locationInfo = document.querySelector('.iia-location-info');
        locationInfo.style.display = "none";
      }
    }, 500);
  }
  
  document.querySelector('.product__form input[name="id"]').addEventListener('change', (e) => {
    selectedValue = document.querySelector('.product__form input[name="id"]').value;
    locationInfo = document.querySelector('.iia-location-info');
    if (locationInfo) {
      if (selectedValue && selectedValue !== '') {
        locationInfo.style.display = "block";
      } else {
        locationInfo.style.display = "none";
      } 
    }
  });
});