console.log("js file is working..")

document.getElementById('add-to-list').onclick = function () {
    var list = document.getElementById('list');
    var newLI = document.createElement('li');
    newLI.innerHTML = 'some Item';
    list.appendChild(newLI);
    setTimeout(() => {
        newLI.className = newLI.className + " show";
    }, 10);
}

document.getElementById('yellow').addEventListener('click', (e) => {
    document.body.style.backgroundImage = "linear-gradient(to right bottom,#f5ee62,rgba(238, 156, 156, 0.87))"
})
document.getElementById('blue').addEventListener('click', (e) => {
    document.body.style.backgroundImage = "linear-gradient(to right bottom,#71d2fc,rgba(238, 156, 156, 0.87))"
})
document.getElementById('crimson').addEventListener('click', (e) => {
    document.body.style.backgroundImage = "linear-gradient(to right bottom,rgb(185, 32, 83),rgba(238, 156, 156, 0.87))"
})

