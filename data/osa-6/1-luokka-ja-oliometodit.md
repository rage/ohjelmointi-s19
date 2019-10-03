---
path: '/osa-6/1-luokka-ja-oliometodit'
title: 'Luokka- ja oliometodit: määre static'
hidden: false
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet käsitteet luokka- ja oliometodi.
- Tiedät miten luokka- ja oliometodit eroavat toisistaan ja luoda sekä käyttää niitä.
- Osaat kutsua luokkametodeja luokan ulkopuolelta.
- Kertaat metodien käyttöä.

</text-box>

Kurssin alussa kaikissa metodeissa esiintyi määre `static`, mutta aloittaessamme olioiden käytön, tuon määreen käyttö jopa kiellettiin. Mistä on kysymys?

Javan metodit voidaan jakaa kahteen ryhmään `static`-määreen olemassaolon perusteella. Metodit joissa ei ole `static`-määrettä ovat **oliometodeja** (tunnetaan myös instanssimetodeina). Metodit joissa on `static`-määre ovat **luokkametodeja**.

Oliometodit ovat metodeja, jotka liittyvät olioihin, ja joiden koodissa voi käsitellä oliomuuttujia ja kutsua olion muita oliometodeja. Oliometodeissa on erityisesti pääsy `this`-määreeseen, joka on viite juuri metodia kutsuvaan olioon muuttujiin.

Alla on esimerkki luokasta `Esine`, jolla on kolme oliometodia. Kussakin metodissa voidaan käsitellä olion muuttujia.


```java
public class Esine {
    private String nimi;

    public Esine(String nimi) {
        this.nimi = nimi;
    }

    // oliometodit eli instanssimetodit eli olion metodit
    public String getNimi() {
        return this.nimi;
    }
    public void setNimi(String nimi) {
        this.nimi = nimi;
    }
    public String toString() {
        return this.nimi;
    }
}
```

Toisin kuin oliometodit, luokkametodit ovat metodeja, joissa voidaan käsitellä vain metodin parametrina saamia tai metodissa luotuja muuttujia. Alla on esimerkki luokasta `Tulostaja`, jolla on kaksi luokkametodia. Toinen tulostaa metodille parametrina annetun merkkijonon alleviivattuna ja toinen tulostaa metodille parametrina annetun luvun määräämän määrän viivoja.


```java
public class Tulostaja {

    // luokkametodit
    public static void tulostaAlleviivattuna(String merkkijono) {
        System.out.println(merkkijono);
        tulostaViiva(merkkijono.length());
    }

    public static void tulostaViiva(int pituus) {
        int i = 0;
        while (i < pituus) {
            System.out.print("-");
            i++;
        }
        System.out.println();
    }
}
```


Oliometodien kutsumiseen tarvitaan olio, jolle metodia kutsutaan (kutsu muotoa `olionNimi.metodinNimi`). Luokkametodeja voidaan kutsua ilman oliota (kutsu muotoa `metodinNimi`). Mikäli luokkametodia halutaan kutsua luokan ulkopuolelta, tapahtuu kutsu muodossa `LuokanNimi.metodinNimi`.

Tarkastellaan edellä luotujen luokkien toimintaa luokassa `Ohjelma`. Alla olevassa esimerkissä hyödynnetään luokassa `Tulostaja` olevia luokkametodeja, jonka lisäksi käytetään luokasta `Esine` luotua oliota sekä sen oliometodeja.


```java
public class Ohjelma {

    public static void main(String[] args) {
        Tulostaja.tulostaAlleviivattuna("Hei maailma!");

        Esine tuoli = new Esine("Kartell Louis Ghost");
        Tulostaja.tulostaViiva(tuoli.getNimi().length());
        Tulostaja.tulostaAlleviivattuna(tuoli.toString());
    }
}
```

<sample-output>
Hei maailma!
------------
-------------------
Kartell Louis Ghost
-------------------
</sample-output>


## Olio luokkametodin parametrina


Tarkastellaan ohjelmaa, jossa käsitellään listoja. Ohjelmassa olevassa `main`-metodissa on toiminnallisuutta, missä käsitellään listalla olevia lukuja. Tämän lisäksi luokassa on luokkametodi `nollaaLista` joka toimii nimensä mukaisesti eli asettaa nollan parametrina saamansa listan kaikkien lukujen arvoksi.


```java
import java.util.ArrayList;

public class Ohjelma {

    public static void main(String[] args) {
        ArrayList<Integer> luvut = new ArrayList<>();
        luvut.add(1);
        luvut.add(2);
        luvut.add(3);
        luvut.add(4);
        luvut.add(5);

        for (int luku : luvut) {
            System.out.print(luku + " ");  // tulostuu 1 2 3 4 5
        }

        System.out.println();

        nollaaLista(luvut);

        for (int luku : luvut) {
            System.out.print(luku + " ");  // tulostuu 0 0 0 0 0
        }
    }


    public static void nollaaLista(ArrayList<Integer> lista) {
        for (int i = 0; i < lista.size(); i++) {
            lista.set(i, 0);
        }
    }
}
```

Yllä olevassa esimerkissä metodilla `nollaaLista` on määre `static` ja sen kutsuminen tapahtuu ilman alussa olevaa olioviitettä.

Luokkametodille (tai *staattiselle metodille*) voi antaa olion parametrina -- tämä on oikeastaan tuttua jo kurssin kolmannesta osasta. Luokkametodi ei kuitenkaan voi käsitellä mitään muita lukuja, merkkijonoja, tai olioita kuin niitä, jotka annetaan sille parametrina, tai jotka se luo itse.

Toisin sanoen, luokkametodia käyttävän koodin tulee antaa luokkametodille ne arvot ja oliot, joita luokkametodissa käsitellään.

Koska luokkametodi ei liity mihinkään olioon, ei sitä kutsuta oliometodien tapaan `olionNimi.metodinNimi()`, vaan sen kutsumisessa (saman luokan sisällä) käytetään pelkkää metodin nimeä. Mikäli luokkametodin koodi on eri luokan sisällä kuin sitä kutsuva metodi, voi luokkametodia kutsua muodossa `LuokanNimi.staattisenMetodinNimi()`.

Alla on edellä tarkasteltu esimerkki muutettuna siten, että pääohjelma ja metodi ovat omissa luokissaan:


```java
import java.util.ArrayList;

public class Ohjelma {
    public static void main(String[] args) {
        ArrayList<Integer> luvut = new ArrayList<>();
        luvut.add(1);
        luvut.add(2);
        luvut.add(3);
        luvut.add(4);
        luvut.add(5);

        for (int luku : luvut) {
            System.out.print(luku + " ");  // tulostuu 1 2 3 4 5
        }

        System.out.println();

        Listat.nollaaLista(luvut);

        for (int luku : luvut) {
            System.out.print(luku + " ");  // tulostuu 0 0 0 0 0
        }
    }
}
```

```java
import java.util.ArrayList;

public class Listat {

    public static void nollaaLista(ArrayList<Integer> lista) {
        for (int i = 0; i < lista.size(); i++) {
            lista.set(i, 0);
        }
    }
}
```

Toisen luokan sisällä -- tässä tämän toisen luokan nimi on `Listat` -- määriteltyä staattista metodia kutsutaan yllä muodossa `Listat.nollaaLista(*parametri*);`.


## Milloin luokkametodeja tulisi käyttää

Kaikki olion tilaa käsittelevät metodit tulee määritellä oliometodeina, joilla ei ole static-määrettä. Esimerkiksi edellisissä osissa määrittelemiemme luokkien kuten `Henkilo, Paivays, Esine, ...` kaikki metodit tulee määritellä ilman static-määrettä.

Palataan vielä luokkaan `Henkilo`. Seuraavassa on osa luokan määritelmästä. Kaikkiin oliomuuttujiin viitataan `this`-määreen avulla sillä korostamme, että metodeissa käsitellään olion "sisällä" olevia oliomuuttujia.


```java
public class Henkilo {
    private String nimi;
    private int ika;

    public Henkilo(String nimi) {
        this.ika = 0;
        this.nimi = nimi;
    }

    public boolean taysiIkainen() {
        if (this.ika < 18) {
            return false;
        }

        return true;
    }

    public void vanhene() {
        this.ika++;
    }

    public String getNimi() {
        return this.nimi;
    }
}
```

Koska metodit käsittelevät oliota, ei niitä voi määrittää static:eiksi eli "olioista riippumattomiksi". Jos näin yritetään tehdä, ei metodi toimi. Esimerkiksi allaoleva `Henkilo`-olion iän muokkausta yrittävä metodi `vanhene` ei toimi:

```java
public class Henkilo {
    //...

    public static void vanhene() {
        this.ika++;
    }
}
```

Seurauksena on virheilmoitus *non static variable ika can not be referenced from static context*, joka tarkoittaa että *oliomuuttujaan ei voida viitata luokkametodista*; staattinen metodi ei pysty käsittelemään oliomuuttujaa.

Eli milloin staattista metodia sitten kannattaa käyttää? Tarkastellaan seuraavaa esimerkkiä, missä käsitellään henkilöolioita. Ohjelmassa luodaan henkilöitä, vanhennetaan niitä, ja lopulta tulostetaan tietoja olioiden täysi-ikäisyydestä:

```java
public class Main {
    public static void main(String[] args) {
        Henkilo ada = new Henkilo("Ada");
        Henkilo antti = new Henkilo("Antti");
        Henkilo juhana = new Henkilo("Juhana");

        for (int i = 0; i < 30; i++) {
            ada.vanhene();
            juhana.vanhene();
        }

        antti.vanhene();

        if (ada.taysiIkainen()) {
            System.out.println(ada.getNimi() + " on täysi-ikäinen");
        } else {
            System.out.println(ada.getNimi() + " on alaikäinen ");
        }

        if (antti.taysiIkainen()) {
            System.out.println(antti.getNimi() + " on täysi-ikäinen");
        } else {
            System.out.println(antti.getNimi() + " on alaikäinen");
        }

        if (juhana.taysiIkainen()) {
            System.out.println(juhana.getNimi() + " on täysi-ikäinen");
        } else {
            System.out.println(juhana.getNimi() + " on alaikäinen ");
        }
    }
}
```

Huomaamme, että henkilöiden täysi-ikäisyyden ilmottamiseen liittyvä koodinpätkä on copy-pastettu kolme kertaa peräkkäin. Todella rumaa!

Henkilön täysi-ikäisyyden ilmoittaminen on mainio kohde staattiselle metodille. Kirjoitetaan ohjelma uudelleen metodia hyödyntäen:

```java
public class Main {

    public static void main(String[] args) {
        Henkilo ada = new Henkilo("Ada");
        Henkilo antti = new Henkilo("Antti");
        Henkilo juhana = new Henkilo("Juhana");

        for (int i = 0; i < 30; i++) {
            ada.vanhene();
            juhana.vanhene();
        }

        antti.vanhene();

        ilmoitaTaysiIkaisyys(ada);

        ilmoitaTaysiIkaisyys(antti);

        ilmoitaTaysiIkaisyys(juhana);
    }

    public static void ilmoitaTaysiIkaisyys(Henkilo henkilo) {
        if (henkilo.taysiIkainen()) {
            System.out.println(henkilo.getNimi() + " on täysi-ikäinen");
        } else {
            System.out.println(henkilo.getNimi() + " on alaikäinen");
        }
    }
}
```

Metodi `ilmoitaTaysiIkaisyys` on määritelty staattiseksi, eli se ei liity mihinkään olioon, **mutta** metodi saa parametrikseen henkilöolion. Metodia ei ole kuitenkaan määritelty Henkilö-luokan sisälle sillä vaikka se käsittelee parametrinaan saamaansa henkilöolioa, se on juuri kirjoitetun pääohjelman apumetodi, jonka avulla pääohjelma on saatu kirjoitettua selkeämmin.

<programming-exercise name='Matemaattiset apuneuvot' tmcname='osa06-Osa06_01.MatemaattisetApuvalineet'>

Tehtäväpohjassa on kaksi luokkaa: `Ohjelma` ja `MaPu`. Toteuta luokkaan `MaPu` metodi `public static double keskiarvo(ArrayList<Integer> luvut)`, joka laskee parametrina annetun listan lukujen keskiarvon ja palauttaa sen.

Kokeile tämän jälkeen metodin käyttöä luokassa `Ohjelma`. Luokassa `MaPu` olevan luokkametodin käyttö onnistuu kutsumalla metodia luokan nimeä etuliitteenä käyttäen `MaPu.keskiarvo(*parametri*)`.

</programming-exercise>



<programming-exercise name='Kirjaston tietojärjestelmä (4 osaa)' tmcname='osa06-Osa06_02.KirjastonTietojarjestelma'>

*Kumpulan tiedekirjasto tarvitsee uuden järjestelmän kirjojen hallintaan. Tässä tehtävässä hahmotellaan ongelma-alueen tietosisältöä ja toteutetaan prototyyppi, joka mahdollistaa kirjan haun nimen, julkaisijan tai julkaisuvuoden perusteella.*

Rakennetaan järjestelmä osista, tässä toteutetaan oleelliset luokat eli `Kirja` ja `Kirjasto`. Luokka `Kirja` sisältää kirjaan liittyvät tiedot, luokka `Kirjasto` tarjoaa erilaisia hakutoiminnallisuuksia kirjoihin liittyen.


<h2>Kirja</h2>

Luodaan ensiksi luokka Kirja. Kirjalla on oliomuuttujina `nimeke`, eli kirjan nimi, `julkaisija`, eli kirjan julkaisija, ja `julkaisuvuosi` eli vuosi jolloin kirja on julkaistu. Kaksi ensimmäistä muuttujaa on merkkijonotyyppisiä, viimeisin on kokonaisluku. Oletamme tässä että kirjalla on aina vain yksi kirjoittaja.

Toteuta luokka `Kirja`. Kirjalla tulee olla myös konstruktori `public Kirja(String nimeke, String julkaisija, int julkaisuvuosi)` sekä metodit `public String nimeke()`, `public String julkaisija()`, `public int julkaisuvuosi()` ja `public String toString()`. Arvannet mitä metodien tulee tehdä, alla esimerkki.

Testaa luokan toimintaa:

```java
Kirja cheese = new Kirja("Cheese Problems Solved", "Woodhead Publishing", 2007);
System.out.println(cheese.nimeke());
System.out.println(cheese.julkaisija());
System.out.println(cheese.julkaisuvuosi());

System.out.println(cheese);
```

<sample-output>

Cheese Problems Solved
Woodhead Publishing
2007
Cheese Problems Solved, Woodhead Publishing, 2007

</sample-output>


<h2>Kirjasto</h2>

Kirjaston tehtävä on antaa käyttäjälle mahdollisuus kirjojen lisäämiseen ja niiden hakemiseen. Luo luokka `Kirjasto`, jolla on konstruktori `public Kirjasto()` ja metodit `public void lisaaKirja(Kirja uusiKirja)` ja `public void tulostaKirjat()`.


```java
Kirjasto kirjasto = new Kirjasto();

Kirja cheese = new Kirja("Cheese Problems Solved", "Woodhead Publishing", 2007);
kirjasto.lisaaKirja(cheese);

Kirja nhl = new Kirja("NHL Hockey", "Stanley Kupp", 1952);
kirjasto.lisaaKirja(nhl);

kirjasto.lisaaKirja(new Kirja("Battle Axes", "Tom A. Hawk", 1851));

kirjasto.tulostaKirjat();
```

<sample-output>

Cheese Problems Solved, Woodhead Publishing, 2007
NHL Hockey, Stanley Kupp, 1952
Battle Axes, Tom A. Hawk, 1851

</sample-output>


<h2>Hakutoiminnallisuus</h2>

Kirjastosta tulee pystyä etsimään kirjoja nimekkeiden ja julkaisijoiden perusteella. Lisää kirjastolle metodit `public ArrayList<Kirja> haeKirjaNimekkeella(String nimeke)`, `public ArrayList<Kirja> haeKirjaJulkaisijalla(String julkaisija)` ja `public ArrayList<Kirja> haeKirjaJulkaisuvuodella(int julkaisuvuosi)`. Metodit palauttavat listan kirjoista, joissa on haluttu nimeke, julkaisija tai julkaisuvuosi.

Voit halutessasi hyödyntää seuraavaa runkoa metodin tekemiseen.

```java
public class Kirjasto {
    // ...

    public ArrayList<Kirja> haeKirjaNimekkeella(String nimeke) {
        ArrayList<Kirja> loydetyt = new ArrayList<>();

        // käy läpi kaikki kirjat ja lisää ne joilla haetun kaltainen nimeke listalle loydetyt

        return loydetyt;
    }
}
```

Huom! Kun haet teet hakua merkkijonon avulla, älä tee tarkkaa hakua (metodi `equals`) vaan käytä `String`-luokan metodia `contains`. Huomaat todennäköisesti myös että sinulla on ns. copy-paste -koodia `Kirjasto`-luokan koodissa. Yritä päästä siitä eroon!

```java
Kirjasto kirjasto = new Kirjasto();

kirjasto.lisaaKirja(new Kirja("Cheese Problems Solved", "Woodhead Publishing", 2007));
kirjasto.lisaaKirja(new Kirja("The Stinky Cheese Man and Other Fairly Stupid Tales", "Penguin Group", 1992));
kirjasto.lisaaKirja(new Kirja("NHL Hockey", "Stanley Kupp", 1952));
kirjasto.lisaaKirja(new Kirja("Battle Axes", "Tom A. Hawk", 1851));

for (Kirja kirja: kirjasto.haeKirjaNimekkeella("Cheese")) {
    System.out.println(kirja);
}

System.out.println("---");

for (Kirja kirja: kirjasto.haeKirjaJulkaisijalla("Pong Group")) {
    System.out.println(kirja);
}

System.out.println("---");

for (Kirja kirja: kirjasto.haeKirjaJulkaisuvuodella(1851)) {
    System.out.println(kirja);
}
```

<sample-output>
Cheese Problems Solved, Woodhead Publishing, 2007
The Stinky Cheese Man and Other Fairly Stupid Tales, Penguin Group, 1992
---
---
Battle Axes, Tom A. Hawk, 1851
</sample-output>


<h2>Paranneltu hakutoiminnallisuus</h2>


Hakutoiminnallisuutemme on jo hyvä, mutta se ei ymmärrä isojen ja pienten kirjainten eroa. Yllä olleessa esimerkissä haku nimekkeellä `"cheese"` ei olisi tuottanut yhtäkään tulosta. Myös toinen esimerkki, jossa oli ylimääräisiä välilyöntejä, ei näyttänyt haluttua tulosta. Haluamme että nimekkeiden ja julkaisijoiden nimillä haettaessa ei välitetä merkkien koosta, ja että käyttäjä voi syöttää ylimääräisiä välilyöntejä kirjan nimen alkuun tai loppuun (meidän ei tarvitse välittää sanojen välillä olevista tyhjistä!). Toteutetaan pieni apukirjasto `StringUtils` merkkijonojen vertailuun.

Luo luokka `StringUtils`, ja lisää sille staattinen metodi `public static boolean sisaltaa(String sana, String haettava)`, joka tarkistaa sisältääkö merkkijono `sana` merkkijonon `haettava`. Jos jommankumman merkkijonon arvo on *null*, metodin tulee palauttaa arvo `false`. Metodin tarjoaman vertailun tulee olla välittämättä merkin koosta.

Vinkki! Voit luoda uuden merkkijonon, joka sisältää vanhan merkkijonon kirjaimet isoksi muunnettuna `String`-luokan metodilla `toUpperCase()`. Kun sekä sana että haettava on kirjoitettu isoilla merkeillä, voi vertailun toteuttaa suoraviivaisesti metodilla `contains`.

Lisää metodille `sisaltaa` myös toiminnallisuus, joka poistaa merkkijonojen `sana` ja `haettava` alusta ja lopusta ylimääräiset välilyönnit. Käytä tähän `String`-luokan metodia `trim`, esim. `trimmattu = trimmattava.trim()`.

Kun olet saanut metodin valmiiksi, käytä sitä `Kirjasto`-luokassa. Alla esimerkki:

```java
if (StringUtils.sisaltaa(kirja.nimeke(), nimeke)) {
    // kirja löytyi!
}
```

```java
Kirjasto kirjasto = new Kirjasto();

kirjasto.lisaaKirja(new Kirja("Cheese Problems Solved", "Woodhead Publishing", 2007));
kirjasto.lisaaKirja(new Kirja("The Stinky Cheese Man and Other Fairly Stupid Tales", "Penguin Group", 1992));
kirjasto.lisaaKirja(new Kirja("NHL Hockey", "Stanley Kupp", 1952));
kirjasto.lisaaKirja(new Kirja("Battle Axes", "Tom A. Hawk", 1851));

for (Kirja kirja: kirjasto.haeKirjaNimekkeella("CHEESE")) {
    System.out.println(kirja);
}

System.out.println("---");
for (Kirja kirja: kirjasto.haeKirjaJulkaisijalla("PENGUIN  ")) {
    System.out.println(kirja);
}
```

<sample-output>
Cheese Problems Solved, Woodhead Publishing, 2007
The Stinky Cheese Man and Other Fairly Stupid Tales, Penguin Group, 1992
---
The Stinky Cheese Man and Other Fairly Stupid Tales, Penguin Group, 1992
</sample-output>

</programming-exercise>
