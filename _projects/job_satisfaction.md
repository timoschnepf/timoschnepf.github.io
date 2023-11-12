---
layout: page
title: jobzufriedenheit
description: Wie zufrieden sind Erwerbstätige mit ihrer Arbeit?
img: assets/img/unsplash_art6.jpg
importance: 1
category: work
bibliography: projects.bib
toc:
  sidebar: left
---

<style>
  .my-text {
    line-height: 2.0; /* Increase line spacing to 1.5 times the font size */
  }
</style>


## In welchen Berufen sind die Menschen am zufriedensten?


<p class="my-text"> 
<strong>

Wie zufrieden sind die Erwerbstätigen mit ihrer Arbeit? 
Wie stehen die Deutschen im europäischen Vergleich da? 
Wie entwickelt sich die Arbeitszufriedenheit im Zeitverlauf? 
Und in welchen Berufen arbeiten die zufriedensten Menschen? 
Dieser Blog gibt Antworten, indem er Statistiken aus verschiedenen Quellen zusammenträgt. 
Außerdem kann jeder in interaktiven Grafiken nachschauen, wie es um die Zufriedenheit im eigenen Job bestellt ist.
</strong>

</p>

<br>

### Deutschland im europäischen Vergleich

<div class="l-page">
  <iframe src="{{ '/assets/plotly/map.html' | relative_url }}" 
			scrolling='no' 
			frameborder='0'
			padding_bottom='56.25%'
			height="400" 
			width="100%">
	</iframe>
</div>
<div class="caption">
    Quelle:  <a href="https://ec.europa.eu/eurostat/databrowser/view/LFSO_17JSED__custom_8324295/default/table"> Labour Force Survey 2017 </a>, eigene Darstellung.
</div>

<p class="my-text">
<strong>32 Prozent</strong> der Erwerbstätigen in Deutschland gaben sowohl im <a href="https://ec.europa.eu/eurostat/databrowser/view/LFSO_17JSED__custom_8324295/default/table"> Labour Force Survey 2017</a>
als auch in der <a href="https://www.bibb.de/de/65740.php"> BIBB/BAuA-Erwerbstätigenbefragung 2017/2018</a> an, mit ihrer Arbeit "sehr zufrieden" 
zu sein<d-footnote><i>Die sehr ähnliche Fragestellung erlaubt einen Vergleich der beiden Erhebungen. 
Ein leichter Unterschied ist allerdings zu erwarten, da die ETB im Gegensatz zur LFS 
nur Erwerbstätige mit mehr als 10 Wochenstunden befragt. Bemerkenswert ist auch, dass 
eine andere europäische Erhebung, <a href="https://ec.europa.eu/eurostat/databrowser/view/ilc_pw05$defaultview/default/table">EU-SILC </a> , 
nur auf einen Anteil von 25 Prozent "sehr zufriedener" 
deutscher Erwerbstätiger kommt. Spannend, denn die Frage ist die gleiche, nur die Skala geht von 1 bis 10 
im Gegensatz zu 1 bis 4 bei LFS und ETB. Legt man den <a href="https://www.dgb.de/themen/++co++ebe87ffe-edc5-11e8-a379-52540088cada">Gute Arbeit Index</a> zugrunde, haben sogar nur 
13 Prozent der Beschäftigten in Deutschland "gute Arbeit" (S. 15). Je nachdem, wie man "sehr zufrieden" 
oder "gute Arbeit" definiert, kommt man also zu sehr unterschiedlichen Ergebnissen. <strong>Vergleichszahlen 
können helfen, der Realität ein Stück näher zu kommen.</strong></i></d-footnote>. Im europäischen Vergleich ist dies ein 
unterdurchschnittlicher Wert. 
Im Durchschnitt aller 28 Teilnehmerländer liegt der Anteil der "sehr Zufriedenen" 
mit 42 Prozent um 10 Prozentpunkte höher als in Deutschland.

</p>

<p class="my-text">
Die Karte zeigt große Unterschiede zwischen den Ländern. Am zufriedensten sind Erwerbstätige in den nordischen
und baltischen Ländern mit Ausnahme der Finnen.
<strong>Die Schweden haben mit 69 Prozent</strong> den größten Anteil an sehr zufriedenen Erwerbstätigen. 
<strong>Türkinnen und Türken geben mit Abstand am seltensten an, sehr zufrieden zu sein (17 Prozent</strong>, nicht abgebildet),
gefolgt von Bulgarien (27 Prozent) und Rumänien (28 Prozent).

</p>

<br>

<div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/zufriedenheit/pictogram_zufriedenheit.png" title="Quelle: ETB"  zoomable=false %}
    </div>
</div>
<div class="caption">
    Quelle:  <a href="https://www.bibb.de/de/65740.php"> BIBB/BAuA Erwerbstätigenbefragung 2017/2018 </a>, eigene Darstellung.
</div>

<br>

<p class="my-text">
Werfen wir einen detaillierteren Blick auf die 34 Millionen <a href="https://www.destatis.de/DE/Themen/Arbeit/Arbeitsmarkt/Erwerbstaetigkeit/Tabellen/atyp-kernerwerb-erwerbsform-zr.html">sog. "Kernerwerbsätigen"</a> 
in Deuschland. Der größte 
Teil ist "sehr zufrieden" (32 Prozent) oder 
zumindest "zufrieden" (59 Prozent). 7,5 Prozent sind "weniger" und 1,5 Prozent sind
"nicht zufrieden" mit ihrer Arbeitssituation.
</p>

<br>

### Die Entwicklung der letzten 10 Jahre


<br>

<div class="l-page">
  <iframe src="{{ '/assets/plotly/linechart.html' | relative_url }}" scrolling='no' frameborder='0' height="400px" width="100%"></iframe>
</div>

<br>

<p class="my-text">
Die Grafik oben zeigt für fünf Merkmale von Berufen die Entwicklung zwischen 2012 und 2022. 
Insgesamt zeigt sich sowohl im Gesamtindex (Gelb) als für diverse Einzelmerkmale durchgängig eine <strong>positive Entwicklung 
für die letzten 10 Jahre</strong>. Lohn und Beschäftigsungssicherheit zeigen die positivsten Entwicklugnen.
So gaben Befragte im Zeitverlauf immer bessere Auskunft über die drei Fragen, ob das Einkommen angemessen
sei, es zum Leben reiche sowie ob die Rente später einmal ausreichend sei. Der Index wuchs um 7 Punkte von 46 auf 53.
Am stärksten wuchs der Index für Beschäftigungssicherheit von 69 auf 79 Punkte. <strong>Die Angst vor dem Verlust des Arbeitsplatzes nahm also
deutlich ab</strong>.

<br><br>  
Die positive Entwicklung bestätigt die ETB. Zwischen 2012 und 2018 stieg der Anteil der sehr zufriedenen 
Erwerbstätigen um 5 Prozentpunkte von 27 auf die bereits oben genannten 32 Prozent. Findet sich eine
Polarisierung der Antworten? Das heißt, sind gleichzeitig nun mehr Menschen zufriedener und gleichzeitig
unzufriedener mit ihrer Arbeitssituation? <strong>Auch der Anteil der "unzufriedenen" stieg zwischen 2012 und 2018 
leicht an von 7 auf 9 Prozent</strong><d-footnote>Dieser Trend wird mit dem DGB Index nicht bestätigt.</d-footnote>.

</p>

<br>

### Berufe im Blick

<div class="l-page">
  <iframe src="{{ '/assets/plotly/3d_scatter_zufrieden_kldb2010_5.html' | relative_url }}" scrolling='no' frameborder='0' height="400px" width="100%"></iframe>
</div>
<div class="caption">
  <a style="font-size: 16px;" href="http://127.0.0.1:4000/3d_scatter/">Vollbild hier klicken</a> <br>
 Quelle:  <a href="https://www.bibb.de/de/1386.php"> BIBB/BAuA Erwerbstätigenbefragung 2017/2018 </a>, eigene Darstellung.
</div>

{% details Was kann ich mit der Grafik machen? %}
<div style="background-color: rgb(240,235,255);">

 <ul>
  <li>Fährt man mit der Maus über die Kugeln bzw. tippt sie an, so erhält man Infos zum jeweiligen Beruf.</li>
  <li>Die Grafik lässt sich drehen, indem man sie mit der Maus "fest hält". </li>
  <li>Mit der "Strg"-Taste kann die Grafik im Raum verschoben werden.</li>
  <li>Man kann in die Grafik zoomen.</li>
</ul> 
</div>
{% enddetails %}

<p class="my-text">
<br>

Jede Kugel repräsentiert einen Beruf<d-footnote>Nach gängiger 
<a href="https://statistik.arbeitsagentur.de/DE/Navigation/Grundlagen/Klassifikationen/Klassifikation-der-Berufe/Archiv-KldB/KldB2010/KldB2010-Nav.html"> BA Klassifikation der Berufe 2010 </a>.
Für diese Auswertung wurden die Befragten aus den Jahren 2012 und 2018 zusammengefasst. Wir haben oben gesehen, dass es Unterschiede gibt,
aber um möglichst viele Befragte pro Beruf zu erhalten, wurden sie für diese Betrachtung vereint.</d-footnote>, 
der umso höher im Raum schwebt, umso mehr Prozent der Befragten angaben, "sehr zufrieden" mit ihrer Arbeit insgesamt zu sein.
Umso weiter rechts die Kugeln liegen, umso höher der Anteil der sehr Zufriedenen mit ihrem Einkommen,
umso weiter links, umso höher der Anteil derjenigen, die sehr zufrieden mit ihren Arbeitszeiten sind.

<br><br>

Heilkundlerinnen und Homöopathinnen weisen die höchsten Zufriedenheitswerte auf mit 64 Prozent. Ihre Werte sind 
damit in etwa so hoch wie die von Ärztinnen, Psychotherapeutinnen und Pilotinnen (jeweils etwa 60 Prozent).

</p>

