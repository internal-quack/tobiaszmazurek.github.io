# Portfolio — struktura i jak podmieniać treści

## Struktura plików

```
index.html                         ← strona główna — hero + 6 wybranych projektów + "W czym mogę pomóc" + referencje
projects.html                      ← PEŁNA lista 12 projektów, z filtrami Gry/Narzędzia/Oprogramowanie
about.html                        ← osobna podstrona "O mnie" (3 bloki + testimoniale)
career.html                       ← osobna podstrona "Kariera" (oś czasu + umiejętności)
contact.html                       ← osobna podstrona "Kontakt" (hero + ta sama stopka-kontakt co wszędzie)
styles.css                         ← jedyny arkusz stylów (współdzielony)
script.js                          ← jedyny plik JS (współdzielony)
portfolio/<slug>/index.html        ← 12 podstron projektów (pełny opis + galeria)
images/                            ← zdjęcia projektów i "o mnie"
images/icons/                      ← ikony SVG (okładka System tras, itp.)
CV_Tobiasz_Mazurek.pdf
CV_Tobiasz_Mazurek_ENG.pdf
Referencje.pdf
```

Nawigacja w nagłówku ma 4 linki (każdy z małą ikonką SVG przed tekstem): **Projekty**
(prowadzi zawsze do `projects.html` — tam jest pełna lista z filtrami; strona główna
pokazuje tylko 6 wybranych kart na sztywno, bez filtrów, z przyciskiem "Pokaż wszystkie
projekty"), **O mnie** (osobna strona `about.html`), **Kariera** (osobna strona
`career.html`, zawiera też umiejętności), **Kontakt** (osobna strona `contact.html`,
wyróżniona jako pigułka — stylistycznie inna od pozostałych trzech, bo to jedyny link,
który nie prowadzi do treściowej podstrony tylko do wezwania do kontaktu). Stopka z
pełnymi danymi kontaktowymi (`id="kontakt"`) jest identyczna i obecna na każdej stronie,
nie tylko na `contact.html`.

**Które 6 projektów pokazuje się na stronie głównej:** ustawione na sztywno w kodzie
(`index.html`, sekcja `#projekty`) — obecnie Simply Signals, QuickLoad, Mr Toilet,
Nerd Simulator, Indian Lumberjack, Blade River. Żeby to zmienić, podmień który
`<a class="card">` tam jest (treść skopiuj z `projects.html`, gdzie są wszystkie 12).

Każda podstrona w `portfolio/<slug>/` linkuje do `../../styles.css`, `../../script.js`
i obrazków przez `../../images/...` — to zwykłe statyczne pliki HTML, zero build-stepu.

**Ważne:** nagłówek (logo + nawigacja) i stopka (kontakt) są **zduplikowane** w każdym
pliku HTML (na stronie głównej, w `projects.html`, `about.html`, `career.html` i w
każdej z 12 podstron projektów) — nie ma systemu "współdzielonych komponentów". Jeśli
zmieniasz coś w nawigacji, linkach kontaktowych albo stopce, musisz tę zmianę ręcznie
powtórzyć we **wszystkich 16 plikach HTML** (`index.html`, `projects.html`,
`about.html`, `career.html` + 12 w `portfolio/`).

## Lista podstron projektów (slug → projekt)

| Folder | Projekt |
|---|---|
| `portfolio/mr-toilet/` | Mr Toilet |
| `portfolio/nerd-simulator/` | Nerd Simulator |
| `portfolio/simply-signals/` | Simply Signals |
| `portfolio/runtime-inspector/` | Runtime Inspector |
| `portfolio/editor-tools/` | Narzędzia edytorskie |
| `portfolio/quick-load/` | QuickLoad |
| `portfolio/indian-lumberjack/` | Indian Lumberjack |
| `portfolio/blade-river/` | Blade River |
| `portfolio/space-defense/` | Space Defense |
| `portfolio/fluffy-saviour/` | Fluffy Savior |
| `portfolio/popiel/` | Popiel |
| `portfolio/route-system/` | System tras (jedyny projekt bez zdjęć — okładka to ikona z `images/icons/system-tras.svg`) |

## 1. Zdjęcia (`images/`)

Wymagania: dowolny format (jpg/png), min. ~1000–1200px po dłuższym boku, nie trzeba
kadrować — kafelki w gridzie i galerii same dopasowują kadr (`object-fit: cover`).

| Projekt / sekcja | Nazwy plików (faktyczne, zweryfikowane w repo) |
|---|---|
| Mr Toilet | `mr-toilet-1.jpg`, `mr-toilet-2.jpg` |
| Nerd Simulator | `nerd-simulator-1.jpg`, `nerd-simulator-2.jpg` |
| Simply Signals | `simply-signals-1.jpg` … `simply-signals-3.jpg` |
| Runtime Inspector | `runtime-inspector-1.jpg`, `runtime-inspector-2.jpg` |
| Narzędzia edytorskie | `narzedzia-edytorskie-1.jpg`, `narzedzia-edytorskie-2.jpg` |
| QuickLoad | `quick-load-1.jpg`, `quick-load-2.jpg` |
| Indian Lumberjack | `indian-lumberjack-1.jpg` … `indian-lumberjack-4.jpg` |
| Blade River | `blade-river-1.jpg` … `blade-river-3.jpg` |
| Space Defense | `space-defense-1.jpg` … `space-defense-3.jpg` |
| Fluffy Savior | `fluffy-saviour-1.jpg` … `fluffy-saviour-3.jpg` |
| Popiel | `popiel-1.jpg`, `popiel-2.jpg` |
| System tras | — (brak zdjęć, okładka = ikona SVG) |
| To moja działka (o mnie 1/3) | `to-moja-dzialka-1.jpg` … `to-moja-dzialka-4.jpg` |
| Tak to ja (o mnie 2/3) | `tak-to-ja-1.jpg`, `tak-to-ja-4.jpg`, `tak-to-ja-5.jpg`, `tak-to-ja-6.jpg` (strona korzysta z 4 z 8 dostępnych w folderze) |
| W co gram (o mnie 3/3) | `w-co-gram-1.jpg` … `w-co-gram-3.jpg` |
| Wild Bar (tylko pozycja na roadmapie, bez własnej podstrony) | `wildbar-1.jpg` (obecnie nieużywane w kodzie) |

**Dodanie nowego zdjęcia do galerii projektu** = dodaj plik o kolejnym numerze
(np. `mr-toilet-3.jpg`) do `images/`, a potem w `portfolio/mr-toilet/index.html`
dopisz kolejny `<button type="button"><img src="../../images/mr-toilet-3.jpg?v=1" alt="..."></button>`
wewnątrz `<div class="gallery">`. Podmiana zdjęcia pod istniejącą nazwą/okładki karty
na stronie głównej = wgraj plik pod tą samą nazwą do `images/`.

### Cache-busting

Zdjęcia projektów mają w kodzie dopisek `?v=1` na końcu adresu (np. `mr-toilet-1.jpg?v=1`).
Jeśli podmienisz zdjęcie pod tą samą nazwą w przyszłości, zmień `?v=1` na `?v=2` **w
każdym miejscu, gdzie to zdjęcie występuje** — może to być i karta na stronie głównej,
i galeria na podstronie projektu — inaczej przeglądarki odwiedzających mogą pokazać
starą wersję z pamięci podręcznej.

## 2. Ikony sekcji (`images/icons/`)

Format: **SVG** (najlepiej) lub **PNG z prawdziwą przezroczystością**. Styl: cienki,
jednokolorowy kontur, bez tekstu, bez tła. Obecnie realnie wykorzystywana jest tylko
`images/icons/system-tras.svg` (jako okładka karty System tras, bo ten projekt nie ma
zdjęć) — reszta ikon z poprzedniej wersji strony (`mr-toilet.svg`, `career.svg`,
`skills.svg` itd.) zostaje w folderze jako archiwum, ale nowy layout ich nie renderuje.

## 3. Panel deweloperski (`?edit`)

Dodając `?edit` do adresu strony (np. `index.html?edit` albo
`portfolio/mr-toilet/?edit`) pojawia się dyskretny przycisk **Edit** w prawym dolnym
rogu — to narzędzie tylko dla Ciebie, nie dla odwiedzających. Pozwala:

- na stronie głównej: przeklikać okładkę karty projektu między zdjęciami z jego galerii,
- na podstronie projektu: zmienić kolejność zdjęć w galerii (strzałki ↑/↓) i kliknięciem
  na miniaturze ustawić punkt kadru (`object-position`),
- skopiować wygenerowany fragment HTML (przycisk „Kopiuj”) i wkleić go ręcznie w
  odpowiednie miejsce w kodzie, żeby zmiana została na stałe.

To jedynie podgląd na żywo w przeglądarce — nic się nie zapisuje samo, trzeba wkleić
skopiowany HTML z powrotem do pliku.

## 4. Tłumaczenie PL/EN

Każdy tekst, który ma wersję angielską, jest oznaczony w HTML atrybutem
`data-i18n="klucz"` — polski tekst siedzi wprost w HTML, a angielskie tłumaczenia
trzymane są w jednym miejscu: na początku pliku `script.js`, w obiekcie `EN`. Żeby
dodać/poprawić tłumaczenie: znajdź klucz w HTML-u (`data-i18n="..."`) i dopisz/zmień
tę samą parę `'klucz': 'tekst po angielsku'` w `EN` w `script.js`. Jeśli klucza nie ma
w `EN`, strona po prostu zostawi polski tekst przy przełączeniu na EN.

## Szybki checklist przed wgraniem nowego pliku

- [ ] Nazwa pliku zgodna z tabelą wyżej (wielkość liter też ma znaczenie)
- [ ] Zdjęcia projektów → `images/`, ikony → `images/icons/`
- [ ] Przy podmianie zdjęcia pod tą samą nazwą → zwiększ `?v=1` → `?v=2` we wszystkich
      miejscach, gdzie to zdjęcie występuje (karta na stronie głównej + galeria projektu)
- [ ] Zmiana w nagłówku/stopce → powtórz ją we wszystkich 16 plikach HTML
- [ ] Po wgraniu zrób twarde odświeżenie w przeglądarce (Ctrl+Shift+R / Cmd+Shift+R)
