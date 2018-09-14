// forside mobile portrait //

document.querySelector(".menuknap").addEventListener("click", menuVisning);

function menuVisning() {
    console.log("der er klikket på menuen");
    document.querySelector(".drop_down").classList.remove("display_none");


    document.querySelector(".om").addEventListener("click", om);
    document.querySelector(".mad").addEventListener("click", mad);
    document.querySelector(".lukknap").addEventListener("click", lukMenu);
}

function lukMenu() {
    console.log("luk menu");

    document.querySelector(".drop_down").classList.add("display_none");
}

function om() {
    console.log("der er klikket på om");

    //
    //    if (document.querySelector(".om_section").scrollIntoView == null) {
    //        console.log("null");
    //        window.location.href = "index.html";


    document.querySelector(".om_section").scrollIntoView({
        behavior: 'smooth'
    });

    document.querySelector(".drop_down").classList.add("display_none");
}

function mad() {
    console.log("der er klikket på mad");

    window.location.href = "mad.html";

    document.querySelector(".drop_down").classList.add("display_none");
}

// forside mobile portrait slut //
