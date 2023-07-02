---
layout: page
permalink: /publications/
title: publications
description: 
nav: true
nav_order: 2
---
<!-- _pages/publications.md -->

<h2 class="post-title">peer-reviewed</h2>

<div class="publications">

{% bibliography -f {{ site.scholar.peer }} %}

<h2 class="post-title">others</h2>

<div class="publications">

{% bibliography -f {{ site.scholar.others }} %}

<h2 class="post-title">talks</h2>

<div class="publications">

{% bibliography -f {{ site.scholar.talks }} %}
