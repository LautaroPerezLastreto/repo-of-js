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
        `<div class = "red" onclick= "clickEnRed(${myArray[i].id})">
        <a class="link-red" target= "_blank" href = "${myArray[i].url}"><h3>${myArray[i].name}</h3></a>
        </div>`;
    }
    document.getElementsByClassName('redes')[0].innerHTML = htmlAux;
    console.log(htmlAux);
} 

red();