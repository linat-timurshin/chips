let chips;
chips = (message, timeremove = 3000) => {
    // if (timeremove === undefined) timeremove = 3000;
    let chips = document.createElement('div');
    chips.classList.add('chips');
    chips.innerHTML = message;
    //document.querySelector('body').appendChild(chips);
    addChips(chips);
    let timeout = setTimeout(() => {
        deleteChips(chips)
    }, timeremove);
};

function deleteChips(chips) {
    chips.remove();
    let allChips = document.querySelectorAll('.chips-field .chips');
    if (allChips.length === 0) {
        document.querySelector('.chips-field').remove();
    } else {
        return;
    }
};

function addChips(chips) {
    let chipsField = document.querySelector('.chips-field');
    if (!chipsField) {
        let chipsField = document.createElement('div');
        chipsField.classList.add('chips-field');
        document.querySelector('body').appendChild(chipsField);
        chipsField.appendChild(chips);
    } else {
        chipsField.appendChild(chips);
    }
};

document.querySelector('button').onclick = () => {
    chips('Hello', 5000);
};