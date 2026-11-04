# Garage-bestellijst

Zelfstandige mobiele bestellijst voor een garagevliering. 28 regels komen uit de bestaande materiaallijst van 4 november 2026, met de standaardaantallen. Daar zijn 2 regels voor bescherming en transport aan toegevoegd: 2 paar GEBOL Multi-Flex-handschoenen en 4 MAMUTEC-spanbanden van 50 mm × 6 m. Handschoenmaat 10/XL is voorlopig en moet in de winkel worden gepast; het aantal spanbanden is een inkoopvoorstel en geen berekende sjoropstelling. Deze extra artikelen staan onder Fase 1. De pagina bevat geen bouwplan of rekenhulp.

## Publicatie

Open de bestellijst op je telefoon: https://broeh.github.io/garage-bestellijst-web/

De openbare website wordt via GitHub Pages gebouwd uit de `main`-branch van `broeh/garage-bestellijst-web`, map `/`. De repository `broeh/garage-bestellijst` kon door een lopende GitHub-serverbewerking nog niet openbaar worden gemaakt; daarom staat dezelfde bron ook in de openbare webrepository. In deze checkout heet die tweede remote `public`. Push afgeronde wijzigingen naar beide remotes.

De publicatie is op verzoek tijdelijk. Er is geen automatische einddatum ingesteld. Om de website weer uit te zetten: schakel GitHub Pages uit op de webrepository. Om ook de broncode af te schermen: zet de webrepository terug op privé.

## Gebruik

- Kies Fase 1, Gereedschap, Fase 2 of Alles.
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
