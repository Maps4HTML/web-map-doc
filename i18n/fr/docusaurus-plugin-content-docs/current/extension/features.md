---
id: features
title: Fonctionnalités de l'extension 
slug: /extension/features
---

L’extension répond à plusieurs autres exigences.

![Fenêtre contextuelle d’extension](../assets/img/render-mapml.png)

### Localisation 

Par défaut, l’extension utilise les paramètres de lieu du navigateur pour afficher une interface utilisateur `<mapml-viewer>` dans les paramètres de lieu de l’utilisateur. Notez que si la langue de l’interface utilisateur ne correspond pas à celle de votre navigateur, il est probable que les chaînes de l’interface utilisateur ne soient actuellement pas traduites pour vos paramètres de lieu. Les contributions en matière de localisation sont les bienvenues. Au moment de la rédaction du présent document, les langues disponibles sont l’anglais, le français et le suédois.

### Indexation d’entités

Lorsque cette fonction est activée au moyen de l’extension, elle affiche un carré au centre de la carte afin d’ouvrir le menu de l’index des entités situées dans le carré, lequel menu est accessible par le clavier.

![Exemple d’index des entités](../assets/img/feature-index.png)

### Annonce du niveau de zoom

L'activation de cette fonction dans l’extension permet d'annoncer le niveau de zoom dans la carte au moyen de lecteurs d’écran (cette option est activée par défaut).

### Annoncer l'échelle

Annonce l'échelle de la carte aux lecteurs d'écran en unités métriques ou impériales (les unités métriques sont sélectionnées par défaut).

### Rendu des ressources en MapML

L'activation de cette fonction dans la fenêtre contextuelle d'extension (elle est activée par défaut comme le montre l'image ci-dessus, mais elle peut être désactivée) permet d'afficher des documents cartographiques qui n'ont pas de document hôte, tout comme les navigateurs peuvent présenter des ressources d'image  (image/*) qui n'ont pas de document hôte en synthétisant un document hôte au moment de l'exécution. Cette fonctionnalité reconnaîtra les documents qui sont servis à un onglet de navigateur (ou contexte de navigation général) ou qui sont servis avec l'en-tête  "text/mapml" ou "application/xml" Content-Type. Dans le dernier cas, l'extension recherchera un élément racine `<mapml- xmlns="http://www.w3.org/1999/xhtml">`.

### Définir un système de coordonnées pour les opérations de copie

Par défaut, le système de coordonnées (cs) pour copier l'étendue de la carte à 
l'aide du menu contextuel de la carte est celui des coordonnées projetées (PCRS), 
et celui pour copier les endroits est par défaut géodésique (GCRS). Lorsqu'il est 
changé par l'interface utilisateur de l'extension, le système de coordonnées 
sélectionné sera utilisé pour les opérations de copie ultérieures.

### Sélectionner les préférences de contenu de la carte

Par défaut, aucun utilisateur n'exprime de préférence quant au type de contenu de carte qu'il privilégie.  Certains utilisateurs peuvent préférer des données de fonctionnalités focalisables dans la carte lorsque cela est possible ; d'autres peuvent opter pour un contenu de carte basé sur des images ou des images en mosaïque.  D'autres encore peuvent souhaiter accéder uniquement à des données textuelles de fonctionnalités sous la forme d'un tableau adapté aux technologies d'assistance (AT) et trié par défaut dans l'ordre croissant de la distance depuis le centre de la carte.  Ce tableau peut également être trié par différentes en-têtes de colonnes sélectionnées par l'utilisateur.  

Pour établir un ensemble de préférences, sélectionnez la combinaison applicable d'entrées depuis la liste "Préférences de Contenu" (sélectionnez plus d'une entrée en maintenant Ctrl ou Shift tout en sélectionnant).

Ces préférences peuvent être prises en compte par un auteur de carte via une inclusion dans les [requêtes média de la carte](../api/mapml-viewer-api#matchmediamediaquerystring).

![Préférences de Contenu](../assets/img/render-mapml.png)

## Exigences 

[Signaler les problèmes liés à ces exigences sur GitHub](https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/new?title=-SUMMARIZE+THE+PROBLEM-&body=-DESCRIBE+THE+PROBLEM-)

<p><b><span class="requirement">exigence</span>
<span class="enhancement">amélioration</span>
<span class="impractical">peu pratique</span>
<span class="undecided">indécis</span>
<span class="discussion">en cours de discussion</span></b></p>

|  | Spéc. | Visualiseur | API |
|:---------------------------------------------------------------------------------|:------: |:-----: |:---: |
| [**Le GeoWeb – Modèle Epic proposé**](https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/172) |  |  |  |
| <div class="discussion">[Permettre la fédération au moyen de liens](https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/19)</div> | complet | complet |  |
| [**Capacités de cartographie de l'API côté client (6.0)**](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#client-apis) |  |  |  |
| <div class="discussion">[Créer, initialiser et afficher une carte à partir d'une ressource d'un document de carte](https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/259)</div> | complet | complet |  |

---

> - [Modifier cette page sur **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/docs/extension/features.md)
> - [Discutez avec nous sur **Gitter**](https://gitter.im/Maps4HTML/chat)
