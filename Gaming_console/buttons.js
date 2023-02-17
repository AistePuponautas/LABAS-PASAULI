//Viršutinis (baltas) x mygtukas įjungia įrenginį ir televizoriuje atvaizduojama pasisveikinimo žinutė, 
//taip pat šis mygtukas atsakingas už konsolės išjugimą. Tuo atveju rodoma atsisveikinimo žinutė.

function greetings() {
    document.querySelector('.screen').style = ""
    document.querySelector('.screen').style.display = 'flex'
    document.querySelector('.screen').style.backgroundColor = 'red';
    document.querySelector('.screen').style.alignItems = 'center';
    document.querySelector('.screen').style.justifyContent = 'center';
    document.querySelector('.screen').innerHTML = `<span class="greets">Labas!</span>`;
}


//Y (geltonas) mygtukas įjungia televizijos programą. Patalpinkite šį kodą į televizoriaus rėmelį:
//<iframe width="100%" height="315" src="https://www.youtube.com/embed/y-28CssnqEE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

function video() {
    document.querySelector('.screen').style = ""
    document.querySelector('.screen').innerHTML = `<span><iframe width="100%" height="100%" src="https://www.youtube.com/embed/y-28CssnqEE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></span>`;
}
//B (raudonas) mygtukas grąžina vartotoją į pasisveikinimo ekraną.
//X (mėlynas) mygtukas atvaizduoja galimų nusipirkti žaidimų sąrašą. 
//Prie kiekvieno žaidimo rodoma nuotrauka, pavadinimas ir kaina. Žaidimus patalpinkite masyve.
const games = [
    {
        nuotrauka: `<img src="../Gaming_Console/assets/header.jpg"></img>`,
        pavadinimas: "Elden Ring",
        kaina: "49.99€"
    },
    {
        nuotrauka: `<img src="../Gaming_Console/assets/Red_Dead_Redemption_II.jpg"></img>`,
        pavadinimas: "Red Dead Redemption II",
        kaina: "59.99€"
    },
    {
        nuotrauka: `<img src="../Gaming_Console/assets/Fallout_New_Vegas.jpg"></img>`,
        pavadinimas: "Fallout: New Vegas",
        kaina: "19.99€"
    },
    {
        nuotrauka: `<img src="../Gaming_Console/assets/flt2.jpg"></img>`,
        pavadinimas: "Forklift Simulator",
        kaina: "59.99€"
    },
]

const rodytiProduktus = () => {
    document.querySelector('.screen').style = ""
    
    document.querySelector('.screen').innerHTML = `
    <span>
    <table class="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Pavadinimas</th>
                            <th>Kaina</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
    </span>`
    document.querySelector('tbody').innerHTML = '';

    games.forEach((produktas) => {
        document.querySelector('tbody').innerHTML += `
            <tr>
                <td>${produktas.nuotrauka}</td>
                <td>${produktas.pavadinimas}</td>
                <td>${produktas.kiekis}</td>
                
            </tr>
        `;
    });
}
//A (žalias) mygtukas įjungia google.com puslapį.
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe

function link() {
    document.querySelector('.screen').style = ""
    document.querySelector('.screen').innerHTML = `<span><iframe width="100%" height="100%" src="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe" title="Google link" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></span>`;
}