# GitHub

## Gitflow (Alla ska arbeta efter gitflow)

## Hämta repo och gör ändringar

1. git pull med main, `$ git pull`
2. Skapa egen branch och gör ändringar `$ git checkout -b <new-branch> `

## OBS: Brancher ska heter som Issues

3. Spara dina ändringar `$ git add .`
4. Gör en commit `$ git commit -m “commit-name”`

## Kolla så att main är uppdaterad

5. Checka ut till main `$ git checkout main `
6. Pulla hem main igen (någon kan ha gjort en ändring)` $git pull`

## Pusha till GitHub

7. Checka ut till new-branch `$ git checkout new-branch`
8. Merga main med egen branch `$ git merge main`
9. Pusha upp din egen branch till GitHub `$ git push`

### OBS:Länk pull request till varje issue

## Review code

10. Nu ligger din branch på github och ska reviews och sedan mergas med main
11. När några har reviewat pull requests kan man mergea med main

### OBS(För en issue behöver en person och för två och mer issues behöver två personer för att review kod)

12. Merge sker när alla har reviewad och godkänd

### OBS(Person som hade pull request ska mega med main)

13. Ta bort branch när den är mergad med main

## Css

Css filer är komponentbaserade med modules

KlassNamn ska ha beskrivande namn

KlassNamn ska vara skrivna på engelska

## Variabler

Variabler ska ha beskrivande namn

Variabelnamn ska vara på engelska

## Kommentarer

Kommentarer ska vara på engelska

Kommentarer ska vara tydlig beskrivande

## Rent och Fint

Utkommenderade kod ska tas bort innan man pushar till gitHub

Alla filer ska vara formaterade innan man pushar

## Kiss

Keep it simple stupid!
