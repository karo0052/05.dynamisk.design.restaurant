// variabel for rettens kategori
let dest_kategori = document.querySelector(".data-dest_kategori");
// variabel for rettens navn
let dest_navn = document.querySelector(".data-dest_navn");
// variabel for rettens pris
let dest_pris = document.querySelector(".data-dest_pris");
// variabel for rettens beskrivelse
let dest_beskrivelse = document.querySelector(".data-dest_beskrivelse");
// variabel for rettens billede
let dest_billede = document.querySelector(".mad_billede");

// variabel for alle retter
let menu;
// filtervariabel, der bruges til visning, hvor der ikke er filtreret efter klik - udgangspunktet for visningen
let kategoriFilter = "forretter";

// når DOM'en er hentet udføres funktionen start
document.addEventListener("DOMContentLoaded", start);

function start() {
    console.log("start");
    async function hentJson() {
        console.log("json");
        let dataJson = await fetch("json.json");
        menu = await dataJson.json();

        console.log(menu);
        visRetter();
    }

    // event listener, der lytter på, om der bliver trykket på burgermenuen
    document.querySelector(".menuknap").addEventListener("click", menuVisning);

    function menuVisning() {
        console.log("der er klikket på menuen");
        document.querySelector(".drop_down").classList.remove("display_none");
        document.querySelector(".om").addEventListener("click", () => {
            window.location.href = "index.html";
        });
        document.querySelector(".mad").addEventListener("click", () => {
            window.location.href = "mad.html";
        });
        document.querySelector(".lukknap").addEventListener("click", lukMenu);

    }

    function lukMenu() {
        console.log("luk menu");

        document.querySelector(".drop_down").classList.add("display_none");
    }

    // event listener, der lytter på, om der bliver klikket på logoet, hvorefter man sendes til index.html
    document.querySelector(".mad_logo").addEventListener("click", () => {
        window.location.href = "index.html";
    })



    // event listener, som lytter på, om desktop filtreringsmenuen bliver "hovered", hvorefter visHoverFiltrering udføres
    document.querySelector(".hover_filtrering").addEventListener("mouseover", visHoverFiltrering);

    function visHoverFiltrering() {
        console.log("hover filtrering");
        document.querySelector(".hover_filtrering").classList.remove("hover_vis");
        document.querySelector(".hover_filtrering").classList.remove("hover_skjul");
        document.querySelector(".hover_filtrering").classList.add("hover_vis");


        document.querySelector("#kategori").classList.remove("data-dest_kategori_placering");
        document.querySelector("#kategori").classList.remove("kategori_placering");

        document.querySelector("#kategori").classList.add("data-dest_kategori_placering");

        document.querySelector("#navn").classList.remove("data-dest_navn_placering");
        document.querySelector("#navn").classList.remove("navn_placering");

        document.querySelector("#navn").classList.add("data-dest_navn_placering");

        document.querySelector(".hover_filtrering").addEventListener("mouseout", skjulHoverFiltrering);
    }

    function skjulHoverFiltrering() {
        console.log("skjul hover filtrering");
        document.querySelector(".hover_filtrering").classList.remove("hover_skjul");
        document.querySelector(".hover_filtrering").classList.remove("hover_vis");
        document.querySelector(".hover_filtrering").classList.add("hover_skjul");



        document.querySelector("#kategori").classList.remove("kategori_placering");
        document.querySelector("#kategori").classList.add("kategori_placering");

        document.querySelector("#kategori").classList.remove("data-dest_kategori_placering");

        document.querySelector("#navn").classList.remove("navn_placering");
        document.querySelector("#navn").classList.add("navn_placering");

        document.querySelector("#navn").classList.remove("data-dest_navn_placering");

    }


    // event listener, som lytter på, når der bliver trykket på en af knapperne i  filtreringsmenuen, herefter udføres funktionen filtrering
    document.querySelectorAll(".menu-item").forEach(knap => {
        knap.addEventListener("click", filtrering);
    })

    // Viser desktop menuer - og skjuler mobile menuer - hvis skærmen er større end 1000
    if (window.innerWidth >= 1000) {

        // Skjuler mobile menuer
        document.querySelector(".drop_down").classList.add("display_none");
        document.querySelector(".ikoner").classList.add("skjul");

        // Viser desktop menuer
        document.querySelector(".menu_desktop_boks").classList.remove("skjul");
        document.querySelector(".menu_desktop_knapper").classList.remove("skjul");

        document.querySelector(".hover_filtrering").classList.remove("skjul");

        // Event listeners, der lytter på, om der bliver trykket på knapper i desktop menuen
        document.querySelector("#om").addEventListener("click", () => {
            window.location.href = "index.html";
        })
        document.querySelector("#mad").addEventListener("click", () => {
            window.location.href = "mad.html";
        })
    }

    // Giver det aktive menupunkt (desktop), mad en orange farve
    document.querySelector("#mad").classList.add("lysorange");

    function filtrering() {
        console.log("filtrering");
        // "visker tavlen ren"
        dest_navn.innerHTML = "";
        dest_kategori.textContent = "";
        dest_pris.textContent = "";

        kategoriFilter = this.getAttribute("data-kategori");
        console.log(kategoriFilter);
        visRetter();
    }

    function visRetter() {
        console.log("vis retter");

        // variabler for templates
        // templatevariabel for kategori
        let temp_kategori = document.querySelector(".data-template_kategori");
        // templatevariabel for navn
        let temp_navn = document.querySelector(".data-template_navn");
        // templatevariabel for pris
        let temp_pris = document.querySelector(".data-template_pris");
        // templatevariabel for beskrivelse
        let temp_beskrivelse = document.querySelector(".data-template_beskrivelse");
        // templatevariabel for billede
        let temp_billede = document.querySelector(".data-template_billede");


        // indsætter navnet på kategorien for de viste retter
        document.querySelector(".data-dest_kategori").textContent = kategoriFilter;

        // indeholder ting, der er specifikke for forretter
        // billeder til visning af mobile filtrerings-menu når forretter er aktiv
        if (kategoriFilter == "forretter") {
            document.querySelector(".forretter").innerHTML = "<img src='billeder/knapper/knap_forretter_pil.svg' alt='knap, der indikerer visning af forretter'>";
            document.querySelector(".hovedretter").innerHTML = "<img src='billeder/knapper/knap_hovedretter.svg' alt='knap til visning af hovedretter'>";

            document.querySelector(".desserter").innerHTML = "<img src='billeder/knapper/knap_desserter.svg' alt='knap til visning af desserter'>";

            document.querySelector(".drikkevarer").innerHTML = "<img src='billeder/knapper/knap_drikkevarer.svg' alt='knap til visning af drikkevarer'>";

            // billeder til visning af desktop filtrerings-menu når forretter er aktiv
            document.querySelector(".desktop_forretter").innerHTML = "<img src='billeder/knapper/desktop_knap_forretter_pil.svg' alt='knap, der indikerer visning af forretter'>";

            document.querySelector(".desktop_hovedretter").innerHTML = "<img src='billeder/knapper/desktop_knap_hovedretter.svg' alt='knap til visning af hovedretter'>";

            document.querySelector(".desktop_desserter").innerHTML = "<img src='billeder/knapper/desktop_knap_desserter.svg' alt='knap til visning af desserter'>";

            document.querySelector(".desktop_drikkevarer").innerHTML = "<img src='billeder/knapper/desktop_knap_drikkevarer.svg' alt='knap til visning af drikkevarer'>";

            // Giver kategorien en farve
            document.querySelector(".data-dest_kategori").classList.remove("lysorange");
            document.querySelector(".data-dest_kategori").classList.remove("dustyblue");
            document.querySelector(".data-dest_kategori").classList.remove("orange");
            document.querySelector(".data-dest_kategori").classList.remove("navy");

            document.querySelector(".data-dest_kategori").classList.add("navy");

            // hvis kategorien er forretter og skærmen er større end 1000 indsættes beskrivelsen for den første forret
            if (window.innerWidth >= 1000) {
                dest_beskrivelse.textContent = menu[0].beskrivelse;
            }
            // indsætter billedet for den første forret
            if (window.innerWidth >= 401) {
                document.querySelector(".mad_billede").innerHTML = "<img src='billeder/medium/kammuslinger-md.jpg' alt='billede af kammuslinger'>";
            } else {
                document.querySelector(".mad_billede").innerHTML = "<img src='billeder/small/kammuslinger-sm.jpg' alt='billede af kammuslinger'>";
            }

        }
        // indeholder ting, der er specifikke for hovedretter
        // billeder til visning af filtrerings-menu når hovedretter er aktiv
        if (kategoriFilter == "hovedretter") {
            document.querySelector(".forretter").innerHTML = "<img src='billeder/knapper/knap_forretter.svg' alt='knap, der indikerer visning af forretter'>";
            document.querySelector(".hovedretter").innerHTML = "<img src='billeder/knapper/knap_hovedretter_pil.svg' alt='knap til visning af hovedretter'>";

            document.querySelector(".desserter").innerHTML = "<img src='billeder/knapper/knap_desserter.svg' alt='knap til visning af desserter'>";
            document.querySelector(".drikkevarer").innerHTML = "<img src='billeder/knapper/knap_drikkevarer.svg' alt='knap til visning af drikkevarer'>";

            // billeder til visning af desktop filtrerings-menu når forretter er aktiv
            document.querySelector(".desktop_forretter").innerHTML = "<img src='billeder/knapper/desktop_knap_forretter.svg' alt='knap, der indikerer visning af forretter'>";

            document.querySelector(".desktop_hovedretter").innerHTML = "<img src='billeder/knapper/desktop_knap_hovedretter_pil.svg' alt='knap til visning af hovedretter'>";

            document.querySelector(".desktop_desserter").innerHTML = "<img src='billeder/knapper/desktop_knap_desserter.svg' alt='knap til visning af desserter'>";

            document.querySelector(".desktop_drikkevarer").innerHTML = "<img src='billeder/knapper/desktop_knap_drikkevarer.svg' alt='knap til visning af drikkevarer'>";

            // Giver kategorien en farve
            document.querySelector(".data-dest_kategori").classList.remove("lysorange");
            document.querySelector(".data-dest_kategori").classList.remove("dustyblue");
            document.querySelector(".data-dest_kategori").classList.remove("orange");
            document.querySelector(".data-dest_kategori").classList.remove("navy");

            document.querySelector(".data-dest_kategori").classList.add("dustyblue");

            // hvis kategorien er hovedretter og skærmen er større end 1000 indsættes beskrivelsen for den første hovedret
            if (window.innerWidth >= 1000) {
                dest_beskrivelse.textContent = menu[5].beskrivelse;
            }
            // indsætter billedet for den første forret
            if (window.innerWidth >= 401) {
                document.querySelector(".mad_billede").innerHTML = "<img src='billeder/medium/blæksprutte-md.jpg' alt='billede af blæksprutte ret'>";
            } else {
                document.querySelector(".mad_billede").innerHTML = "<img src='billeder/small/blæksprutte-sm.jpg' alt='billede af blæksprutte ret'>";
            }
        }
        // indeholder ting, der er specifikke for desserter
        // billeder til visning af filtrerings-menu når desserter er aktiv
        if (kategoriFilter == "desserter") {
            document.querySelector(".forretter").innerHTML = "<img src='billeder/knapper/knap_forretter.svg' alt='knap til visning af forretter'>";
            document.querySelector(".hovedretter").innerHTML = "<img src='billeder/knapper/knap_hovedretter.svg' alt='knap til visning af hovedretter'>";

            document.querySelector(".desserter").innerHTML = "<img src='billeder/knapper/knap_desserter_pil.svg' alt='knap til visning af desserter'>";

            document.querySelector(".drikkevarer").innerHTML = "<img src='billeder/knapper/knap_drikkevarer.svg' alt='knap til visning af drikkevarer'>";

            // billeder til visning af desktop filtrerings-menu når forretter er aktiv
            document.querySelector(".desktop_forretter").innerHTML = "<img src='billeder/knapper/desktop_knap_forretter.svg' alt='knap, der indikerer visning af forretter'>";

            document.querySelector(".desktop_hovedretter").innerHTML = "<img src='billeder/knapper/desktop_knap_hovedretter.svg' alt='knap til visning af hovedretter'>";

            document.querySelector(".desktop_desserter").innerHTML = "<img src='billeder/knapper/desktop_knap_desserter_pil.svg' alt='knap til visning af desserter'>";

            document.querySelector(".desktop_drikkevarer").innerHTML = "<img src='billeder/knapper/desktop_knap_drikkevarer.svg' alt='knap til visning af drikkevarer'>";

            // Giver kategorien en farve
            document.querySelector(".data-dest_kategori").classList.remove("lysorange");
            document.querySelector(".data-dest_kategori").classList.remove("dustyblue");
            document.querySelector(".data-dest_kategori").classList.remove("orange");
            document.querySelector(".data-dest_kategori").classList.remove("navy");

            document.querySelector(".data-dest_kategori").classList.add("lysorange");

            // hvis kategorien er hovedretter og skærmen er større end 1000 indsættes beskrivelsen for den første hovedret
            if (window.innerWidth >= 1000) {
                dest_beskrivelse.textContent = menu[14].beskrivelse;
            }
            // indsætter billedet for den første forret
            if (window.innerWidth >= 401) {
                document.querySelector(".mad_billede").innerHTML = "<img src='billeder/medium/cremepatissiere-md.jpg' alt='billede af dessert med creme patissiere'>";
            } else {
                document.querySelector(".mad_billede").innerHTML = "<img src='billeder/small/cremepatissiere-sm.jpg' alt='billede af dessert med creme patissiere'>";
            }
        }
        // indeholder ting, der er specifikke for drikkevarer
        // billeder til visning af filtrerings-menu når drikkevarer er aktiv
        if (kategoriFilter == "drikkevarer") {
            document.querySelector(".forretter").innerHTML = "<img src='billeder/knapper/knap_forretter.svg' alt='knap til visning af forretter'>";
            document.querySelector(".hovedretter").innerHTML = "<img src='billeder/knapper/knap_hovedretter.svg' alt='knap til visning af hovedretter'>";

            document.querySelector(".desserter").innerHTML = "<img src='billeder/knapper/knap_desserter.svg' alt='knap til visning af desserter'>";

            document.querySelector(".drikkevarer").innerHTML = "<img src='billeder/knapper/knap_drikkevarer_pil.svg' alt='knap til visning af drikkevarer'>";

            // billeder til visning af desktop filtrerings-menu når forretter er aktiv
            document.querySelector(".desktop_forretter").innerHTML = "<img src='billeder/knapper/desktop_knap_forretter.svg' alt='knap, der indikerer visning af forretter'>";

            document.querySelector(".desktop_hovedretter").innerHTML = "<img src='billeder/knapper/desktop_knap_hovedretter.svg' alt='knap til visning af hovedretter'>";

            document.querySelector(".desktop_desserter").innerHTML = "<img src='billeder/knapper/desktop_knap_desserter.svg' alt='knap til visning af desserter'>";

            document.querySelector(".desktop_drikkevarer").innerHTML = "<img src='billeder/knapper/desktop_knap_drikkevarer_pil.svg' alt='knap til visning af drikkevarer'>";

            // Giver kategorien en farve
            document.querySelector(".data-dest_kategori").classList.remove("lysorange");
            document.querySelector(".data-dest_kategori").classList.remove("dustyblue");
            document.querySelector(".data-dest_kategori").classList.remove("orange");
            document.querySelector(".data-dest_kategori").classList.remove("navy");

            document.querySelector(".data-dest_kategori").classList.add("orange");

            // hvis kategorien er hovedretter og skærmen er større end 1000 indsættes beskrivelsen for den første hovedret
            if (window.innerWidth >= 1000) {
                dest_beskrivelse.textContent = menu[19].beskrivelse;
            }
            // indsætter billedet for den første drikkevare
            if (window.innerWidth >= 401) {
                document.querySelector(".mad_billede").innerHTML = "<img src='billeder/medium/mimosa-md.jpg' alt='billede af mimosa cocktail'>";

            } else {
                document.querySelector(".mad_billede").innerHTML = "<img src='billeder/small/mimosa-sm.jpg' alt='billede af mimosa cocktail'>";
            }
        }

        // hvis der ikke er klikket på filtreringsmenuen, så vises forretter, ellers vises den kategori, der er klikket på

        // for hver ret vises rettens navn i en punktopstilling
        menu.forEach(ret => {
            if (ret.kategori == kategoriFilter) {
                let klon = temp_navn.cloneNode(true).content;
                klon.querySelector(".data-navn").innerHTML = "<li><span class='navy'>" + ret.navn + "</span></li>";
                console.log("navne indsat");

                // event listener, der lytte på, om der bliver klikket på en af retternes navn
                klon.querySelector(".data-navn").addEventListener("click", () => {
                    // hvis vinduet er større end 1000 indsættes rettens beskrivelse
                    if (window.innerWidth >= 1000) {
                        let klon = temp_beskrivelse.cloneNode(true).content;
                        dest_beskrivelse.textContent = "";
                        klon.querySelector(".data-beskrivelse").innerHTML = "<p> " + ret.beskrivelse + ".</p>";
                        console.log("beskrivelser indsat");
                        dest_beskrivelse.appendChild(klon);
                    }
                    // hvis vinduet er større end 1000 indsættes rettens billede i medium størrelse
                    if (window.innerWidth >= 1000) {
                        let klon = temp_billede.cloneNode(true).content;
                        document.querySelector(".mad_billede").innerHTML = "";
                        klon.querySelector(".data-billede").innerHTML =
                            "<img src='billeder/medium/" + ret.billede + "-md.jpg'>";
                        console.log("billede indsat");
                        //placer klon i html
                        dest_billede.appendChild(klon);

                    }
                    // hvis vinduet er større end 401 men mindre end 1000, udføres funktionen visModal
                    else if (window.innerWidth >= 401) {
                        visModal(ret);
                    }
                    // ellers vises retten i et singlepage view
                    else {
                        window.location.href = "single.html?id=" + ret.id;
                    }
                })

                dest_navn.appendChild(klon);
            }
        })
        // Hvis der ikke er klikket indsættes forretternes priser, ellers indsættes priser matchende den kategori, der er klikket på
        // for hver ret indsættes pris
        menu.forEach(ret => {
            if (ret.kategori == kategoriFilter) {
                let klon = temp_pris.cloneNode(true).content;
                klon.querySelector(".data-pris").textContent = ret.pris + ",-";
                console.log("priser indsat");
                //placer klon i html
                dest_pris.appendChild(klon);
            }
        })

    }

    function visModal(retten) {

        document.querySelector(".modal_knap").classList.remove("skjul");

        modal.classList.add("vis");
        //modal.classList.add("kanKlikke");
        console.log("klassetilføjet");

        modal.querySelector(".modal-billede").src = "billeder/medium/" + retten.billede + "-md.jpg";
        modal.querySelector(".modal-billede").alt = "foto af " + retten.navn;
        modal.querySelector(".modal-navn").textContent = retten.navn;
        modal.querySelector(".modal-beskrivelse").textContent = retten.beskrivelse;
        modal.querySelector(".modal-pris").textContent = retten.pris + ",-";
        modal.querySelector("button").addEventListener("click", skjulModal);

    }

    function skjulModal() {
        console.log("skjulModal");
        modal.classList.remove("vis");
    }
    // kalder funktionen hentJson, som indlæser data fra json-filen
    hentJson();
}
