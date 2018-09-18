import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Injectable()
export class AppGlobals {
    readonly version: string = '0.0.1';
    readonly db_version = 4;
    readonly name: string = 'Supernova';
    readonly algo: string = 'aes';
    readonly index: number = 10;
    network: string = null;
    readonly ADDRESS_PREFIX_MAINNET = 'M'
    readonly ADDRESS_PREFIX_P2SH = '3'
    readonly ADDRESS_PREFIX_TESTNET = 't'
    readonly ETPMap = '0xa52b0a032139e6303b86cfeb0bb9ae780a610354';
    readonly SwapAddress = '0xc1e5fd24fa2b4a3581335fc3f2850f717dd09c86';
    readonly crosschain_avatar = 'droplet'
    readonly bags_info = {
      "brand": [
        {
          "id": 34,
          "name": "3.1 PHILLIP LIM",
          "models": [
            {
              "id": 266,
              "name": "pashli",
              "brand_id": 34
            }
          ]
        },
        {
          "id": 311,
          "name": "A.G. SPALDING",
          "models": []
        },
        {
          "id": 208,
          "name": "AERONAUTICA MILITARE",
          "models": []
        },
        {
          "id": 275,
          "name": "ALA??A",
          "models": []
        },
        {
          "id": 32,
          "name": "ALEXANDER MCQUEEN",
          "models": [
            {
              "id": 262,
              "name": "heroine",
              "brand_id": 32
            },
            {
              "id": 263,
              "name": "knuckle",
              "brand_id": 32
            },
            {
              "id": 264,
              "name": "manta",
              "brand_id": 32
            },
            {
              "id": 265,
              "name": "skull",
              "brand_id": 32
            }
          ]
        },
        {
          "id": 97,
          "name": "ALEXANDER WANG",
          "models": []
        },
        {
          "id": 52,
          "name": "ALVIERO MARTINI PRIMA CLASSE",
          "models": []
        },
        {
          "id": 152,
          "name": "ANNARITA N",
          "models": []
        },
        {
          "id": 26,
          "name": "ANYA HINDMARCH",
          "models": [
            {
              "id": 250,
              "name": "ebury maxi",
              "brand_id": 26
            },
            {
              "id": 251,
              "name": "maxi zip",
              "brand_id": 26
            }
          ]
        },
        {
          "id": 163,
          "name": "AQUASCUTUM",
          "models": []
        },
        {
          "id": 282,
          "name": "ASPESI",
          "models": []
        },
        {
          "id": 270,
          "name": "AUTRE MARQUE",
          "models": []
        },
        {
          "id": 306,
          "name": "BADGLEY MISCHKA",
          "models": []
        },
        {
          "id": 206,
          "name": "BALDININI",
          "models": []
        },
        {
          "id": 5,
          "name": "BALENCIAGA",
          "models": [
            {
              "id": 122,
              "name": "bazaar bag",
              "brand_id": 5
            },
            {
              "id": 123,
              "name": "cabas",
              "brand_id": 5
            },
            {
              "id": 124,
              "name": "city",
              "brand_id": 5
            },
            {
              "id": 125,
              "name": "classic metalic",
              "brand_id": 5
            },
            {
              "id": 126,
              "name": "day",
              "brand_id": 5
            },
            {
              "id": 127,
              "name": "envelop",
              "brand_id": 5
            },
            {
              "id": 128,
              "name": "first",
              "brand_id": 5
            },
            {
              "id": 129,
              "name": "le dix",
              "brand_id": 5
            },
            {
              "id": 130,
              "name": "padlock",
              "brand_id": 5
            },
            {
              "id": 131,
              "name": "panier",
              "brand_id": 5
            },
            {
              "id": 132,
              "name": "papier",
              "brand_id": 5
            },
            {
              "id": 133,
              "name": "part time",
              "brand_id": 5
            },
            {
              "id": 134,
              "name": "pompon",
              "brand_id": 5
            },
            {
              "id": 135,
              "name": "velo",
              "brand_id": 5
            },
            {
              "id": 136,
              "name": "weekender",
              "brand_id": 5
            },
            {
              "id": 137,
              "name": "work",
              "brand_id": 5
            }
          ]
        },
        {
          "id": 177,
          "name": "BALLY",
          "models": []
        },
        {
          "id": 254,
          "name": "BANANA REPUBLIC",
          "models": []
        },
        {
          "id": 241,
          "name": "BELSTAFF",
          "models": []
        },
        {
          "id": 165,
          "name": "BERLUTI",
          "models": []
        },
        {
          "id": 223,
          "name": "BETTY BLUE",
          "models": []
        },
        {
          "id": 94,
          "name": "BLUGIRL-BLUMARINE",
          "models": []
        },
        {
          "id": 118,
          "name": "BLUMARINE",
          "models": []
        },
        {
          "id": 267,
          "name": "BOLDRINI SELLERIA",
          "models": []
        },
        {
          "id": 54,
          "name": "BORBONESE",
          "models": []
        },
        {
          "id": 286,
          "name": "BORSALINO",
          "models": []
        },
        {
          "id": 18,
          "name": "BOTTEGA VENETA",
          "models": [
            {
              "id": 232,
              "name": "boy",
              "brand_id": 18
            },
            {
              "id": 233,
              "name": "fourre-tout",
              "brand_id": 18
            },
            {
              "id": 234,
              "name": "olimpia",
              "brand_id": 18
            },
            {
              "id": 235,
              "name": "pochette knot",
              "brand_id": 18
            },
            {
              "id": 236,
              "name": "roma",
              "brand_id": 18
            },
            {
              "id": 237,
              "name": "veneta",
              "brand_id": 18
            }
          ]
        },
        {
          "id": 59,
          "name": "BRACCIALINI",
          "models": []
        },
        {
          "id": 304,
          "name": "BRAINTROPY",
          "models": []
        },
        {
          "id": 93,
          "name": "BRIC",
          "models": []
        },
        {
          "id": 317,
          "name": "BROOKSFIELD",
          "models": []
        },
        {
          "id": 131,
          "name": "BRUNO MAGLI",
          "models": []
        },
        {
          "id": 75,
          "name": "BULGARI",
          "models": []
        },
        {
          "id": 51,
          "name": "BURBERRY",
          "models": []
        },
        {
          "id": 197,
          "name": "BYBLOS",
          "models": []
        },
        {
          "id": 121,
          "name": "CALVIN KLEIN",
          "models": []
        },
        {
          "id": 232,
          "name": "CAMPOMAGGI",
          "models": []
        },
        {
          "id": 164,
          "name": "CAR SHOE",
          "models": []
        },
        {
          "id": 245,
          "name": "CARLA G.",
          "models": []
        },
        {
          "id": 280,
          "name": "CAROLINA HERRERA",
          "models": []
        },
        {
          "id": 30,
          "name": "CARTIER",
          "models": [
            {
              "id": 257,
              "name": "marcello",
              "brand_id": 30
            },
            {
              "id": 258,
              "name": "panthere",
              "brand_id": 30
            },
            {
              "id": 259,
              "name": "seau",
              "brand_id": 30
            }
          ]
        },
        {
          "id": 172,
          "name": "CASADEI",
          "models": []
        },
        {
          "id": 141,
          "name": "CATERINA LUCCHI",
          "models": []
        },
        {
          "id": 3,
          "name": "CELINE",
          "models": [
            {
              "id": 71,
              "name": "all soft",
              "brand_id": 3
            },
            {
              "id": 72,
              "name": "belt",
              "brand_id": 3
            },
            {
              "id": 73,
              "name": "blade",
              "brand_id": 3
            },
            {
              "id": 74,
              "name": "boogie",
              "brand_id": 3
            },
            {
              "id": 75,
              "name": "cabas phantom",
              "brand_id": 3
            },
            {
              "id": 76,
              "name": "classic",
              "brand_id": 3
            },
            {
              "id": 77,
              "name": "diamond clutch",
              "brand_id": 3
            },
            {
              "id": 78,
              "name": "edge",
              "brand_id": 3
            },
            {
              "id": 79,
              "name": "gourmette",
              "brand_id": 3
            },
            {
              "id": 80,
              "name": "gusset",
              "brand_id": 3
            },
            {
              "id": 81,
              "name": "hobo",
              "brand_id": 3
            },
            {
              "id": 82,
              "name": "luggage",
              "brand_id": 3
            },
            {
              "id": 85,
              "name": "ring",
              "brand_id": 3
            },
            {
              "id": 86,
              "name": "tie",
              "brand_id": 3
            },
            {
              "id": 87,
              "name": "trapeze",
              "brand_id": 3
            },
            {
              "id": 88,
              "name": "tri-fold",
              "brand_id": 3
            },
            {
              "id": 89,
              "name": "trio",
              "brand_id": 3
            },
            {
              "id": 90,
              "name": "trotteur",
              "brand_id": 3
            }
          ]
        },
        {
          "id": 183,
          "name": "CESARE PACIOTTI",
          "models": []
        },
        {
          "id": 2,
          "name": "CHANEL",
          "models": [
            {
              "id": 56,
              "name": "2.55",
              "brand_id": 2
            },
            {
              "id": 57,
              "name": "cambon",
              "brand_id": 2
            },
            {
              "id": 58,
              "name": "camera",
              "brand_id": 2
            },
            {
              "id": 59,
              "name": "coco cabas",
              "brand_id": 2
            },
            {
              "id": 60,
              "name": "coco cocoon",
              "brand_id": 2
            },
            {
              "id": 61,
              "name": "deauville",
              "brand_id": 2
            },
            {
              "id": 62,
              "name": "diana",
              "brand_id": 2
            },
            {
              "id": 63,
              "name": "gabrielle",
              "brand_id": 2
            },
            {
              "id": 64,
              "name": "graffiti",
              "brand_id": 2
            },
            {
              "id": 65,
              "name": "grand shopping",
              "brand_id": 2
            },
            {
              "id": 66,
              "name": "mademoiselle",
              "brand_id": 2
            },
            {
              "id": 67,
              "name": "medaillon",
              "brand_id": 2
            },
            {
              "id": 68,
              "name": "shopping",
              "brand_id": 2
            },
            {
              "id": 69,
              "name": "timeless",
              "brand_id": 2
            },
            {
              "id": 70,
              "name": "wallet on chain",
              "brand_id": 2
            }
          ]
        },
        {
          "id": 293,
          "name": "CHARLES JOURDAN",
          "models": []
        },
        {
          "id": 41,
          "name": "CHLO",
          "models": []
        },
        {
          "id": 288,
          "name": "CHOPARD",
          "models": []
        },
        {
          "id": 168,
          "name": "CHRISTIAN LACROIX",
          "models": []
        },
        {
          "id": 27,
          "name": "CHRISTIAN LOUBOUTIN",
          "models": [
            {
              "id": 252,
              "name": "paloma",
              "brand_id": 27
            },
            {
              "id": 253,
              "name": "riviera",
              "brand_id": 27
            },
            {
              "id": 254,
              "name": "sweet charity",
              "brand_id": 27
            }
          ]
        },
        {
          "id": 308,
          "name": "CINTI",
          "models": []
        },
        {
          "id": 119,
          "name": "CK CALVIN KLEIN",
          "models": []
        },
        {
          "id": 290,
          "name": "CLASS ROBERTO CAVALLI",
          "models": []
        },
        {
          "id": 314,
          "name": "CLAUDIO ORCIANI",
          "models": []
        },
        {
          "id": 228,
          "name": "CLIVE CHRISTIAN",
          "models": []
        },
        {
          "id": 25,
          "name": "COACH",
          "models": [
            {
              "id": 249,
              "name": "madison",
              "brand_id": 25
            }
          ]
        },
        {
          "id": 53,
          "name": "COCCINELLE",
          "models": []
        },
        {
          "id": 125,
          "name": "COLOMBO VIA DELLA SPIGA",
          "models": []
        },
        {
          "id": 298,
          "name": "CONVERSE ALL STAR",
          "models": []
        },
        {
          "id": 158,
          "name": "COURREG??S PARIS",
          "models": []
        },
        {
          "id": 114,
          "name": "CRUCIANI",
          "models": []
        },
        {
          "id": 42,
          "name": "D&G",
          "models": [
            {
              "id": 280,
              "name": "dolce & gabbana",
              "brand_id": 42
            }
          ]
        },
        {
          "id": 173,
          "name": "DAKS",
          "models": []
        },
        {
          "id": 28,
          "name": "DELVAUX",
          "models": [
            {
              "id": 255,
              "name": "le brillant",
              "brand_id": 28
            }
          ]
        },
        {
          "id": 262,
          "name": "DESIGNINVERSO",
          "models": []
        },
        {
          "id": 100,
          "name": "DESIGUAL",
          "models": []
        },
        {
          "id": 184,
          "name": "DESMO",
          "models": []
        },
        {
          "id": 147,
          "name": "DIESEL",
          "models": []
        },
        {
          "id": 6,
          "name": "DIOR",
          "models": [
            {
              "id": 138,
              "name": "addict",
              "brand_id": 6
            },
            {
              "id": 139,
              "name": "ama",
              "brand_id": 6
            },
            {
              "id": 140,
              "name": "be",
              "brand_id": 6
            },
            {
              "id": 141,
              "name": "dior",
              "brand_id": 6
            },
            {
              "id": 142,
              "name": "ever",
              "brand_id": 6
            },
            {
              "id": 143,
              "name": "gaucho",
              "brand_id": 6
            },
            {
              "id": 144,
              "name": "granville",
              "brand_id": 6
            },
            {
              "id": 145,
              "name": "issimo",
              "brand_id": 6
            },
            {
              "id": 146,
              "name": "lady",
              "brand_id": 6
            },
            {
              "id": 147,
              "name": "miss",
              "brand_id": 6
            },
            {
              "id": 148,
              "name": "new lock",
              "brand_id": 6
            },
            {
              "id": 149,
              "name": "panarea",
              "brand_id": 6
            },
            {
              "id": 150,
              "name": "saddle",
              "brand_id": 6
            },
            {
              "id": 151,
              "name": "soft shopping",
              "brand_id": 6
            }
          ]
        },
        {
          "id": 189,
          "name": "DKNY",
          "models": []
        },
        {
          "id": 44,
          "name": "DOLCE",
          "models": []
        },
        {
          "id": 19,
          "name": "DOLCE & GABBANA",
          "models": [
            {
              "id": 238,
              "name": "sicily",
              "brand_id": 19
            }
          ]
        },
        {
          "id": 322,
          "name": "DONATELLA BRUNELLO",
          "models": []
        },
        {
          "id": 321,
          "name": "DONNA KARAN",
          "models": []
        },
        {
          "id": 170,
          "name": "DRIES VAN NOTEN",
          "models": []
        },
        {
          "id": 157,
          "name": "ELISABETTA FRANCHI",
          "models": []
        },
        {
          "id": 278,
          "name": "EMANUELA CARUSO",
          "models": []
        },
        {
          "id": 103,
          "name": "EMILIO PUCCI",
          "models": []
        },
        {
          "id": 196,
          "name": "ENRICO COVERI",
          "models": []
        },
        {
          "id": 107,
          "name": "ERMANNO SCERVINO",
          "models": []
        },
        {
          "id": 85,
          "name": "ETRO",
          "models": []
        },
        {
          "id": 130,
          "name": "FABI",
          "models": []
        },
        {
          "id": 319,
          "name": "FAUSTO SANTINI",
          "models": []
        },
        {
          "id": 122,
          "name": "FAY",
          "models": []
        },
        {
          "id": 9,
          "name": "FENDI",
          "models": [
            {
              "id": 163,
              "name": "2jours",
              "brand_id": 9
            },
            {
              "id": 164,
              "name": "3jours",
              "brand_id": 9
            },
            {
              "id": 165,
              "name": "b bag",
              "brand_id": 9
            },
            {
              "id": 166,
              "name": "baguette",
              "brand_id": 9
            },
            {
              "id": 167,
              "name": "by the way",
              "brand_id": 9
            },
            {
              "id": 168,
              "name": "chameleon",
              "brand_id": 9
            },
            {
              "id": 169,
              "name": "dot com",
              "brand_id": 9
            },
            {
              "id": 170,
              "name": "kan i",
              "brand_id": 9
            },
            {
              "id": 171,
              "name": "peekaboo",
              "brand_id": 9
            },
            {
              "id": 172,
              "name": "roll bag",
              "brand_id": 9
            },
            {
              "id": 173,
              "name": "spy",
              "brand_id": 9
            }
          ]
        },
        {
          "id": 99,
          "name": "FERRAGAMO",
          "models": []
        },
        {
          "id": 313,
          "name": "FERRARI",
          "models": []
        },
        {
          "id": 148,
          "name": "FERRE",
          "models": []
        },
        {
          "id": 201,
          "name": "FILA",
          "models": []
        },
        {
          "id": 315,
          "name": "FIORENTINI+BAKER",
          "models": []
        },
        {
          "id": 249,
          "name": "FIORUCCI",
          "models": []
        },
        {
          "id": 176,
          "name": "FORNARINA",
          "models": []
        },
        {
          "id": 67,
          "name": "FRANCESCO BIASIA",
          "models": []
        },
        {
          "id": 45,
          "name": "FURLA",
          "models": []
        },
        {
          "id": 96,
          "name": "GABS",
          "models": []
        },
        {
          "id": 162,
          "name": "GAETANO NAVARRA",
          "models": []
        },
        {
          "id": 120,
          "name": "GAI MATTIOLO",
          "models": []
        },
        {
          "id": 243,
          "name": "GAI MATTIOLO JEANS",
          "models": []
        },
        {
          "id": 268,
          "name": "GALITZINE",
          "models": []
        },
        {
          "id": 156,
          "name": "GAP",
          "models": []
        },
        {
          "id": 128,
          "name": "GATTINONI",
          "models": []
        },
        {
          "id": 129,
          "name": "GENNY",
          "models": []
        },
        {
          "id": 106,
          "name": "GEORGE, GINA ",
          "models": []
        },
        {
          "id": 15,
          "name": "GERARD DAREL",
          "models": [
            {
              "id": 214,
              "name": "24h",
              "brand_id": 15
            },
            {
              "id": 215,
              "name": "36 h",
              "brand_id": 15
            },
            {
              "id": 216,
              "name": "dublin",
              "brand_id": 15
            },
            {
              "id": 217,
              "name": "midday midnight",
              "brand_id": 15
            },
            {
              "id": 218,
              "name": "pom bag",
              "brand_id": 15
            },
            {
              "id": 219,
              "name": "simple bag",
              "brand_id": 15
            }
          ]
        },
        {
          "id": 146,
          "name": "GHERARDINI",
          "models": []
        },
        {
          "id": 76,
          "name": "GIANFRANCO FERRE",
          "models": []
        },
        {
          "id": 240,
          "name": "GIANFRANCO LOTTI",
          "models": []
        },
        {
          "id": 191,
          "name": "GIANNI CHIARINI",
          "models": []
        },
        {
          "id": 139,
          "name": "GILLI",
          "models": []
        },
        {
          "id": 140,
          "name": "GIORGIO ARMANI",
          "models": []
        },
        {
          "id": 47,
          "name": "GIVENCHY",
          "models": []
        },
        {
          "id": 29,
          "name": "GOYARD",
          "models": [
            {
              "id": 256,
              "name": "saint-louis",
              "brand_id": 29
            }
          ]
        },
        {
          "id": 303,
          "name": "GRAN SASSO",
          "models": []
        },
        {
          "id": 7,
          "name": "GUCCI",
          "models": [
            {
              "id": 152,
              "name": "bamboo",
              "brand_id": 7
            },
            {
              "id": 153,
              "name": "boston",
              "brand_id": 7
            },
            {
              "id": 154,
              "name": "dionysus",
              "brand_id": 7
            },
            {
              "id": 155,
              "name": "hysteria",
              "brand_id": 7
            },
            {
              "id": 156,
              "name": "indy",
              "brand_id": 7
            },
            {
              "id": 157,
              "name": "jackie",
              "brand_id": 7
            },
            {
              "id": 158,
              "name": "lady web",
              "brand_id": 7
            },
            {
              "id": 159,
              "name": "marmont",
              "brand_id": 7
            },
            {
              "id": 160,
              "name": "soho",
              "brand_id": 7
            },
            {
              "id": 161,
              "name": "speedy",
              "brand_id": 7
            },
            {
              "id": 162,
              "name": "sylvie",
              "brand_id": 7
            }
          ]
        },
        {
          "id": 46,
          "name": "GUESS",
          "models": []
        },
        {
          "id": 179,
          "name": "GUM",
          "models": []
        },
        {
          "id": 287,
          "name": "HARMONT",
          "models": []
        },
        {
          "id": 4,
          "name": "HERMES",
          "models": [
            {
              "id": 92,
              "name": "birkin",
              "brand_id": 4
            },
            {
              "id": 98,
              "name": "bolide",
              "brand_id": 4
            },
            {
              "id": 99,
              "name": "constance",
              "brand_id": 4
            },
            {
              "id": 100,
              "name": "evelyne",
              "brand_id": 4
            },
            {
              "id": 101,
              "name": "garden party",
              "brand_id": 4
            },
            {
              "id": 102,
              "name": "haut a courroies",
              "brand_id": 4
            },
            {
              "id": 103,
              "name": "herbag",
              "brand_id": 4
            },
            {
              "id": 104,
              "name": "jige",
              "brand_id": 4
            },
            {
              "id": 105,
              "name": "jypsiere",
              "brand_id": 4
            },
            {
              "id": 106,
              "name": "kelly",
              "brand_id": 4
            },
            {
              "id": 113,
              "name": "lindy",
              "brand_id": 4
            },
            {
              "id": 114,
              "name": "medor",
              "brand_id": 4
            },
            {
              "id": 115,
              "name": "picotin",
              "brand_id": 4
            },
            {
              "id": 116,
              "name": "plume",
              "brand_id": 4
            },
            {
              "id": 117,
              "name": "so kelly",
              "brand_id": 4
            },
            {
              "id": 118,
              "name": "toto",
              "brand_id": 4
            },
            {
              "id": 119,
              "name": "trim",
              "brand_id": 4
            },
            {
              "id": 120,
              "name": "victoria",
              "brand_id": 4
            },
            {
              "id": 121,
              "name": "vintage",
              "brand_id": 4
            }
          ]
        },
        {
          "id": 86,
          "name": "HOGAN",
          "models": []
        },
        {
          "id": 193,
          "name": "HOSS INTROPIA",
          "models": []
        },
        {
          "id": 155,
          "name": "HUGO BOSS",
          "models": []
        },
        {
          "id": 150,
          "name": "ICE ICEBERG",
          "models": []
        },
        {
          "id": 153,
          "name": "ICEBERG",
          "models": []
        },
        {
          "id": 221,
          "name": "JAMIN PUECH",
          "models": []
        },
        {
          "id": 123,
          "name": "JEAN PAUL GAULTIER",
          "models": []
        },
        {
          "id": 89,
          "name": "JEREMY SCOTT POUR LONGCHAMP",
          "models": []
        },
        {
          "id": 13,
          "name": "JEROME DREYFUSS",
          "models": [
            {
              "id": 192,
              "name": "alain",
              "brand_id": 13
            },
            {
              "id": 193,
              "name": "albert",
              "brand_id": 13
            },
            {
              "id": 194,
              "name": "billy",
              "brand_id": 13
            },
            {
              "id": 195,
              "name": "bob",
              "brand_id": 13
            },
            {
              "id": 196,
              "name": "bobi",
              "brand_id": 13
            },
            {
              "id": 197,
              "name": "carlos",
              "brand_id": 13
            },
            {
              "id": 198,
              "name": "igor",
              "brand_id": 13
            },
            {
              "id": 199,
              "name": "jacques",
              "brand_id": 13
            },
            {
              "id": 200,
              "name": "johan",
              "brand_id": 13
            },
            {
              "id": 201,
              "name": "jojo",
              "brand_id": 13
            },
            {
              "id": 202,
              "name": "lucien",
              "brand_id": 13
            },
            {
              "id": 203,
              "name": "max",
              "brand_id": 13
            },
            {
              "id": 204,
              "name": "momo",
              "brand_id": 13
            },
            {
              "id": 205,
              "name": "popoche",
              "brand_id": 13
            },
            {
              "id": 206,
              "name": "raoul",
              "brand_id": 13
            },
            {
              "id": 207,
              "name": "twee",
              "brand_id": 13
            },
            {
              "id": 208,
              "name": "twee mini",
              "brand_id": 13
            }
          ]
        },
        {
          "id": 92,
          "name": "JIL SANDER",
          "models": []
        },
        {
          "id": 21,
          "name": "JIMMY CHOO",
          "models": [
            {
              "id": 242,
              "name": "candy",
              "brand_id": 21
            },
            {
              "id": 243,
              "name": "lockett",
              "brand_id": 21
            },
            {
              "id": 244,
              "name": "rebel",
              "brand_id": 21
            }
          ]
        },
        {
          "id": 78,
          "name": "JIMMY CHOO FOR H&M",
          "models": []
        },
        {
          "id": 216,
          "name": "JIMMY CRYSTAL NEW YORK",
          "models": []
        },
        {
          "id": 238,
          "name": "JOHN GALLIANO",
          "models": []
        },
        {
          "id": 132,
          "name": "JUICY COUTURE",
          "models": []
        },
        {
          "id": 73,
          "name": "JUST CAVALLI",
          "models": []
        },
        {
          "id": 258,
          "name": "KAREN MILLEN",
          "models": []
        },
        {
          "id": 180,
          "name": "KARL LAGERFELD",
          "models": []
        },
        {
          "id": 299,
          "name": "KATE SPADE",
          "models": []
        },
        {
          "id": 31,
          "name": "KENZO",
          "models": [
            {
              "id": 260,
              "name": "kalifornia",
              "brand_id": 31
            },
            {
              "id": 261,
              "name": "pagodon",
              "brand_id": 31
            }
          ]
        },
        {
          "id": 260,
          "name": "KEYS",
          "models": []
        },
        {
          "id": 58,
          "name": "KIMIKIM MILANO",
          "models": []
        },
        {
          "id": 264,
          "name": "KOAN",
          "models": []
        },
        {
          "id": 200,
          "name": "KRIZIA",
          "models": []
        },
        {
          "id": 236,
          "name": "LA FILLE DES FLEURS",
          "models": []
        },
        {
          "id": 291,
          "name": "LACOSTE",
          "models": []
        },
        {
          "id": 265,
          "name": "LAMARTHE",
          "models": []
        },
        {
          "id": 11,
          "name": "LANCEL",
          "models": [
            {
              "id": 182,
              "name": "1er flirt",
              "brand_id": 11
            },
            {
              "id": 183,
              "name": "adjani",
              "brand_id": 11
            },
            {
              "id": 184,
              "name": "brigitte bardot",
              "brand_id": 11
            },
            {
              "id": 185,
              "name": "charlie",
              "brand_id": 11
            },
            {
              "id": 186,
              "name": "daligramme",
              "brand_id": 11
            },
            {
              "id": 187,
              "name": "elsa sellier",
              "brand_id": 11
            },
            {
              "id": 188,
              "name": "french flair",
              "brand_id": 11
            },
            {
              "id": 189,
              "name": "gousset",
              "brand_id": 11
            }
          ]
        },
        {
          "id": 261,
          "name": "LANCETTI",
          "models": []
        },
        {
          "id": 23,
          "name": "LANVIN",
          "models": [
            {
              "id": 246,
              "name": "amalia",
              "brand_id": 23
            },
            {
              "id": 247,
              "name": "happy",
              "brand_id": 23
            }
          ]
        },
        {
          "id": 137,
          "name": "LAURA BIAGIOTTI",
          "models": []
        },
        {
          "id": 207,
          "name": "LAURA URBINATI",
          "models": []
        },
        {
          "id": 108,
          "name": "LE PANDORINE",
          "models": []
        },
        {
          "id": 237,
          "name": "LE SILLA",
          "models": []
        },
        {
          "id": 202,
          "name": "LEI DI LANCETTI",
          "models": []
        },
        {
          "id": 142,
          "name": "LES COPAINS",
          "models": []
        },
        {
          "id": 209,
          "name": "LES FILLES MILANO",
          "models": []
        },
        {
          "id": 190,
          "name": "LIEBESKIND",
          "models": []
        },
        {
          "id": 55,
          "name": "LIU-JO",
          "models": []
        },
        {
          "id": 83,
          "name": "LOEWE",
          "models": []
        },
        {
          "id": 10,
          "name": "LONGCHAMP",
          "models": [
            {
              "id": 174,
              "name": "balzane",
              "brand_id": 10
            },
            {
              "id": 175,
              "name": "cosmos",
              "brand_id": 10
            },
            {
              "id": 176,
              "name": "gatsby",
              "brand_id": 10
            },
            {
              "id": 177,
              "name": "idole",
              "brand_id": 10
            },
            {
              "id": 178,
              "name": "kate moss",
              "brand_id": 10
            },
            {
              "id": 179,
              "name": "legende",
              "brand_id": 10
            },
            {
              "id": 180,
              "name": "pliage",
              "brand_id": 10
            },
            {
              "id": 181,
              "name": "roseau",
              "brand_id": 10
            }
          ]
        },
        {
          "id": 242,
          "name": "LORO PIANA",
          "models": []
        },
        {
          "id": 1,
          "name": "LOUIS VUITTON",
          "models": [
            {
              "id": 2,
              "name": "alma",
              "brand_id": 1
            },
            {
              "id": 4,
              "name": "artsy",
              "brand_id": 1
            },
            {
              "id": 5,
              "name": "bagatelle",
              "brand_id": 1
            },
            {
              "id": 6,
              "name": "bedford",
              "brand_id": 1
            },
            {
              "id": 7,
              "name": "bellevue",
              "brand_id": 1
            },
            {
              "id": 8,
              "name": "boulogne",
              "brand_id": 1
            },
            {
              "id": 9,
              "name": "brea",
              "brand_id": 1
            },
            {
              "id": 10,
              "name": "bucket",
              "brand_id": 1
            },
            {
              "id": 11,
              "name": "capucines",
              "brand_id": 1
            },
            {
              "id": 12,
              "name": "chantilly",
              "brand_id": 1
            },
            {
              "id": 13,
              "name": "ellipse",
              "brand_id": 1
            },
            {
              "id": 14,
              "name": "eva",
              "brand_id": 1
            },
            {
              "id": 15,
              "name": "favorite",
              "brand_id": 1
            },
            {
              "id": 16,
              "name": "galliera",
              "brand_id": 1
            },
            {
              "id": 17,
              "name": "hampstead",
              "brand_id": 1
            },
            {
              "id": 18,
              "name": "houston",
              "brand_id": 1
            },
            {
              "id": 19,
              "name": "keepall",
              "brand_id": 1
            },
            {
              "id": 20,
              "name": "lockit",
              "brand_id": 1
            },
            {
              "id": 21,
              "name": "lockme",
              "brand_id": 1
            },
            {
              "id": 22,
              "name": "looping",
              "brand_id": 1
            },
            {
              "id": 23,
              "name": "louise",
              "brand_id": 1
            },
            {
              "id": 24,
              "name": "mahina",
              "brand_id": 1
            },
            {
              "id": 25,
              "name": "manhattan",
              "brand_id": 1
            },
            {
              "id": 26,
              "name": "messenger",
              "brand_id": 1
            },
            {
              "id": 27,
              "name": "metis",
              "brand_id": 1
            },
            {
              "id": 28,
              "name": "milla",
              "brand_id": 1
            },
            {
              "id": 29,
              "name": "monceau",
              "brand_id": 1
            },
            {
              "id": 30,
              "name": "montaigne",
              "brand_id": 1
            },
            {
              "id": 31,
              "name": "montsouris",
              "brand_id": 1
            },
            {
              "id": 32,
              "name": "neverfull",
              "brand_id": 1
            },
            {
              "id": 33,
              "name": "noe",
              "brand_id": 1
            },
            {
              "id": 34,
              "name": "odeon",
              "brand_id": 1
            },
            {
              "id": 35,
              "name": "pallas",
              "brand_id": 1
            },
            {
              "id": 36,
              "name": "palm springs",
              "brand_id": 1
            },
            {
              "id": 37,
              "name": "papillon",
              "brand_id": 1
            },
            {
              "id": 38,
              "name": "pegase",
              "brand_id": 1
            },
            {
              "id": 39,
              "name": "petit malle",
              "brand_id": 1
            },
            {
              "id": 40,
              "name": "plat",
              "brand_id": 1
            },
            {
              "id": 41,
              "name": "pochette accessoire",
              "brand_id": 1
            },
            {
              "id": 42,
              "name": "randonnee",
              "brand_id": 1
            },
            {
              "id": 43,
              "name": "saint cloud",
              "brand_id": 1
            },
            {
              "id": 44,
              "name": "salsa",
              "brand_id": 1
            },
            {
              "id": 45,
              "name": "saumur",
              "brand_id": 1
            },
            {
              "id": 46,
              "name": "sofia coppola",
              "brand_id": 1
            },
            {
              "id": 47,
              "name": "speedy bandouliere",
              "brand_id": 1
            },
            {
              "id": 48,
              "name": "st jacques",
              "brand_id": 1
            },
            {
              "id": 49,
              "name": "theda",
              "brand_id": 1
            },
            {
              "id": 50,
              "name": "tivoli",
              "brand_id": 1
            },
            {
              "id": 51,
              "name": "tote w",
              "brand_id": 1
            },
            {
              "id": 52,
              "name": "trevi",
              "brand_id": 1
            },
            {
              "id": 53,
              "name": "trocadero",
              "brand_id": 1
            },
            {
              "id": 54,
              "name": "twist",
              "brand_id": 1
            },
            {
              "id": 55,
              "name": "viva cite",
              "brand_id": 1
            }
          ]
        },
        {
          "id": 109,
          "name": "LOVE MOSCHINO",
          "models": []
        },
        {
          "id": 225,
          "name": "LUMBERJACK",
          "models": []
        },
        {
          "id": 289,
          "name": "M MISSONI",
          "models": []
        },
        {
          "id": 211,
          "name": "MAC DOUGLAS",
          "models": []
        },
        {
          "id": 248,
          "name": "MAISON MARTIN MARGIELA",
          "models": []
        },
        {
          "id": 101,
          "name": "MALIPARMI",
          "models": []
        },
        {
          "id": 95,
          "name": "MANDARINA DUCK",
          "models": []
        },
        {
          "id": 269,
          "name": "MANGANO",
          "models": []
        },
        {
          "id": 320,
          "name": "MANGO",
          "models": []
        },
        {
          "id": 14,
          "name": "MARC BY MARC JACOBS",
          "models": [
            {
              "id": 209,
              "name": "classic q",
              "brand_id": 14
            },
            {
              "id": 210,
              "name": "marc jacobs",
              "brand_id": 14
            },
            {
              "id": 211,
              "name": "pretty nylon",
              "brand_id": 14
            },
            {
              "id": 212,
              "name": "single",
              "brand_id": 14
            },
            {
              "id": 213,
              "name": "too hot to handle",
              "brand_id": 14
            }
          ]
        },
        {
          "id": 22,
          "name": "MARC JACOBS",
          "models": [
            {
              "id": 245,
              "name": "stam",
              "brand_id": 22
            }
          ]
        },
        {
          "id": 134,
          "name": "MARELLA",
          "models": []
        },
        {
          "id": 213,
          "name": "MARK CROSS",
          "models": []
        },
        {
          "id": 91,
          "name": "MARNI",
          "models": []
        },
        {
          "id": 312,
          "name": "MARTINO MIDALI",
          "models": []
        },
        {
          "id": 117,
          "name": "MARTISSIMA BY MARTA MARZOTTO",
          "models": []
        },
        {
          "id": 124,
          "name": "MAX",
          "models": []
        },
        {
          "id": 145,
          "name": "MAX MARA",
          "models": []
        },
        {
          "id": 138,
          "name": "MAZZINI",
          "models": []
        },
        {
          "id": 214,
          "name": "MELI MELO",
          "models": []
        },
        {
          "id": 212,
          "name": "MELLUSO",
          "models": []
        },
        {
          "id": 70,
          "name": "MIA BAG",
          "models": []
        },
        {
          "id": 20,
          "name": "MICHAEL MICHAEL KORS",
          "models": [
            {
              "id": 239,
              "name": "hamilton",
              "brand_id": 20
            },
            {
              "id": 240,
              "name": "jet set",
              "brand_id": 20
            },
            {
              "id": 241,
              "name": "selma",
              "brand_id": 20
            }
          ]
        },
        {
          "id": 195,
          "name": "MILA SCH??N",
          "models": []
        },
        {
          "id": 297,
          "name": "MISS SIXTY",
          "models": []
        },
        {
          "id": 273,
          "name": "MISSONI",
          "models": []
        },
        {
          "id": 12,
          "name": "MIU MIU",
          "models": [
            {
              "id": 190,
              "name": "borsa",
              "brand_id": 12
            },
            {
              "id": 191,
              "name": "matelasse",
              "brand_id": 12
            }
          ]
        },
        {
          "id": 135,
          "name": "MONCLER",
          "models": []
        },
        {
          "id": 210,
          "name": "MORESCHI",
          "models": []
        },
        {
          "id": 87,
          "name": "MOSCHINO",
          "models": []
        },
        {
          "id": 181,
          "name": "MOSCHINO CHEAP AND CHIC",
          "models": []
        },
        {
          "id": 17,
          "name": "MULBERRY",
          "models": [
            {
              "id": 224,
              "name": "alexa",
              "brand_id": 17
            },
            {
              "id": 225,
              "name": "bayswater",
              "brand_id": 17
            },
            {
              "id": 226,
              "name": "bayswater tote",
              "brand_id": 17
            },
            {
              "id": 227,
              "name": "cara delevigne",
              "brand_id": 17
            },
            {
              "id": 228,
              "name": "lily",
              "brand_id": 17
            },
            {
              "id": 229,
              "name": "medium lily",
              "brand_id": 17
            },
            {
              "id": 230,
              "name": "roxanne",
              "brand_id": 17
            },
            {
              "id": 231,
              "name": "willow",
              "brand_id": 17
            }
          ]
        },
        {
          "id": 279,
          "name": "N??21",
          "models": []
        },
        {
          "id": 300,
          "name": "NANAN",
          "models": []
        },
        {
          "id": 233,
          "name": "NANNI",
          "models": []
        },
        {
          "id": 84,
          "name": "NANNINI",
          "models": []
        },
        {
          "id": 318,
          "name": "NAPAPIJRI",
          "models": []
        },
        {
          "id": 64,
          "name": "NARDELLI",
          "models": []
        },
        {
          "id": 239,
          "name": "NAVA",
          "models": []
        },
        {
          "id": 283,
          "name": "NEIMAN MARCUS",
          "models": []
        },
        {
          "id": 246,
          "name": "NERO GIARDINI",
          "models": []
        },
        {
          "id": 244,
          "name": "NORTH SAILS",
          "models": []
        },
        {
          "id": 284,
          "name": "NUMERO 10",
          "models": []
        },
        {
          "id": 80,
          "name": "O BAG",
          "models": []
        },
        {
          "id": 323,
          "name": "OFF WHITE",
          "models": []
        },
        {
          "id": 82,
          "name": "ORCIANI",
          "models": []
        },
        {
          "id": 227,
          "name": "OTTAVIANI BIJOUX",
          "models": []
        },
        {
          "id": 40,
          "name": "PABLO DE GERARD DAREL",
          "models": [
            {
              "id": 279,
              "name": "gerard darel",
              "brand_id": 40
            }
          ]
        },
        {
          "id": 88,
          "name": "PATRIZIA PEPE",
          "models": []
        },
        {
          "id": 250,
          "name": "PAUL ",
          "models": []
        },
        {
          "id": 230,
          "name": "PAUL SMITH",
          "models": []
        },
        {
          "id": 151,
          "name": "PAULA CADEMARTORI",
          "models": []
        },
        {
          "id": 224,
          "name": "PEPE JEANS",
          "models": []
        },
        {
          "id": 266,
          "name": "PHILOSOPHY DI ALBERTA FERRETTI",
          "models": []
        },
        {
          "id": 301,
          "name": "PIANURASTUDIO",
          "models": []
        },
        {
          "id": 60,
          "name": "PIERO GUIDI",
          "models": []
        },
        {
          "id": 48,
          "name": "PIERRE CARDIN",
          "models": []
        },
        {
          "id": 171,
          "name": "PINEIDER",
          "models": []
        },
        {
          "id": 71,
          "name": "PINKO",
          "models": []
        },
        {
          "id": 90,
          "name": "PIQUADRO",
          "models": []
        },
        {
          "id": 198,
          "name": "PIROVANO",
          "models": []
        },
        {
          "id": 61,
          "name": "POLLINI",
          "models": []
        },
        {
          "id": 178,
          "name": "POLO RALPH LAUREN",
          "models": []
        },
        {
          "id": 161,
          "name": "POMIKAKI",
          "models": []
        },
        {
          "id": 39,
          "name": "PRADA",
          "models": [
            {
              "id": 277,
              "name": "madras",
              "brand_id": 39
            },
            {
              "id": 278,
              "name": "vitello",
              "brand_id": 39
            }
          ]
        },
        {
          "id": 204,
          "name": "PRADA SPORT",
          "models": []
        },
        {
          "id": 310,
          "name": "PRINGLE OF SCOTLAND",
          "models": []
        },
        {
          "id": 185,
          "name": "PROENZA SCHOULER",
          "models": []
        },
        {
          "id": 166,
          "name": "PUMA",
          "models": []
        },
        {
          "id": 57,
          "name": "RALPH LAUREN",
          "models": [
            {
              "id": 281,
              "name": "ricky",
              "brand_id": 57
            }
          ]
        },
        {
          "id": 35,
          "name": "RALPH LAUREN COLLECTION",
          "models": [
            {
              "id": 267,
              "name": "ricky33",
              "brand_id": 35
            }
          ]
        },
        {
          "id": 203,
          "name": "RALPH LAUREN RRL",
          "models": []
        },
        {
          "id": 149,
          "name": "REBECCA MINKOFF",
          "models": []
        },
        {
          "id": 159,
          "name": "REDWALL",
          "models": []
        },
        {
          "id": 263,
          "name": "REMINESCENCE",
          "models": []
        },
        {
          "id": 126,
          "name": "RENATO BALESTRA",
          "models": []
        },
        {
          "id": 295,
          "name": "RENAUD PELLEGRINO",
          "models": []
        },
        {
          "id": 218,
          "name": "RENE",
          "models": []
        },
        {
          "id": 65,
          "name": "ROBERTA DI CAMERINO",
          "models": []
        },
        {
          "id": 110,
          "name": "ROBERTO CAVALLI",
          "models": []
        },
        {
          "id": 187,
          "name": "ROBERTO CAVALLI FREEDOM",
          "models": []
        },
        {
          "id": 257,
          "name": "ROBERTO DELLA CROCE",
          "models": []
        },
        {
          "id": 98,
          "name": "ROCCOBAROCCO",
          "models": []
        },
        {
          "id": 144,
          "name": "RODO",
          "models": []
        },
        {
          "id": 285,
          "name": "ROGER VIVIER",
          "models": []
        },
        {
          "id": 38,
          "name": "SAINT LAURENT",
          "models": [
            {
              "id": 268,
              "name": "belle de jour",
              "brand_id": 38
            },
            {
              "id": 269,
              "name": "chyc",
              "brand_id": 38
            },
            {
              "id": 270,
              "name": "downtown",
              "brand_id": 38
            },
            {
              "id": 271,
              "name": "easy",
              "brand_id": 38
            },
            {
              "id": 272,
              "name": "mombasa",
              "brand_id": 38
            },
            {
              "id": 273,
              "name": "muse",
              "brand_id": 38
            },
            {
              "id": 274,
              "name": "muse two",
              "brand_id": 38
            },
            {
              "id": 275,
              "name": "roady",
              "brand_id": 38
            },
            {
              "id": 276,
              "name": "tribute",
              "brand_id": 38
            }
          ]
        },
        {
          "id": 24,
          "name": "SALVATORE FERRAGAMO",
          "models": [
            {
              "id": 248,
              "name": "sofia",
              "brand_id": 24
            }
          ]
        },
        {
          "id": 112,
          "name": "SAMSONITE",
          "models": []
        },
        {
          "id": 219,
          "name": "SCERVINO STREET",
          "models": []
        },
        {
          "id": 194,
          "name": "SCHEILAN",
          "models": []
        },
        {
          "id": 307,
          "name": "SCHUTZ",
          "models": []
        },
        {
          "id": 143,
          "name": "SECRET PON-PON",
          "models": []
        },
        {
          "id": 277,
          "name": "SEMI-COUTURE",
          "models": []
        },
        {
          "id": 127,
          "name": "SERGIO ROSSI",
          "models": []
        },
        {
          "id": 274,
          "name": "SERGIO TACCHINI",
          "models": []
        },
        {
          "id": 231,
          "name": "SHOP ART",
          "models": []
        },
        {
          "id": 192,
          "name": "SILVIAN HEACH",
          "models": []
        },
        {
          "id": 160,
          "name": "SISLEY",
          "models": []
        },
        {
          "id": 186,
          "name": "SODINI",
          "models": []
        },
        {
          "id": 292,
          "name": "SOPHIE HULME",
          "models": []
        },
        {
          "id": 296,
          "name": "SPORTMAX",
          "models": []
        },
        {
          "id": 49,
          "name": "STELLA MCCARTNEY",
          "models": []
        },
        {
          "id": 259,
          "name": "STORKSAK",
          "models": []
        },
        {
          "id": 226,
          "name": "TAVECCHI",
          "models": []
        },
        {
          "id": 68,
          "name": "THE BRIDGE",
          "models": []
        },
        {
          "id": 169,
          "name": "TIMBERLAND",
          "models": []
        },
        {
          "id": 235,
          "name": "TJ TRUSSARDI JEANS",
          "models": []
        },
        {
          "id": 63,
          "name": "TOD",
          "models": []
        },
        {
          "id": 37,
          "name": "TOM FORD",
          "models": []
        },
        {
          "id": 104,
          "name": "TOMMY HILFIGER",
          "models": []
        },
        {
          "id": 133,
          "name": "TORY BURCH",
          "models": []
        },
        {
          "id": 102,
          "name": "TOSCA BLU",
          "models": []
        },
        {
          "id": 220,
          "name": "TRAMONTANO",
          "models": []
        },
        {
          "id": 115,
          "name": "TRU TRUSSARDI",
          "models": []
        },
        {
          "id": 62,
          "name": "TRUSSARDI",
          "models": []
        },
        {
          "id": 247,
          "name": "TUSCANY LEATHER",
          "models": []
        },
        {
          "id": 81,
          "name": "TWIN-SET SIMONA BARBIERI",
          "models": []
        },
        {
          "id": 222,
          "name": "UGG AUSTRALIA",
          "models": []
        },
        {
          "id": 182,
          "name": "UNGARO",
          "models": []
        },
        {
          "id": 174,
          "name": "UNITED COLORS OF BENETTON",
          "models": []
        },
        {
          "id": 116,
          "name": "V??73",
          "models": []
        },
        {
          "id": 50,
          "name": "VALENTINO GARAVANI",
          "models": []
        },
        {
          "id": 188,
          "name": "VALEXTRA",
          "models": []
        },
        {
          "id": 272,
          "name": "VANESSA BRUNO",
          "models": []
        },
        {
          "id": 74,
          "name": "VERSACE",
          "models": []
        },
        {
          "id": 111,
          "name": "VERSUS",
          "models": []
        },
        {
          "id": 36,
          "name": "VICTORIA BECKHAM",
          "models": []
        },
        {
          "id": 252,
          "name": "VIONNET",
          "models": []
        },
        {
          "id": 253,
          "name": "VIVIENNE WESTWOOD",
          "models": []
        },
        {
          "id": 205,
          "name": "WEEKEND MAX MARA",
          "models": []
        },
        {
          "id": 316,
          "name": "WHO",
          "models": []
        },
        {
          "id": 154,
          "name": "YNOT?",
          "models": []
        },
        {
          "id": 8,
          "name": "YVES SAINT LAURENT",
          "models": []
        },
        {
          "id": 16,
          "name": "ZADIG & VOLTAIRE",
          "models": [
            {
              "id": 220,
              "name": "daily",
              "brand_id": 16
            },
            {
              "id": 221,
              "name": "rock",
              "brand_id": 16
            },
            {
              "id": 222,
              "name": "sunny",
              "brand_id": 16
            },
            {
              "id": 223,
              "name": "touly",
              "brand_id": 16
            }
          ]
        },
        {
          "id": 167,
          "name": "ZAGLIANI",
          "models": []
        },
        {
          "id": 309,
          "name": "ZANCHETTI",
          "models": []
        },
        {
          "id": 255,
          "name": "ZANELLATO",
          "models": []
        },
        {
          "id": 217,
          "name": "ZARA",
          "models": []
        },
        {
          "id": 77,
          "name": "OTHER",
          "models": []
        }
      ],
      "condition": [
        {
          "id": 1,
          "name": "Pristine",
          "name_zh": "全新",
          "describe": "New. Not used.",
          "describe_zh": "全新，从未使用过"
        },
        {
          "id": 2,
          "name": "Excellent",
          "name_zh": "9.9新",
          "describe": "Excellent. Almost as good as new.",
          "describe_zh": "几乎全新"
        },
        {
          "id": 3,
          "name": "good",
          "name_zh": "9.5新",
          "describe": "Good. There are a few scratches, stains and looks a little used.",
          "describe_zh": "很好，少量的污渍和划痕"
        },
        {
          "id": 4,
          "name": "Fair",
          "name_zh": "9.0新",
          "describe": "Fair. There are some noticeable scratches and stains. looks obvious used.",
          "describe_zh": "一般，明显的污渍和划痕"
        },
        {
          "id": 5,
          "name": "Poor",
          "name_zh": "8.5新",
          "describe": "Poor. Looks very used, but still usable.",
          "describe_zh": "不好，但是还可以使用"
        },
        {
          "id": 6,
          "name": "Other",
          "name_zh": "None",
          "describe": "None",
          "describe_zh": "None"
        }
      ],
      "type": [
        {
          "id": 1,
          "name": "handbags"
        },
        {
          "id": 2,
          "name": "clutch bags"
        },
        {
          "id": 3,
          "name": "travel bags"
        },
        {
          "id": 4,
          "name": "backpacks"
        },
        {
          "id": 7,
          "name": "shoulder bag"
        },
        {
          "id": 8,
          "name": "tote"
        },
        {
          "id": 10,
          "name": "wallet"
        },
        {
          "id": 13,
          "name": "suitcase"
        },
        {
          "id": 14,
          "name": "briefcase"
        },
        {
          "id": 17,
          "name": "other"
        }
      ],
      "material": [
        {
          "id": 1,
          "name": "leather"
        },
        {
          "id": 2,
          "name": "cloth"
        },
        {
          "id": 4,
          "name": "patent leather"
        },
        {
          "id": 5,
          "name": "suede"
        },
        {
          "id": 6,
          "name": "cotton"
        },
        {
          "id": 7,
          "name": "synthetic"
        },
        {
          "id": 8,
          "name": "python"
        },
        {
          "id": 9,
          "name": "exotic leathers"
        },
        {
          "id": 10,
          "name": "silk"
        },
        {
          "id": 11,
          "name": "velvet"
        },
        {
          "id": 12,
          "name": "pelle"
        },
        {
          "id": 16,
          "name": "crocodile"
        },
        {
          "id": 13,
          "name": "pony-style calfskin"
        },
        {
          "id": 14,
          "name": "tweed"
        },
        {
          "id": 18,
          "name": "wool"
        },
        {
          "id": 15,
          "name": "fur"
        },
        {
          "id": 17,
          "name": "denim - jeans"
        },
        {
          "id": 19,
          "name": "polyester"
        },
        {
          "id": 20,
          "name": "wicker"
        },
        {
          "id": 21,
          "name": "plastic"
        },
        {
          "id": 22,
          "name": "glitter"
        },
        {
          "id": 23,
          "name": "canvas and leather"
        },
        {
          "id": 24,
          "name": "ostrich"
        },
        {
          "id": 25,
          "name": "lizard"
        },
        {
          "id": 31,
          "name": "metal"
        },
        {
          "id": 33,
          "name": "canvas"
        },
        {
          "id": 3,
          "name": "other"
        }
      ],
      "color": [
        {
          "id": 1,
          "name": "black"
        },
        {
          "id": 2,
          "name": "brown"
        },
        {
          "id": 3,
          "name": "beige"
        },
        {
          "id": 4,
          "name": "blue"
        },
        {
          "id": 6,
          "name": "red"
        },
        {
          "id": 7,
          "name": "grey"
        },
        {
          "id": 8,
          "name": "pink"
        },
        {
          "id": 9,
          "name": "multicolour"
        },
        {
          "id": 10,
          "name": "white"
        },
        {
          "id": 11,
          "name": "burgundy"
        },
        {
          "id": 12,
          "name": "camel"
        },
        {
          "id": 13,
          "name": "green"
        },
        {
          "id": 14,
          "name": "purple"
        },
        {
          "id": 15,
          "name": "navy"
        },
        {
          "id": 16,
          "name": "orange"
        },
        {
          "id": 17,
          "name": "gold"
        },
        {
          "id": 18,
          "name": "yellow"
        },
        {
          "id": 19,
          "name": "ecru"
        },
        {
          "id": 20,
          "name": "khaki"
        },
        {
          "id": 21,
          "name": "silver"
        },
        {
          "id": 23,
          "name": "metallic"
        },
        {
          "id": 75,
          "name": "trasparente"
        },
        {
          "id": 5,
          "name": "other"
        }
      ],
      "countries": [
        {
          "id": 4,
          "name": "Afghanistan",
          "alpha2": "af",
          "alpha3": "afg"
        },
        {
          "id": 248,
          "name": "Åland Islands",
          "alpha2": "ax",
          "alpha3": "ala"
        },
        {
          "id": 8,
          "name": "Albania",
          "alpha2": "al",
          "alpha3": "alb"
        },
        {
          "id": 12,
          "name": "Algeria",
          "alpha2": "dz",
          "alpha3": "dza"
        },
        {
          "id": 16,
          "name": "American Samoa",
          "alpha2": "as",
          "alpha3": "asm"
        },
        {
          "id": 20,
          "name": "Andorra",
          "alpha2": "ad",
          "alpha3": "and"
        },
        {
          "id": 24,
          "name": "Angola",
          "alpha2": "ao",
          "alpha3": "ago"
        },
        {
          "id": 660,
          "name": "Anguilla",
          "alpha2": "ai",
          "alpha3": "aia"
        },
        {
          "id": 10,
          "name": "Antarctica",
          "alpha2": "aq",
          "alpha3": "ata"
        },
        {
          "id": 28,
          "name": "Antigua and Barbuda",
          "alpha2": "ag",
          "alpha3": "atg"
        },
        {
          "id": 32,
          "name": "Argentina",
          "alpha2": "ar",
          "alpha3": "arg"
        },
        {
          "id": 51,
          "name": "Armenia",
          "alpha2": "am",
          "alpha3": "arm"
        },
        {
          "id": 533,
          "name": "Aruba",
          "alpha2": "aw",
          "alpha3": "abw"
        },
        {
          "id": 36,
          "name": "Australia",
          "alpha2": "au",
          "alpha3": "aus"
        },
        {
          "id": 40,
          "name": "Austria",
          "alpha2": "at",
          "alpha3": "aut"
        },
        {
          "id": 31,
          "name": "Azerbaijan",
          "alpha2": "az",
          "alpha3": "aze"
        },
        {
          "id": 44,
          "name": "Bahamas",
          "alpha2": "bs",
          "alpha3": "bhs"
        },
        {
          "id": 48,
          "name": "Bahrain",
          "alpha2": "bh",
          "alpha3": "bhr"
        },
        {
          "id": 50,
          "name": "Bangladesh",
          "alpha2": "bd",
          "alpha3": "bgd"
        },
        {
          "id": 52,
          "name": "Barbados",
          "alpha2": "bb",
          "alpha3": "brb"
        },
        {
          "id": 112,
          "name": "Belarus",
          "alpha2": "by",
          "alpha3": "blr"
        },
        {
          "id": 56,
          "name": "Belgium",
          "alpha2": "be",
          "alpha3": "bel"
        },
        {
          "id": 84,
          "name": "Belize",
          "alpha2": "bz",
          "alpha3": "blz"
        },
        {
          "id": 204,
          "name": "Benin",
          "alpha2": "bj",
          "alpha3": "ben"
        },
        {
          "id": 60,
          "name": "Bermuda",
          "alpha2": "bm",
          "alpha3": "bmu"
        },
        {
          "id": 64,
          "name": "Bhutan",
          "alpha2": "bt",
          "alpha3": "btn"
        },
        {
          "id": 68,
          "name": "Bolivia (Plurinational State of)",
          "alpha2": "bo",
          "alpha3": "bol"
        },
        {
          "id": 535,
          "name": "Bonaire, Sint Eustatius and Saba",
          "alpha2": "bq",
          "alpha3": "bes"
        },
        {
          "id": 70,
          "name": "Bosnia and Herzegovina",
          "alpha2": "ba",
          "alpha3": "bih"
        },
        {
          "id": 72,
          "name": "Botswana",
          "alpha2": "bw",
          "alpha3": "bwa"
        },
        {
          "id": 74,
          "name": "Bouvet Island",
          "alpha2": "bv",
          "alpha3": "bvt"
        },
        {
          "id": 76,
          "name": "Brazil",
          "alpha2": "br",
          "alpha3": "bra"
        },
        {
          "id": 86,
          "name": "British Indian Ocean Territory",
          "alpha2": "io",
          "alpha3": "iot"
        },
        {
          "id": 96,
          "name": "Brunei Darussalam",
          "alpha2": "bn",
          "alpha3": "brn"
        },
        {
          "id": 100,
          "name": "Bulgaria",
          "alpha2": "bg",
          "alpha3": "bgr"
        },
        {
          "id": 854,
          "name": "Burkina Faso",
          "alpha2": "bf",
          "alpha3": "bfa"
        },
        {
          "id": 108,
          "name": "Burundi",
          "alpha2": "bi",
          "alpha3": "bdi"
        },
        {
          "id": 132,
          "name": "Cabo Verde",
          "alpha2": "cv",
          "alpha3": "cpv"
        },
        {
          "id": 116,
          "name": "Cambodia",
          "alpha2": "kh",
          "alpha3": "khm"
        },
        {
          "id": 120,
          "name": "Cameroon",
          "alpha2": "cm",
          "alpha3": "cmr"
        },
        {
          "id": 124,
          "name": "Canada",
          "alpha2": "ca",
          "alpha3": "can"
        },
        {
          "id": 136,
          "name": "Cayman Islands",
          "alpha2": "ky",
          "alpha3": "cym"
        },
        {
          "id": 140,
          "name": "Central African Republic",
          "alpha2": "cf",
          "alpha3": "caf"
        },
        {
          "id": 148,
          "name": "Chad",
          "alpha2": "td",
          "alpha3": "tcd"
        },
        {
          "id": 152,
          "name": "Chile",
          "alpha2": "cl",
          "alpha3": "chl"
        },
        {
          "id": 156,
          "name": "China",
          "alpha2": "cn",
          "alpha3": "chn"
        },
        {
          "id": 162,
          "name": "Christmas Island",
          "alpha2": "cx",
          "alpha3": "cxr"
        },
        {
          "id": 166,
          "name": "Cocos (Keeling) Islands",
          "alpha2": "cc",
          "alpha3": "cck"
        },
        {
          "id": 170,
          "name": "Colombia",
          "alpha2": "co",
          "alpha3": "col"
        },
        {
          "id": 174,
          "name": "Comoros",
          "alpha2": "km",
          "alpha3": "com"
        },
        {
          "id": 178,
          "name": "Congo",
          "alpha2": "cg",
          "alpha3": "cog"
        },
        {
          "id": 180,
          "name": "Congo (Democratic Republic of the)",
          "alpha2": "cd",
          "alpha3": "cod"
        },
        {
          "id": 184,
          "name": "Cook Islands",
          "alpha2": "ck",
          "alpha3": "cok"
        },
        {
          "id": 188,
          "name": "Costa Rica",
          "alpha2": "cr",
          "alpha3": "cri"
        },
        {
          "id": 384,
          "name": "Côte d'Ivoire",
          "alpha2": "ci",
          "alpha3": "civ"
        },
        {
          "id": 191,
          "name": "Croatia",
          "alpha2": "hr",
          "alpha3": "hrv"
        },
        {
          "id": 192,
          "name": "Cuba",
          "alpha2": "cu",
          "alpha3": "cub"
        },
        {
          "id": 531,
          "name": "Curaçao",
          "alpha2": "cw",
          "alpha3": "cuw"
        },
        {
          "id": 196,
          "name": "Cyprus",
          "alpha2": "cy",
          "alpha3": "cyp"
        },
        {
          "id": 203,
          "name": "Czechia",
          "alpha2": "cz",
          "alpha3": "cze"
        },
        {
          "id": 208,
          "name": "Denmark",
          "alpha2": "dk",
          "alpha3": "dnk"
        },
        {
          "id": 262,
          "name": "Djibouti",
          "alpha2": "dj",
          "alpha3": "dji"
        },
        {
          "id": 212,
          "name": "Dominica",
          "alpha2": "dm",
          "alpha3": "dma"
        },
        {
          "id": 214,
          "name": "Dominican Republic",
          "alpha2": "do",
          "alpha3": "dom"
        },
        {
          "id": 218,
          "name": "Ecuador",
          "alpha2": "ec",
          "alpha3": "ecu"
        },
        {
          "id": 818,
          "name": "Egypt",
          "alpha2": "eg",
          "alpha3": "egy"
        },
        {
          "id": 222,
          "name": "El Salvador",
          "alpha2": "sv",
          "alpha3": "slv"
        },
        {
          "id": 226,
          "name": "Equatorial Guinea",
          "alpha2": "gq",
          "alpha3": "gnq"
        },
        {
          "id": 232,
          "name": "Eritrea",
          "alpha2": "er",
          "alpha3": "eri"
        },
        {
          "id": 233,
          "name": "Estonia",
          "alpha2": "ee",
          "alpha3": "est"
        },
        {
          "id": 748,
          "name": "Eswatini",
          "alpha2": "sz",
          "alpha3": "swz"
        },
        {
          "id": 231,
          "name": "Ethiopia",
          "alpha2": "et",
          "alpha3": "eth"
        },
        {
          "id": 238,
          "name": "Falkland Islands (Malvinas)",
          "alpha2": "fk",
          "alpha3": "flk"
        },
        {
          "id": 234,
          "name": "Faroe Islands",
          "alpha2": "fo",
          "alpha3": "fro"
        },
        {
          "id": 242,
          "name": "Fiji",
          "alpha2": "fj",
          "alpha3": "fji"
        },
        {
          "id": 246,
          "name": "Finland",
          "alpha2": "fi",
          "alpha3": "fin"
        },
        {
          "id": 250,
          "name": "France",
          "alpha2": "fr",
          "alpha3": "fra"
        },
        {
          "id": 254,
          "name": "French Guiana",
          "alpha2": "gf",
          "alpha3": "guf"
        },
        {
          "id": 258,
          "name": "French Polynesia",
          "alpha2": "pf",
          "alpha3": "pyf"
        },
        {
          "id": 260,
          "name": "French Southern Territories",
          "alpha2": "tf",
          "alpha3": "atf"
        },
        {
          "id": 266,
          "name": "Gabon",
          "alpha2": "ga",
          "alpha3": "gab"
        },
        {
          "id": 270,
          "name": "Gambia",
          "alpha2": "gm",
          "alpha3": "gmb"
        },
        {
          "id": 268,
          "name": "Georgia",
          "alpha2": "ge",
          "alpha3": "geo"
        },
        {
          "id": 276,
          "name": "Germany",
          "alpha2": "de",
          "alpha3": "deu"
        },
        {
          "id": 288,
          "name": "Ghana",
          "alpha2": "gh",
          "alpha3": "gha"
        },
        {
          "id": 292,
          "name": "Gibraltar",
          "alpha2": "gi",
          "alpha3": "gib"
        },
        {
          "id": 300,
          "name": "Greece",
          "alpha2": "gr",
          "alpha3": "grc"
        },
        {
          "id": 304,
          "name": "Greenland",
          "alpha2": "gl",
          "alpha3": "grl"
        },
        {
          "id": 308,
          "name": "Grenada",
          "alpha2": "gd",
          "alpha3": "grd"
        },
        {
          "id": 312,
          "name": "Guadeloupe",
          "alpha2": "gp",
          "alpha3": "glp"
        },
        {
          "id": 316,
          "name": "Guam",
          "alpha2": "gu",
          "alpha3": "gum"
        },
        {
          "id": 320,
          "name": "Guatemala",
          "alpha2": "gt",
          "alpha3": "gtm"
        },
        {
          "id": 831,
          "name": "Guernsey",
          "alpha2": "gg",
          "alpha3": "ggy"
        },
        {
          "id": 324,
          "name": "Guinea",
          "alpha2": "gn",
          "alpha3": "gin"
        },
        {
          "id": 624,
          "name": "Guinea-Bissau",
          "alpha2": "gw",
          "alpha3": "gnb"
        },
        {
          "id": 328,
          "name": "Guyana",
          "alpha2": "gy",
          "alpha3": "guy"
        },
        {
          "id": 332,
          "name": "Haiti",
          "alpha2": "ht",
          "alpha3": "hti"
        },
        {
          "id": 334,
          "name": "Heard Island and McDonald Islands",
          "alpha2": "hm",
          "alpha3": "hmd"
        },
        {
          "id": 336,
          "name": "Holy See",
          "alpha2": "va",
          "alpha3": "vat"
        },
        {
          "id": 340,
          "name": "Honduras",
          "alpha2": "hn",
          "alpha3": "hnd"
        },
        {
          "id": 344,
          "name": "Hong Kong",
          "alpha2": "hk",
          "alpha3": "hkg"
        },
        {
          "id": 348,
          "name": "Hungary",
          "alpha2": "hu",
          "alpha3": "hun"
        },
        {
          "id": 352,
          "name": "Iceland",
          "alpha2": "is",
          "alpha3": "isl"
        },
        {
          "id": 356,
          "name": "India",
          "alpha2": "in",
          "alpha3": "ind"
        },
        {
          "id": 360,
          "name": "Indonesia",
          "alpha2": "id",
          "alpha3": "idn"
        },
        {
          "id": 364,
          "name": "Iran (Islamic Republic of)",
          "alpha2": "ir",
          "alpha3": "irn"
        },
        {
          "id": 368,
          "name": "Iraq",
          "alpha2": "iq",
          "alpha3": "irq"
        },
        {
          "id": 372,
          "name": "Ireland",
          "alpha2": "ie",
          "alpha3": "irl"
        },
        {
          "id": 833,
          "name": "Isle of Man",
          "alpha2": "im",
          "alpha3": "imn"
        },
        {
          "id": 376,
          "name": "Israel",
          "alpha2": "il",
          "alpha3": "isr"
        },
        {
          "id": 380,
          "name": "Italy",
          "alpha2": "it",
          "alpha3": "ita"
        },
        {
          "id": 388,
          "name": "Jamaica",
          "alpha2": "jm",
          "alpha3": "jam"
        },
        {
          "id": 392,
          "name": "Japan",
          "alpha2": "jp",
          "alpha3": "jpn"
        },
        {
          "id": 832,
          "name": "Jersey",
          "alpha2": "je",
          "alpha3": "jey"
        },
        {
          "id": 400,
          "name": "Jordan",
          "alpha2": "jo",
          "alpha3": "jor"
        },
        {
          "id": 398,
          "name": "Kazakhstan",
          "alpha2": "kz",
          "alpha3": "kaz"
        },
        {
          "id": 404,
          "name": "Kenya",
          "alpha2": "ke",
          "alpha3": "ken"
        },
        {
          "id": 296,
          "name": "Kiribati",
          "alpha2": "ki",
          "alpha3": "kir"
        },
        {
          "id": 408,
          "name": "Korea (Democratic People's Republic of)",
          "alpha2": "kp",
          "alpha3": "prk"
        },
        {
          "id": 410,
          "name": "Korea (Republic of)",
          "alpha2": "kr",
          "alpha3": "kor"
        },
        {
          "id": 414,
          "name": "Kuwait",
          "alpha2": "kw",
          "alpha3": "kwt"
        },
        {
          "id": 417,
          "name": "Kyrgyzstan",
          "alpha2": "kg",
          "alpha3": "kgz"
        },
        {
          "id": 418,
          "name": "Lao People's Democratic Republic",
          "alpha2": "la",
          "alpha3": "lao"
        },
        {
          "id": 428,
          "name": "Latvia",
          "alpha2": "lv",
          "alpha3": "lva"
        },
        {
          "id": 422,
          "name": "Lebanon",
          "alpha2": "lb",
          "alpha3": "lbn"
        },
        {
          "id": 426,
          "name": "Lesotho",
          "alpha2": "ls",
          "alpha3": "lso"
        },
        {
          "id": 430,
          "name": "Liberia",
          "alpha2": "lr",
          "alpha3": "lbr"
        },
        {
          "id": 434,
          "name": "Libya",
          "alpha2": "ly",
          "alpha3": "lby"
        },
        {
          "id": 438,
          "name": "Liechtenstein",
          "alpha2": "li",
          "alpha3": "lie"
        },
        {
          "id": 440,
          "name": "Lithuania",
          "alpha2": "lt",
          "alpha3": "ltu"
        },
        {
          "id": 442,
          "name": "Luxembourg",
          "alpha2": "lu",
          "alpha3": "lux"
        },
        {
          "id": 446,
          "name": "Macao",
          "alpha2": "mo",
          "alpha3": "mac"
        },
        {
          "id": 807,
          "name": "Macedonia (the former Yugoslav Republic of)",
          "alpha2": "mk",
          "alpha3": "mkd"
        },
        {
          "id": 450,
          "name": "Madagascar",
          "alpha2": "mg",
          "alpha3": "mdg"
        },
        {
          "id": 454,
          "name": "Malawi",
          "alpha2": "mw",
          "alpha3": "mwi"
        },
        {
          "id": 458,
          "name": "Malaysia",
          "alpha2": "my",
          "alpha3": "mys"
        },
        {
          "id": 462,
          "name": "Maldives",
          "alpha2": "mv",
          "alpha3": "mdv"
        },
        {
          "id": 466,
          "name": "Mali",
          "alpha2": "ml",
          "alpha3": "mli"
        },
        {
          "id": 470,
          "name": "Malta",
          "alpha2": "mt",
          "alpha3": "mlt"
        },
        {
          "id": 584,
          "name": "Marshall Islands",
          "alpha2": "mh",
          "alpha3": "mhl"
        },
        {
          "id": 474,
          "name": "Martinique",
          "alpha2": "mq",
          "alpha3": "mtq"
        },
        {
          "id": 478,
          "name": "Mauritania",
          "alpha2": "mr",
          "alpha3": "mrt"
        },
        {
          "id": 480,
          "name": "Mauritius",
          "alpha2": "mu",
          "alpha3": "mus"
        },
        {
          "id": 175,
          "name": "Mayotte",
          "alpha2": "yt",
          "alpha3": "myt"
        },
        {
          "id": 484,
          "name": "Mexico",
          "alpha2": "mx",
          "alpha3": "mex"
        },
        {
          "id": 583,
          "name": "Micronesia (Federated States of)",
          "alpha2": "fm",
          "alpha3": "fsm"
        },
        {
          "id": 498,
          "name": "Moldova (Republic of)",
          "alpha2": "md",
          "alpha3": "mda"
        },
        {
          "id": 492,
          "name": "Monaco",
          "alpha2": "mc",
          "alpha3": "mco"
        },
        {
          "id": 496,
          "name": "Mongolia",
          "alpha2": "mn",
          "alpha3": "mng"
        },
        {
          "id": 499,
          "name": "Montenegro",
          "alpha2": "me",
          "alpha3": "mne"
        },
        {
          "id": 500,
          "name": "Montserrat",
          "alpha2": "ms",
          "alpha3": "msr"
        },
        {
          "id": 504,
          "name": "Morocco",
          "alpha2": "ma",
          "alpha3": "mar"
        },
        {
          "id": 508,
          "name": "Mozambique",
          "alpha2": "mz",
          "alpha3": "moz"
        },
        {
          "id": 104,
          "name": "Myanmar",
          "alpha2": "mm",
          "alpha3": "mmr"
        },
        {
          "id": 516,
          "name": "Namibia",
          "alpha2": "na",
          "alpha3": "nam"
        },
        {
          "id": 520,
          "name": "Nauru",
          "alpha2": "nr",
          "alpha3": "nru"
        },
        {
          "id": 524,
          "name": "Nepal",
          "alpha2": "np",
          "alpha3": "npl"
        },
        {
          "id": 528,
          "name": "Netherlands",
          "alpha2": "nl",
          "alpha3": "nld"
        },
        {
          "id": 540,
          "name": "New Caledonia",
          "alpha2": "nc",
          "alpha3": "ncl"
        },
        {
          "id": 554,
          "name": "New Zealand",
          "alpha2": "nz",
          "alpha3": "nzl"
        },
        {
          "id": 558,
          "name": "Nicaragua",
          "alpha2": "ni",
          "alpha3": "nic"
        },
        {
          "id": 562,
          "name": "Niger",
          "alpha2": "ne",
          "alpha3": "ner"
        },
        {
          "id": 566,
          "name": "Nigeria",
          "alpha2": "ng",
          "alpha3": "nga"
        },
        {
          "id": 570,
          "name": "Niue",
          "alpha2": "nu",
          "alpha3": "niu"
        },
        {
          "id": 574,
          "name": "Norfolk Island",
          "alpha2": "nf",
          "alpha3": "nfk"
        },
        {
          "id": 580,
          "name": "Northern Mariana Islands",
          "alpha2": "mp",
          "alpha3": "mnp"
        },
        {
          "id": 578,
          "name": "Norway",
          "alpha2": "no",
          "alpha3": "nor"
        },
        {
          "id": 512,
          "name": "Oman",
          "alpha2": "om",
          "alpha3": "omn"
        },
        {
          "id": 586,
          "name": "Pakistan",
          "alpha2": "pk",
          "alpha3": "pak"
        },
        {
          "id": 585,
          "name": "Palau",
          "alpha2": "pw",
          "alpha3": "plw"
        },
        {
          "id": 275,
          "name": "Palestine, State of",
          "alpha2": "ps",
          "alpha3": "pse"
        },
        {
          "id": 591,
          "name": "Panama",
          "alpha2": "pa",
          "alpha3": "pan"
        },
        {
          "id": 598,
          "name": "Papua New Guinea",
          "alpha2": "pg",
          "alpha3": "png"
        },
        {
          "id": 600,
          "name": "Paraguay",
          "alpha2": "py",
          "alpha3": "pry"
        },
        {
          "id": 604,
          "name": "Peru",
          "alpha2": "pe",
          "alpha3": "per"
        },
        {
          "id": 608,
          "name": "Philippines",
          "alpha2": "ph",
          "alpha3": "phl"
        },
        {
          "id": 612,
          "name": "Pitcairn",
          "alpha2": "pn",
          "alpha3": "pcn"
        },
        {
          "id": 616,
          "name": "Poland",
          "alpha2": "pl",
          "alpha3": "pol"
        },
        {
          "id": 620,
          "name": "Portugal",
          "alpha2": "pt",
          "alpha3": "prt"
        },
        {
          "id": 630,
          "name": "Puerto Rico",
          "alpha2": "pr",
          "alpha3": "pri"
        },
        {
          "id": 634,
          "name": "Qatar",
          "alpha2": "qa",
          "alpha3": "qat"
        },
        {
          "id": 638,
          "name": "Réunion",
          "alpha2": "re",
          "alpha3": "reu"
        },
        {
          "id": 642,
          "name": "Romania",
          "alpha2": "ro",
          "alpha3": "rou"
        },
        {
          "id": 643,
          "name": "Russian Federation",
          "alpha2": "ru",
          "alpha3": "rus"
        },
        {
          "id": 646,
          "name": "Rwanda",
          "alpha2": "rw",
          "alpha3": "rwa"
        },
        {
          "id": 652,
          "name": "Saint Barthélemy",
          "alpha2": "bl",
          "alpha3": "blm"
        },
        {
          "id": 654,
          "name": "Saint Helena, Ascension and Tristan da Cunha",
          "alpha2": "sh",
          "alpha3": "shn"
        },
        {
          "id": 659,
          "name": "Saint Kitts and Nevis",
          "alpha2": "kn",
          "alpha3": "kna"
        },
        {
          "id": 662,
          "name": "Saint Lucia",
          "alpha2": "lc",
          "alpha3": "lca"
        },
        {
          "id": 663,
          "name": "Saint Martin (French part)",
          "alpha2": "mf",
          "alpha3": "maf"
        },
        {
          "id": 666,
          "name": "Saint Pierre and Miquelon",
          "alpha2": "pm",
          "alpha3": "spm"
        },
        {
          "id": 670,
          "name": "Saint Vincent and the Grenadines",
          "alpha2": "vc",
          "alpha3": "vct"
        },
        {
          "id": 882,
          "name": "Samoa",
          "alpha2": "ws",
          "alpha3": "wsm"
        },
        {
          "id": 674,
          "name": "San Marino",
          "alpha2": "sm",
          "alpha3": "smr"
        },
        {
          "id": 678,
          "name": "Sao Tome and Principe",
          "alpha2": "st",
          "alpha3": "stp"
        },
        {
          "id": 682,
          "name": "Saudi Arabia",
          "alpha2": "sa",
          "alpha3": "sau"
        },
        {
          "id": 686,
          "name": "Senegal",
          "alpha2": "sn",
          "alpha3": "sen"
        },
        {
          "id": 688,
          "name": "Serbia",
          "alpha2": "rs",
          "alpha3": "srb"
        },
        {
          "id": 690,
          "name": "Seychelles",
          "alpha2": "sc",
          "alpha3": "syc"
        },
        {
          "id": 694,
          "name": "Sierra Leone",
          "alpha2": "sl",
          "alpha3": "sle"
        },
        {
          "id": 702,
          "name": "Singapore",
          "alpha2": "sg",
          "alpha3": "sgp"
        },
        {
          "id": 534,
          "name": "Sint Maarten (Dutch part)",
          "alpha2": "sx",
          "alpha3": "sxm"
        },
        {
          "id": 703,
          "name": "Slovakia",
          "alpha2": "sk",
          "alpha3": "svk"
        },
        {
          "id": 705,
          "name": "Slovenia",
          "alpha2": "si",
          "alpha3": "svn"
        },
        {
          "id": 90,
          "name": "Solomon Islands",
          "alpha2": "sb",
          "alpha3": "slb"
        },
        {
          "id": 706,
          "name": "Somalia",
          "alpha2": "so",
          "alpha3": "som"
        },
        {
          "id": 710,
          "name": "South Africa",
          "alpha2": "za",
          "alpha3": "zaf"
        },
        {
          "id": 239,
          "name": "South Georgia and the South Sandwich Islands",
          "alpha2": "gs",
          "alpha3": "sgs"
        },
        {
          "id": 728,
          "name": "South Sudan",
          "alpha2": "ss",
          "alpha3": "ssd"
        },
        {
          "id": 724,
          "name": "Spain",
          "alpha2": "es",
          "alpha3": "esp"
        },
        {
          "id": 144,
          "name": "Sri Lanka",
          "alpha2": "lk",
          "alpha3": "lka"
        },
        {
          "id": 729,
          "name": "Sudan",
          "alpha2": "sd",
          "alpha3": "sdn"
        },
        {
          "id": 740,
          "name": "Suriname",
          "alpha2": "sr",
          "alpha3": "sur"
        },
        {
          "id": 744,
          "name": "Svalbard and Jan Mayen",
          "alpha2": "sj",
          "alpha3": "sjm"
        },
        {
          "id": 752,
          "name": "Sweden",
          "alpha2": "se",
          "alpha3": "swe"
        },
        {
          "id": 756,
          "name": "Switzerland",
          "alpha2": "ch",
          "alpha3": "che"
        },
        {
          "id": 760,
          "name": "Syrian Arab Republic",
          "alpha2": "sy",
          "alpha3": "syr"
        },
        {
          "id": 158,
          "name": "Taiwan, Province of China",
          "alpha2": "tw",
          "alpha3": "twn"
        },
        {
          "id": 762,
          "name": "Tajikistan",
          "alpha2": "tj",
          "alpha3": "tjk"
        },
        {
          "id": 834,
          "name": "Tanzania, United Republic of",
          "alpha2": "tz",
          "alpha3": "tza"
        },
        {
          "id": 764,
          "name": "Thailand",
          "alpha2": "th",
          "alpha3": "tha"
        },
        {
          "id": 626,
          "name": "Timor-Leste",
          "alpha2": "tl",
          "alpha3": "tls"
        },
        {
          "id": 768,
          "name": "Togo",
          "alpha2": "tg",
          "alpha3": "tgo"
        },
        {
          "id": 772,
          "name": "Tokelau",
          "alpha2": "tk",
          "alpha3": "tkl"
        },
        {
          "id": 776,
          "name": "Tonga",
          "alpha2": "to",
          "alpha3": "ton"
        },
        {
          "id": 780,
          "name": "Trinidad and Tobago",
          "alpha2": "tt",
          "alpha3": "tto"
        },
        {
          "id": 788,
          "name": "Tunisia",
          "alpha2": "tn",
          "alpha3": "tun"
        },
        {
          "id": 792,
          "name": "Turkey",
          "alpha2": "tr",
          "alpha3": "tur"
        },
        {
          "id": 795,
          "name": "Turkmenistan",
          "alpha2": "tm",
          "alpha3": "tkm"
        },
        {
          "id": 796,
          "name": "Turks and Caicos Islands",
          "alpha2": "tc",
          "alpha3": "tca"
        },
        {
          "id": 798,
          "name": "Tuvalu",
          "alpha2": "tv",
          "alpha3": "tuv"
        },
        {
          "id": 800,
          "name": "Uganda",
          "alpha2": "ug",
          "alpha3": "uga"
        },
        {
          "id": 804,
          "name": "Ukraine",
          "alpha2": "ua",
          "alpha3": "ukr"
        },
        {
          "id": 784,
          "name": "United Arab Emirates",
          "alpha2": "ae",
          "alpha3": "are"
        },
        {
          "id": 826,
          "name": "United Kingdom of Great Britain and Northern Ireland",
          "alpha2": "gb",
          "alpha3": "gbr"
        },
        {
          "id": 840,
          "name": "United States of America",
          "alpha2": "us",
          "alpha3": "usa"
        },
        {
          "id": 581,
          "name": "United States Minor Outlying Islands",
          "alpha2": "um",
          "alpha3": "umi"
        },
        {
          "id": 858,
          "name": "Uruguay",
          "alpha2": "uy",
          "alpha3": "ury"
        },
        {
          "id": 860,
          "name": "Uzbekistan",
          "alpha2": "uz",
          "alpha3": "uzb"
        },
        {
          "id": 548,
          "name": "Vanuatu",
          "alpha2": "vu",
          "alpha3": "vut"
        },
        {
          "id": 862,
          "name": "Venezuela (Bolivarian Republic of)",
          "alpha2": "ve",
          "alpha3": "ven"
        },
        {
          "id": 704,
          "name": "Viet Nam",
          "alpha2": "vn",
          "alpha3": "vnm"
        },
        {
          "id": 92,
          "name": "Virgin Islands (British)",
          "alpha2": "vg",
          "alpha3": "vgb"
        },
        {
          "id": 850,
          "name": "Virgin Islands (U.S.)",
          "alpha2": "vi",
          "alpha3": "vir"
        },
        {
          "id": 876,
          "name": "Wallis and Futuna",
          "alpha2": "wf",
          "alpha3": "wlf"
        },
        {
          "id": 732,
          "name": "Western Sahara",
          "alpha2": "eh",
          "alpha3": "esh"
        },
        {
          "id": 887,
          "name": "Yemen",
          "alpha2": "ye",
          "alpha3": "yem"
        },
        {
          "id": 894,
          "name": "Zambia",
          "alpha2": "zm",
          "alpha3": "zmb"
        },
        {
          "id": 716,
          "name": "Zimbabwe",
          "alpha2": "zw",
          "alpha3": "zwe"
        }
      ]
    }

    readonly DEFAULT_NETWORK = 'testnet'

    constructor(
        private event: Events,
        private storage: Storage
    ) {
        this.event.subscribe("network_update", (settings) => {
            console.info('app.globals network update caused by network update event')
            this.updateNetwork()
        })
        this.updateNetwork()
    }

    updateNetwork(){
        return this.getNetwork()
            .then(network => { this.network = network; })
    }

    getNetwork = () => this.storage.get('network')
        .then(network => (network) ? network : this.DEFAULT_NETWORK)
}
