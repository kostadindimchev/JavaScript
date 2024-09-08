function attachEventsListeners() {
    const input = document.getElementById('inputDistance');
    const result = document.getElementById('outputDistance');
    const button = document.getElementById('convert');
    const inputUnits = document.getElementById('inputUnits');
    const outputUnits = document.getElementById('outputUnits');

    button.addEventListener('click', () => {
        let resultInMeters = 0;

        if(inputUnits.value === 'km'){
            resultInMeters = Number(input.value) * 1000;
        }else if(inputUnits.value === 'm'){
            resultInMeters = Number(input.value);
        }else if(inputUnits.value === 'cm'){
            resultInMeters = Number(input.value) * 0.01;
        }else if(inputUnits.value === 'mm'){
            resultInMeters = Number(input.value) * 0.001;
        }else if(inputUnits.value === 'mi'){
            resultInMeters = Number(input.value) * 1609.34;
        }else if(inputUnits.value === 'yrd'){
            resultInMeters = Number(input.value) * 0.9144;
        }else if(inputUnits.value === 'ft'){
            resultInMeters = Number(input.value) * 0.3048;
        }else if(inputUnits.value === 'in'){
            resultInMeters = Number(input.value) * 0.0254;
        }

        if(outputUnits.value === 'km'){
            resultInMeters = Number(resultInMeters) / 1000;
        }else if(outputUnits.value === 'm'){
            resultInMeters = Number(resultInMeters);
        }else if(outputUnits.value === 'cm'){
            resultInMeters = Number(resultInMeters) / 0.01;
        }else if(outputUnits.value === 'mm'){
            resultInMeters = Number(resultInMeters) / 0.001;
        }else if(outputUnits.value === 'mi'){
            resultInMeters = Number(resultInMeters) / 1609.34;
        }else if(outputUnits.value === 'yrd'){
            resultInMeters = Number(resultInMeters) / 0.9144;
        }else if(outputUnits.value === 'ft'){
            resultInMeters = Number(resultInMeters) / 0.3048;
        }else if(outputUnits.value === 'in'){
            resultInMeters = Number(resultInMeters) / 0.0254;
        }
        
        result.value = resultInMeters;
    })  
}