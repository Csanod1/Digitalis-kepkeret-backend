import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

class Kep{
    kepURL;
    kepSzelesseg;
    kepkeretVastagsag;
    kepkeretSzin;

    constructor(kepURL, kepSzelesseg, kepkeretVastagsag, kepkeretSzin){
        this.kepURL = kepURL;
        this.kepSzelesseg = kepSzelesseg;
        this.kepkeretVastagsag = kepkeretVastagsag;
        this.kepkeretSzin = kepkeretSzin;
    }
    get kepURL(){
        return this.kepURL
    }
    get kepSzelesseg(){
        return this.kepSzelesseg;
    }
    get kepkeretVastagsag(){
        return this.kepkeretVastagsag
    }
    get kepkeretSzin(){
        return this.kepkeretSzin;
    }
}

function darkMode(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}
document.getElementById("darkmode").addEventListener("click", darkMode);

function teszt(){
    console.log("Ez a teszt");
}
function kepURLChange(){
    console.log("TesztURLCHANge");
    console.log(document.getElementById("kepURLModositas").value);
    document.getElementById("kep").src = document.getElementById("kepURLModositas").value;
}
function kepWidthChange(){
    document.getElementById("kep").style.width = document.getElementById("kepSzelessegModositas").value + "px";
}
function kepkeretVastagsagChange(){
    document.getElementById("kep").style.border = document.getElementById("kepkeretVastagsagModositas").value + "px solid";
}
function kepkeretSzinChange(){
    document.getElementById("kep").style.borderColor = document.getElementById("kepkeretSzinModositas").value;
}
document.getElementById("tesztGomb").addEventListener("click", teszt);

document.getElementById("kepURLModositas").addEventListener("change", kepURLChange);
document.getElementById("kepSzelessegModositas").addEventListener("keyup", kepWidthChange);
document.getElementById("kepkeretVastagsagModositas").addEventListener("keyup", kepkeretVastagsagChange);
document.getElementById("kepkeretSzinModositas").addEventListener("keyup", kepkeretSzinChange);