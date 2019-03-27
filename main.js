window.onload = init;

function init(){
    document.querySelector('#search')
        .addEventListener('click', search);

    document.querySelector('#display-all')
        .addEventListener('click', displayAll)
}

function search(event){
    event.preventDefault();
}

function displayAll(){
    event.preventDefault();
    const newList = document.createElement('ul');
    newList.className = 'tank-stats';
    for(let i = 0; i < data.length; i++){
        console.log('Nomenclature: ' + data[i].name)
        console.log('Country of Origin: ' + data[i].origin)
        console.log('Manufacturer: ' + data[i].manufacturer)
        console.log('Tonnage: ' + data[i].weight)
        console.log('Max speed: ' + data[i].speed + 'Mph')
        console.log('Gun caliber: ' + data[i].caliber + "mm")
        console.log('')
    }
}