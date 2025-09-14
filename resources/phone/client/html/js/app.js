if (window.alt === undefined) {
    window.alt = {
        emit: () => { },
        on: () => { },
    };
}


let phoneOpened = false;

document.getElementById('call-app').onclick = onClickContactsApp;


function setTimePhone() {
    let phonebox = document.getElementById("timePhone");
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    let time = `${hours}:${minutes}`;
    phonebox.textContent = time;
}


function openPhone() {

    if (phoneOpened) {
        return;
    }

    let phonebox = document.getElementById("phonebox");

    phonebox.style.display = 'block';
    setTimePhone();

    phoneOpened = true;
}

function closePhone() {

    if (!phoneOpened) {
        return;
    }

    let phonebox = document.getElementById("phonebox");


    phonebox.style.display = 'none';

    phoneOpened = false;
}


function onClickContactsApp() {
    alt.emit("clickContactsApp", "Нажал на приложение");
}

alt.on("openPhone", openPhone);
alt.on("closePhone", closePhone);