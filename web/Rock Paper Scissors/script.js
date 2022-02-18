function sang(){
    paly("سنگ")
}

function kaghaz(){
    paly("کاغذ")
}

function gheychi(){
    paly("قیچی")
}

function paly(user){
    var random = Math.floor(Math.random() *3)
    var halat = ["سنگ", "کاغذ", "قیچی"]
    var staus = "Lose"
    var com = halat[random]

    if (user == "سنگ" && com == "سنگ"){
        staus = "مساوی"

    }else if (user == "سنگ" && com == "کاغذ") {
        staus = "بازنده"

    }else if (user == "سنگ" && com == "قیچی") {
        staus = "برنده"

    } else if (user == "کاغذ" && com == "سنگ") {
        staus = "برنده"

    } else if (user == "کاغذ" && com == "کاغذ") {
        staus = "مساوی"

    } else if (user == "کاغذ" && com == "قیچی") {
        staus = "بازنده"

    } else if (user == "قیچی" && com == "سنگ") {
        staus = "بازنده"

    } else if (user == "قیچی" && com == "کاغذ") {
        staus = "برنده"

    } else if (user == "قیچی" && com == "قیچی") {
        staus = "مساوی"

    }

    document.getElementById("demo").innerHTML = ("شما " + staus + " شدید" + "\nکامپیوتر : " + com + " را انتخاب کرد ");
}