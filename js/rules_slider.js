document.querySelector('.read-rules').onclick = function() {
    document.querySelector('.form-slider').style.marginLeft = '-250px';
};

document.querySelectorAll('.read-rules-back').forEach(function (element) {
    element.onclick = comeBack;
});

function comeBack() {
    document.querySelector('.form-slider').style.marginLeft = '0';
};