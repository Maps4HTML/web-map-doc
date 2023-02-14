---
id: map-caption
title: "<map-caption>"
slug: /elements/map-caption/
---

L'élément `<map-caption>` est un enfant de `<mapml-viewer>` et est utilisé pour définir une simple chaîne de texte qui n'est pas rendue visuellement, 
mais le contenu devrait être lu par les lecteurs d'écran lorsque le `<mapml-viewer>` est focalisé, car il est utilisé pour générer la valeur de l'attribut `<mapml-viewer aria-label="...">`. `<map-caption>` peut être le premier ou le dernier élément enfant de `<mapml-viewer>`.

<iframe src="../../../demo/map-caption-demo/" title="MapML Demo" height="410" width="100%" scrolling="no" frameBorder="0"></iframe>
---

## Spécifications

| Specification                                                |
|--------------------------------------------------------------|
| [Élément MapML « légende »](https://maps4html.org/MapML/spec/#the-map-element-0) |

---

## Exigences

[Signaler les problèmes liés à ces exigences sur GitHub](https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/new?title=-SUMMARIZE+THE+PROBLEM-&body=-DESCRIBE+THE+PROBLEM-)

<p><b><span class="requirement">exigence</span>
<span class="enhancement">amélioration</span>
<span class="impractical">peu pratique</span>
<span class="undecided">indécis</span>
<span class="discussion">en cours de discussion</span></b></p>

|  | Spéc. | Visualiseur | API |
|:---------------------------------------------------------------------------------|:------: |:-----: |:---: |
| [**Rendu des couches de base (5.1)**](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-rendering) |  |  |  |
|              <div class="requirement">Intégrer un visualiseur de cartes interactives, à l’aide du balisage HTML (5.1.1)</div>           | [complet](https://maps4html.org/MapML/spec/#the-map-element-0) | complet | [complet](https://maps4html.org/MapML/spec/#webidl-1442763376) |
|              <div class="enhancement">Gérer une carte par défaut pour une région donnée (5.1.2)</div>           | Non prévu | Non prévu | Non prévu |
|            <div class="requirement">Afficher une carte de base sans JavaScript (5.1.5)</div>             | complet | [limité](http://maps4html.org/experiments/progressive-enhancement/) |  |
|            <div class="requirement">Afficher le contenu d’une carte dans la langue préférée de l’utilisateur (5.1.6)</div>            | [complet](https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/136) | [complet](https://github.com/Maps4HTML/mapml-extension) |  |
| [**Interpréter les lieux et les positions sur une carte (5.3)**](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-locations) |  |  |  |
|           <div class="requirement">Sélectionner la vue d’une carte à partir d’un point de latitude et de longitude (5.3.1)</div>             | complet | complet | [complet](https://maps4html.org/web-map-doc/docs/api/mapml-viewer-api#zoomtolat-lon-zoom) |
|           <div class="undecided">Afficher les pavés de carte définis dans divers systèmes de coordonnées courants (5.3.3)</div>             | [complet](https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/14) | complet | [complet](https://maps4html.org/web-map-doc/docs/api/custom-projections) |
|           <div class="undecided">Reprojeter les données des pavés de carte dans une nouvelle projection ou dans la vue Globe (5.3.4)</div>             | [en cours de discussion](https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/3) | aucun |  |
|           <div class="undecided">Sauvegarder l’emplacement ou l’exporter dans une autre application (5.3.5)</div>             | limité | limité |  |
| [**Navigation des utilisateurs (vue panoramique et zoom) (5.4)**](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-user-navigation) |  |  |  |
|            <div class="requirement">Faire un zoom sur la carte indépendamment du reste de la page (5.4.1)</div>            | complet    | complet   | |
|                            <div class="requirement">Afficher une vue panoramique de la carte (5.4.2)</div>                             | complet    | complet   | |
|          <div class="undecided">Encapsuler ou dupliquer des pavés de données au moment d’afficher une vue panoramique du monde (5.4.4)</div>             | none    | partial| | |
| [**Custom styling (5.5)**](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-custom-styling) |  |  |  |
|          <div class="undecided">Appliquer un style personnalisé aux commandes d’une carte (5.5.2)</div>              | aucun | aucun |  |
|          <div class="undecided">Choisir d’afficher les commandes par défaut ou non (5.5.3)</div>              | complet | complet |  |
| [**Contrôler la vue de la carte affichée et répondre aux actions de l’utilisateur (6.2)**](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#client-apis-map-viewport) |  |  |  |
|          <div class="requirement">S’abonner aux avis concernant les événements liés à une carte (6.2.3)</div>              | [en attente](https://maps4html.org/web-map-doc/docs/api/mapml-viewer-api#events) | limité | [complet](https://maps4html.org/web-map-doc/docs/api/mapml-viewer-api#events) |
|          <div class="requirement">Déplacer la carte pour afficher un emplacement donné (6.2.5)</div>              | complet | complet |  |
---

> - [Modifier cette page sur **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/map-caption.md)
> - [Discutez avec nous sur **Gitter**](https://gitter.im/Maps4HTML/chat)