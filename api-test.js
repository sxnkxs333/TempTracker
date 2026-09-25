const claveApi = '82796dcb2fc94147acf44505262409';
const idioma = 'es';
const ciudad = 'Huancayo';

(async function () {
    const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;

    const response = await fetch(apiClimaActual);
    let data = await response.json();

    console.log(data);
})();