mapboxgl.accessToken = 'pk.eyJ1IjoiZnJlZHJpa2FrYXJsc3NvbiIsImEiOiJjamRkZmVkYWwwMHFnMnhyazhnZ2JodWNtIn0.v16TVqvsRkf2MfDQ5sQTkg';

function on_menu_clicked(){
    var menu_span = document.getElementsByClassName("menu-close")[0];
    var menu_modal = document.getElementById('menu');

    menu_modal.style.display = "block";

    menu_span.onclick = function() {
        menu_modal.style.display = "none";
    }
}

function remove(array, element) {
    var index = -1;

    for (var i = 0; i < array.length; i++) {
        if (element['properties']['name'] == array[i]['properties']['name']) {
            index = i;
            break;
        }
    }

    if (index !== -1) {
        array.splice(index, 1);
    }
}

var acc = document.getElementsByClassName("accordion");
var panels = document.getElementsByClassName("panel")
var i, j;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        var panel = this.nextElementSibling;
        this.classList.toggle('active');
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }

        for (j = 0; j < panels.length; j++) {
            if (panels[j] != panel) {
               panels[j].style.display = "none";
            }
        }

        for (j = 0; j < panels.length; j++) {
            if (acc[j].classList != this.classList) {
                acc[j].classList.toggle('active', false)
            }
        }
    });
}

var geojson = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.021492,
                    55.615257
                ]
            },
            "properties": {
                "name": "Borrgatans Ateljéförening",
                "image_url": "images/borrgatan.jpg",
                "address_street": "Borrgatan 3",
                "address_city": "211 24 Malmö",
                "artists": [
                    {
                        "name": "Andreas Glad",
                        "insta": "https://www.instagram.com/andreas.glad/"
                    },
                    {
                        "name": "Ella Tillema",
                        "url": "http://www.ellatillema.se/",
                    },
                    {
                        "name": "Erik Fornander",
                        "insta": "https://www.instagram.com/skenliquidlights/"
                    },
                    {
                        "name": "Fredrik Norén",
                        "url": "http://www.fredriknoren.com/",
                    },
                    {
                        "name": "Fredrik Weerasinghe",
                        "url": "http://www.f-weera.com/"
                    },
                    {
                        "name": "Gabriel Bohm Calles",
                        "url": "https://gabrielbohmcalles.wordpress.com/",
                        "vimeo": "https://vimeo.com/260386023"
                    },
                    {
                        "name": "Magdolna Szabó",
                        "url": "http://www.enjoyscandinavianart.com/szm/english_infoszm.htm"
                    },
                    {
                        "name": "Malin Nilsson",
                        "url": "http://www.malinenilsson.com/",
                        "insta": "https://www.instagram.com/malinenilsson/"
                    },
                    {
                        "name": "Marit Lindberg",
                        "url": "http://www.maritlindberg.se/",
                        "insta": "https://www.instagram.com/lindberg.marit/",
                        "vimeo": "https://vimeo.com/user1424301"
                    },
                    /*{
                        "name": "Mattias Nordéus",
                        "url": "http://www.mattiasnordeus.se/"

                    },*/
                    {
                        "name": "Rina Eide L&oslash;vaasen",
                        "url": "https://www.rinaeidelovaasen.com/",
                        "insta": "https://www.instagram.com/rinaeidelovaasen/"
                    },
                    {
                        "name": "Sofia Wickman",
                        "url": "http://www.sofiawickman.com/",
                        "insta": "https://www.instagram.com/bobijaja/"

                    },
                ],
                "icon": "circle"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.024635,
                    55.598081
                ]
            },
            "properties": {
                "name": "Flöjen",
                "image_url": "images/flojen.jpg",
                "address_street": "Nobelvägen 125",
                "address_city": "212 15 Malmö",
                "artists": [
                    {
                        "name": "Andreas Knag-Danielsen",
                        "url": "http://www.andreasknag-danielsen.com/",
                        "insta": "https://www.instagram.com/b3ig3_com/"
                    },
                    /*{
                        "name": "Arngrímur Borgþórsson",
                        "url": "http://arngrimurborgthorsson.moonfruit.com/",
                        "insta": "https://www.instagram.com/aggiborg/"
                    },*/
                    {
                        "name": "Elin Bengtsson",
                        "url": "http://elinbengtson.tumblr.com/",
                        "insta": "https://www.instagram.com/elinbengtssonlikesthis/"
                    },
                    {
                        "name": "Ingvild Hovland Kaldal",
                        "url": "http://www.ingvildkaldal.com/",
                        "insta": "https://www.instagram.com/incomitvild/"
                    },
                    {
                        "name": "Johan Lundqwist",
                        "url": "http://johanlundqwist.com/",
                        "insta": "https://www.instagram.com/johanlundqwist/"
                    },
                    {
                        "name": "Jon Ek",
                        "url": "http://jonek.nu",
                        "insta": "https://www.instagram.com/jon_ek/"
                    },
                    {
                        "name": "Kah Bee Chow",
                        "url": "http://www.kahbeechow.com/",
                        "insta": "https://www.instagram.com/kbc___/"
                    },
                    {
                        "name": "Karin Granstrand",
                        "url": "http://www.karingranstrand.com/",
                        "insta": "https://www.instagram.com/karingranstrand/"
                    },
                    {
                        "name": "Karolina Erlingsson",
                        "url": "http://www.karolinaerlingsson.com/",
                        "insta": "https://www.instagram.com/k_erling/"
                    },
                    {
                        "name": "Lena Bergendahl",
                        "url": "http://www.lenabergendahl.se/",
                        "insta": "https://www.instagram.com/lena_christina/"
                    },
                    {
                        "name": "Maria E Harrysson",
                        "url": "http://ariah.se",
                        "insta": "https://www.instagram.com/ariaharry/"
                    },
                    {
                        "name": "Melissa Henderson",
                        "url": "http://www.melissahenderson.co.uk/",
                        "insta": "https://www.instagram.com/melissa_henderson_artist/"
                    },
                    {
                        "name": "Olof Martin Nimar",
                        "url": "http://www.olofnimar.com/",
                    },
                    /*{
                        "name": "Stefan Narancic",
                        "url": "http://ncic.tumblr.com/",
                        "insta": "https://www.instagram.com/ncic/"
                    },*/
                    {
                        "name": "Susanne Svantesson",
                        "url": "https://susannesvantesson.com/",
                        "insta": "https://www.instagram.com/sus___art/"
                    },
                    {
                        "name": "Timja Femling",
                        "url": "http://timjafemling.com/",
                        "insta": "https://www.instagram.com/timja_femling/"
                    },
                    /*{
                        "name": "Tina Kryhlmann",
                        "url": "",
                        "insta": ""
                    }*/
                ],
                "icon": "circle"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.034905,
                    55.599549
                ]
            },
            "properties": {
                "name": "Alta",
                "image_url": "images/alta.jpg",
                "address_street": "Celsiusgatan 40",
                "address_city": "212 14 Malmö",
                "accessible": true,
                "artists": [
                    {
                        "name": "André Talborn",
                        "url": "http://andretalborn.se/",
                    },
                    {
                        "name": "Ida Persson",
                        "url": "https://sites.google.com/site/idapatriciapersson/",
                    },
                    {
                        "name": "Jens August Lindqvist",
                        "url": "http://whathasthefutureeverdoneforus.virb.com/",
                        "insta": "https://www.instagram.com/yeppasss/"
                    },
                    {
                        "name": "Julia Selin",
                        "url": "http://juliaselin.com/",
                        "insta": "https://www.instagram.com/juliaselindion/"
                    },
                    {
                        "name": "Matti Sumari",
                        "url": "http://mattisumari.com/",
                        "insta": "https://www.instagram.com/mattisumari"
                    },
                    {
                        "name": "Petter Dahlström Persson",
                        "url": "http://www.petterdahlstrom.se/",
                        "insta": "https://www.instagram.com/petterthanever"
                    },
                    {
                        "name": "Stina Malmqvist",
                        "url": "http://stinamalmqvist.se/",
                        "insta": "https://www.instagram.com/stn_sdrbrg/"
                    }
                ],
                "icon": "circle"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.044342,
                    55.607580
                ]
            },
            "properties": {
                "name": "Ateljéföreningen Stegrande Hästen",
                "image_url": "images/elias.jpg",
                "address_street": "Musketörgatan 13A",
                "address_city": "212 43 Malmö",
                "artists": [
                    /*{
                        "name": "EvaMarie Lindahl",
                        "url": "http://www.evamarielindahl.com/",
                        "insta": "https://www.instagram.com/evamarie_lindahl_studio/"
                    },*/
                    {
                        "name": "Hanna Una Holmquist",
                        "url": "http://www.hannaunaholmquist.com/",
                        "insta": ""
                    },
                    {
                        "name": "Nike Åkerberg",
                        "url": "https://nikeakerberg.weebly.com/",
                        "insta": "https://www.instagram.com/nikeakerberg/"
                    },
                ],
                "icon": "circle"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.027674,
                    55.584908
                ]
            },
            "properties": {
                "name": "24:ans Kulturförening",
                "image_url": "images/sing.jpg",
                "address_street": "Norbergsgatan 24",
                "address_city": "214 50 Malmö",
                "artists": [
                    {
                        "name": "Anni Tuikka",
                        "url": "http://www.annituikka.com/",
                        "insta": "https://www.instagram.com/annituikka/"
                    },
                    {
                        "name": "Torkel Tirén",
                        "url": "https://lostaswellasfound.tumblr.com/",
                        "insta": "https://www.instagram.com/torkeltiren/"
                    }
                ],
                "icon": "circle"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.027423,
                    55.600472
                ]
            },
            "properties": {
                "name": "Ateljéföreningen 125",
                "image_url": "images/celsiusg.jpg",
                "address_street": "Celsiusgatan 29",
                "address_city": "212 14 Malmö",
                "artists": [
                    {
                        "name": "Antje Nilsson",
                        "url": "http://antjenilsson.se/",
                        "insta": "https://www.instagram.com/antje_nilsson/"
                    },
                    {
                        "name": "Benjamin Andersson",
                        "url": "http://www.benjaminandersson.com/",
                        "insta": "https://www.instagram.com/bjorn.sebastian.benjamin/"
                    },
                    {
                        "name": "David Krantz",
                        "url": "http://produkter.nu/"
                    },
                    {
                        "name": "Kinn Lykke C Hjelmblink",
                        "url": "http://kinnhjelmblink.blogspot.se/",
                        "insta": "https://www.instagram.com/kinnlykke/"
                    },
                    {
                        "name": "Mårten Nilsson",
                        "url": "http://martennilsson.dinstudio.se/",
                        "insta": "https://www.instagram.com/marten.nilsson.71/"
                    },
                    {
                        "name": "Stina Lindskog",
                        "url": "http://stinalindskog.com/"
                    }
                ],
                "icon": "circle"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.034726,
                    55.598531
                ]
            },
            "properties": {
                "name": "Celsius Projects",
                "image_url": "images/celsius.jpg",
                "address_street": "Celsiusgatan 45",
                "address_city": "212 14 Malmö",
                "accessible": true,
                "artists": [
                    {
                        "name": "Cilla Annica Kristin Johansson",
                        "url": "https://www.annicajo.se/"
                    },
                    {
                        "name": "Francis Patrick Brady",
                        "url": "https://francis-patrick-brady.co.uk/",
                        "insta": "https://www.instagram.com/stanislawlem/"
                    },
                    {
                        "name": "Hanni Kamaly",
                        "insta": "https://www.instagram.com/hannikamaly/"
                    },
                    {
                        "name": "Hampus Hagnell",
                    },
                    {
                        "name": "Hedda Hørran",
                        "url": "http://www.heddahorran.com/",
                        "insta": "https://www.instagram.com/heddahorran/"
                    },
                    {
                        "name": "Johan F Karlsson",
                        "url": "http://www.johanfkarl.com/",
                        "insta": "https://www.instagram.com/johanfkarl/"
                    },
                    {
                        "name": "Max Ockborn",
                        "url": "http://www.maxockborn.com/",
                        "insta": "https://www.instagram.com/maxockborn/"
                    },

                ],
                "icon": "circle"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.031522,
                    55.598521
                ]
            },
            "properties": {
                "name": "ADDO",
                "image_url": "images/addo.jpg",
                "address_street": "Industrigatan 20 J",
                "address_city": "212 14 Malmö",
                "accessible": true,
                "artists": [
                     {
                        "name": "Albin Wiberg",
                        "url": "http://www.albinwiberg.com/",
                        "insta": "https://www.instagram.com/albinwibergcom/"
                    },
                    {
                        "name": "Ann Blom",
                        "url": "http://www.annblom.se/"
                    },
                    {
                        "name": "Anna Bring",
                        "url": "http://www.annabring.se/"
                    },
                    {
                        "name": "Bertil Kaa Hedberg",
                        "url": "http://www.bertilkaahedberg.se/"
                    },
                    {
                        "name": "Elizabet Thun",
                    },
                    {
                        "name": "Gert Petersson"
                    },
                    {
                        "name": "Lis Kläpp",
                        "url": "http://lisklapp.com/"
                    },
                    {
                        "name": "Jamila Drott",
                        "url": "http://www.jamiladrott.com/",
                        "insta": "https://www.instagram.com/jamiladrott/"
                    },
                    {
                        "name": "Majlis Agbeck",
                        "url": "http://www.majlisagbeck.se/"
                    },
                    {
                        "name": "Mats Kläpp",
                        "url": "http://matsklapp.com/",
                    },
                    {
                        "name": "Niki Cervin",
                        "url": "http://www.nikicervin.com/",
                        "insta": "https://www.instagram.com/nikicervin/"
                    },
                    {
                        "name": "Patrik Gyllander",
                        "url": "http://www.patrikgyllander.se/",
                        "insta": "https://www.instagram.com/pagyll"
                    },
                    {
                        "name": "Peter Land",
                        "url": "http://peterland.dk/",
                        "insta": "https://www.instagram.com/land124"
                    },
                    {
                        "name": "Peter Wallström",
                        "url": "http://www.peterwallstrom.se/",
                        "insta": "https://www.instagram.com/peterpainterwallstrom/"
                    },
                    {
                        "name": "Pia Hansson",
                        "url": "http://www.piahansson.se/",
                    },
                    {
                        "name": "Thomas Ingre"
                    },
                    {
                        "name": "Torsten Hylander",
                        "url": "http://www.torstenhylander.se/",
                    },
                    {
                        "name": "Ulf Stålhane",
                        "url": "http://www.stalhane.se/",
                        "insta": "https://www.instagram.com/ulf_stalhane"
                    }
                ],
                "icon": "circle"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.023952,
                    55.594050
                ]
            },
            "properties": {
                "name": "CirkulationsCentralen",
                "image_url": "images/cc.jpg",
                "address_street": "Spånehusvägen 83",
                "address_city": "214 39 Malmö",
                "accessible": true,
                "artists": [
                    {
                        "name": "Amanda Chanfreau",
                        "url": "https://www.amandachanfreau.com/",
                        "insta": "https://www.instagram.com/amandachanfreau/"
                    },
                    {
                        "name": "Björn Carnemalm",
                        "url": "http://www.bjorncarnemalm.com/",
                    },
                    {
                        "name": "Elisabeth Frick",
                        "url": "http://www.elisabetfrick.com/",
                        "insta": "https://www.instagram.com/elisabetfrick/"
                    },
                    {
                        "name": "Järda Boström",
                        "insta": "https://www.instagram.com/valvalvalar/"
                    },
                    {
                        "name": "Ingeborg Blom Andersskog",
                        "url": "https://www.ingeborgblom.com/",
                        "insta": "https://www.instagram.com/ingeborgbloma/"
                    },
                    {
                        "name": "Ingrid Sandsborg",
                        "url": "http://www.ingridsandsborg.com/",
                        "insta": "https://www.instagram.com/ingridsandsborg/"
                    },
                    {
                        "name": "Jonas Silfversten Bergman",
                        "url": "http://jonas.silfversten.se/",
                        "insta": "https://www.instagram.com/jsilfversten/"
                    },
                    {
                        "name": "Magdalena Perers",
                        "url": "https://magdalenaperers.wordpress.com/",
                        "insta": "https://www.instagram.com/magdalenaperers/"
                    },
                    {
                        "name": "Øyvind Novak Jenssen",
                        "url": "http://oyvindnovak.com/",
                        "insta": "https://www.instagram.com/kloakkmensen/"
                    }
                ],
                "icon": "circle"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.007875,
                    55.589104
                ]
            },
            "properties": {
                "name": "FRANK",
                "image_url": "images/frank.jpg",
                "address_street": "Ahlmansgatan 3",
                "address_city": "214 26 Malmö",
                "artists": [
                    {
                        "name": "Björn Delgård",
                        "insta": "https://www.instagram.com/grenarfinnsdetgottom/",
                    },
                    {
                        "name": "Filip Rahim Hansson",
                        "insta": "https://www.instagram.com/filiprahimhansson/"
                    },
                    {
                        "name": "Julia Alfe Bylund",
                    },
                    {
                        "name": "Madeleine Svedlund",
                        "insta": "https://www.instagram.com/madeleinesillustration/"
                    },
                    {
                        "name": "Malin Eng",
                        "url": ""
                    },
                    {
                        "name": "Nika Johnsson",
                        "url": "https://www.nikajohnsson.se/",
                        "insta": "https://www.instagram.com/nikajohnsson/"
                    },
                    {
                        "name": "Per Wisaeus",
                        "insta": "https://www.instagram.com/peramik/"
                    },
                    {
                        "name": "Thomas Romlöv",
                        "url": "http://kubkub.org/",
                    },
                    {
                        "name": "Tove Rubensson",
                    }
                ],
                "icon": "circle"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.012064,
                    55.584150
                ]
            },
            "properties": {
                "name": "Konstnärshotellet",
                "image_url": "images/hotellet.jpg",
                "address_street": "Bragegatan 15",
                "address_city": "214 30 Malmö",
                "artists": [
                    {
                        "name": "Carin Carlsson",
                        "url": "http://www.carincarlsson.se/",
                        "insta": "https://www.instagram.com/carincarlsson.se/"
                    },
                    {
                        "name": "Carla Zaccagnini"
                    },
                    {
                        "name": "David Nilson",
                        "url": "http://davidnilson.com/",
                        "insta": "https://www.instagram.com/nilsondavidnilson/"
                    },
                    {
                        "name": "Helena Fernandez-Cavada",
                        "url": "http://www.helenafc.com/",
                    },
                    {
                        "name": "Jan Cardell",
                        "url": "http://www.jancardell.se/"
                    },
                    {
                        "name": "Kristian Körner",
                        "url": ""
                    },
                    {
                        "name": "Robert Moreau",
                        "insta": "https://www.instagram.com/robmor100/"
                    },
                    {
                        "name": "Sebastian Franzén",
                        "url": "http://dark-hobby.tumblr.com/",
                        "insta": "https://www.instagram.com/realloveisscary/"
                    },
                ],
                "icon": "circle"
            }
        },
        /*{
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.010945,
                    55.583615
                ]
            },
            "properties": {
                "name": "KKV Grafik",
                "image_url": "images/grafik.jpg",
                "address_street": "Västmanlandsgatan 3",
                "address_city": "214 30 Malmö",
                "artists": [
                ],
                "icon": "circle"
            }
        },*/
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.027465,
                    55.587680
                ]
            },
            "properties": {
                "name": "Elvira Varghans",
                "image_url": "images/elvira.jpg",
                "address_street": "Norra Grängesbergsgatan 4 2nd floor",
                "address_city": "214 44 Malmö",
                "artists": [
                    {
                        "name": "Elvira Varghans",
                        "url": "https://varghans.tumblr.com/",
                        "insta": "https://www.instagram.com/gtsalong/"
                    },
                ],
                "icon": "circle"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    12.979345,
                    55.596112
                ]
            },
            "properties": {
                "name": "Döden, Döden",
                "image_url": "images/doden.jpg",
                "address_street": "Fågelbacksgatan 33A",
                "address_city": "217 44 Malmö",
                "artists": [
                    {
                        "name": "Camilla Edström Ödemark",
                        "url": "http://www.edstromodemark.com/",
                        "vimeo": "https://vimeo.com/edstromodemark",
                        "insta": "https://www.instagram.com/lifebile_ads/"
                    },
                    {
                        "name": "Loui Kuhlau",
                        "url": "http://www.louikuhlau.com/",
                        "insta": "https://www.instagram.com/loui.kuhlau/"
                    },
                ],
                "icon": "circle"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.038809,
                    55.607480
                ]
            },
            "properties": {
                "name": "Håkan Magnusson",
                "image_url": "images/hakan.jpg",
                "address_street": "Södra Bulltoftavägen 25:20",
                "address_city": "212 22 Malmö",
                "artists": [
                    {
                        "name": "Håkan Magnusson",
                        "url": "https://håkanmagnusson.se/"
                    },
                    {
                        "name": "C.F Dahl",
                        "url": "http://www.cfdahl.com/cfdahl/Home.html",
                        "insta": "https://www.instagram.com/c.f.dahl/"

                    }
                ],
                "icon": "circle"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    12.974299,
                    55.589753
                ]
            },
            "properties": {
                "name": "Ewa Berg",
                "image_url": "images/ewa.jpg",
                "address_street": "Marieholmsvägen 12",
                "address_city": "217 63 Malmö",
                "artists": [
                    {
                        "name": "Ewa Berg",
                        "url": ""
                    },
                ],
                "icon": "circle"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    12.975604,
                    55.589317
                ]
            },
            "properties": {
                "name": "Bertil Petersson",
                "image_url": "images/bertill.jpg",
                "address_street": "Marieholmsvägen 19",
                "address_city": "217 63 Malmö",
                "accessible": true,
                "artists": [
                    {
                        "name": "Bertil Petersson",
                        "url": "http://bertil-petersson.se",
                        "insta": "https://www.instagram.com/bertilpetersson2888/"
                    },
                ],
                "icon": "circle"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    12.972033,
                    55.589310
                ]
            },
            "properties": {
                "name": "Monika Gora",
                "image_url": "images/gora.jpg",
                "address_street": "Vilebovägen 4a",
                "address_city": "217 63 Malmö",
                "artists": [
                    {
                        "name": "Monika Gora",
                        "url": "http://gora.se/",
                        "insta": "https://www.instagram.com/monikagora/"
                    },
                ],
                "icon": "circle"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.000102,
                    55.597594
                ]
            },
            "properties": {
                "name": "Niklas Asker",
                "image_url": "images/niklas.jpg",
                "address_street": "Davidshallsgatan 25a 2nd Floor",
                "address_city": "211 45 Malmö Doorbell Niklas Asker",
                "artists": [
                    {
                        "name": "Niklas Asker",
                        "url": "http://www.niklasasker.se/",
                        "insta": "https://www.instagram.com/niklasasker/"
                    },
                ],
                "icon": "circle"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.044614,
                    55.578612
                ]
            },
            "properties": {
                "name": "Studio Annatopia",
                "image_url": "images/anna.jpg",
                "address_street": "Örnehuvuds väg 23",
                "address_city": "213 62 Malmö",
                "artists": [
                    {
                        "name": "Anna Brag",
                        "url": "http://www.annabrag.com/",
                        "insta": "https://www.instagram.com/studio.annatopia/"
                    },
                ],
                "icon": "circle"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.002670,
                    55.592676
                ]
            },
            "properties": {
                "name": "Mimmi Montán",
                "image_url": "images/mimmi.jpg",
                "address_street": "Kapellgatan 14 U4",
                "address_city": "214 21 Malmö Doorbell 53",
                "artists": [
                    {
                        "name": "Mimmi Montán",
                        "url": "https://mimmimontan.squarespace.com/",
                        "insta": "https://www.instagram.com/mimmi.montan/"
                    },
                ],
                "icon": "circle"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.026181,
                    55.584341
                ]
            },
            "properties": {
                "name": "Rum Nummer 5",
                "image_url": "images/rum5.jpg",
                "address_street": "Västanforsgatan 21",
                "address_city": "214 50 Malmö",
                "artists": [
                    {
                        "name": "Gabbie Barck",
                        "insta": "https://www.instagram.com/tasteofsoil/",
                        "url": "http://gabbart.se/"
                    },
                    {
                        "name": "Sarah Button",
                        "url": "https://www.sarahbutton.se/",
                        "insta": "https://www.instagram.com/lightsthatnevergoout/"
                    },
                ],
                "icon": "circle"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.029595,
                    55.593823
                ]
            },
            "properties": {
                "name": "Per Johansson",
                "image_url": "images/per.jpg",
                "address_street": "Sorgenfrivägen 57",
                "address_city": "214 38 Malmö",
                "artists": [
                    {
                        "name": "Per Johansson",
                        "url": "http://www.konstnarperjohansson.se/",
                        "insta": "https://www.instagram.com/artistperjohansson/"
                    }
                ],
                "icon": "circle"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.000955,
                    55.603718
                ]
            },
            "properties": {
                "name": "Richard Krantz",
                "image_url": "images/richard.jpg",
                "address_street": "Per Weijersgatan 2",
                "address_city": "211 34 Malmö",
                "artists": [
                    {
                        "name": "Richard Krantz",
                        "url": "http://www.richardkrantz.org/",
                        "insta": "https://www.instagram.com/krantzify/"
                    }
                ],
                "icon": "circle"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.031448,
                    55.597859
                ]
            },
            "properties": {
                "name": "Studio Mitkovic",
                "image_url": "images/mitkovic.jpg",
                "address_street": "Industrigatan 19",
                "address_city": "212 14 Malmö",
                "accessible": true,
                "artists": [
                    {
                        "name": "Sladjana Mitkovic",
                        "url": "http://www.mitkovic.se/",
                        "insta": "https://www.instagram.com/studio_mitkovic/"
                    }
                ],
                "icon": "circle"
            }
        }
    ]
};

var descr = `<a><a style="color:#00966E;text-decoration:none;"><i class="fas fa-map-marker-alt fa-fw"></i></a>{0}</a>`;
var times = `{0}`

var bus_stops =   {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.008575,
                    55.589104
                ]
            },
            "icon": "circle",
            "properties": {
                "description": descr.replace("{0}", "Ahlmansgatan 3"),
                "times": times.replace("{0}", "12:30 13:13 13:55 14:38 <br>15:16 16:24 16:44 17:24 <br>17:45 18:05")
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.012764,
                    55.584150
                ]
            },
            "icon": "circle",
            "properties": {
                "description": descr.replace("{0}", "Bragegatan 15"),
                "times": "12:34 13:17 13:59 14:42 <br>15:20 16:28 16:48 17:28 <br>17:59"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.045314,
                    55.578612
                ]
            },
            "icon": "circle",
            "properties": {
                "description": descr.replace("{0}", "Örnehuvuds väg 23"),
                "times":"12:39 13:22 14:04 14:47 <br>15:25 16:33 16:53 17:33 <br>18:04 "
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.028374,
                    55.584908
                ]
            },
            "icon": "circle",
            "properties": {
                "description": descr.replace("{0}", "Norbergsgatan 24"),
                "times": "12:45 13:28 14:10 14:53 <br>15:31 16:39 16:59 17:39"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.024652,
                    55.594050
                ]
            },
            "icon": "circle",
            "properties": {
                "description": descr.replace("{0}", "Spånehusvägen 83"),
                "times": "12:52 13:35 14:17 15:25 <br>15:45 16:25 16:46 17:06 <br>17:45"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.025335,
                    55.598081
                ]
            },
            "icon": "circle",
            "properties": {
                "description": descr.replace("{0}", "Nobelvägen 125"),
                "times": "12:55 13:38 14:20 15:28 <br>15:48 16:28 16:49 17:09 <br>17:48"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.034638,
                    55.598927
                ]
            },
            "icon": "circle",
            "properties": {
                "description": descr.replace("{0}", "Celsiusgatan 40"),
                "times": "12:58 13:41 14:23 15:31 <br>15:51 16:31 16:52 17:12 <br>17:51 18:13 18:15"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.028123,
                    55.600472
                ]
            },
            "icon": "circle",
            "properties": {
                "description": descr.replace("{0}", "Celsiusgatan 29"),
                "times": "13:01 13:44 14:26 15:34 <br>15:54 16:34 16:55 17:15"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.043061,
                    55.607108
                ]
            },
            "icon": "circle",
            "properties": {
                "description": descr.replace("{0}", "Södra Bulltoftavägen 51"),
                "times": "12:30 13:08 13:55 14:33 <br>15:41 16:01 16:41 17:02 <br>17:22"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.022192,
                    55.615257
                ]
            },
            "icon": "circle",
            "properties": {
                "description": descr.replace("{0}", "Borrgatan 3"),
                "times": "12:38 13:16 14:03 14:41 <br>15:49 16:09 16:49 17:10 <br>17:30"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.000802,
                    55.597594
                ]
            },
            "icon": "circle",
            "properties": {
                "description": descr.replace("{0}", "Davidshallsgatan 25A"),
                "times": "12:50 13:28 14:15 14:53 <br>16:01 16:21 17:01 17:22 <br>17:42"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    12.980045,
                    55.596112
                ]
            },
            "icon": "circle",
            "properties": {
                "description": descr.replace("{0}", "Fågelbacksgatan 33A"),
                "times": "13:00 13:38 14:25 15:03 <br>16:11 16:31 17:11 17:32 <br>17:52"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    12.977347,
                    55.590484
                ]
            },
            "icon": "circle",
            "properties": {
                "description": descr.replace("{0}", "Bus stop Solbacken"),
                "times": "13:03 13:41 14:28 15:06 <br>16:14 16:34 17:14 17:35 <br>17:55"
            }
        }
    ]
};

var coordinates = [
[13.021544, 55.615559],
[13.020432, 55.615452],
[13.020489, 55.614867],
[13.018123, 55.612854],
[13.018199, 55.611781],
[13.01742, 55.609505],
[13.01381, 55.609271],
[13.006694, 55.608639],
[13.005209, 55.608269],
[12.999502, 55.607779],
[12.99819, 55.607539],
[12.997246, 55.607202],
[12.992078, 55.606036],
[12.992772, 55.605274],
[12.99445, 55.602932],
[12.994758, 55.602518],
[12.995414, 55.601189],
[12.995684, 55.60035],
[12.996108, 55.597931],
[12.998625, 55.598015],
[12.999815, 55.598205],
[13.000697, 55.596783],
[12.997207, 55.597045],
[12.996279, 55.597168],
[12.994722, 55.596995],
[12.9933, 55.596565],
[12.992178, 55.596191],
[12.991677, 55.595863],
[12.990307, 55.595143],
[12.989596, 55.595486],
[12.988069, 55.595202],
[12.987403, 55.595152],
[12.986513, 55.595244],
[12.986143, 55.595277],
[12.985535, 55.595319],
[12.983624, 55.595344],
[12.98195, 55.595394],
[12.981654, 55.59537],
[12.979764, 55.595011],
[12.979661, 55.596003],
[12.97773, 55.595828],
[12.977951, 55.59355],
[12.977976, 55.592671],
[12.977976, 55.591953],
[12.977877, 55.591393],
[12.977689, 55.590977],
[12.977346, 55.590474],
[12.979588, 55.590043],
[12.983289, 55.589207],
[12.98521, 55.588697],
[12.985918, 55.588576],
[12.986658, 55.588382],
[12.990252, 55.587667],
[12.993525, 55.587048],
[12.996025, 55.586569],
[12.997409, 55.586417],
[12.998428, 55.586514],
[12.998718, 55.586351],
[12.999007, 55.586254],
[12.999393, 55.586272],
[12.999683, 55.586387],
[13.000048, 55.586442],
[13.00037, 55.586363],
[13.003674, 55.585223],
[13.005412, 55.584757],
[13.005842, 55.58491],
[13.006235, 55.585404],
[13.00629, 55.586052],
[13.006203, 55.586774],
[13.006061, 55.587822],
[13.005799, 55.589272],
[13.005732,55.590034],
[13.005807,55.590391],
[13.006147,55.590641],
[13.006642,55.591013],
[13.007015,55.591527],
[13.008655,55.591200],
[13.008332,55.590605],
[13.007779,55.589655],
[13.007485,55.589159],
[13.007523, 55.589155],
[13.009357, 55.588809],
[13.00891, 55.588088],
[13.011355, 55.587119],
[13.009729, 55.585867],
[13.008779, 55.58541],
[13.009216, 55.585157],
[13.010558, 55.58483],
[13.011541, 55.58462],
[13.013258, 55.584268],
[13.014654, 55.583998],
[13.016333, 55.583901],
[13.016984, 55.583842],
[13.01758, 55.583754],
[13.018474, 55.583646],
[13.01894, 55.583598],
[13.019101, 55.583608],
[13.019017, 55.584149],
[13.019019, 55.584141],
[13.025381, 55.581776],
[13.029347, 55.58033],
[13.032119, 55.57941],
[13.033327, 55.579094],
[13.036315, 55.578239],
[13.039595, 55.577261],
[13.043918, 55.576032],
[13.045163, 55.577312],
[13.04616, 55.578676],
[13.044969, 55.578731],
[13.043861, 55.578778],
[13.041659, 55.578872],
[13.040525, 55.578929],
[13.040109, 55.578197],
[13.039605, 55.577318],
[13.0396, 55.577334],
[13.039595, 55.577261],
[13.036315, 55.578239],
[13.033327, 55.579094],
[13.032119, 55.57941],
[13.029347, 55.58033],
[13.025381, 55.581776],
[13.025788, 55.582772],
[13.026424, 55.585067],
[13.028464, 55.584637],
[13.026424, 55.585067],
[13.026884, 55.586612],
[13.027311, 55.588092],
[13.027656, 55.589307],
[13.027969, 55.590439],
[13.027364, 55.592315],
[13.027395, 55.592433],
[13.027144, 55.593123],
[13.026811, 55.593123],
[13.026205, 55.593358],
[13.025485, 55.593624],
[13.024546, 55.593895],
[13.022887, 55.594267],
[13.02153, 55.594597],
[13.022869, 55.596198],
[13.024219, 55.597784],
[13.025303, 55.599388],
[13.030104, 55.598283],
[13.031052, 55.599824],
[13.031305, 55.599736],
[13.034427, 55.598999],
[13.034629, 55.598878],
[13.03475, 55.598895],
[13.034715, 55.59896],
[13.034398, 55.599015],
[13.031317, 55.599749],
[13.031052, 55.599843],
[13.027768, 55.600625],
[13.026363, 55.600995],
[13.028121, 55.603647],
[13.029773, 55.605799],
[13.030095, 55.605908],
[13.030159, 55.60615],
[13.030535, 55.606387],
[13.0315, 55.606878],
[13.033367, 55.607562],
[13.035287, 55.607605],
[13.039, 55.607659],
[13.040191, 55.607575],
[13.041178, 55.607496],
[13.043061, 55.607108],
[13.041178, 55.607496],
[13.040191, 55.607575],
[13.039, 55.607659],
[13.035287, 55.607605],
[13.033367, 55.607562],
[13.0315, 55.606878],
[13.030535, 55.606387],
[13.030159, 55.60615],
[13.029505, 55.606338],
[13.027863, 55.607356],
[13.026479, 55.608295],
[13.024419, 55.608465],
[13.022874, 55.60855],
[13.022284, 55.60855],
[13.021844, 55.608489],
[13.021329, 55.608441],
[13.020889, 55.608453],
[13.020406, 55.60855],
[13.020095, 55.608689],
[13.019591, 55.608859],
[13.019076, 55.609053],
[13.018046, 55.609271],
[13.01742, 55.609505]]

var bus_route =
    {
        "type": "geojson",
        "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "LineString",
                "coordinates": coordinates
            }
        }
    }


var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/fredrikakarlsson/cjddfkea6dlns2rlc3ehl7nrs', //hosted style id
    center: [13.009140, 55.604057], // starting position
    maxZoom: 14.9999,
    zoom: 11.5,
    minZoom: 11,
});

// Get the <span> element that closes the modal

var place_modal = document.getElementById('place');
var place_image = document.getElementById('place-image');
var place_text = document.getElementById('place-text');

map.on('load', function () {
    map.addLayer({
        "id": "places",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": geojson,
        },
        "layout": {
            "icon-image": "gray_circle",
            "icon-allow-overlap": true,
            "icon-size": 1
        }
    });
    map.addLayer({
        "id": "route",
        "type": "line",
        "source": bus_route,
        "layout": {
            "line-join": "round",
            "line-cap": "round",
        },
        "paint": {
            "line-color": "#00966E",
            "line-width": 3,
        },
        'minzoom': 13,
        'maxzoom': 20
    });

    var visited = {"type": "FeatureCollection",
        "features": []
    };

    map.addLayer({
        "id": "places_visited",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": visited,
        },
        "layout": {
            "icon-image": "circle_visited",
            "icon-allow-overlap": true,
            "icon-size": 1
        }
    });


    var non_visited = geojson;
    map.addLayer({
        "id": "places_black",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": non_visited,
        },
        "layout": {
            "icon-image": "gray_circle",
            "icon-allow-overlap": true,
            "icon-size": 1
        }
    });

    map.addLayer({
        "id": "places_hover",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": geojson,
        },
        "layout": {
            "icon-image": "circle_green",
            "icon-allow-overlap": true,
            "icon-size": 1,
        },
        "filter": ["==", "name", ""]
    });
    map.addLayer({
        "id": "stops",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": bus_stops,
        },
        "layout": {
            "icon-image": "bus-15",
            "icon-allow-overlap": true,
            "icon-size": 1.3,
        },
        'interactive' : false,
        'minzoom': 14.5,
        'maxzoom': 20
    });

    map.on('click', 'stops', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;
        var times = e.features[0].properties.times;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup({closeButton: false})
            .setLngLat(coordinates)
            .setHTML(description + "<br>" + times)
            .addTo(map);
    });

    map.on('mouseenter', 'stops', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'stops', function () {
        map.getCanvas().style.cursor = '';
    });

    map.on('click', 'places', function (e) {
        visited['features'].push(e['features'][0]);
        remove(non_visited['features'], e['features'][0]);
        map.getSource('places_visited').setData(visited);
        map.getSource('places_black').setData(non_visited);
        data = e['features'][0]['properties']
        place_modal.style.display = "block";
        place_image.innerHTML =
           '<img src="' + data["image_url"] +'" width="100%">' +
           '<span class="place-close"><img src="/images/icons/close.png" width=35px></span>'

        var artists = JSON.parse(data['artists'])
        var text = ""
        if ("accessible" in data) {
            text += '<span class="place-heading" >' + data['name'] + '<img align="right" src="/images/icons/accessible.png" width=25px  style="margin-right: 15px;margin-top: 11px"></span>\n'
        } else {
            text += '<span class="place-heading" >' + data['name'] + '</span>\n'
        }

        text += '<p style="font-family:dinAlternateBold;">' + data['address_street'] + "<br>" +  data['address_city'] + "</p> \n\n"
        for (var i=0; i < artists.length; i++) {
            var artist = artists[i]
            text += '<div>'
            if ("url" in artist && artist['url'] != "") {
                text += '<a class="alignleft" href="' + artist['url'] + '">' + artist['name'] + '</a>'
                if ("insta" in artist && artist["insta"] != "") {
                    text += '<a class="alignright" href="' + artist['insta'] + '"><i class="fab fa-instagram fa-fw"></i></a>'
                }
                if ("vimeo" in artist && artist["vimeo"] != "") {
                    text += '<a class="alignright" href="' + artist['vimeo'] + '"><i class="fab fa-vimeo-v fa-fw"></i></a>'
                }
                text += ' <br>'
            } else {
                text += artist['name']
                if ("insta" in artist && artist["insta"] != "") {
                    text += '<a class="alignright" href="' + artist['insta'] + '"><i class="fab fa-instagram fa-fw"></i></a>'
                }
                if ("vimeo" in artist && artist["vimeo"] != "") {
                    text += '<a class="alignright" href="' + artist['vimeo'] + '"><i class="fab fa-vimeo-v fa-fw"></i></a>'
                }
                text += ' <br>'
            }
             text += '<\div>'
        }
        place_text.innerHTML = text
        var place_span = document.getElementsByClassName("place-close")[0];
        // When the user clicks on <span> (x), close the modal
        place_span.onclick = function() {
            place_modal.style.display = "none";
            place_image.innerHTML = ""
            place_text.innerHTML = ""
        }
    });

     map.on("mousemove", "places", function(e) {
        map.setFilter("places_hover", ["==", "name", e.features[0].properties.name]);
    });

    // Reset the state-fills-hover layer's filter when the mouse leaves the layer.
    map.on("mouseleave", "places", function() {
        map.setFilter("places_hover", ["==", "name", ""]);
        map.getCanvas().style.cursor = '';
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'places', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    let height = window.screen.availHeight
    let width = window.screen.availWidth

    let default_zoom = Math.min(1.2/237 * height + 7.86,
                                1.2/1080 * width + 10.7)

    map.setZoom(default_zoom)
    map.setMaxBounds(map.getBounds());
    map.dragRotate.disable();
    map.touchZoomRotate.disableRotation();

    map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    }));

});