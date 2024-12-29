"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[7010],{1454:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"elements/input","title":"<map-input>","description":"L\u2019\xe9l\xe9ment ` est une entr\xe9e HTML input \xe9tendue par type, utilis\xe9e dans les \xe9l\xe9ments  d\u2019une carte en ligne. Les attributs qui s\u2019appliquent \xe0 l\u2019entr\xe9e d\xe9pendent de l\u2019attribut type. Nous avons plusieurs types d\u2019\xe9l\xe9ments ` \xe0 notre disposition.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/elements/input.md","sourceDirName":"elements","slug":"/elements/input/","permalink":"/web-map-doc/fr/docs/elements/input/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"input","title":"<map-input>","slug":"/elements/input/"},"sidebar":"sidebar","previous":{"title":"<map-extent>","permalink":"/web-map-doc/fr/docs/elements/extent/"},"next":{"title":"<map-select>","permalink":"/web-map-doc/fr/docs/elements/select/"}}');var i=s(4848),r=s(8453);const l={id:"input",title:"<map-input>",slug:"/elements/input/"},d=void 0,a={},c=[{value:"Attributs",id:"attributs",level:2},{value:"<code>name</code>",id:"name",level:3},{value:"<code>type</code>",id:"type",level:3},{value:"<code>value</code>",id:"value",level:3},{value:"<code>axis</code>",id:"axis",level:3},{value:"<code>units</code>",id:"units",level:3},{value:"<code>position</code>",id:"position",level:3},{value:"<code>rel</code>",id:"rel",level:3},{value:"<code>min</code>",id:"min",level:3},{value:"<code>max</code>",id:"max",level:3},{value:"<code>step</code>",id:"step",level:3},{value:"Exemples",id:"exemples",level:2},{value:"\xc9tape d&#39;entr\xe9e",id:"\xe9tape-dentr\xe9e",level:3},{value:"L\u2019entr\xe9e rel=tile g\xe9n\xe8re une demande soumise aux services de cartes Web (WMS) pour obtenir des pav\xe9s.",id:"lentr\xe9e-reltile-g\xe9n\xe8re-une-demande-soumise-aux-services-de-cartes-web-wms-pour-obtenir-des-pav\xe9s",level:3},{value:"Sp\xe9cifications",id:"sp\xe9cifications",level:2}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["L\u2019\xe9l\xe9ment ",(0,i.jsx)(n.code,{children:"<map-input>"})," est une entr\xe9e HTML ",(0,i.jsx)(n.code,{children:"input"})," \xe9tendue par ",(0,i.jsx)(n.code,{children:"type"}),", utilis\xe9e dans les \xe9l\xe9ments ",(0,i.jsx)(n.code,{children:"<map-extent>"})," d\u2019une carte en ligne. Les attributs qui s\u2019appliquent \xe0 l\u2019entr\xe9e d\xe9pendent de l\u2019attribut ",(0,i.jsx)(n.code,{children:"type"}),". Nous avons plusieurs types d\u2019\xe9l\xe9ments ",(0,i.jsx)(n.code,{children:"<map-input>"})," \xe0 notre disposition."]}),"\n",(0,i.jsxs)(n.p,{children:["L\u2019\xe9l\xe9ment ",(0,i.jsx)(n.code,{children:"<map-input>"})," d\xe9clare une variable que le code polyfill d\xe9finit pour son usage en fonction de ses attributs, puisque la carte modifie l\u2019\xe9tendue de la fen\xeatre d\u2019affichage en r\xe9action \xe0 ce que fait l\u2019utilisateur."]}),"\n",(0,i.jsx)("iframe",{src:"../../../demo/map-input-demo/",title:"MapML Demo",height:"410",width:"100%",scrolling:"no",frameBorder:"0"}),"\n",(0,i.jsx)(n.h2,{id:"attributs",children:"Attributs"}),"\n",(0,i.jsx)(n.h3,{id:"name",children:(0,i.jsx)(n.code,{children:"name"})}),"\n",(0,i.jsxs)(n.p,{children:["D\xe9finit le nom de la variable cr\xe9\xe9e par l\u2019entr\xe9e. Le mod\xe8le d\u2019adresse URL ",(0,i.jsx)(n.code,{children:"<map-link>"})," ",(0,i.jsx)(n.a,{href:"../link#tref",children:"tref attribute"})," peut ensuite r\xe9f\xe9rencer la variable avec la notation de r\xe9f\xe9rence des variables ",(0,i.jsx)(n.code,{children:"{name}"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"type",children:(0,i.jsx)(n.code,{children:"type"})}),"\n",(0,i.jsxs)(n.p,{children:["D\xe9finit le ",(0,i.jsx)(n.strong,{children:"type"})," de l\u2019entr\xe9e."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"zoom"}),(0,i.jsx)(n.td,{children:"Cette valeur enti\xe8re varie de 0 \xe0 un nombre entier quelconque qui ne peut exc\xe9der 25, selon la projection."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"location"}),(0,i.jsxs)(n.td,{children:["L\u2019entr\xe9e d\u2019un emplacement capture ",(0,i.jsx)(n.strong,{children:"une"})," valeur d\u2019",(0,i.jsx)(n.code,{children:"axis"})," d\u2019un point \xe0 deux dimensions (repr\xe9sent\xe9 par une paire de coordonn\xe9es) dans l\u2019\xe9tendue de la carte \u2013 p. exe., l\u2019emplacement ",(0,i.jsx)(n.code,{children:"top-right"}),", ou, lorsqu\u2019il interroge un serveur, celui o\xf9 l\u2019utilisateur clique ou qu\u2019il touche sur la carte."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"width"}),(0,i.jsx)(n.td,{children:"L\u2019entr\xe9e de la largeur capture la largeur de l\u2019\xe9tendue de la fen\xeatre d\u2019affichage de la carte en pixels normalis\xe9s"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"height"}),(0,i.jsx)(n.td,{children:"L\u2019entr\xe9e de la hauteur capture la hauteur de l\u2019\xe9tendue de la fen\xeatre d\u2019affichage de la carte en pixels normalis\xe9s"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"hidden"}),(0,i.jsx)(n.td,{children:"Cet attribut \xe9tablit une variable pouvant servir \xe0 transmettre un valeur fixe au serveur lorsque l\u2019utilisateur demande des ressources cartographiques."})]})]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"value",children:(0,i.jsx)(n.code,{children:"value"})}),"\n",(0,i.jsxs)(n.p,{children:["En r\xe8gle g\xe9n\xe9rale, le code polyfill d\xe9finit l\u2019attribut ",(0,i.jsx)(n.code,{children:"value"})," qu\u2019il utilise pour g\xe9n\xe9rer des adresses URL \xe0 partir de ",(0,i.jsx)(n.a,{href:"../link#tref",children:"mod\xe8les d\u2019adresses URL"})," pour r\xe9cup\xe9rer des ressources du serveur, comme des pav\xe9s, des images ou des cartes."]}),"\n",(0,i.jsxs)(n.p,{children:["En particulier, les auteurs utilisent ",(0,i.jsx)(n.code,{children:"value"})," pour pr\xe9ciser la valeurs d\u2019entr\xe9e ",(0,i.jsx)(n.code,{children:'type="zoom"'}),". Lorsque ",(0,i.jsx)(n.code,{children:'type="zoom"'}),", ",(0,i.jsx)(n.code,{children:"value"})," d\xe9finit la valeur des attributs ",(0,i.jsx)(n.code,{children:"min"})," et ",(0,i.jsx)(n.code,{children:"max"})," du niveau de zoom des \xe9l\xe9ments ",(0,i.jsx)(n.strong,{children:"sibling"})," ",(0,i.jsx)(n.code,{children:'<map-input type="location">'})," connexes. Permet aux auteurs d\u2019\xe9tablir des limites de ressources natives / du serveur sur la base de ",(0,i.jsx)(n.code,{children:'<map-link tref="...">'}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Les entr\xe9es sont  associ\xe9es par leurs variables r\xe9f\xe9renc\xe9es par une valeur ",(0,i.jsx)(n.code,{children:'<map-link tref="https://example.org/{z}/{col}/{row}/"...>'}),". Dans l\u2019exemple ci-dessus, les r\xe9f\xe9rences de variable ",(0,i.jsx)(n.code,{children:"{z}"}),", ",(0,i.jsx)(n.code,{children:"{row}"})," et ",(0,i.jsx)(n.code,{children:"{col}"})," associent les variables (",(0,i.jsx)(n.code,{children:"<map-input>"}),"'s) appel\xe9es ",(0,i.jsx)(n.strong,{children:"z"}),", ",(0,i.jsx)(n.strong,{children:"row"})," et ",(0,i.jsx)(n.strong,{children:"col"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"axis",children:(0,i.jsx)(n.code,{children:"axis"})}),"\n",(0,i.jsxs)(n.p,{children:["Cet attribut ne s\u2019appliquent qu\u2019aux entr\xe9es ",(0,i.jsx)(n.code,{children:'type="location"'}),". Il \xe9tablit l\u2019axe de la coordonn\xe9e \xe0 s\xe9rialiser  sous forme de ",(0,i.jsx)(n.a,{href:"#",children:"variable nomm\xe9e"}),". Cette valeur identifie l\u2019axe auquel s\u2019appliquent les attributs ",(0,i.jsx)(n.code,{children:"min"})," et ",(0,i.jsx)(n.code,{children:"max"}),", de fa\xe7on \xe0 ce que le code polyfill ne produise pas de requ\xeates visant des ressources spatiales (pav\xe9s, etc.) hors des limites de l\u2019axe natif. ",(0,i.jsx)(n.code,{children:"axis"})," peut prendre les valeurs suivantes :"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Nom de l\u2019axe"}),(0,i.jsx)(n.th,{children:"CRS"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"row"})}),(0,i.jsx)(n.td,{children:"tilematrix"}),(0,i.jsx)(n.td,{children:"Axe vertical positif, orient\xe9 vers le bas de l\u2019\xe9cran et dont l\u2019origine est en haut \xe0 gauche. Les unit\xe9s de l\u2019axe sont des pav\xe9s. Chaque niveau de zoom \xe9tant un syst\xe8me distinct de r\xe9f\xe9rence des coordonn\xe9es crs d\u2019un tableau de pav\xe9s, les valeurs de coordonn\xe9es ne s\u2019appliquent donc qu\u2019\xe0 lui."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"column"})}),(0,i.jsx)(n.td,{children:"tilematrix"}),(0,i.jsx)(n.td,{children:"Axe horizontal positif, orient\xe9 vers la droite de l\u2019\xe9cran et dont l\u2019origine est en haut \xe0 gauche. Les unit\xe9s de l\u2019axe sont des pav\xe9s. Chaque niveau de zoom \xe9tant un syst\xe8me distinct de r\xe9f\xe9rence des coordonn\xe9es crs d\u2019un tableau de pav\xe9s, les valeurs de coordonn\xe9es ne s\u2019appliquent donc qu\u2019\xe0 lui."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"easting"})}),(0,i.jsx)(n.td,{children:"pcrs"}),(0,i.jsxs)(n.td,{children:["Axe horizontal positif, orient\xe9 vers la droite de l\u2019\xe9cran et dont l\u2019origine est un emplacement g\xe9ographique d\xe9fini. Ses unit\xe9s sont habituellement des m\xe8tres, mais avec certaines projections (WGS84 en particulier), la transformation \xe0 partir d\u2019un CRS g\xe9ographique, c\u2019est-\xe0-dire de la longitude, en abscisse constitue la ",(0,i.jsx)(n.a,{href:"https://fr.wikipedia.org/wiki/Application_identit%C3%A9",children:"transformation de l\u2019identit\xe9"}),". Dans ce cas, les valeurs en abscisse pourraient \xeatre exprim\xe9es en degr\xe9s d\xe9cimaux. ",(0,i.jsx)(n.strong,{children:"pcrs"})," signifie projected coordinate reference system (syst\xe8me de r\xe9f\xe9rence des coordonn\xe9es projet\xe9es). Prenez note que, puisque le pcrs constitue un \xab canevas infini \xbb, il existe des emplacements pour lesquels la transformation des coordonn\xe9es pcrs en coordonn\xe9es gcrs n\u2019est pas d\xe9finie."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"northing"})}),(0,i.jsx)(n.td,{children:"pcrs"}),(0,i.jsxs)(n.td,{children:["Axe vertical positif, orient\xe9 vers la droite de l\u2019\xe9cran et dont l\u2019origine est un emplacement g\xe9ographique d\xe9fini. Ses unit\xe9s sont habituellement des m\xe8tres, mais avec certaines projections (WGS84 en particulier), la transformation \xe0 partir d\u2019un CRS g\xe9ographique, c\u2019est-\xe0-dire de la latitude, vers une valeur nulle constitue la ",(0,i.jsx)(n.a,{href:"https://fr.wikipedia.org/wiki/Application_identit%C3%A9",children:"transformation de l\u2019identit\xe9"}),". Dans ce cas, les valeurs nulles pourraient \xeatre exprim\xe9es en degr\xe9s d\xe9cimaux. Prenez note que, puisque le pcrs constitue un \xab canevas infini \xbb, il existe des emplacements pour lesquels la transformation des coordonn\xe9es pcrs en coordonn\xe9es gcrs n\u2019est pas d\xe9finie."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"latitude"})}),(0,i.jsx)(n.td,{children:"gcrs"}),(0,i.jsxs)(n.td,{children:["La latitude d\u2019un point situ\xe9 sur un ellipso\xefde est l\u2019angle entre une ligne perpendiculaire \xe0 la surface de l\u2019ellipso\xefde en un point quelconque et le plan de l\u2019\xe9quateur. ",(0,i.jsx)(n.strong,{children:"gcrs"})," signifie geographic coordinate reference system (syst\xe8me de r\xe9f\xe9rences des coordonn\xe9es g\xe9ographiques)."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"longitude"})}),(0,i.jsx)(n.td,{children:"gcrs"}),(0,i.jsx)(n.td,{children:"Longitude d\u2019un point pr\xe9cis de la position est-ouest sur la surface de l\u2019objet de r\xe9f\xe9rence (la Terre)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"x"})}),(0,i.jsx)(n.td,{children:"tcrs"}),(0,i.jsxs)(n.td,{children:["Axe horizontal positif, orient\xe9 vers la droite de l\u2019\xe9cran et dont l\u2019origine est en haut \xe0 gauche. Les unit\xe9s sont des pixels de dimensions d\xe9finies. Chaque niveau de zoom tcrs \xe9tant unique, les valeurs de coordonn\xe9es ne s\u2019appliquent qu\u2019\xe0 lui. ",(0,i.jsx)(n.strong,{children:"tcrs"})," signifie syst\xe8me de r\xe9f\xe9rences des coordonn\xe9es en pav\xe9s. Les pav\xe9s de chaque crs ",(0,i.jsx)(n.strong,{children:"tilematrix"})," (tableau de pav\xe9s) sont d\xe9finis comme \xe9tant l\u2019agr\xe9gation de pixels dans le niveaux de zoom ",(0,i.jsx)(n.strong,{children:"tcrs"})," correspondants."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"y"})}),(0,i.jsx)(n.td,{children:"tcrs"}),(0,i.jsx)(n.td,{children:"Axe vertical positif, orient\xe9 vers le bas de l\u2019\xe9cran et dont l\u2019origine est en haut \xe0 gauche. Les unit\xe9s sont des pixels de dimensions d\xe9finies. Chaque niveau de zoom tcrs \xe9tant unique, les valeurs de coordonn\xe9es ne s\u2019appliquent qu\u2019\xe0 lui."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"i"})}),(0,i.jsx)(n.td,{children:"tile, map"}),(0,i.jsxs)(n.td,{children:["Axe horizontal positif, orient\xe9 vers la droite de l\u2019\xe9cran. Chaque pav\xe9, tout comme la fen\xeatre d\u2019affichage de la carte, a un crs de pav\xe9s de dimensions d\xe9finies et dont l\u2019origine est en haut \xe0 gauche (de chaque pav\xe9 dans le cas d\u2019un crs ",(0,i.jsx)(n.strong,{children:"tile"})," \u2013 le syst\xe8me de r\xe9f\xe9rence des coordonn\xe9es en pav\xe9s \u2013 et de la fen\xeatre d\u2019affichage de la carte dans le cas du crs ",(0,i.jsx)(n.strong,{children:"map"}),")."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"j"})}),(0,i.jsx)(n.td,{children:"tile, map"}),(0,i.jsxs)(n.td,{children:["Axe vertical positif, orient\xe9 vers le base de l\u2019\xe9cran. Chaque pav\xe9, tout comme la fen\xeatre d\u2019affichage de la carte, a un crs de pav\xe9s de dimensions d\xe9finies et dont l\u2019origine est en haut \xe0 gauche (de chaque pav\xe9 dans le cas d\u2019un crs ",(0,i.jsx)(n.strong,{children:"tile"})," et de la fen\xeatre d\u2019affichage de la carte dans le cas du crs ",(0,i.jsx)(n.strong,{children:"map"}),")."]})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Lorsque l\u2019utilisateur veut obtenir l\u2019axe de coordonn\xe9es du pav\xe9 en entier dans la projection ",(0,i.jsx)(n.code,{children:"OSMTILE"}),", il peut entrer l\u2019emplacement avec ",(0,i.jsx)(n.code,{children:'<map-input name="y" type="location" units="tilematrix" axis="row">'})," pour d\xe9finir la variable ",(0,i.jsx)(n.strong,{children:"y"})," r\xe9f\xe9renc\xe9e par ",(0,i.jsx)(n.code,{children:"{y}"})," dans un mod\xe8le d\u2019adresses URL connexe qui s\xe9rialise les valeurs de l\u2019axe ",(0,i.jsx)(n.code,{children:"row"})," du crs ",(0,i.jsx)(n.strong,{children:"tilematrix"}),". Une s\xe9rie d\u2019\xe9v\xe9nements d\u2019entr\xe9e d\u2019emplacement est g\xe9n\xe9r\xe9e par le code polyfill, comme en a besoin la carte pour couvrir de pav\xe9s la fen\xeatre d\u2019affichage de la carte."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"units",children:(0,i.jsx)(n.code,{children:"units"})}),"\n",(0,i.jsx)(n.p,{children:"Identifie le syst\xe8me de r\xe9f\xe9rence des coordonn\xe9es connexe sp\xe9cifique auquel l\u2019\xe9v\xe9nement d\u2019entr\xe9e d\u2019emplacement est r\xe9f\xe9renc\xe9e. Dans MapML, le terme \xab projection \xbb est synonyme de l\u2019ensemble de crs reli\xe9s entre eux par le nom de la projection. Dans tous les cas et quelle que soit la projection, il existe un ensemble de crs dont chacun est reli\xe9s math\xe9matiquement \xe0 l\u2019autre. Ces crs sont connus et identifi\xe9s dans l\u2019espace de nommage du nom de la projection par le tableau des valeurs de mots-cl\xe9s suivant :"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"CRS"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tcrs"}),(0,i.jsx)(n.td,{children:"Pour chaque niveau de zoom (c.-\xe0-d. \xe0 une valeur pr\xe9d\xe9finie du d\xe9nominateur d\u2019\xe9chelle), les emplacements sont exprim\xe9s en termes de pixels mis \xe0 l\u2019\xe9chelle, avec l\u2019origine de l\u2019espace des pixels se situant dans le coin sup\xe9rieur gauche. Les coordonn\xe9es des pixels d\u2019un emplacement affich\xe9 \xe0 un niveau de zoom quelconque sont ind\xe9pendantes de celles d\u2019un emplacement affich\xe9 \xe0 tout autre niveau de zoom. Autrement dit, vous devez conna\xeetre le niveau de zoom d\u2019une coordonn\xe9e du syst\xe8me de r\xe9f\xe9rences des coordonn\xe9es en pav\xe9s tcrs pour la localiser sur la carte ou la traiter d\u2019une fa\xe7on ou d\u2019une autre."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tilematrix"}),(0,i.jsxs)(n.td,{children:["Chaque niveau de zoom a un tableau de pav\xe9s appel\xe9 tilematrix. Chaque pav\xe9 constitue les coordonn\xe9es dans ce crs (syst\xe8me de r\xe9f\xe9rence des coordonn\xe9es), et les axes sont appel\xe9s ",(0,i.jsx)(n.code,{children:"row"})," et ",(0,i.jsx)(n.code,{children:"column"}),". Les pav\xe9s sont d\xe9finis comme \xe9tant des carr\xe9s de 256 pixels d\u2019ar\xeate dans le tcrs connexe, au niveau de zoom donn\xe9."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"pcrs"}),(0,i.jsxs)(n.td,{children:["Le syst\xe8me de r\xe9f\xe9rence des coordonn\xe9es projet\xe9es (pcrs) est d\xe9fini par une relation math\xe9matique avec un syst\xe8me de r\xe9f\xe9rence des donn\xe9es g\xe9od\xe9sique gcrs sous-jacent au moyen d\u2019une technique dite \xab de projection \xbb. Les coordonn\xe9es du pcrs sont ind\xe9pendantes de l\u2019\xe9chelle et du niveau de zoom, et sont con\xe7ues pour repr\xe9senter des coordonn\xe9es g\xe9ographiques sur une surface plane, comme l\u2019\xe9cran d\u2019un appareil. Les unit\xe9s de mesure des coordonn\xe9es pcrs sont habituellement des m\xe8tres (\xe0 l\u2019exception notable des coordonn\xe9es pcrs dans la projection ",(0,i.jsx)(n.code,{children:"WGS84"}),")."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"gcrs"}),(0,i.jsx)(n.td,{children:"Les coordonn\xe9es g\xe9ographiques sont r\xe9f\xe9renc\xe9es \xe0 divers ellipso\xefdes et ne sont pas n\xe9cessairement comparables d\u2019une projection \xe0 l\u2019autre. WGS 84 constitue un ellipso\xefde courant \xe0 l\u2019heure actuelle, et est d\xe9fini et utilis\xe9 par la constellation des satellites de positionnement mondial (GPS)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"map"}),(0,i.jsx)(n.td,{children:"Le CRS de la carte est dynamique, en ce sens que son origine se situe en haut \xe0 gauche dans la fen\xeatre d\u2019affichage de l\u2019utilisateur, avec des pixels mis \xe0 l\u2019\xe9chelle comme unit\xe9s. Cela permet d\u2019identifier les coordonn\xe9es d\u2019image \xe0 utiliser, habituellement par les services de cartes Web et d\u2019autre services semblables, qui utilisent une image virtuelle pour permettre la recherche de donn\xe9es sur les propri\xe9t\xe9s d\u2019une caract\xe9ristique pr\xe9sente sur la carte, sans n\xe9cessairement transf\xe9rer les caract\xe9ristiques sur le r\xe9seau."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tile"}),(0,i.jsx)(n.td,{children:"Peu importe le niveau de zoom, chaque pav\xe9 a un syst\xe8me implicite de coordonn\xe9es \xe0 pav\xe9s mis \xe0 l\u2019\xe9chelle allant de 0 \xe0 255, tant dans le sens horizontal que vertical. Ces coordonn\xe9es sont utilis\xe9es par le Service Web des pav\xe9s cartographiques (WMTS) et d\u2019autres services semblables pour identifier un pixel qui servira \xe0 rechercher les valeurs des propri\xe9t\xe9s de la caract\xe9ristique, sans transf\xe9rer la g\xe9om\xe9trie de cette derni\xe8re sur le r\xe9seau."})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Il arrive parfois qu\u2019on utilise des entr\xe9es d\u2019emplacement pour g\xe9n\xe9rer des demandes de d\xe9coupage en carr\xe9s des pav\xe9s \xe0 partir des services de cartes Web (WMS) ou des services semblables qui n\u2019utilisent pas les pav\xe9s. Dans un tel cas, on peut pr\xe9ciser les ",(0,i.jsx)(n.code,{children:"units"})," comme un tableau de pav\xe9s ",(0,i.jsx)(n.code,{children:"tilematrix"}),", ce qui implique que l\u2019\xe9v\xe9nement d\u2019entr\xe9e d\u2019emplacement attendu est celui d\u2019un pav\xe9, et le mot-cl\xe9 ",(0,i.jsx)(n.code,{children:"position"})," est ensuite utilis\xe9 pour d\xe9crire le coin du pav\xe9, coin \xe0 partir duquel la coordonn\xe9e doit \xeatre s\xe9rialis\xe9e. Dans ce cas, la valeur ",(0,i.jsx)(n.code,{children:"axis"})," peut \xeatre pr\xe9cis\xe9e comme ",(0,i.jsx)(n.code,{children:"easting"})," (abscisse), ou un autre nom d\u2019axe associ\xe9 \xe0 la projection, pour obtenir la coordonn\xe9e du coin du pav\xe9 qui est trait\xe9 par le code polyfill :"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'<map-input name="xmin" type="location" units="tilematrix" position="top-left" axis="easting">'})}),"\n",(0,i.jsxs)(n.p,{children:["Intrins\xe8quement, le crs de la coordonn\xe9e demand\xe9e est d\xe9duit du nom de l\u2019axe plut\xf4t qu\u2019en demandant \xe0 l\u2019auteur de pr\xe9ciser explicitement le crs de l\u2019axe comm un autre attribut de ",(0,i.jsx)(n.code,{children:"<map-input>"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"position",children:(0,i.jsx)(n.code,{children:"position"})}),"\n",(0,i.jsxs)(n.p,{children:["Permet \xe0 l\u2019auteur de pr\xe9ciser un coin pr\xe9d\xe9fini de la fen\xeatre d\u2019affichage ou du pav\xe9, qui est utilis\xe9 comme valeur d\u2019emplacement \xe0 s\xe9rialiser. S\u2019il n\u2019y a pas de ",(0,i.jsx)(n.code,{children:"position"}),", les coordonn\xe9es d\u2019entr\xe9e de l\u2019emplacement sont g\xe9n\xe9r\xe9es lorsque l\u2019utilisateur clique sur la carte ou touche celle-ci, et qui servent \xe0 g\xe9n\xe9rer des requ\xeates interactives destin\xe9es au serveur."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Mot-cl\xe9 de position"}),(0,i.jsx)(n.th,{children:"description du mot-cl\xe9"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"top-left"}),(0,i.jsx)(n.td,{children:"Identifie l\u2019emplacement dans le coin sup\xe9rieur gauche du pav\xe9 ou de la fen\xeatre d\u2019affichage"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"top-right"}),(0,i.jsx)(n.td,{children:"Identifie l\u2019emplacement dans le coin sup\xe9rieur droit du pav\xe9 ou de la fen\xeatre d\u2019affichage"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"bottom-left"}),(0,i.jsx)(n.td,{children:"Identifie l\u2019emplacement dans le coin inf\xe9rieur gauche du pav\xe9 ou de la fen\xeatre d\u2019affichage"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"bottom-right"}),(0,i.jsx)(n.td,{children:"Identifie l\u2019emplacement dans le coin inf\xe9rieur droit du pav\xe9 ou de la fen\xeatre d\u2019affichage"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"position"})," peut prendre d\u2019autres valeurs, mais aucune n\u2019est mise en \u0153uvre pour le moment."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"rel",children:(0,i.jsx)(n.code,{children:"rel"})}),"\n",(0,i.jsxs)(n.p,{children:["Pr\xe9cise l\u2019entit\xe9 \xe0 laquelle s\u2019applique la ",(0,i.jsx)(n.code,{children:"position"}),". Les valeurs possibles sont ",(0,i.jsx)(n.code,{children:"tile"})," et ",(0,i.jsx)(n.code,{children:"image"}),". Si l\u2019on ne pr\xe9cise pas de valeur, ",(0,i.jsx)(n.code,{children:"image"})," est utilis\xe9e par d\xe9faut. ",(0,i.jsx)(n.code,{children:"rel"}),"  permet d\u2019identifier plus facilement le crs qui contient la coordonn\xe9es s\xe9rialis\xe9e par l\u2019entr\xe9e."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"min",children:(0,i.jsx)(n.code,{children:"min"})}),"\n",(0,i.jsxs)(n.p,{children:["\xc9tablit la valeur minimale de l\u2019axe dans le serveur. Le code polyfill ne cr\xe9e aucune demande pour obtenir des coordonn\xe9es dont la valeur est inf\xe9rieure \xe0 ",(0,i.jsx)(n.code,{children:"min"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"max",children:(0,i.jsx)(n.code,{children:"max"})}),"\n",(0,i.jsxs)(n.p,{children:["\xc9tablit la valeur maximale de l\u2019axe dans le serveur. Le code polyfill ne cr\xe9e pas les demandes pour obtenir des coordonn\xe9es dont la valeur est sup\xe9rieure \xe0 ",(0,i.jsx)(n.code,{children:"max"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"step",children:(0,i.jsx)(n.code,{children:"step"})}),"\n",(0,i.jsxs)(n.p,{children:["D\xe9finit la plage de zoom en fonction des ressources qui sont demand\xe9es \xe0 l\u2019int\xe9rieur de cette plage. ",(0,i.jsx)(n.code,{children:"step"})," est toujours calcul\xe9 \xe0 partir d\u2019une valeur de base de 0.  Lorsque la valeur du niveau de zoom se situe \xe0 l\u2019int\xe9rieur de l\u2019intervalle ",(0,i.jsx)(n.code,{children:"step"}),", les ressources sont demand\xe9es lorsque n\xe9cessaire et mises \xe0 l\u2019\xe9chelle au niveau de zoom utilis\xe9. Par exemple, si min=0 et que max=7 pour le niveau de zoom entr\xe9 avec step=4, les pav\xe9s ne sont demand\xe9s que qu\u2019au niveau de zoom=0 et mis \xe0 l\u2019\xe9chelle avec les niveaux de zoom 1, 2 et 3 alors que la carte est rendue \xe0 ces niveaux. Utiliser cet attribut permet d\u2019\xe9conomiser la largeur de bande dont profite l\u2019utilisateur et n\u2019introduit qu\u2019un l\xe9ger effet visuel qui varie avec la nature du contenu."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"exemples",children:"Exemples"}),"\n",(0,i.jsx)(n.h3,{id:"\xe9tape-dentr\xe9e",children:"\xc9tape d'entr\xe9e"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<mapml-viewer projection="OSMTILE" zoom="0" lat="45.409071" lon="-75.703411" controls>\n  <map-layer label="OpenStreetMap" checked>\n    <map-extent units="OSMTILE" checked>\n      <map-input name="z" type="zoom"  value="18" min="0" max="18" step="3"></map-input>\n      <map-input name="x" type="location" units="tilematrix" axis="column" min="0"  max="262144" ></map-input>\n      <map-input name="y" type="location" units="tilematrix" axis="row" min="0"  max="262144" ></map-input>\n      <map-link rel="tile" tref="https://tile.openstreetmap.org/{z}/{x}/{y}.png" ></map-link>\n    </map-extent>\n  </map-layer>\n</mapml-viewer>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"lentr\xe9e-reltile-g\xe9n\xe8re-une-demande-soumise-aux-services-de-cartes-web-wms-pour-obtenir-des-pav\xe9s",children:"L\u2019entr\xe9e rel=tile g\xe9n\xe8re une demande soumise aux services de cartes Web (WMS) pour obtenir des pav\xe9s."}),"\n",(0,i.jsx)(n.p,{children:"Les WMS peuvent \xeatre lents \xe0 r\xe9agir, m\xeame s\u2019ils le font rapidement en r\xe9alit\xe9. Dessiner la carte \xe0 partir de pav\xe9s g\xe9n\xe9r\xe9s par autant de demandes GetMap soumises aux WMS peut am\xe9liorer la qualit\xe9 de votre carte aux yeux de l\u2019utilisateur. En revanche, il est d\xe9conseill\xe9 de proc\xe9der ainsi lorsque la couche demand\xe9e contient des \xe9tiquettes susceptibles d\u2019\xeatre reproduites dans chacun des nombreux pav\xe9s adjacents."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<mapml-viewer projection="CBMTILE" lat="60" lon="-95" zoom="2" controls>\n  <map-layer label="Demande de pav\xe9s WMS GetMap" checked>\n    <map-extent units="CBMTILE" checked>\n      <!\u2014ici, les unit\xe9s et les attributs d\u2019axe semblent contradictoires --\x3e \n      <!\u2014cependant, rel="tile" et units="tilematrix" informent tous les deux la carte que l\u2019\xe9v\xe9nement s\xe9rialis\xe9 a trait \xe0 un pav\xe9 dans le tcrs --\x3e\n      <map-input name="txmin" type="location" rel="tile" position="top-left" axis="easting" units="tilematrix" ></map-input>\n      <!\u2014dans ce cas, position renvoie \xe0 une position sur le pav\xe9 \xe0 r\xe9cup\xe9rer --\x3e\n      <map-input name="tymin" type="location" rel="tile" position="bottom-left" axis="northing" units="tilematrix" ></map-input>\n      <map-input name="txmax" type="location" rel="tile" position="top-right" axis="easting" units="tilematrix" ></map-input>\n      <map-input name="tymax" type="location" rel="tile" position="top-left" axis="northing" units="tilematrix" ></map-input>\n      <map-link rel="tile" tref="https://datacube.services.geo.ca/ows/msi?SERVICE=WMS&REQUEST=GetMap&FORMAT=image/png&TRANSPARENT=TRUE&STYLES=msi-color&VERSION=1.3.0&LAYERS=msi&WIDTH=256&HEIGHT=256&CRS=EPSG:3978&BBOX={txmin},{tymin},{txmax},{tymax}" ></map-link>\n      <!\u2014il faut pr\xe9ciser un niveau de zoom, mais il s\u2019agit d\u2019un bogue : \n           https://github.com/Maps4HTML/MapML.js/issues/669 --\x3e\n      <map-input name="z" type="zoom" value="25" min="0" max="25"></map-input>\n    </map-extent>\n  </map-layer>\n</mapml-viewer>\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"sp\xe9cifications",children:"Sp\xe9cifications"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{children:"Sp\xe9cification"})})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://maps4html.org/MapML-Specification/spec/#the-input-element-0",children:"\xc9l\xe9ment input de MapML"})})}),(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://html.spec.whatwg.org/multipage/input.html#the-input-element",children:"\xc9l\xe9ment input en HTML"})})})]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.a,{href:"https://github.com/Maps4HTML/web-map-doc/edit/main/i18n/fr/docusaurus-plugin-content-docs/current/elements/input.md",children:["Modifiez cette page sur ",(0,i.jsx)(n.strong,{children:"Github"})]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.a,{href:"https://gitter.im/Maps4HTML/chat",children:["Clavardez avec nous sur ",(0,i.jsx)(n.strong,{children:"Gitter"})]})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var t=s(6540);const i={},r=t.createContext(i);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);