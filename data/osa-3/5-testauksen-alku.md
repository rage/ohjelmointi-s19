---
path: '/osa-3/5-testauksen-alku'
title: 'Pieniä askeleita ohjelmien testaamiseen'
hidden: false
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tutustut ohjelmien testaamiseen.
- Tutustut ohjelman toiminnan testaamiseen syötteitä ja tulosteita vertailemalla.

</text-box>

Eräs ohjelmoinnissa tarvittava taito on ohjelmien testaus- ja debuggaustaito, jota tarvitaan virheiden etsimisessä. Yksinkertaisin tapa ohjelmissa olevien virheiden etsimiseen on ns. print-debuggaus, joka tarkoittaa tuloskomennon lisäämistä jokaiselle ohjelman rivillä. Tällöin ohjelman suorittaminen tulostaa viestejä, joiden perusteella voidaan tarkastella ohjelman toimintaa.

Tarkastellaan alla olevaa ohjelmaa, jota käytetään ei-negatiivisten lukujen keskiarvon laskemiseen.

```java
Scanner lukija = new Scanner(System.in);
int lukuja = 0;
int summa = 0;

while (true) {
    System.out.println("Syötä luku, negatiivinen luku lopettaa");
    int luku = Integer.valueOf(lukija.nextLine());
    if (luku < 0) {
        break;
    }

    lukuja = lukuja + 1;
    summa = summa + luku;
}

if (summa == 0) {
    System.out.println("Lukujen keskiarvoa ei voitu laskea.");
} else {
    System.out.println("Lukujen keskiarvo: " + (1.0 * summa / lukuja));
}
```

Mikäli ohjelmassa olisi virhe, print-debuggauksella ohjelman toimintaa voisi purkaa lisäämällä print-komentoja sopiviin kohtiin. Alla olevassa esimerkissä on eräs mahdollinen esimerkki print-debukkauskomentoja sisältävästä ohjelmasta.


```java
Scanner lukija = new Scanner(System.in);
int lukuja = 0;
int summa = 0;

while (true) {
    System.out.println("-- lukuja: " + lukuja + ", summa: " + summa);

    System.out.println("Syötä luku, negatiivinen luku lopettaa");
    int luku = Integer.valueOf(lukija.nextLine());
    System.out.println("-- syötetty luku: " + luku);
    if (luku < 0) {
        System.out.println("-- luku negatiivinen, poistutaan toistolauseesta");
        break;
    }

    lukuja = lukuja + 1;
    summa = summa + luku;
}

System.out.println("-- toistolauseesta poistuttu");
System.out.println("-- lukuja: " + lukuja + ", summa: " + summa);

if (summa == 0) {
    System.out.println("Lukujen keskiarvoa ei voitu laskea.");
} else {
    System.out.println("Lukujen keskiarvo: " + (1.0 * summa / lukuja));
}
```


<quiz id="1e53711a-c104-497b-9f14-9b13f626739f"></quiz>

