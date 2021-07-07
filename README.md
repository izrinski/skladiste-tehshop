# Skladiste

Aplikacija je zamišljena kao web aplikacija koja služi osobama koji se bave evidencijom skladišta lakše evidentiranje proizvoda na skladištu. Sustav je rađen za određeni dućan koji sadrži  tehničke i informatičke proizvode poput mobitela, TV-a i laptopa. 

Aplikacija omogućava unos novih proizvoda (mobitela, televizora i laptopa), te se ti proizvodi prikazuju u tablicama sa svojim atributima. 
Nakon što su dodani proizvodi, na listi proizvoda je moguće dodavanje i isporuka proizvoda sa skladišta. Ujedno, moguće je i promijeniti cijenu proizvoda. 
U listi proizvoda ostaje broj koji korisniku govori koliko je određenih proizvoda ostalo na skladištu, ili ih više nema pa je potrebno naručiti određeni proizvod. 
Omogućeno je sortiranje, čime korisnik ima lakši prikaz proizvoda u tablicama/listama.

Naručitelj ove aplikacije je dućan tehničkih proizvoda koji posjeduje skladište s proizvodima koje je potrebno voditi raditi olakšanog evidentiranja proizvoda koji dolaze ili odlaze iz skladišta. 
Aplikacija je zamišljena da bude jednostavna za korištenje, tako da zaposlenik u skladištu, onaj koji će biti zadužen za evidenciju proizvoda, lakše koristi aplikaciju. 
Ovaj sustav ne zamjenjuje već postojeće aplikacije koje su skladištima dostupne diljem svijeta, ali omogućuju jednostavno korištenje aplikacije za manja skladišta.


## Instalacija aplikacije

##### Potrebno je instalirati Node.js (ako već nije instaliran u sustavu); potrebno ga je preuzeti sa stranice https://nodejs.org/en/ i lokalno instalirati

#### 1. korak
```
npm install -g @angular/cli
```
#### 2. korak
```
ng add angular/material
```

#### Pokrenuti kod
```
ng serve
```
### Otvaranje aplikacije u pregledniku
```
http://localhost:4200/ 
```