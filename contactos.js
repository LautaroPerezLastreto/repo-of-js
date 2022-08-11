function clickEnRed(id){
alert ("click en "+ id);
}
async function red() {
    const res = await fetch('data.json')
    const myArray = await res.json();
    let htmlAux = '';
    for (let i = 0; i < myArray.length; i++) {
        htmlAux =
        htmlAux +
        `<div onclick= "clickEnRed(${myArray[i].id})">
        <h3>${myArray[i].name}</h3>
        <a href = "${myArray[i].url}">${myArray[i].url}</a>
        </div>`;
    }
    document.getElementsByClassName('redes').innerHTML = htmlAux;
    console.log(htmlAux);
} 

red();