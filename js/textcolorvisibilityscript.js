 const rgb = [255, 0, 0];
  // http://www.w3.org/TR/AERT#color-contrast
  const brightness = Math.round(((parseInt(rgb[0]) * 299) +
                      (parseInt(rgb[1]) * 587) +
                      (parseInt(rgb[2]) * 114)) / 1000);
  const textColour = (brightness > 125) ? 'black' : 'white';
  const backgroundColour = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
  $('#bg').css('color', textColour); 
  $('#bg').css('background-color', backgroundColour);
}