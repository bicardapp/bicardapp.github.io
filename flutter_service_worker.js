'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "cdc63e79b6b7f9b47817994c97dd6ecd",
"splash/style.css": "86126e7e4072786170390b7ceee604b3",
"index.html": "ac8edccdb3b74d3b0d84f9e8f3f969c8",
"/": "ac8edccdb3b74d3b0d84f9e8f3f969c8",
"main.dart.js": "01ad1f653bc3f1a7d2f54604764d5042",
"icon-192.png": "6f3c1b6b54c64bf0a38d6e524ba655ed",
"favicon.png": "c40bc3c48dbdef5a4a7ec59cf3466291",
"icons/icon-192.png": "6f3c1b6b54c64bf0a38d6e524ba655ed",
"icons/icon-512.png": "e50b717c64f31066dccc6bbac06c5522",
"manifest.json": "89fd0c8a15040ebbcd6420db6ea07918",
"assets/AssetManifest.json": "ca8d0faac35654c021b518cc131edabf",
"assets/NOTICES": "ecb1fc9369c5fe998107957baead6eda",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/spoon.png": "3d55521145160f215f544f4a7449fdc3",
"assets/assets/highheels.png": "08dab3e9cc130505c5a165c0a6616042",
"assets/assets/dance.png": "1bf0807305f5082e150e8f509ab4d6c7",
"assets/assets/watch.png": "77a3f7340b16a799df7f3e188f362b7d",
"assets/assets/ninety_smth.png": "f57e64c108c06e64544eb54c6273dde0",
"assets/assets/sing.png": "a79edfd33c649725fcecd1e39fb60f8d",
"assets/assets/buy.png": "4b1532ea2ff59aa87b937f38cb36b9c7",
"assets/assets/work.png": "58311c7f1c4464d49ad35c0e094cdc5b",
"assets/assets/thirteen.png": "bef3ffd8dfb637e5f5ee345b6390f707",
"assets/assets/ten.png": "609e61e8a741a5d766e4d96906e0054f",
"assets/assets/stay.png": "ddea7899828879e1b97469f8b8fea0ac",
"assets/assets/summer.png": "5e2526450353fa02b18e48aeb2a7e043",
"assets/assets/sixty_smth.png": "7e2102a9234b64cb47f82d92ccee84bf",
"assets/assets/bowl.png": "4b02f8aa2977d23ff7b130940bbcd957",
"assets/assets/peach.png": "5fc17f7a5408f8bfb592a041cfc1cad0",
"assets/assets/tongue.png": "2e720487205aa1b4c09821b7a5ae2ee7",
"assets/assets/you.png": "fd218f125b82f70993a71df9def0ea33",
"assets/assets/friday.png": "e9bfe182d4b36b678cd49ce3c3604208",
"assets/assets/i.png": "41e45bb1c5cee964de8109618f040035",
"assets/assets/hat.png": "64bfc47f725d3bfc675bc5299f96a7a8",
"assets/assets/mouth.png": "747943c9d657ca303b7dd86279ba94aa",
"assets/assets/wake.png": "822da4b8f4b1814efc7a24493d324da3",
"assets/assets/jump.png": "2a833c097233e2c4cb15e0bac61e1827",
"assets/assets/ask.png": "b58d525f38c01cc11a7f23ed4abec297",
"assets/assets/plural.png": "7ad8ff64216cd0fe15b6f023b79e3e9c",
"assets/assets/bring.png": "72169d5ec2a023b2a1028379e1ba8ac8",
"assets/assets/make.png": "c875af341448070c00e3d904f27099a6",
"assets/assets/tell.png": "b036ee30e269a0747f4b3ba0508017f8",
"assets/assets/seventy.png": "7866bb088abeef14f5974042498e91ad",
"assets/assets/seventy_smth.png": "f86f2a2c9f3df34a73e79b756a60b71e",
"assets/assets/three.png": "a8f113212371cd178311e150a5830da1",
"assets/assets/skillet.png": "65f83ca625776151f3c82ce2d621a9ba",
"assets/assets/fly.png": "d27b5862df63d079eb500e4c25f122ec",
"assets/assets/bread.png": "96940a5d47174a195a0b7b9dd7e7264a",
"assets/assets/look.png": "4f14bfffe176fbb8c0d7fb5cb02a535c",
"assets/assets/cry.png": "6a77ce72014151194a326237acd5ea43",
"assets/assets/talk.png": "36b47c8d95d6e50a84b54e695dcd8024",
"assets/assets/potato.png": "e8736ae6451111bcfa0e026a878539a7",
"assets/assets/speak.png": "970cdfcb13926e2b14727050570618ff",
"assets/assets/sixteen.png": "4fad2e42f503dad8b54be219fe537a7a",
"assets/assets/sleep.png": "b07605b1467451275e95fcd2016e2a55",
"assets/assets/forty.png": "826506f8906204580ac44e575f1e912c",
"assets/assets/give.png": "54bd7c6d58adb627e03b486b5e8d529d",
"assets/assets/question.png": "c4231ff2e41ffa21fd008cc4b9e47d65",
"assets/assets/arm.png": "3e34f0d691a9bb4714382757c01b3fd3",
"assets/assets/september.png": "5dd87ac27c92ab064bdf2623115b357b",
"assets/assets/ge.png": "8dc0f7263e01a658860f446346f71ab2",
"assets/assets/saturday.png": "47b56e5d6faedcef06a2d2caa10e2bd2",
"assets/assets/study.png": "10f3d76afec989ee9253389335d0ba37",
"assets/assets/fifteen.png": "c819663dfa9217f507538b5c810b1f2b",
"assets/assets/thirty.png": "3d7fd8e31942961f5712fde2151d4b9b",
"assets/assets/nose.png": "54dc96992100986ab91f550c50ef5c92",
"assets/assets/carrot.png": "df826db5a4956880cad696ec65228275",
"assets/assets/fall.png": "ba24c16b22bf292f45d8eee03157d416",
"assets/assets/show.png": "a57450f49a4f70990823dd62351469a9",
"assets/assets/paint.png": "a80ee3af540bee3815657c538a7d6b78",
"assets/assets/have.png": "5eca3dc7835da2115a01cc46f0b6830d",
"assets/assets/pineapple.png": "01e9317f06c405b424678d21a78c1728",
"assets/assets/en.png": "16149bb96da1511a145434622bc091c7",
"assets/assets/fourteen.png": "32b1774a7c06bc7e7bedc03bb3895556",
"assets/assets/wednesday.png": "7e6d8716cb69930a909e4dd359988b19",
"assets/assets/mango.png": "bde5a37c7e627d6f0be99da76802880c",
"assets/assets/forty_smth.png": "1a5d378d1c4795748a6f545a8dba32e9",
"assets/assets/tangerine.png": "abf6a560f53238fa14261e7382ffadfb",
"assets/assets/ru.png": "5cccb28c3c676345c21b1de264439494",
"assets/assets/eighteen.png": "1a369c613d3ae1bcdb30695ac05a9274",
"assets/assets/draw.png": "edc424607fa70db71be79d212fc0a8ee",
"assets/assets/six.png": "4a527e9a51e0e5a3a855912345ba5a5e",
"assets/assets/two.png": "f41d69994f3b9eeab191c5ab07924869",
"assets/assets/onion.png": "bdd9cc569e83b13b1bfa599bf2d603c5",
"assets/assets/winter.png": "5db3b899ba311b415d1cd8e5247ac7d4",
"assets/assets/scarf.png": "62c20c19f8a17d98723ccbeab989c673",
"assets/assets/ru/llave.png": "d23510d9b25648bf1a177b0337c606a2",
"assets/assets/ru/casa.png": "490eb53a0474a8c55d7aba7e9949b558",
"assets/assets/ru/gata.png": "5817f2fd83efff0a0384dcfc3ae09e01",
"assets/assets/ru/dos.png": "c29a1bfdf5db3bc6254f50762b223558",
"assets/assets/ru/jarron.png": "2f75abc33de6fc800278c286f9a5d60f",
"assets/assets/ru/carta.png": "f283049e9b8eef21f8538ebf41c90da3",
"assets/assets/ru/hermanoyhermana.png": "8feb8bc6b8b20ba10e3cf432aa0de66d",
"assets/assets/ru/te.png": "341e0fa8f3bd8634b68dc424b542a861",
"assets/assets/ru/sala.png": "72fbc69ab082a8a2b2aa49e959c4ca36",
"assets/assets/ru/mochila.png": "c7b7a021cb27b38238f13898ca43a7c1",
"assets/assets/ru/pez.png": "2d687f9d5b7d83324340618cd157bfe6",
"assets/assets/ru/moscu.png": "57d1984147d8cf2bd379cc3f79b0fe79",
"assets/assets/ru/amiga.png": "a62c7903e147998cbbb7775450d7c3fb",
"assets/assets/ru/aqui.png": "85b1e47f45ace782d3fd672eb3a5cafe",
"assets/assets/ru/ninos.png": "76d1ccf9b57e5e4b60d2bd081bf4a1f1",
"assets/assets/ru/sandia.png": "95d9a829b323f1dd769c57c461bef4bd",
"assets/assets/ru/agua.png": "ab7508268bbb4a1a84eda431c69401fc",
"assets/assets/ru/carruajeruso.png": "4497d582fc3f6c0fc93a3fe0e30a4e0d",
"assets/assets/ru/el.png": "603a1a84fa01f99b7eb083f61043e86a",
"assets/assets/ru/pluma.png": "6b2aaf1e47f1be7e5dc1a2f62767f7b8",
"assets/assets/ru/nombre.png": "17945ca962ada624b977290d22d9407b",
"assets/assets/ru/ventana.png": "f9de009ee92c83cfcae57f6aa2a138b8",
"assets/assets/ru/habitacion.png": "ceb5548a475c664d1729b53b5f2d6db1",
"assets/assets/ru/sillaymesa.png": "441ca718d43bb6c4be4c7e42701ff918",
"assets/assets/ru/puerta.png": "acf5568f4faca5d1f06791206994d760",
"assets/assets/ru/escuela.png": "eb56655cf4bd0d25f729222d9ae60582",
"assets/assets/ru/paraguas.png": "312781377acd40552d2682edb7b5aba5",
"assets/assets/ru/calle.png": "fe65f36fa52b8b5a421ff7c123402770",
"assets/assets/ru/manzana.png": "987d704ceb411393ad73b1b68e3c6e1a",
"assets/assets/ru/lentes.png": "ec7d6839feb0f65fb90fbdfbaf100d90",
"assets/assets/ru/poeta.png": "0321c5d27d86bbba196d4ca2a74db800",
"assets/assets/ru/banco.png": "d7e5528172eb4900c41e37baeff4335c",
"assets/assets/ru/padre.png": "9e89a0fb7bf0f7b6ac3eeee216e4fd69",
"assets/assets/ru/coche.png": "e0e653a322a8f09ff3422fe03e1fd5d2",
"assets/assets/ru/sopa.png": "1f76e80d4dedc5f3d85ea8d05cc53b60",
"assets/assets/ru/closet.png": "fcbfb013556201ca18bdd3406a98b26f",
"assets/assets/ru/tablero.png": "9b5111729af22b658188598c9817ff90",
"assets/assets/ru/corbata.png": "d4705a34bfa561905dbe4ecf40571bcf",
"assets/assets/ru/techo.png": "d2c31caf0c1d28c1bb66fb572b0286cf",
"assets/assets/ru/lampara.png": "3ed55160b5be75cff9660073349695a5",
"assets/assets/ru/luna.png": "156f6058d18b86ad0c6ebb4e0c81df19",
"assets/assets/ru/azucar.png": "4480417d2e658f6c7e3a4f9b7e7f4a4d",
"assets/assets/ru/autobus.png": "161365b1debb4b3436171dabd5d502ec",
"assets/assets/ru/mercado.png": "315b1126beb830973dd36148c655edba",
"assets/assets/ru/leccion.png": "68798e05a26fc4ba2f72a538f2e96e72",
"assets/assets/ru/maletin.png": "ac81e42bd17f019525297214dc0d9e82",
"assets/assets/ru/palabra.png": "7b5d55964097864d50f50889912c00ca",
"assets/assets/ru/revista.png": "d5b32ef841bb04366ab4f3a2af1d0125",
"assets/assets/ru/puerto.png": "08afee4220e778ed6d9d42508668b406",
"assets/assets/ru/ella.png": "8fe6ac24ebfb12f325bde78bec7f4a7a",
"assets/assets/ru/letra.png": "03838e8986573824d3a8f2999507fa79",
"assets/assets/ru/nariz.png": "05dd8eb5b3f2075eb77bff8be4a47514",
"assets/assets/ru/museo.png": "89d68be901992734e970519b6a354d5e",
"assets/assets/ru/estudiante.png": "c4f70da84e729cd1e993b561289952fc",
"assets/assets/ru/entrada.png": "977c8df145a1c5accb1ee1cfef7951bc",
"assets/assets/ru/lapiz.png": "e150eae24c38dea94b1a1b0d423fed7e",
"assets/assets/ru/arbolnavideno.png": "231306528d02618ea51a062a005bb06d",
"assets/assets/ru/amigo.png": "88f6b127924a37e787d8e61a96d89923",
"assets/assets/ru/mapa.png": "bd2058446569b3817657db4b43d81368",
"assets/assets/ru/cartel.png": "e733c68a61490bef67b019d45604e470",
"assets/assets/ru/suelo.png": "7baf489f0d358be9db394cb8e9fd4f52",
"assets/assets/ru/cien.png": "cfed1721507f7c80099f25947b286199",
"assets/assets/ru/reloj.png": "31518bd2f47e5c73c86add6136b1202b",
"assets/assets/ru/boca.png": "3dcc298f1def65804d706be9b491a19d",
"assets/assets/ru/fecha.png": "3383e753f77be1db3fa337276188b4f6",
"assets/assets/ru/jardin.png": "edbc4afc44b09e53ce2b007bc39f10fd",
"assets/assets/ru/ciudad.png": "9c4c71aade5f5411e9f1680822994863",
"assets/assets/ru/quien.png": "acc223f1d5eeed5b2223c4327057576c",
"assets/assets/ru/queso.png": "2f3312cdf6acba5fd37e86a77fd18327",
"assets/assets/ru/bolso.png": "76e085d2d0825f3fca4b69fa0f56ea68",
"assets/assets/ru/hijo.png": "89c5eeccd881f8766460222c5e245e59",
"assets/assets/ru/gente.png": "712d94f1355cc81e896137d28c7b4403",
"assets/assets/butter.png": "2c5ca2bfc2f7d23234a3760d8b8ecaed",
"assets/assets/numbers.png": "5e729937984c85c21a228079ad3ea2af",
"assets/assets/sunday.png": "6dd67cb3d5a1ed6f499c0e10e6d41162",
"assets/assets/four.png": "573eb3f5e419173371f74333f7798145",
"assets/assets/tomato.png": "76b0ca45b0989d00ff90b900c1dc100b",
"assets/assets/hundred.png": "b66f244276368b0865baa99734308266",
"assets/assets/fifty_smth.png": "83f3adeb4ee11b9aa6c6fb15755a453c",
"assets/assets/twelve.png": "f58d616d80bc71b392ef32c0cb40f77a",
"assets/assets/jeans.png": "0ec76a9a415c10f86984e47365a1f5cc",
"assets/assets/zero.png": "56a96a7d3ea7935bc89738ea19219a3f",
"assets/assets/twenty.png": "ed092c97fef7ec3737bcf415f0b7f986",
"assets/assets/straw.png": "07a1e89fbaa250ef9492bfbdfd9d432f",
"assets/assets/october.png": "67ccbbbafe7a0e391cce656dcbd6c45a",
"assets/assets/drink.png": "ac827414266babd1259609e402b8c778",
"assets/assets/hand.png": "473cc97c82029f95a9053217b04c7a04",
"assets/assets/spring.png": "e037137311b36cbd65a777b3f1051137",
"assets/assets/fr.png": "d978ced806dd4708bad6157e2b47704d",
"assets/assets/shoe.png": "01f3909493edb1490127fa7066420a7f",
"assets/assets/socks.png": "f20aee89f38e749aa4e5dbe83d10b959",
"assets/assets/watermelon.png": "1c3ecba6864dbd2bfc2030bf5f62c432",
"assets/assets/run.png": "305b7eccf01e47ea2b901472cf549fe5",
"assets/assets/leg.png": "be1b51c05b0c5163883dd8abef0bbe5c",
"assets/assets/nail.png": "d28580078101a9b1dcaf896e9f965b8c",
"assets/assets/getup.png": "ec10d6cd51e2d1db631bf41e762c9694",
"assets/assets/find.png": "9b05a2205d8ded08484c3c30da753c2e",
"assets/assets/thursday.png": "c3c797f801ce02afabc3569e6a55446a",
"assets/assets/grapes.png": "c8e08128e51fbf16f8a543daa6ce7917",
"assets/assets/apple.png": "61ca9f2d473fcfa2e82ff7e1cdc1263c",
"assets/assets/may.png": "087464542ac5b11aa93b24e9abeca629",
"assets/assets/she.png": "b62e32950b05f3ac7548003b61f13f6d",
"assets/assets/eight.png": "81ecb8aee8c4984b35da80b28ecfe386",
"assets/assets/go.png": "b579662ce9c7c5565b3c3c57cab0aae0",
"assets/assets/null.png": "41ee04e5350a001766721c07c270b249",
"assets/assets/coat.png": "08b47b39864dddefe5fa500a7896cf70",
"assets/assets/august.png": "aed7b95e177a02b53ab47c841f85c0d8",
"assets/assets/ear.png": "00cfc7462512f8a7d9740a529f77f82e",
"assets/assets/help.png": "cf6763f0733e59b21faa20ef942dc41d",
"assets/assets/eighty_smth.png": "0c43fcddf78756b1b685e09fb0032a83",
"assets/assets/clean.png": "6275d7031c455574555121a7315b8a77",
"assets/assets/cup.png": "91154d297d66286c4527344d89e3adf6",
"assets/assets/read.png": "32f9871fee9b83d9925a0c254c4e602b",
"assets/assets/march.png": "81980bd1be8e8166140f66b5e6c46d2d",
"assets/assets/walk.png": "db72e8aea702747277ad07ca5d8510f1",
"assets/assets/november.png": "55793e7253b91601cc85a103f7ea8840",
"assets/assets/tooth.png": "8bca0e0e62988bac2852beecf5290e8a",
"assets/assets/garlic.png": "7a57701446becfdeab306c5fc9c1b57c",
"assets/assets/rice.png": "780470d3c6f7c85f2d8b66830c8ddde3",
"assets/assets/see.png": "886969e4b0e7133fccfdd3c8b2faa692",
"assets/assets/cut.png": "086bb3025c5677109c466a3b506cd0fd",
"assets/assets/he.png": "25c1c49c7eb20a8d0a38199bf1cbb18f",
"assets/assets/shorts.png": "0856ed1db1cdefdbb20f516d864d0f4b",
"assets/assets/ice.png": "a93aace143050869606d8b0d1e8e2a8e",
"assets/assets/pear.png": "76d793cb4a36b009781819e0d3fe23a3",
"assets/assets/december.png": "77341fc5ad4b441aa32333d2ceebe9e9",
"assets/assets/come.png": "4410713807e95762268f8f30f65906c6",
"assets/assets/carry.png": "b433b3bebf92122cd463331382ae7cc1",
"assets/assets/thousand.png": "6dfbd90821c87ae5300878276f9375df",
"assets/assets/five.png": "b254bcf0832fe0392658a1e87a06f18a",
"assets/assets/avocado.png": "c2570fdb8f65f8138900610dc21ebfbb",
"assets/assets/water.png": "c7c9f97660e4008db65601f1f06005a1",
"assets/assets/hear.png": "a22dd71d5bb68236d8cbf67312224ad8",
"assets/assets/calendar.png": "0a6129c3cf7d4915a19a1f523732ecc7",
"assets/assets/twenty_smth.png": "867e102d3fa6a7c0fcc5688897e8d02a",
"assets/assets/melon.png": "261d5991e805e0877c4c8e86c12dd8a5",
"assets/assets/one.png": "e207050e1f7a9e48c434690c6f5af300",
"assets/assets/listen.png": "707b355d2d68e4c0b8f6f3560c9a1dd7",
"assets/assets/ninety.png": "8b4cbd319ddc665ca8073cb444e13bb9",
"assets/assets/cap.png": "adac44c3090d87faef274ab26a2f2bad",
"assets/assets/drive.png": "ddaaf74e8df4f56439646c6bae9bf503",
"assets/assets/take.png": "349e3465e5550d808cd42f706a9f6b79",
"assets/assets/eye.png": "886969e4b0e7133fccfdd3c8b2faa692",
"assets/assets/learn.png": "06ed93b7ba989430f95881ee65daf487",
"assets/assets/push.png": "aefaa33c1beb0db99c3b16916653e792",
"assets/assets/eat.png": "8b39bdce01885035f6009926d3175ced",
"assets/assets/sixty.png": "db5e58bda058044bb4f45d5109239d82",
"assets/assets/icecream.png": "2d38e4b99cbdf6079136bcb4effd2cd3",
"assets/assets/think.png": "786be5014c9dba085eb0d4c0badce82c",
"assets/assets/vest.png": "32d478769e41bd57b74a5c4c0bb334ef",
"assets/assets/foot.png": "3e51ed230377dee6f0e7021092fb2cd1",
"assets/assets/it.png": "7dda8760cfca6e0b755af25c90e1feff",
"assets/assets/wash.png": "73be85d3ed31bc1bbd5a3ddcde7610fc",
"assets/assets/pull.png": "407a5e4abd2cb036a57e0a51d217f32b",
"assets/assets/knife.png": "0da52ea95b6177604292c84349114d95",
"assets/assets/sunglasses.png": "43fc2da7259d7f3755ca3fa39d2611b9",
"assets/assets/cucumber.png": "72dafe4ef75fb4c552419b07f1b6b9f4",
"assets/assets/lemon.png": "313e1ec2c7eb82f718a5f270254391da",
"assets/assets/seven.png": "d3f30507b9ba989ea23ba895e10e3ef6",
"assets/assets/smell.png": "54dc96992100986ab91f550c50ef5c92",
"assets/assets/ride.png": "6436464adf441e6bd9c4c374ba194a6c",
"assets/assets/bone.png": "9734f77e491dbb9708222781a42b7e02",
"assets/assets/answer.png": "6a9db759cf0de75e352af145bfbaf4d5",
"assets/assets/rest.png": "1f08105f4b4ae01b58bfb7a6b5fa8669",
"assets/assets/eleven.png": "729f11cbee5548db6722c3027d82e1a6",
"assets/assets/sun.png": "b1a295ded641c7b4a778dd62b1cb805d",
"assets/assets/fifty.png": "bfaa3cd433a94ff4b893412c421202d9",
"assets/assets/write.png": "49fdd0209eeff17c2c5ae1d33512559f",
"assets/assets/february.png": "84388a16cfdda4430a75201b69792ca1",
"assets/assets/nineteen.png": "55ff7737f0c4af2667b9cf804ead271c",
"assets/assets/goggles.png": "26e8b8076927f4be354c838ab2765636",
"assets/assets/plate.png": "8b39bdce01885035f6009926d3175ced",
"assets/assets/glass.png": "eb5e47962fc2a0f92452083b73b74f03",
"assets/assets/egg.png": "c5ffc551a6b66dacf57ab4e2418e1fce",
"assets/assets/swim.png": "e5191d48391a8ede26eb90d1ab659f7c",
"assets/assets/thirty_smth.png": "6df09306376df256b47510472e636461",
"assets/assets/seventeen.png": "31254be9e66a08a394ebede4b87bcf62",
"assets/assets/teach.png": "1dc8ccc893c87f29869c52290f1913ac",
"assets/assets/eighty.png": "b18536f33290808c929561c692cb30b1",
"assets/assets/say.png": "747943c9d657ca303b7dd86279ba94aa",
"assets/assets/july.png": "537f7a11627a87202b187997704ce385",
"assets/assets/dress.png": "a60ffd9a87340401a37e5d568bcd18c8",
"assets/assets/swimsuit.png": "3ba5ea1ae31fcde13a709c3483741108",
"assets/assets/purse.png": "3dacd90ce712d61507608e2c932da6f8",
"assets/assets/sell.png": "ed1163b46e09f57e182aecd3a992b982",
"assets/assets/monday.png": "ffcf8312288296d8902093e757ec2f7f",
"assets/assets/play.png": "b273dbbb34655175747db89f8c91e266",
"assets/assets/gloves.png": "938c97ff64eb3d67ff6ef80a24c53139",
"assets/assets/nine.png": "acf6e547ef16629994e885c6c52a67d5",
"assets/assets/april.png": "5ee45daeb87438670f4d7c0903e81663",
"assets/assets/fork.png": "942d47dad71b77dedfe8bb7bb2e07729",
"assets/assets/tshirt.png": "4ee1bdcf14438b93d25a11bd93be1c5c",
"assets/assets/save.png": "d602633dde86a801ff414b31e26a2807",
"assets/assets/june.png": "5aac512b82920f6a6251f1b65f4d160e",
"assets/assets/bag.png": "24f1c62a92be576a35478a8863c9ede9",
"assets/assets/rain.png": "caad75d3f58a006c9b56593498120c32",
"assets/assets/tuesday.png": "a089e05362a07c38d456a40fdc54bd3e",
"assets/assets/glasses.png": "555892242cd3f9d12381f4b11cbb5793",
"assets/assets/live.png": "bd16b14504db3605543d19d6925b5ddf",
"assets/assets/january.png": "8e0f6f0b1b06148478c661fcd4415283",
"icon-512.png": "e50b717c64f31066dccc6bbac06c5522"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
