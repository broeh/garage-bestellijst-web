# Garage-bestellijst

Zelfstandige mobiele bestellijst voor een garagevliering. Op 4 november 2026 zijn de volledig gekochte artikelen verwijderd en is het aantal OSB-platen met vierzijdige tong en groef teruggebracht van 9 naar 2 na aankoop van 7 platen. 28 regels komen uit de bestaande materiaallijst van 4 november 2026, met de standaardaantallen. Daar zijn 2 regels voor bescherming en transport aan toegevoegd: 2 paar GEBOL Multi-Flex-handschoenen en 4 MAMUTEC-spanbanden van 50 mm × 6 m. Handschoenmaat 10/XL is voorlopig en moet in de winkel worden gepast; het aantal spanbanden is een inkoopvoorstel en geen berekende sjoropstelling. Deze extra artikelen zijn inmiddels van de bestellijst verwijderd. Ook de DuoPower-pluggen 10 × 50 en houtdraadbouten 8 × 60 zijn op verzoek verwijderd. Op 5 november is de WGB-dopsleutelset opnieuw aan de lijst toegevoegd. De pagina bevat geen bouwplan of rekenhulp.

## Publicatie

Open de bestellijst op je telefoon: https://broeh.github.io/garage-bestellijst-web/

De openbare website wordt via GitHub Pages gebouwd uit de `main`-branch van `broeh/garage-bestellijst-web`, map `/`. De repository `broeh/garage-bestellijst` kon door een lopende GitHub-serverbewerking nog niet openbaar worden gemaakt; daarom staat dezelfde bron ook in de openbare webrepository. In deze checkout heet die tweede remote `public`. Push afgeronde wijzigingen naar beide remotes.

De publicatie is op verzoek tijdelijk. Er is geen automatische einddatum ingesteld. Om de website weer uit te zetten: schakel GitHub Pages uit op de webrepository. Om ook de broncode af te schermen: zet de webrepository terug op privé.

## Gebruik

- Kies Beslag & elektra, Nieuwe trip, Fase 1, Gereedschap, Fase 2 of Alles. Beslag & elektra opent standaard.
- Artikelen staan per winkel en op volgorde van het gangnummer in Hornbach Den Haag, vestiging 724. De tellerkopschroeven staan apart bij Toolstation Zoetermeer, Platinastraat 66.
- Vink af wat al is gekocht. Vinkjes blijven per browser en toestel bewaard, zonder synchronisatie.
- Zoek op naam, specificatie, artikelnummer of gang. Met ‘Alleen nog nodig’ verdwijnen afgevinkte artikelen.
- Wacht bij de eerste online opening tot ‘Offline beschikbaar’ verschijnt. Daarna kan de lijst inclusief afbeeldingen offline worden herladen. Externe productlinks vereisen internet.
- Je kunt de pagina via het deelmenu van je mobiele browser op je beginscherm zetten.

## Gegevens en afbeeldingen

`products.js` bevat de aantallen, prijsindicaties, productlinks en ganglocaties. Gegevens worden niet automatisch bijgewerkt vanuit het oorspronkelijke rapport of Hornbach. Productlinks bevatten `marketNo=724` voor Den Haag.

Productfoto’s van Hornbach en Toolstation zijn lokaal opgeslagen in `assets/`, met de originele bron-URL in `imageSource`. De drie artikelen zonder gekozen merk of uitvoering hebben een schematische SVG-illustratie. Bij de ankernagels staat een voorbeeldfoto van de niet-leverbare DRAKENA-uitvoering; de kooplocatie blijft ‘elders’. De HECO-betonschroeven blijven op bestelling staan. De HECO-tellerkopschroeven 6 × 120 zijn in de losse lijst vervangen door Woodies Ultimate 6 × 120 TX30, deeldraad met tellerkop, 100 stuks (Toolstation 66383). Er lagen bij controle 3 dozen in Zoetermeer; er is niets gereserveerd. De nagels blijven nog te regelen. Bij de drie onderzochte regels staan alternatieven met hun bevestigde voorraad en beperkingen.

De optionele trapleuning telt niet mee in het bedrag. Prijzen en voorraad kunnen afwijken. Deze pagina is een boodschappenlijst en valideert geen constructie of bevestigingsmiddelen.

## Voorraadcontrole

`availability-check.json` bewaart de gecontroleerde Hornbach-voorraad en de Toolstation-voorraad voor vestiging AW (Zoetermeer) en WW (magazijn). Controle via de openbare winkelgegevens en de voorraadservice die de Toolstation-site zelf gebruikt; geen toegangscodes in dit project. Ontbrekende voorraadregels zijn niet als positieve voorraad bevestigd. De voorraad is een momentopname.

GAMMA Zoetermeer: de directe website blokkeert voorraadcontrole met HTTP 429. De Dynaplus 6 × 120 tellerkop is een gevonden assortimentsoptie, zonder bevestigde lokale voorraad.

De fischer FBS II 6 × 60/5 US (Toolstation 16604) is alleen als kandidaat opgenomen: magazijnvoorraad, geen bevestigde lokale voorraad, ander ankertype en montagevoorwaarden. De schroefnagels 3,8 × 32 (43289) zijn geen geselecteerde één-op-éénvervanger voor 4 × 40: in Zoetermeer slechts 100 stuks, in het magazijn 700; de exacte vereiste GB-uitvoering is niet bevestigd.

## Lokaal openen

Geen build of installatie nodig:

```sh
python -m http.server 8766 --bind 127.0.0.1
```

Open daarna `http://127.0.0.1:8766/`. Offline gebruik werkt via localhost of HTTPS. Rechtstreeks openen als bestand ondersteunt de service worker niet.

Na een wijziging van pagina, scripts, stijlen of afbeeldingen: pas de cacheversie in `sw.js` aan en houd `ASSETS` gelijk aan de te bewaren bestanden. Bewaar altijd `index.html` en `./`, zodat beide URL-vormen offline werken.

## Verificatie

Gecontroleerd met Chromium op telefoonformaat 390 × 844: alle 28 artikelregels, alle afbeeldingen, afvinken na herladen, filters, zoeken, geen horizontale overflow en offline herladen met afbeeldingen en bewaarde vinkjes. Geen JavaScript-fouten. Daarnaast visuele controle van de mobiele screenshot en een volledige screenshot via de lokale screenshot-CLI.

## Beslag & elektra · 15 november 2026

Tabblad met 15 regels, eigen afvink-ID’s en lokale productfoto’s. Totaal € 205,99; optionele WAGO-klemmen € 15,69 en 20 tussenmaatdragers € 50,00 buiten het totaal. De oude lijsten zijn behouden. Dezelfde dragers staan ook in eerdere trips; de tab Alles is dus geen ontdubbelde bestelling.

- 20 kleine STARX-stoelhoeken 25 × 25 × 15 mm; 200 DRESSELHAUS-schroeven 3,5 × 16 mm.
- 20 budgetplankdragers, 15 cm diep en 20 cm hoog. Voor plankjes van 10 cm zijn daarnaast 20 dragers van 8 cm diep toegevoegd voor € 59,00. Een tussenmaat van 10,5 cm diep voor planken vanaf circa 11 cm staat als aparte optionele regel. De 8 cm drager is ook zwart verkrijgbaar, als kleurvariant.
- Witte dubbele DOLLE-dragers: 24 × 47 cm, elk 6 × 37, 27, 22 en 17 cm. Wit is goedkoper dan verzinkt; passing vergelijken met de bestaande drager.
- 20 STARX-hoeken van 40 mm breed voor balkvlakken van 44 mm; dit is geen constructieve goedkeuring.
- Voorgestelde hoeveelheden: 50 TOX-gipsplaatpluggen, schroeven niet als meegeleverd bevestigd, 10 m H03VV-F lampsnoer, 10 kroonsteenstrips van 12 polen.

Open punt: Hans heeft nog niet aangegeven of het om flexibel lampsnoer of het verleggen van vaste installatiebedrading gaat. Voorlopige aanname: 230 V flexibel aansluitsnoer voor een dubbelgeïsoleerde lamp. Het 2-aderige snoer heeft geen aarde. Tweelingsnoer tot 42 V is expliciet afgewezen. De kroonstenen zijn alleen opgegeven voor 1,5–2,5 mm²; voor 0,75 mm² staan WAGO-hendelklemmen als passende optionele keuze op de lijst.

Bronmomentopname: `beslag-check.json`, uit de openbare Hornbach-productpagina’s met winkelkeuze 724 en `offerRA.merchant.merchantId = NL724`. Gangen 14, 16, 21 en 22 bevestigd; vaknummers niet verstrekt. Geen reservering. Bron bevat alleen geselecteerde artikelgegevens, geen volledige website-scripts.

Verificatie: JavaScript-syntaxcontrole en Chromium op 390 × 844 geslaagd voor 13 regels, bedrag, alle foto’s, afvinken na herladen, zoeken, alleen-nog-nodig-filter, behoud van 16 oude tripregels, geen horizontale overflow en offline herladen met foto’s. Geen JavaScript-fouten. Desktop- en mobiele screenshots visueel gecontroleerd.

Review en aanvulling 15 november: de oorspronkelijke lijst had de kleine drager alleen als uitklapbaar alternatief; die is nu een eigen bestelregel met foto, 20 stuks, gang 14 en eigen vinkje. Afmetingen gecontroleerd in de Hornbach-attributen: 8 cm diepte / 11,5 cm hoogte en 10,5 cm diepte / 16 cm hoogte. De tussenmaat past niet onder een plank van precies 10 cm.

Correctie gipspluggen: Hornbach art. 8229649 noemt GDK32+S, maar EAN 4049563001334 hoort bij fabrikantartikel 068100231 zonder schroeven. De fabrikant geeft voor de variant met schroeven 068101231 / EAN 4049563001341. Daarom is de claim “met schroeven” ingetrokken; verpakking controleren, zo nodig schroeven apart kopen. Bronnen en verschil vastgelegd in beslag-check.json en op de artikelkaart. De eerdere testresultaten hierboven betreffen de eerste versie met 13 regels.

Aanvulling geverifieerd met 15 regels op 390 × 844: juiste totaal, foto’s, filters, afvinken na herladen, oude trip, optionele tussenmaat en offline foto’s. Geen overflow of JavaScript-fouten. Desktop-screenshot visueel gecontroleerd.
