window.onload = init;

function init(){
    document.querySelector('#search')
        .addEventListener('click', search);

    document.querySelector('#display-all')
        .addEventListener('click', displayAll);

    document.querySelector('#clear-list')
        .addEventListener('click', clearList);
    // This unlocks searching as you type....but be careful what you wish for!
    // document.querySelector('#search-input')
    //     .addEventListener('input', search);
}

function search(event){
    event.preventDefault();
    let input = document.querySelector('#search-input').value;

    for(let i = 0; i < data.length; i++){

        if(i === data.length || input === ''){
            for(let i = 0; i < fail.length; i++){
                failList(fail[i]);
            }
            return
        }else{

            for(let a = 0; a < data[i].searchTerms.length; a++){
                if(data[i].searchTerms[a].includes(input.toLowerCase())){
                    // console.log('found one')
                display(i);
                return
                }
            }
        }
        
    }
    
}


function display(i){
    let motherList = document.querySelector('#list');
    const newList = document.createElement('ul');
        newList.className = 'tank-stats';
    const newLine = document.createElement('li');

    // console.log('Nomenclature: ' + data[i].name)
    // console.log('Country of Origin: ' + data[i].origin)
    // console.log('Manufacturer: ' + data[i].manufacturer)
    // console.log('Tonnage: ' + data[i].weight)
    // console.log('Max speed: ' + data[i].speed + 'Mph')
    // console.log('Gun caliber: ' + data[i].caliber + "mm")
    // console.log('')

    let nameLine = document.createElement('li');
        nameLine.innerText = 'Nomenclature: ' + data[i].name;
    let countryLine = document.createElement('li');
        countryLine.innerText = 'Country of Origin: ' + data[i].origin;
    let manuLine = document.createElement('li');
        manuLine.innerText = 'Manufacturer: ' + data[i].manufacturer;
    let tonLine = document.createElement('li');
        tonLine.innerText = 'Tonnage: ' + data[i].weight;
    let speedLine = document.createElement('li');
        speedLine.innerText = 'Max speed: ' + data[i].speed + 'Mph';
    let gunLine = document.createElement('li');
        gunLine.innerText = 'Gun caliber: ' + data[i].caliber + 'mm';

    motherList.appendChild(newLine);
    newLine.appendChild(newList);
    newList.appendChild(nameLine);
    newList.appendChild(countryLine);
    newList.appendChild(manuLine);
    newList.appendChild(tonLine);
    newList.appendChild(speedLine);
    newList.appendChild(gunLine);
}

function displayAll(event){
    event.preventDefault();

    for(let i = 0; i < data.length; i++){
        display(i);
    }
}

function clearList(){
    let motherList = document.querySelector('#list');
    while(motherList.hasChildNodes){
        motherList.removeChild(motherList.firstChild);
    }
}

function failList(rule){
    let motherList = document.querySelector('#list');
    let newLine = document.createElement('li');
    newLine.innerText = rule
    motherList.appendChild(newLine);

}