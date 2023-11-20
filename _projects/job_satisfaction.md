---
layout: page
title: jobzufriedenheit
description: Alles wird gut, oder doch nicht?
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


## Wie zufrieden sind die Menschen in ihren Berufen?

<br>

<p class="my-text"> 
<strong>

Etwa die Hälfte aller Deutschen nimmt in der ein oder
anderen Form am Erwerbsleben teil. Arbeit gehört zum
Leben dazu. Da stellt sich unmittelbar die Frage nach deren 
Qualität. Und wer könnte das besser beantworten als die
Erwerbstätigen selbst?
Zufriedenheit im Job ist wichtig fürs das körperliche und
seelische Wohlbefinden. 
Wie stehen die Deutschen im europäischen Vergleich da? 
Wie entwickelt sich verschiedene Merkmale der Arbeitszufriedenheit im Zeitverlauf? 
Sieht man eine zunehmende Spaltung der Erwerbstätigen in "Zufriedene" und "Unzufriedene"?
Und in welchen Berufen arbeiten die zufriedensten Menschen? 
Dieser Blog gibt Antworten, indem er Statistiken aus verschiedenen Forschungsergebnissen zusammenträgt und miteinander vergleicht. 
</strong>

</p>

<br>

### Deutsche im EU Vergleich unzufriedener

<br>

{% tabs map %}

{% tab map Zufrieden %}

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

{% endtab %}

{% tab map Unzufrieden%}

<div class="l-page">
  <iframe src="{{ '/assets/plotly/map_unzufrieden.html' | relative_url }}" 
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

{% endtab %}

{% endtabs %}

<p class="my-text">
<strong>Einer von drei</strong> Erwerbstätigen in Deutschland gab sowohl im <a href="https://ec.europa.eu/eurostat/databrowser/view/LFSO_17JSED__custom_8324295/default/table"> Labour Force Survey 2017</a>
als auch in der <a href="https://www.bibb.de/de/65740.php"> BIBB/BAuA-Erwerbstätigenbefragung 2017/2018</a> an, mit der Arbeit <strong>"sehr zufrieden"</strong> 
zu sein<d-footnote><i>Die sehr ähnliche Fragestellung erlaubt einen Vergleich der beiden Erhebungen. 
Ein leichter Unterschied ist allerdings zu erwarten, da die ETB im Gegensatz zur LFS 
nur Erwerbstätige mit mehr als 10 Wochenstunden befragt. Bemerkenswert ist auch, dass 
eine andere europäische Erhebung, <a href="https://ec.europa.eu/eurostat/databrowser/view/ilc_pw05$defaultview/default/table">EU-SILC </a> , 
nur auf einen Anteil von 25 Prozent "sehr zufriedener" 
deutscher Erwerbstätiger kommt. Spannend, denn die Frage ist die gleiche, nur die Skala geht von 1 bis 10 
im Gegensatz zu 1 bis 4 bei LFS und ETB. Legt man den <a href="https://www.dgb.de/themen/++co++ebe87ffe-edc5-11e8-a379-52540088cada">Gute Arbeit Index</a> zugrunde, haben sogar nur 
13 Prozent der Beschäftigten in Deutschland "gute Arbeit" (S. 15). Je nachdem, wie man "sehr zufrieden" 
oder "gute Arbeit" definiert, kommt man also zu sehr unterschiedlichen Ergebnissen. <strong>Vergleichszahlen 
können helfen, der Realität ein Stück näher zu kommen.</strong></i></d-footnote>. Im EU Vergleich ist dies ein 
unterdurchschnittlicher Wert. 
Lag doch der Schnitt aller 28 Teilnehmerländer mit 42 Prozent um 10 Prozentpunkte höher als für Deutschland.

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
Werfen wir einen detaillierteren Blick auf die 34 Millionen <a href="https://www.destatis.de/DE/Themen/Arbeit/Arbeitsmarkt/Erwerbstaetigkeit/Tabellen/atyp-kernerwerb-erwerbsform-zr.html">sog. "Kernerwerbstätigen"</a> 
in Deuschland. Der größte 
Teil gab 2018 an, "sehr zufrieden" (32 Prozent) oder 
zumindest "zufrieden" (59 Prozent) zu sein. 7,5 Prozent waren "weniger" und 1,5 Prozent
"nicht zufrieden" mit ihrer Arbeitssituation.

<br><br>

Die unterschiedlichen Formen von Zufriedenheit im Job lassen sich grob aufteilen.
Die untere Grafik mit den ETB Daten zeigt, dass die Erwerbstätigen mit dem Einkommen, den körperlichen Arbeitsbedingungen 
und den Weiterbildungsmöglichkeiten am wenigsten zufrieden sind (ein Fünftel).
Hingegen ist etwa jede/r Dritte Erwerbstätige mit Art und Inhalt der Tätigkeit,
dem Betriebsklima und der/dem Vorgesetzten sehr zufrieden. Etwa 55 Prozent sehen keinerlei Gefahr, in 
nächster Zeit vom Betrieb ungewollt gekündigt zu werden.

</p>

<br>

### Die Entwicklung im Zeitverlauf ist positiv, aber nicht für alle


<br>


{% tabs zeitverlauf %}

{% tab zeitverlauf ETB %}

<div class="l-page">
  <iframe src="{{ '/assets/plotly/etb_zeitverlauf.html' | relative_url }}" scrolling='no' frameborder='0' height="400px" width="100%"></iframe>
</div>
<div class="caption">
    Quelle:  <a href="https://www.bibb.de/de/65740.php"> BIBB/BAuA Erwerbstätigenbefragung 2017/2018 </a>, eigene Darstellung.
</div>

<br>

<p class="my-text">
Die Balkendiagramme oben zeigen die Entwicklung der Gesamtzufriedenheit im Zeitverlauf.
Du kannst mithilfe der Tabs selbst entscheiden, ob du dir den Anteil "sehr Zufriedener" der ETB oder 
den DGB Gute Arbeit Index <d-footnote>Der Index 
wird jeweils aus mehreren Fragen gebildet. Vorteil ist eine vielleicht 
genauere Messung von nicht greifbaren Dingen wie "Beschäftigungssicherheit". Dies geht aber etwas
auf Kosten der Intrepretierbarkeit der Zahlen.</d-footnote> anschauen möchtest.

In der Zeit von 2012 bis 2018 stieg der Anteil der Erwerbstätigen, die insgesamt sehr zufrieden waren, 
um 5 Prozentpunkte von 28 auf 32 Prozent an. Ähnlich wie beim DGB-Index zeigt sich die <b>auffälligste 
Veränderung im Bereich der Beschäftigungssicherheit</b>. Im Jahr 2012 sahen noch 46 Prozent keinerlei 
Gefahr, in naher Zukunft ihren Job zu verlieren, während dieser Anteil im Jahr 2018 bereits bei 55 Prozent lag. 
Wenn man diese Zahlen auf alle Kernerwerbstätigen hochrechnet, bedeutet das eine Zunahme von 15,6 Millionen auf 
etwa 19 Millionen Menschen. Die Zufriedenheit mit dem Einkommen zeigte ebenfalls eine deutliche Steigerung. 
Der Anteil der sehr zufriedenen Personen stieg um 5 Prozentpunkte von 13 auf 18 Prozent an. <b>Auch die Zufriedenheit 
mit den Arbeitszeiten hat sich um beachtliche 7 Prozentpunkte verbessert</b>.

</p>

<br>

{% endtab %}

{% tab zeitverlauf DGB Index  %}


<div class="l-page">
  <iframe src="{{ '/assets/plotly/dgb_zeitverlauf.html' | relative_url }}" scrolling='no' frameborder='0' height="400px" width="100%"></iframe>
</div>
<div class="caption">
 Quelle: <a href="https://index-gute-arbeit.dgb.de/veroeffentlichungen/copy_of_jahresreports/++co++b20b2d92-507f-11ed-b251-001a4a160123" target="_blank">DGB Index Gute Arbeit</a>, eigene Darstellung.
</div>

<p class="my-text">

Der Gute Arbeit Index bestätigt die positive Entwicklung der ETB Anteilswerte.
Insgesamt zeigt sich sowohl im Gesamtindex als für viele andere Dimensionen der Zufriedenheit eine durchgängig <strong>positive Entwicklung 
in den letzten 10 Jahren</strong>. 
Befragte gaben seltener an, sich "Sorgen um die berufliche Zukunft" oder den "Arbeitsplatzverlust" zu machen. 
Damit wuchs der Index für Beschäftigungssicherheit von 69 auf 79 Punkte. <strong>Die Angst vor dem Verlust des Arbeitsplatzes nahm also
deutlich ab</strong>.
Sie gaben häufiger an, dass das Einkommen in "hohem Maße" angemessen sei und zum "Leben reiche". 
Der Einkommensindex wuchs dadurch um 7 Punkte von 46 auf 53.


</p>


{% endtab %}


{% endtabs %}



{% tabs linechart %}

{% tab linechart ETB %}

<div class="l-page">
  <iframe src="{{ '/assets/plotly/linechart_etb.html' | relative_url }}" scrolling='no' frameborder='0' height="400px" width="100%"></iframe>
</div>
<div class="caption">
Quelle:  <a href="https://www.bibb.de/de/65740.php"> BIBB/BAuA Erwerbstätigenbefragung 2017/2018 </a>, eigene Darstellung.
</div>

{% endtab %}

{% tab linechart DGB Index  %}

<div class="l-page">
  <iframe src="{{ '/assets/plotly/linechart_dgb.html' | relative_url }}" scrolling='no' frameborder='0' height="400px" width="100%"></iframe>
</div>
<div class="caption">
 Quelle: <a href="https://index-gute-arbeit.dgb.de/veroeffentlichungen/copy_of_jahresreports/++co++b20b2d92-507f-11ed-b251-001a4a160123" target="_blank">DGB Index Gute Arbeit</a>, eigene Darstellung.
</div>

{% endtab %}


{% endtabs %}




<p class="my-text">

Die vorliegenden Daten liefern eine Antwort auf die Frage, ob es neben einer Zunahme an 
"sehr zufriedenen" Erwerbstätigen auch eine steigende Anzahl an "sehr Unzufriedenen" gibt. Entwickelt 
sich der deutsche Arbeitsmarkt also so, dass es immer mehr 
"Gewinner" und "Verlierer" gibt? Oder <strong>führt die gestiegene Anzahl an "sehr zufriedenen" 
Erwerbstätigen zu einer positiveren Einschätzung der Arbeitssituation aller Erwerbstätigen?</strong>

Gemäß den Ergebnissen des ETB stieg der Anteil der "Unzufriedenen" <d-footnote>Definiert 
als der Anteil der Befragten die
angaben, "weniger" und "nicht zufrieden" zu sein.</d-footnote> tatsächlich leicht an, und 
zwar von 7 auf 9 Prozent (vgl. gelbe Männchen oben). In den meisten anderen Aspekten 
der Zufriedenheit zeigt sich jedoch kaum eine Veränderung. Die stärksten Zunahmen sind bei der Unzufriedenheit mit dem Betriebsklima 
(13 auf 15 Prozent) und mit den Vorgesetzten (15 auf 17 Prozent) zu verzeichnen. 
<strong>Das bedeutet, dass überwiegend die "Mittel-Zufriedenen" profitiert haben, während der Anteil der 
"Unzufriedenen" bedauerlicherweise nicht gesunken, sondern tendenziell sogar leicht gestiegen ist.</strong>

<br><br>

Im Vergleich zur ETB zeichnet der DGB-Index interessanterweise ein insgesamt positiveres Bild. Hier ist der Anteil an 
"schlechter Arbeit" keineswegs auf dem gleichen Niveau geblieben, sondern deutlich gefallen von 23 Prozent (2012) auf 
19 Prozent (2018). In der aktuellsten Messung 2022 lag er gar nur noch bei 15 Prozent.

<br><br>

Was bedeutet das, dass der differenzierte Index einen positiven Trend zeigt, während die direkte, einfachere, subjektive Frage
keine Veränderung bei den "Unzufriedenen" feststellt?

</p>

<br>





<!----

### Welche Berufe haben die zufriedensten Erwerbstätigen?

<div class="l-page">
  <iframe src="{{ '/assets/plotly/3d_scatter_zufrieden_kldb2010_3_5.html' | relative_url }}" scrolling='no' frameborder='0' height="400px" width="100%"></iframe>
</div>
<div class="caption">
  <a style="font-size: 16px;" href="http://www.timoschnepf.de/3d_scatter/">Vollbild hier klicken</a> <br>
 Quelle:  <a href="https://www.bibb.de/de/1386.php"> BIBB/BAuA Erwerbstätigenbefragung 2017/2018 </a>, eigene Darstellung.
</div>
{% details Was zeigt die Grafik? %}
<div style="background-color: rgb(240,235,255);">



 <ul>
  <li>Jede Kugel steht für eine Berufsgruppe (KldB2010 3-Steller und Anforderungsniveau)</li>
  <li>Die Größe der Kugeln deutet an, wie viele Leute befragt wurden. Das ist auch ein Hinweis auf die Größe der Berufsgruppe in der Bevölkerung.</li>
  <li>Die Farbe deutet den Anteil der "sehr Zufriedenen" an. Umso gelber, umso zufriedener.</li>
  <li>Umso weiter rechts im Raum, umso zufriedener die Befragten mit ihrem Einkommen.</li>
  <li>Umso weiter links im Raum, umso zufriedener die Befragten mit ihren Arbeitszeiten.</li>
</ul> 
</div>
{% enddetails %}


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


<br><br>


---->
