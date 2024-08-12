const celsiusEl = document.getElementById('celsius');
const fahrenheitEl = document.getElementById('fahrenheit');
const kelvinEl = document.getElementById('kelvin');

function computeTemp(event){
    const current = event.target.value;
    const unit = event.target.name;

    switch (unit){
        case 'celsius':
            fahrenheitEl.value = (current + 273.32);
            kelvinEl.value =(current * 1.8 + 32);
            break;
        case 'fahrenheit':
            celsiusEl.value =(current - 32 / 1.8);
            kelvinEl.value = ((current - 32) / 1.8 + 273.32);
            break;
        case 'kelvin':
            celsiusEl.value = (current - 273.32);
            fahrenheitEl.value = ((current -273.32)*1.8 + 32);
            break;
    }
    
}