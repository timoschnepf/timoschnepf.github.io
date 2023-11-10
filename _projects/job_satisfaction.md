---
layout: page
title: jobzufriedenheit
description: Wie zufrieden sind Menschen mit ihrer Arbeit?
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
Wie zufrieden sind Menschen in ihren Jobs? Wie stehen die Deutschen im 
europäischen Vergleich da? Wie entwickelte sich die Zufriedenheit in den letzten zehn
Jahren? Und in welchen Jobs arbeiten die zufriedensten Menschen?
</strong>

</p>

<br>

### Deutschland und Europa

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
    Quelle:  <a href="https://ec.europa.eu/eurostat/databrowser/view/LFSO_17JSED__custom_8324295/default/table"> Labour Force Survey 2017 </a>
</div>

<p class="my-text">
<strong>32 Prozent</strong> der deutschen Erwerbstätigen gaben sowohl im <a href="https://ec.europa.eu/eurostat/databrowser/view/LFSO_17JSED__custom_8324295/default/table"> Labour Force Survey 2017</a>
als auch in der <a href="https://www.bibb.de/de/65740.php"> BIBB/BAuA Erwerbstätigenbefragung 2017/2018</a> an, "sehr zufrieden" mit ihrer Arbeit 
zu sein<d-footnote><i>Die sehr ähnliche Fragestellung erlaubt einen Vergleich zwischen den beiden Befragungen. Zu erwarten wäre jedoch ein leichter Unterschied, da 
die ETB im Gegensatz zum LFS nur Erwerbstätige mit mehr als 10 Wochenstunden befragt. Bemerkenswert ist auch, dass
eine andere europäische Umfrage, die <a href="https://ec.europa.eu/eurostat/databrowser/view/ilc_pw05$defaultview/default/table">EU-SILC </a>  
nur zu einem Prozentsatz von 25 Prozent "sehr zufriedener" deutscher Erwerbstätigen kommt. Spannend, denn die
Frage ist die gleiche, nur die Skala geht von 1 bis 10 im Gegensatz zu 1 bis 4 bei LFS und ETB. 
Orientiert man sich am <a href="https://www.dgb.de/themen/++co++ebe87ffe-edc5-11e8-a379-52540088cada">Gute Arbeit Index</a>, haben sogar nur 13 Prozent
der Beschäftigten in Deutschland "gute Arbeit" (S. 15). Je nach dem, 
was man als "sehr zufrieden" oder "gute Arbeit" definiert, kommt man also zu sehr unterschiedlichen Ergebnissen. <strong>Die Zahlen zu 
Vergleichen kann helfen, der Realität ein Stück näher zu kommen.</strong></i></d-footnote>.
Das ist im europäischen Vergleich unterdurchschnittlich. Im Schnitt über alle 28 teilnehmenden Länder lag hier der Anteil der "sehr zufriedenen"
bei 42 Prozent, das heißt um 10 Prozentpunkte höher.
</p>

<p class="my-text">
Die Karte zeigt hohe Unterschiede zwischen den Ländern. Zu den zufriedensten Erwerbstätigen können sich Menschen der nordischen
und baltischen Staaten zählen, mit Ausnahme der Finnen.
<strong>Mit 69 Prozent haben die Schweden</strong> den größten Anteil der sehr zufriedenen Erwerbstätigen. 
Mit Abstand <strong>am seltensten gaben Türkinnen und Türken an, "sehr zufrieden" mit ihrer Arbeit zu sein (17 Prozent</strong>, nicht abgebildet), gefolgt
von Bulgarien (27 Prozent) und Rumänien (28 Prozent).
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
in Deuschland, sehen wir in der oberen Grafik, dass doch der größte 
Teil "sehr zufrieden" (32 Prozent) oder 
zumindest "zufrieden" war (59 Prozent). 7,5 Prozent waren "weniger" und 1,5 Prozent war
"nicht zufrieden" mit der Arbeit.
</p>

<br>
<br>

### Im zeitlichen Verlauf


<br>

<div class="l-page">
  <iframe src="{{ '/assets/plotly/linechart.html' | relative_url }}" scrolling='no' frameborder='0' height="400px" width="100%"></iframe>
</div>

<br>

<p class="my-text">
Der <a href="https://index-gute-arbeit.dgb.de/veroeffentlichungen/copy_of_jahresreports"> Gute Arbeit Index</a> ist eine vom Deutschen Gewerkschaftsbund
jährlich in Auftrag gegebene Studie zur Messung der Arbeitsqualität.


</p>

### Berufe im Blick

<br>

<div class="l-page">
  <iframe src="{{ '/assets/plotly/3d_scatter_zufrieden.html' | relative_url }}" scrolling='no' frameborder='0' height="400px" width="100%"></iframe>
</div>

<br>




<br>

{% details Info: Zu den verwendeten Daten %}
<a href="https://www.gesis.org/missy/files/documents/EU-LFS/Codebook_EU-LFS-2017-yearly.pdf">Hier</a> findet sich der Fragebogen zum LFS. 
Gefragt wurde 
{% enddetails %}


