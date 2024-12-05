function showMainContent() {
  document.getElementById('introScreen').style.display = 'none';
  document.getElementById('mainContent').style.display = 'block';
  document.querySelector('.project-promo').style.display = 'block';
}

function showFeature(feature) {
  document.getElementById('featureContainer').style.display = 'none';
  document.querySelectorAll('.feature-details').forEach(section => {
    section.style.display = 'none';
  });
  document.getElementById(feature).style.display = 'block';
}

function goBack() {
  document.querySelectorAll('.feature-details').forEach(section => {
    section.style.display = 'none';
  });
  document.getElementById('featureContainer').style.display = 'grid';
}

function performConversion() {
  const conversionType = document.getElementById('conversionType').value;
  const input = parseFloat(document.getElementById('conversionInput').value);
  let result;

  if (isNaN(input)) {
    alert('Please enter a valid number');
    return;
  }

  switch (conversionType) {
    case 'CtoF':
      result = (input * 9/5) + 32;
      document.getElementById('conversionResult').innerText = `${input} °C = ${result.toFixed(2)} °F`;
      break;
    case 'FtoC':
      result = (input - 32) * 5/9;
      document.getElementById('conversionResult').innerText = `${input} °F = ${result.toFixed(2)} °C`;
      break;
    case 'MtoF':
      result = input * 3.28084;
      document.getElementById('conversionResult').innerText = `${input} m = ${result.toFixed(2)} ft`;
      break;
    case 'FtoM':
      result = input / 3.28084;
      document.getElementById('conversionResult').innerText = `${input} ft = ${result.toFixed(2)} m`;
      break;
    default:
      document.getElementById('conversionResult').innerText = '';
  }
}

// Add similar functions for other features as per your original script
