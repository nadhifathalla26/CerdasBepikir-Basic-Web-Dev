const cacheKey1 = "Number Soekarno";
if (typeof(Storage) !== "undefined") {
    // pengecekkan apakah data sessionStorage dengan key NUMBER tersedia atau belum
    if (localStorage.getItem(cacheKey1) === "undefined") {
        // Jika belum maka akan atur dengan nilai awal yakni 0
        localStorage.setItem(cacheKey1, 0);
    }
    let soekarno1 = document.querySelector("#soekarnobutton");
    let soekarno = document.querySelector("#soekarno");
    soekarno1.addEventListener('click', function(event) {
        let number = localStorage.getItem(cacheKey1);
        number++;
        localStorage.setItem(cacheKey1, number);
        soekarno.innerText = localStorage.getItem(cacheKey1);
    }); 
} 
else {
    alert("Browser tidak mendukung Web Storage")
}

const cacheKey2 = "Number Obama";
if (typeof(Storage) !== "undefined") {
    // pengecekkan apakah data sessionStorage dengan key NUMBER tersedia atau belum
    if (localStorage.getItem(cacheKey2) === "undefined") {
        // Jika belum maka akan atur dengan nilai awal yakni 0
        localStorage.setItem(cacheKey2, 0);
    }
    let obama1 = document.querySelector("#obamabutton");
    let obama = document.querySelector("#obama");
    obama1.addEventListener('click', function(event) {
        let number = localStorage.getItem(cacheKey2);
        number++;
        localStorage.setItem(cacheKey2, number);
        obama.innerText = localStorage.getItem(cacheKey2);
    });
} 
else {
    alert("Browser tidak mendukung Web Storage")
}

const cacheKey3 = "Number Mandela";
if (typeof(Storage) !== "undefined") {
    // pengecekkan apakah data sessionStorage dengan key NUMBER tersedia atau belum
    if (localStorage.getItem(cacheKey3) === "undefined") {
        // Jika belum maka akan atur dengan nilai awal yakni 0
        localStorage.setItem(cacheKey3, 0);
    }
    let mandela1 = document.querySelector("#mandelabutton");
    let mandela = document.querySelector("#mandela");
    mandela1.addEventListener('click', function(event) {
        let number = localStorage.getItem(cacheKey3);
        number++;
        localStorage.setItem(cacheKey3, number);
        mandela.innerText = localStorage.getItem(cacheKey3);
    });
} 
else {
    alert("Browser tidak mendukung Web Storage")
}