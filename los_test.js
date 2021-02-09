let body = document.getElementsByTagName('body')[0];
$(document).keydown(function (event) {
    if (event.keyCode == 123) {
        return false;
    }
    else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
        return false;
    }
    else if (event.ctrlKey && event.keyCode == 85) {
        return false;
    }
});

$(document).on("contextmenu", function (e) {        
    e.preventDefault();
});

let classList = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
];

let generator = document.getElementById('generator');
let generated = document.getElementById('generated');
let generate = document.getElementById('generate');
function gen() {
    generate.style.visibility = 'hidden';
    generated.style.display = 'none';
    generator.style.display = 'block';
    setInterval(() => {
        let index = Math.floor(Math.random() * (classList.length - 1) + 1);
        generator.innerHTML = classList[index];
    }, 50);
    setTimeout(() => {
        generator.style.display = 'none';
        generated.style.display = 'block';
        let realClassList = [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
        ];
        let index = Math.floor(Math.random() * (realClassList.length - 1) + 1);
        generated.innerHTML = realClassList[index];
        generate.style.visibility = 'visible';
    }, 2000);
}