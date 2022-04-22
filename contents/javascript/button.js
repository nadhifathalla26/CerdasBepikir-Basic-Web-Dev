let soekarno1 = document.querySelector("#soekarnobutton");
let obama1 = document.querySelector("#obamabutton");
let mandela1 = document.querySelector("#mandelabutton");

soekarno1.addEventListener('click', function(event) {
    document.querySelector('#soekarno').innerText++;
});
obama1.addEventListener('click', function(event) {
    document.querySelector('#obama').innerText++;
});
mandela1.addEventListener('click', function(event) {
    document.querySelector('#mandela').innerText++;
});