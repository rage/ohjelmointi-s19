---
path: "/usein-kysytyt-kysymykset"
title: "Usein kysytyt kysymykset"
hidden: false
information_page: true
---

Tässä usein kysyttyjä kysymyksiä ja ongelmia. Jos et löydä kysymykseesi vastausta täältä, voit esitttää sen [tukiväylillämme](/tukivaylat).
Huomaa, että nämä vastaukset koskevat Helsingin yliopiston luentokurssia syksyllä 2019.

<table-of-contents></table-of-contents>

### Minulla on ongelma ohjelmointiympäristön TMC pluginin kanssa

Varmista että sinulla on uusin versio TMC liitännäisestä valitsemalla Netbeanssin ylävalikosta `Help` -> `Check for Updates`.

### Olen tehnyt ohjelmoinnin mooccia aiemmin, kuinka vaihdan tähän kurssiin ja aloitan alusta?
Sulje kaikki tehtävät netbeansissa, ja Avaa Netbeansissa TMC-asetukset klikkaamalla TMC -> settings. Vaihda organisaatioksi Helsingin yliopisto, kurssiksi ohjelmoinnin perusteet. Seuraa materiaalia täällä, osoitteessa ohjelmointi-s19.mooc.fi -- se "s" on tärkeä, se erottaa syksyn kurssin kevään kurssista.

### Osaan jo ohjelmoida, voinko tenttiä kurssin?
Kurssilla järjestetään toisella viikolla korvaava koe, jolla voi suorittaa kurssin jos kurssin asiat ovat jo hallussa. Ilmoittaudu kurssisn moodle-sivulla.

### En tiedä, mikä organisaatio ja kurssiversio minun pitäisi valita
syksyn 2019 luentokurssilla valitaan organisaatioksi "Helsingin yliopisto" ja kurssiksi "Ohjelmoinnin perusteet, syksy 2019"

### Netbeans jäätyy tehtävän palauteikkunan avautuessa

Ongelma pitäisi olla korjattu TMC liitännäisen uusimmassa versiossa. Saat sen ladattua valitsemalla Netbeanssin yläpalkista <code>Help</code> -> <code>Check for updates</code> ja seuraamalla näytölle tulevia ohjeita.

### Ohjelmointitehtävässä on mielestäni virhe

Varmista, että ongelma ei ole omassa koodissasi. Kysy tarvittaessa apua kurssin tukikanavilla. Kokeile myös onko tehtävään saatavilla päivitystä valitsemalla Netbeanssin yläpalkista `TMC` -> `Download or update exercises`. Jos ongelma ei ratkea tämänkään jälkeen, avaa Moodle foorumiin tästä keskusteluketju, niin kurssin ohjaajat katsovat mikä tehtävässä on vialla ja tekevät mahdollisen korjauksen.

### Löysin materiaalista virheen

Avaa Moodle-foorumiin tästä keskusteluketju.

Jos kysymys on virheestä, jonka osaat itse korjata -- esim kirjoitusvirhe -- voit avata pull requestin repoon https://github.com/rage/ohjelmointi-s19.

### Miten saan ladattua seuraavan osan ohjelmointitehtävät?

NetBeans -liitännäinen tarjoaa sinulle seuraavan osan tehtäviä, kun olet saanut tarpeeksi edellisen osan ohjelmointitehtävien pisteistä. Aikataulullisella kurssilla tämä raja on 25% ja aikatauluttomalla kurssilla tämä raja on 90%.

### Tehtävien lataaminen ja palauttaminen on hidasta macOS -käyttöjärjestelmällä

Seuraa tätä ohjetta ongelman ratkaisemiseksi: https://materiaalit.github.io/tmc-asennus/macos-verkkoongelma/.

Jos tämä ei auta, kokeile vaihtaa Netbeanssin asetuksista proxy setting vaihtoehtoon "no proxy".

### Netbeanssin asennusohjelma ei avaudu macOS:lla

Kokele painaa asennusohjelmaa hiiren oikealla näppäimellä ja valitse Avaa/Open.

### Osan 12 tehtävien testit eivät toimi macOS-tietokoneellani

Katso tämä ohje: [macOS ohjeet](/macos-ohjeet)

### Saan testejä ajattaessa virheviestin, joka valittaa JAVA_HOME:sta

Seuraa tätä ohjetta ongelman ratkaisemiseksi: [https://materiaalit.github.io/tmc-asennus/java_home_not_found/](https://materiaalit.github.io/tmc-asennus/java_home_not_found/).

### Netbeans tai netbeanssin asennusohjelma ei avaannu tai näyttää avauduttuaan oudolta.

Varmista, että sinulla on Javan kehitystyökalujen versio 8 asennettuna. Kurssilla käytetty ohjelmointiympäristö ei toimi kunnolla uudemmilla Javan versioilla. Jos törmäät ongelmaan, kokeile poistaa koneeltasi Javan JDK:n uudemmat versiot ja sitten asenna Netbeans with TMC uudestaan.

### Kurssimateriaalin uuden osan pitäisi olla julki tänään, mutta en näe sitä

Emme takaa mihin kellonaikaan kurssimateriaalin uusi osa ilmestyy. Vaikka materiaali on yleensä julkaistu noin puolen päivän maissa, julkaisu saattaa venyä myöhempään. Kiitos kärsivällisyydestäsi!

###  Ohjelmakoodini rivi "import javafx..." on punaisella

Osalla opiskelijoista osan 12 graafisten tehtävien ohjelmakoodi ei käänny, koska rivi "import javafx..." on alleviivattu punaisella.

Tämä ongelma johtuu siitä, että koneella on asennettuna AdoptOpenJDK, joka ei sisällä graafisiin tehtäviin tarvittavaa JavaFX-kirjastoa. Ongelma korjaantuu poistamalla koneelta AdoptOpenJDK ja asentamalla tilalle Oraclen Java.

AdoptOpenJDK:n poistaminen onnistuu Windowsilla seuraavasti:
1. Mene Windows-valikosta Ohjauspaneeli --> Ohjelmat --> Poista asennettu ohjelma
2. Etsi ohjelmalistasta "AdoptOpenJDK JDK with Hotspot 8.0.212.04 (x64)" (tai vastaava, versionumero saattaa olla eri)
3. Paina hiiren oikealla näppäimellä ja valitse "Poista"

AdoptOpenJDK:n poistaminen onnistuu macOS:lla seuraavasti:
1. Mene Finder:ssä kansioon /Library/Java/JavaVirtualMachines/
2. Poista sieltä kansio jdk1.8.0 sisältöineen

Kun AdoptOpenJDK on poistettu, voit asentaa Oraclen Javan seuraavien ohjeiden mukaisesti: [https://materiaalit.github.io/tmc-asennus/netbeans/](https://materiaalit.github.io/tmc-asennus/netbeans/)

### En näe suorittamiani tehtäviä pistevisualisaatiossa

Valitse sivun yläkulmasta oma profiilisi. Valitse vetovalikossa *"Minkä kurssin version pisteet, deadlinet ja kolikot haluat nähdä?"* sama kurssin versio mitä olet tekemässä NetBeansissä.

Voit tarkistaa mikä krussiversio sinulla on NetBeansissä valitsemalla TMC -> Settings

### En näe kolikkojani

Valitse sivun yläkulmasta oma profiilisi. Valitse vetovalikossa *"Minkä kurssin version pisteet, deadlinet ja kolikot haluat nähdä?"* sama kurssin versio mitä olet tekemässä NetBeansissä.

Voit tarkistaa mikä krussiversio sinulla on NetBeansissä valitsemalla TMC -> Settings
