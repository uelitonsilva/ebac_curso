document.body.onclick = function() {
    BackgroundColor();
};

function BackgroundColor() {
    document.body.style.backgroundColor = trocaCor();
}

function trocaCor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}