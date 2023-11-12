### First tabs

{% tabs log %}

{% tab log map %}
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
{% endtab %}

{% tab log bar-chart %}
<div class="l-page">
  <iframe src="{{ '/assets/plotly/linechart.html' | relative_url }}" scrolling='no' frameborder='0' height="400px" width="100%"></iframe>
</div>
{% endtab %}


{% endtabs %}

## Infofeld aufklappbar

<br>

{% details Info: Zu den verwendeten Daten %}
<a href="https://www.gesis.org/missy/files/documents/EU-LFS/Codebook_EU-LFS-2017-yearly.pdf">Hier</a> findet sich der Fragebogen zum LFS. 

<br>

Der <a href="https://index-gute-arbeit.dgb.de/veroeffentlichungen/copy_of_jahresreports"> Gute Arbeit Index</a> ist eine vom Deutschen Gewerkschaftsbund
jährlich in Auftrag gegebene Studie zur Messung der Arbeitsqualität.

<br>

{% enddetails %}
