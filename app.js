const rangeHueInput = document.querySelector('#hue-slider');
const rangeHueValueP = document.querySelector('.hue-value');

const rangeChromaInput = document.querySelector('#chroma-slider');
const rangeChromaValueP = document.querySelector('.chroma-value');

const root = document.documentElement;
rangeHueValueP.textContent = rangeHueInput.value;
root.style.setProperty('--hue', rangeHueInput.value);

rangeChromaValueP.textContent = rangeChromaInput.value;
root.style.setProperty('--hue', rangeChromaInput.value);

rangeHueInput.addEventListener('input', ()=> {
  const hueValue = Number(rangeHueInput.value)
  rangeHueValueP.textContent = hueValue;
  root.style.setProperty('--hue', rangeHueInput.value)
})

rangeChromaInput.addEventListener('input', ()=> {
  const chromaValue = Number(rangeChromaInput.value);
  const chromaValueDecimal= chromaValue / 100;

  rangeChromaValueP.textContent = chromaValueDecimal;
  root.style.setProperty('--chroma', chromaValueDecimal)
})