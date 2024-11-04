"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[6709],{2299:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=r(4848),s=r(8453);const i={id:"map-feature-api",title:"HTMLFeatureElement",slug:"/api/map-feature-api"},l="HTMLFeatureElement",a={id:"api/map-feature-api",title:"HTMLFeatureElement",description:"Propri\xe9t\xe9s",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/api/map-feature-api.md",sourceDirName:"api",slug:"/api/map-feature-api",permalink:"/web-map-doc/fr/docs/api/map-feature-api",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"map-feature-api",title:"HTMLFeatureElement",slug:"/api/map-feature-api"},sidebar:"sidebar",previous:{title:"HTMLLayerElement",permalink:"/web-map-doc/fr/docs/api/layer-api"},next:{title:"HTMLExtentElement",permalink:"/web-map-doc/fr/docs/api/map-extent-api"}},o={},c=[{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2},{value:"zoom",id:"zoom",level:3},{value:"min",id:"min",level:3},{value:"max",id:"max",level:3},{value:"extent",id:"extent",level:3},{value:"M\xe9thodes",id:"m\xe9thodes",level:2},{value:"zoomTo()",id:"zoomto",level:3},{value:"Syntaxe",id:"syntaxe",level:4},{value:"Param\xe8tres",id:"param\xe8tres",level:4},{value:"Valeur de retour",id:"valeur-de-retour",level:4},{value:"click()",id:"click",level:3},{value:"Syntaxe",id:"syntaxe-1",level:4},{value:"Param\xe8tres",id:"param\xe8tres-1",level:4},{value:"Valeur de retour",id:"valeur-de-retour-1",level:4},{value:"focus(options)",id:"focusoptions",level:3},{value:"Syntaxe",id:"syntaxe-2",level:4},{value:"Param\xe8tres",id:"param\xe8tres-2",level:4},{value:"zoomTo",id:"zoomto-1",level:5},{value:"focusVisible",id:"focusvisible",level:5},{value:"Valeur de retour",id:"valeur-de-retour-2",level:4},{value:"blur()",id:"blur",level:3},{value:"Syntaxe",id:"syntaxe-3",level:4},{value:"Param\xe8tres",id:"param\xe8tres-3",level:4},{value:"Valeur de retour",id:"valeur-de-retour-3",level:4},{value:"mapml2geojson(options)",id:"mapml2geojsonoptions",level:3},{value:"Syntaxe",id:"syntaxe-4",level:4},{value:"Param\xe8tres",id:"param\xe8tres-4",level:4},{value:"Options",id:"options",level:5},{value:"Notes",id:"notes",level:6},{value:"Valeur de retour",id:"valeur-de-retour-4",level:4},{value:"Ev\xe9nements",id:"ev\xe9nements",level:2},{value:"Exemples",id:"exemples",level:2},{value:"mapml2geojson",id:"mapml2geojson",level:3},{value:"Options par d\xe9faut",id:"options-par-d\xe9faut",level:4},{value:"Sp\xe9cifications",id:"sp\xe9cifications",level:2},{value:"Exigences",id:"exigences",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"htmlfeatureelement",children:"HTMLFeatureElement"})}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n",(0,t.jsx)(n.h3,{id:"zoom",children:"zoom"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"HTMLFeatureElement.zoom"}),' obtient ou d\xe9finit le zoom "natif" de l\'\xe9l\xe9ment; ',(0,t.jsx)(n.code,{children:"zoom"}),"\n",(0,t.jsx)(n.a,{href:"https://html.spec.whatwg.org/#example-reflect-incantation",children:"refl\xe8te"})," l'attribut\ncontent du m\xeame nom. La g\xe9om\xe9trie et les autres propri\xe9t\xe9s\ndes caract\xe9ristiques d\xe9pendent de l'\xe9chelle. On s'attend \xe0 ce que les\ncaract\xe9ristiques servies par les services HTML (MapML) expriment l'\xe9chelle\nnative ou naturelle de la caract\xe9ristique par le biais de ses attributs contenu\n",(0,t.jsx)(n.code,{children:"zoom"}),", ",(0,t.jsx)(n.code,{children:"min"})," et ",(0,t.jsx)(n.code,{children:"max"})," (zoom) et des attributs IDL."]}),"\n",(0,t.jsxs)(n.p,{children:["Pour d\xe9finir le ",(0,t.jsx)(n.code,{children:"zoom"})," :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"let feature = document.querySelector('map-feature');\nfeature.zoom = 5; // d\xe9finit le zoom \"natif\" de l'objet\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Pour obtenir le ",(0,t.jsx)(n.code,{children:"zoom"})," :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"let feature = document.querySelector('map-feature');\nlet zoom = feature.zoom; \n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"min",children:"min"}),"\n",(0,t.jsxs)(n.p,{children:["L'attribut IDL ",(0,t.jsx)(n.code,{children:"min"})," (zoom) permet d'obtenir ou de d\xe9finir le zoom minimum natif de la\ncaract\xe9ristique; ",(0,t.jsx)(n.code,{children:"min"})," ",(0,t.jsx)(n.a,{href:"https://html.spec.whatwg.org/#example-reflect-incantation",children:"refl\xe8te"}),"\nl'attribut contentu du m\xeame nom. La g\xe9om\xe9trie et les autres propri\xe9t\xe9s des\ncaract\xe9ristiques de la carte d\xe9pendent de l'\xe9chelle. La valeur ",(0,t.jsx)(n.code,{children:"min"})," est une valeur\nlimite de zoom de rendu ; \xe0 des valeurs de zoom de carte inf\xe9rieures \xe0 ",(0,t.jsx)(n.code,{children:"min"}),",\nla caract\xe9ristique ne sera pas rendue."]}),"\n",(0,t.jsxs)(n.p,{children:["Si la valeur ",(0,t.jsx)(n.code,{children:"min"})," n'est pas fournie, une valeur de repli sera calcul\xe9e; la valeur\nde repli sera la valeur de ",(0,t.jsx)(n.code,{children:"zoom"})," minimale de la couche ou, si elle n'est pas sp\xe9cifi\xe9e,\nla valeur minimale de la projection du visualiseur de carte, c'est-\xe0-dire 0."]}),"\n",(0,t.jsxs)(n.p,{children:["Pour d\xe9finir le ",(0,t.jsx)(n.code,{children:"min"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"let feature = document.querySelector('map-feature');\nfeature.min = 5; // l'objet ne sera pas rendue aux niveaux de zoom 0 \xe0 4\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Pour obtenir le ",(0,t.jsx)(n.code,{children:"min"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"let feature = document.querySelector('map-feature');\nlet min = feature.min;\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"max",children:"max"}),"\n",(0,t.jsxs)(n.p,{children:["L'attribut ",(0,t.jsx)(n.code,{children:"max"})," (zoom) permet d'obtenir ou de d\xe9finir le ",(0,t.jsx)(n.code,{children:"zoom"})," maximal natif de la\ncaract\xe9ristique; ",(0,t.jsx)(n.code,{children:"max"})," ",(0,t.jsx)(n.a,{href:"https://html.spec.whatwg.org/#example-reflect-incantation",children:"refl\xe8te"}),"\nl'attribut de contenu du m\xeame nom. La g\xe9om\xe9trie et les autres propri\xe9t\xe9s des\ncaract\xe9ristiques de la carte d\xe9pendent de l'\xe9chelle. La valeur ",(0,t.jsx)(n.code,{children:"max"})," est une valeur\nlimite de ",(0,t.jsx)(n.a,{href:"#zoom",children:(0,t.jsx)(n.code,{children:"zoom"})})," de rendu; \xe0 des valeurs de ",(0,t.jsx)(n.a,{href:"#zoom",children:(0,t.jsx)(n.code,{children:"zoom"})})," de carte\nsup\xe9rieures \xe0 ",(0,t.jsx)(n.code,{children:"max"}),", la caract\xe9ristique ne sera pas rendue."]}),"\n",(0,t.jsxs)(n.p,{children:["Si ",(0,t.jsx)(n.code,{children:"max"})," n'est pas fourni, une valeur de repli sera calcul\xe9e ; la valeur de repli\nsera la valeur de ",(0,t.jsx)(n.a,{href:"#zoom",children:(0,t.jsx)(n.code,{children:"zoom"})})," maximale de la couche ou, si elle n'est pas\nsp\xe9cifi\xe9e, la valeur maximale de ",(0,t.jsx)(n.a,{href:"#zoom",children:(0,t.jsx)(n.code,{children:"zoom"})})," de la projection du visualiseur\nde carte, par exemple 25 (en fonction de la projection)."]}),"\n",(0,t.jsxs)(n.p,{children:["Pour d\xe9finir le ",(0,t.jsx)(n.code,{children:"max"})," :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"let feature = document.querySelector('map-feature');\nfeature.max = 10; // l'objet ne sera pas rendue au-del\xe0 du niveau de zoom 10\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Pour obtenir le ",(0,t.jsx)(n.code,{children:"max"})," :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"let feature = document.querySelector('map-feature');\nlet max = feature.max;\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"extent",children:"extent"}),"\n",(0,t.jsx)(n.p,{children:"En lecture seule. Renvoie les coordonn\xe9es en haut \xe0 gauche et en bas \xe0 droite du\nrectangle minimal de d\xe9limitation de la caract\xe9ristique sous la forme d'une valeur\nd'objet."}),"\n",(0,t.jsxs)(n.p,{children:["Pour les caract\xe9ristiques ponctuelles (dont l'\xe9tendue est nulle), l'\xe9tendue est\ncalcul\xe9e pour correspondre aux coins d'une tuile unique centr\xe9e sur cet endroit,\n\xe0 un niveau de ",(0,t.jsx)(n.a,{href:"#zoom",children:(0,t.jsx)(n.code,{children:"zoom"})})," int\xe9gral \xe9gal \xe0 la valeur de la propri\xe9t\xe9 de\n",(0,t.jsx)(n.a,{href:"#zoom",children:(0,t.jsx)(n.code,{children:"zoom"})})," de la caract\xe9ristique, si elle est d\xe9finie, ou \xe0 la valeur de\n",(0,t.jsx)(n.a,{href:"#zoom",children:(0,t.jsx)(n.code,{children:"zoom"})})," de repli (calcul\xe9e) si aucune propri\xe9t\xe9 de ",(0,t.jsx)(n.a,{href:"#zoom",children:(0,t.jsx)(n.code,{children:"zoom"})})," n'est\nd\xe9finie."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"> let f = document.querySelector('map-feature')\n> console.log(f.extent)\n> {topLeft: {\u2026}, bottomRight: {\u2026}, projection: 'CBMTILE'}\n"})}),"\n",(0,t.jsx)(n.p,{children:'L\'objet "extent" est structur\xe9 comme suit :'}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Cliquer pour visualiser l'objet de l'\xe9tendue"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'{\n    "projection": "CBMTILE",\n    "topLeft": {\n        "tcrs": [\n            {\n                "horizontal": 942.662039991251,\n                "vertical": 1029.0945982508472\n            },\n/* un objet avec des propri\xe9t\xe9s "horizontales" et "verticales" pour chaque niveau de zoom dans le tableau */\n            {\n                "horizontal": 546743983.1949257,\n                "vertical": 596874866.9854914\n            }\n        ],\n        "tilematrix": [\n            {\n                "horizontal": 3.6822735937158244,\n                "vertical": 4.019900774417372\n            },\n/* un objet avec des propri\xe9t\xe9s "horizontales" et "verticales" pour chaque niveau de zoom dans le tableau */\n            {\n                "horizontal": 2135718.6843551784,\n                "vertical": 2331542.4491620758\n            }\n        ],\n/* gcrs est l\'abr\xe9viation de "geographic coordinate reference system" (syst\xe8me de r\xe9f\xe9rence des coordonn\xe9es g\xe9ographiques) */\n        "gcrs": {\n            "horizontal": -75.73195696514524,\n            "vertical": 45.40761073808424\n        },\n/* pcrs est l\'abr\xe9viation de "projected coordinate reference system" (syst\xe8me de r\xe9f\xe9rence \xe0 coordonn\xe9es projet\xe9es) */\n        "pcrs": {\n            "horizontal": 1509108.7182317898,\n            "vertical": -170864.4342066869\n        }\n    },\n    "bottomRight": {\n        "tcrs": [\n            {\n                "horizontal": 942.7503158533199,\n                "vertical": 1029.1828741129164\n            },\n            {\n                "horizontal": 546795183.1949255,\n                "vertical": 596926066.9854914\n            }\n        ],\n        "tilematrix": [\n            {\n                "horizontal": 3.6826184213020308,\n                "vertical": 4.0202456020035795\n            },\n            {\n                "horizontal": 2135918.684355178,\n                "vertical": 2331742.4491620758\n            }\n        ],\n        "gcrs": {\n            "horizontal": -75.67858731979081,\n            "vertical": 45.387937810298354\n        },\n        "pcrs": {\n            "horizontal": 1512495.3916717991,\n            "vertical": -174251.10764670372\n        }\n    }\n}\n'})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"m\xe9thodes",children:"M\xe9thodes"}),"\n",(0,t.jsx)(n.h3,{id:"zoomto",children:"zoomTo()"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"HTMLFeatureElement.zoomTo()"})," D\xe9place la fen\xeatre d'affichage pour la centrer sur\nl'",(0,t.jsx)(n.a,{href:"#extent",children:(0,t.jsx)(n.code,{children:"extent"})})," de la caract\xe9ristique. Le ",(0,t.jsx)(n.a,{href:"#zoom",children:(0,t.jsx)(n.code,{children:"zoom"})})," de la carte affich\xe9e\nd\xe9pend des propri\xe9t\xe9s ",(0,t.jsx)(n.a,{href:"#zoom",children:(0,t.jsx)(n.code,{children:"zoom"})})," et ",(0,t.jsx)(n.a,{href:"#max",children:(0,t.jsx)(n.code,{children:"max"})})," natives de la caract\xe9ristique.\nSi la caract\xe9ristique n'a pas de propri\xe9t\xe9\nde ",(0,t.jsx)(n.a,{href:"#zoom",children:(0,t.jsx)(n.code,{children:"zoom"})})," sp\xe9cifi\xe9e, la caract\xe9ristique sera centr\xe9e sur la fen\xeatre d'affichage \xe0\nla valeur de ",(0,t.jsx)(n.a,{href:"#zoom",children:(0,t.jsx)(n.code,{children:"zoom"})})," maximale, que cette valeur soit pr\xe9sente sur la caract\xe9ristique\nou qu'elle soit d\xe9riv\xe9e d'une valeur de repli bas\xe9e sur la couche ou la carte\nparente. Si une propri\xe9t\xe9 de ",(0,t.jsx)(n.a,{href:"#zoom",children:(0,t.jsx)(n.code,{children:"zoom"})})," est disponible, la fen\xeatre d'affichage sera\ncentr\xe9e sur le centre de l'",(0,t.jsx)(n.a,{href:"#extent",children:(0,t.jsx)(n.code,{children:"extent"})})," de la caract\xe9ristique \xe0 cette valeur de ",(0,t.jsx)(n.a,{href:"#zoom",children:(0,t.jsx)(n.code,{children:"zoom"})}),",\nque l'",(0,t.jsx)(n.a,{href:"#extent",children:(0,t.jsx)(n.code,{children:"extent"})})," tienne ou non enti\xe8rement dans la fen\xeatre d'affichage."]}),"\n",(0,t.jsx)(n.h4,{id:"syntaxe",children:"Syntaxe"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"let f = document.querySelector('map-feature');\nf.zoomTo(); // recentrer la carte sur l'objet \xe0 son niveau de zoom natif\n"})}),"\n",(0,t.jsx)(n.h4,{id:"param\xe8tres",children:"Param\xe8tres"}),"\n",(0,t.jsx)(n.p,{children:"Aucun."}),"\n",(0,t.jsx)(n.h4,{id:"valeur-de-retour",children:"Valeur de retour"}),"\n",(0,t.jsxs)(n.p,{children:["Aucun (",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined",children:"undefined"}),")."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"click",children:"click()"}),"\n",(0,t.jsxs)(n.p,{children:["La m\xe9thode ",(0,t.jsx)(n.code,{children:"click"})," simule un clic de souris sur la caract\xe9ristique."]}),"\n",(0,t.jsx)(n.h4,{id:"syntaxe-1",children:"Syntaxe"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"let f = document.querySelector('map-feature');\nf.click();\n"})}),"\n",(0,t.jsx)(n.h4,{id:"param\xe8tres-1",children:"Param\xe8tres"}),"\n",(0,t.jsx)(n.p,{children:"Aucun."}),"\n",(0,t.jsx)(n.h4,{id:"valeur-de-retour-1",children:"Valeur de retour"}),"\n",(0,t.jsxs)(n.p,{children:["Aucun (",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined",children:"undefined"}),")."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"focusoptions",children:"focus(options)"}),"\n",(0,t.jsx)(n.h4,{id:"syntaxe-2",children:"Syntaxe"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"f.focus();\nf.focus(options);\n"})}),"\n",(0,t.jsx)(n.h4,{id:"param\xe8tres-2",children:"Param\xe8tres"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"options"})," ",(0,t.jsx)("span",{class:"badge",children:"Optionnel"})]}),"\n",(0,t.jsx)(n.p,{children:"Objet optionnel permettant de contr\xf4ler certains aspects du processus de focalisation."}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"Les options ne sont pas encore mises en \u0153uvre."})}),"\n",(0,t.jsx)(n.p,{children:"Cet objet peut contenir les propri\xe9t\xe9s suivantes :"}),"\n",(0,t.jsx)(n.h5,{id:"zoomto-1",children:"zoomTo"}),"\n",(0,t.jsxs)(n.p,{children:["L'option ",(0,t.jsx)(n.code,{children:"zoomTo"})," (",(0,t.jsx)(n.code,{children:"false"})," par d\xe9faut) d\xe9placera la fen\xeatre de visualisation pour\nqu'elle soit centr\xe9e sur l'",(0,t.jsx)(n.a,{href:"#extent",children:(0,t.jsx)(n.code,{children:"extent"})})," de la caract\xe9ristique, similaire\n\xe0 la m\xe9thode ",(0,t.jsx)(n.a,{href:"#zoomto",children:(0,t.jsx)(n.code,{children:"zoomTo()"})}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"let f = document.querySelector('map-feature');\nf.focus({ zoomTo: true });\n"})}),"\n",(0,t.jsx)(n.h5,{id:"focusvisible",children:"focusVisible"}),"\n",(0,t.jsxs)(n.p,{children:["L'option ",(0,t.jsx)(n.code,{children:"focusVisible"})," (",(0,t.jsx)(n.code,{children:"false"})," par d\xe9faut) permet d'ajouter un anneau de anneau\nde focalisation, comme si la caract\xe9ristique avait \xe9t\xe9 focalis\xe9e avec le clavier."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"let f = document.querySelector('map-feature');\nf.focus({ zoom: false, focusVisible: true });\n"})}),"\n",(0,t.jsx)(n.h4,{id:"valeur-de-retour-2",children:"Valeur de retour"}),"\n",(0,t.jsxs)(n.p,{children:["Aucun (",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined",children:"undefined"}),")."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"blur",children:"blur()"}),"\n",(0,t.jsxs)(n.p,{children:["La m\xe9thode ",(0,t.jsx)(n.code,{children:"blur()"})," supprime la focalisation sur la caract\xe9ristique."]}),"\n",(0,t.jsx)(n.h4,{id:"syntaxe-3",children:"Syntaxe"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"let f = document.querySelector('map-feature');\nf.blur();\n"})}),"\n",(0,t.jsx)(n.h4,{id:"param\xe8tres-3",children:"Param\xe8tres"}),"\n",(0,t.jsx)(n.p,{children:"Aucun."}),"\n",(0,t.jsx)(n.h4,{id:"valeur-de-retour-3",children:"Valeur de retour"}),"\n",(0,t.jsxs)(n.p,{children:["Aucun (",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined",children:"undefined"}),")."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"mapml2geojsonoptions",children:"mapml2geojson(options)"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"HTMLFeatureElement.mapml2geojson(options)"})," renvoie la caract\xe9ristique au format GeoJSON."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Fonction"}),(0,t.jsx)(n.th,{children:"Retours"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)("code",{children:"mapml2geojson(<Object> options)"})}),(0,t.jsx)(n.td,{children:"Un objet caract\xe9ristique JavaScript (GeoJSON)"}),(0,t.jsxs)(n.td,{children:["Cette fonction transforme l'\xe9l\xe9ment ",(0,t.jsx)(n.code,{children:"<feature>"})," en un objet GeoJSON Feature. Vous fournissez ",(0,t.jsx)(n.a,{href:"#options",children:"options"})," pour contr\xf4ler la transformation."]})]})})]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"mapml2geojson"})," doit \xeatre appel\xe9 \xe0 l'int\xe9rieur d'un \xe9v\xe9nement windows.onload pour fonctionner correctement."]})}),"\n",(0,t.jsx)(n.h4,{id:"syntaxe-4",children:"Syntaxe"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"window.onload = (event) => {\n  let layer = document.querySelector('map-layer');\n  layer.mapml2geojson();\n};\n"})}),"\n",(0,t.jsx)(n.h4,{id:"param\xe8tres-4",children:"Param\xe8tres"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"<Object> options"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)("span",{className:"badge",children:"Optionnel"})," Vous fournissez des param\xe8tres via un objet options avec des ",(0,t.jsx)(n.a,{href:"#options",children:"noms d'options pr\xe9d\xe9finis"}),"."]})]})})]}),"\n",(0,t.jsx)(n.h5,{id:"options",children:"Options"}),"\n",(0,t.jsx)(n.p,{children:"<Object> Un ensemble de paires cl\xe9/valeur qui personnalisent l'objet GeoJSON de sortie. Tous ces \xe9l\xe9ments sont optionnels et d\xe9taill\xe9s ci-dessous."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Option"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"D\xe9faut"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"propertyFunction"})}),(0,t.jsx)(n.td,{children:"<Fonction>"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"s/o"})}),(0,t.jsxs)(n.td,{children:["Une fonction que vous fournissez qui fait correspondre l'\xe9l\xe9ment ",(0,t.jsx)(n.code,{children:"<map-properties>"})," de la caract\xe9ristique \xe0 un ",(0,t.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7946#section-3.2",children:'membre GeoJSON "properties"'}),", puisque vous seul connaissez la conception du balisage dans votre valeur ",(0,t.jsx)(n.code,{children:"<map-properties>"}),". Si vous ne fournissez pas cette option, une fonction par d\xe9faut tentera d'inverser un enfant ",(0,t.jsx)(n.code,{children:"<table>"})," de l'\xe9l\xe9ment ",(0,t.jsx)(n.code,{children:"<map-properties>"}),", comme si cette table avait \xe9t\xe9 g\xe9n\xe9r\xe9e par la fonction ",(0,t.jsx)(n.a,{href:"mapml-viewer-api#options",children:"fonction des options de propri\xe9t\xe9s par d\xe9faut de geojson2mapml"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"transform"})}),(0,t.jsx)(n.td,{children:"<Boolean>"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"true"})}),(0,t.jsxs)(n.td,{children:["Transforme les valeurs ",(0,t.jsx)(n.code,{children:"<map-coordinates>"})," en valeurs ",(0,t.jsx)(n.code,{children:"gcrs"})," (longitude,latitude), si ce n'est pas d\xe9j\xe0 le cas. GeoJSON ",(0,t.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc7946.html#section-4",children:"recommande"})," d'utiliser les coordonn\xe9es de longitude et de latitude WGS 84, c'est donc le comportement par d\xe9faut."]})]})]})]}),"\n",(0,t.jsx)(n.h6,{id:"notes",children:"Notes"}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"mapml2geojson"}),", par d\xe9faut, transformera les coordonn\xe9es des caract\xe9ristiques en\n",(0,t.jsx)(n.code,{children:"gcrs"})," avant la s\xe9rialisation, si n\xe9cessaire. Notez que tous les CRS g\xe9ographiques\nsont ",(0,t.jsx)("u",{children:(0,t.jsx)(n.strong,{children:"non"})}),"-\xe9quivalents, et l'interpr\xe9tation de ces coordonn\xe9es n'est pas\ngarantie conforme aux coordonn\xe9es WGS 84 / GPS, et peut donc ne pas \xeatre conforme\n\xe0 ",(0,t.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7946#section-4",children:"la recommandation GeoJSON"}),",\nqui exige que les coordonn\xe9es de longitude et de latitude soient encod\xe9es en WGS 84.",(0,t.jsx)(n.br,{}),"\n","Le moteur de projection utilis\xe9 pour mettre en \u0153uvre cette conversion n'est pas\ncapable de transformer les coordonn\xe9es d'un\n",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Earth_ellipsoid",children:"ellipso\xefde"})," en un autre, et le\nJSON r\xe9sultant DEVRAIT (d'une mani\xe8re ou d'une autre, \xe0 d\xe9terminer) \xeatre marqu\xe9\navec le datum utilis\xe9 par la projection de la couche."]})}),"\n",(0,t.jsx)(n.h4,{id:"valeur-de-retour-4",children:"Valeur de retour"}),"\n",(0,t.jsx)(n.p,{children:"Un objet GeoJSON repr\xe9sentant la caract\xe9ristique"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"ev\xe9nements",children:"Ev\xe9nements"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Nom de l'\xe9v\xe9nement"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"click"}),(0,t.jsxs)(n.td,{children:["L'\xe9v\xe9nement click se produit lorsque l'utilisateur clique ou touche la caract\xe9ristique avec le clavier ou le pointeur, ou lorsque la m\xe9thode ",(0,t.jsx)(n.a,{href:"#click",children:"click()"})," est appel\xe9e."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"focus"}),(0,t.jsxs)(n.td,{children:["L'\xe9v\xe9nement de ",(0,t.jsx)(n.code,{children:"focus"})," se produit lorsque la caract\xe9ristique est cibl\xe9e par le clavier ou le pointeur, ou lorsque la m\xe9thode ",(0,t.jsx)(n.a,{href:"#focusoptions",children:"focus()"})," est appel\xe9e."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"blur"}),(0,t.jsxs)(n.td,{children:["L'\xe9v\xe9nement de ",(0,t.jsx)(n.code,{children:"blur"})," se produit lorsque la caract\xe9ristique perd le focus avec un clavier ou un pointeur, ou lorsque la m\xe9thode ",(0,t.jsx)(n.a,{href:"#blur",children:"blur()"})," est appel\xe9e."]})]})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"exemples",children:"Exemples"}),"\n",(0,t.jsx)(n.h3,{id:"mapml2geojson",children:"mapml2geojson"}),"\n",(0,t.jsx)(n.h4,{id:"options-par-d\xe9faut",children:"Options par d\xe9faut"}),"\n",(0,t.jsx)(n.p,{children:"Un exemple montrant la sortie GeoJSON par d\xe9faut lorsqu'aucune option n'est fournie."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<map-layer label="G\xe9om\xe9trie de point" checked="">\n   <map-meta name="extent" content="top-left-longitude=-75.916809, top-left-latitude=45.886964, bottom-right-longitude=-75.516809,bottom-right-latitude=45.26964"></map-meta>\n   <map-meta name="projection" content="OSMTILE"></map-meta>\n   <map-meta name="cs" content="gcrs"></map-meta>\n   <map-feature>\n      <map-featurecaption>G\xe9om\xe9trie de point</map-featurecaption>\n      <map-geometry>\n         <map-point>\n            <map-coordinates>-75.6916809 45.4186964</map-coordinates>\n         </map-point>\n      </map-geometry>\n      <map-properties>\n         <table>\n            <thead>\n               <tr>\n                  <th role="columnheader" scope="col">Nom de propri\xe9t\xe9</th>\n                  <th role="columnheader" scope="col">Valeur de la propri\xe9t\xe9</th>\n               </tr>\n            </thead>\n            <tbody>\n               <tr>\n                  <th scope="row">prop0</th>\n                  <td itemprop="prop0">Ceci est un point</td>\n               </tr>\n            </tbody>\n         </table>\n      </map-properties>\n   </map-feature>\n</map-layer>\n<script>\nwindow.onload = (event) => {\n   let couche = document.querySelector(\'map-layer\');\n   let sortie = layer.mapml2geojson();\n};\n<\/script>\n'})}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Cliquez pour voir la sortie GeoJSON"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'{\n "title": "G\xe9om\xe9trie de point",\n "bbox": [-75.916809, 45.886964, -75.516809, 45.26964],\n "type": "FeatureCollection",\n "features": [{\n     "type": "Feature",\n     "geometry": {\n         "type": "Point",\n         "coordinates": [-75.6916809, 45.4186964]\n     },\n     "properties": {\n         "prop0": "Ceci est un point"\n     }\n }]\n}\n'})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"sp\xe9cifications",children:"Sp\xe9cifications"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.th,{children:"Sp\xe9cification"})})}),(0,t.jsx)(n.tbody,{children:(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://maps4html.org/MapML-Specification/spec/#the-feature-element",children:"HTMLFeatureElement"})})})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"exigences",children:"Exigences"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/new?title=-SUMMARIZE+THE+PROBLEM-&body=-DESCRIBE+THE+PROBLEM-",children:"Signaler les probl\xe8mes li\xe9s \xe0 ces exigences sur GitHub"})}),"\n",(0,t.jsx)("p",{children:(0,t.jsxs)("b",{children:[(0,t.jsx)("span",{class:"requirement",children:"exigence"}),"\n",(0,t.jsx)("span",{class:"enhancement",children:"am\xe9lioration"}),"\n",(0,t.jsx)("span",{class:"impractical",children:"peu pratique"}),"\n",(0,t.jsx)("span",{class:"undecided",children:"ind\xe9cis"}),"\n",(0,t.jsx)("span",{class:"discussion",children:"en cours de discussion"})]})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"}}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Sp\xe9c."}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Visualiseur"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"API"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.a,{href:"#propri%C3%A9t%C3%A9s",children:(0,t.jsx)(n.strong,{children:"Propri\xe9t\xe9s"})})}),(0,t.jsxs)(n.td,{style:{textAlign:"center"},children:[(0,t.jsx)(n.a,{href:"https://github.com/Maps4HTML/MapML-Specification/issues/247",children:"limit\xe9"})," *"]}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"complet"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"complet"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.a,{href:"#m%C3%A9thodes",children:(0,t.jsx)(n.strong,{children:"M\xe9thodes"})})}),(0,t.jsxs)(n.td,{style:{textAlign:"center"},children:[(0,t.jsx)(n.a,{href:"https://github.com/Maps4HTML/MapML-Specification/issues/248",children:"aucun"})," *"]}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"limit\xe9 *"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"limit\xe9 *"})]})]})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Exceptions *"}),(0,t.jsxs)("ol",{children:[(0,t.jsx)("li",{children:"Les attributs IDL et de contenu (propri\xe9t\xe9s) de map-feature min, max et extent ne sont pas encore sp\xe9cifi\xe9s"}),(0,t.jsx)("li",{children:"Les op\xe9rations (m\xe9thodes) de map-feature ne sont pas encore sp\xe9cifi\xe9es"}),(0,t.jsx)("li",{children:"L'\xe9l\xe9ment personnalis\xe9 map-feature impl\xe9mente les m\xe9thodes mais le param\xe8tre options de focus(options) n'est pas encore impl\xe9ment\xe9"}),(0,t.jsx)("li",{children:"Cette API est encore en cours de discussion"})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.a,{href:"https://github.com/Maps4HTML/web-map-doc/edit/main/i18n/fr/docusaurus-plugin-content-docs/current/api/map-feature-api.md",children:["Modifier cette page sur ",(0,t.jsx)(n.strong,{children:"Github"})]})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.a,{href:"https://gitter.im/Maps4HTML/chat",children:["Discutez avec nous sur ",(0,t.jsx)(n.strong,{children:"Gitter"})]})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>a});var t=r(6540);const s={},i=t.createContext(s);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);