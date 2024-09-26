!function(){var r=CodeMirror.getMode({indentUnit:2},"sass");function e(e){test.mode(e,r,Array.prototype.slice.call(arguments,1))}r.indent=void 0,e("comment","[comment // this is a comment]","[comment   also this is a comment]"),e("comment_multiline","[comment /* this is a comment]","[comment   also this is a comment]"),e("variable","[variable-2 $page-width][operator :] [number 800][unit px]"),e("global_attributes","[tag body]","  [property font][operator :]","    [property family][operator :] [atom sans-serif]","    [property size][operator :] [number 30][unit em]","    [property weight][operator :] [atom bold]"),e("scoped_styles","[builtin #contents]","  [property width][operator :] [variable-2 $page-width]","  [builtin #sidebar]","    [property float][operator :] [atom right]","    [property width][operator :] [variable-2 $sidebar-width]","  [builtin #main]","    [property width][operator :] [variable-2 $page-width] [operator -] [variable-2 $sidebar-width]","    [property background][operator :] [variable-2 $primary-color]","    [tag h2]","      [property color][operator :] [keyword blue]"),e("import",'[def @import] [string "sass/variables"]',"[def @import] [tag sass][operator /][tag baz]"),e("def","[def @if] [variable-2 $foo] [def @else]"),e("tag_on_more_lines","[tag td],","[tag th]",'  [property font-family][operator :] [string "Arial"], [atom serif]'),e("important","[qualifier .foo]","  [property text-decoration][operator :] [atom none] [keyword !important]","[tag h1]","  [property font-size][operator :] [number 2.5][unit em]"),e("selector","[tag h1][variable-3 :before],","[tag h2][variable-3 :before]",'  [property content][operator :] [string "::"]'),e("definition_mixin_equal","[variable-2 $defined-bs-type][operator :] [atom border-box] [keyword !default]","[meta =bs][operator (][variable-2 $bs-type][operator :] [variable-2 $defined-bs-type][operator )]","  [meta -webkit-][property box-sizing][operator :] [variable-2 $bs-type]","  [property box-sizing][operator :] [variable-2 $bs-type]"),e("definition_mixin_with_space","[variable-2 $defined-bs-type][operator :] [atom border-box] [keyword !default]","[def @mixin] [tag bs][operator (][variable-2 $bs-type][operator :] [variable-2 $defined-bs-type][operator )] ","  [meta -moz-][property box-sizing][operator :] [variable-2 $bs-type]","  [property box-sizing][operator :] [variable-2 $bs-type]"),e("numbers_start_dot_include_plus","[meta =button-links][operator (][variable-2 $button-base][operator :] [atom darken][operator (][variable-2 $color11], [number 10][operator %))]","  [property padding][operator :] [number .3][unit em] [number .6][unit em]","  [variable-3 +border-radius][operator (][number 8][unit px][operator )]","  [property background-color][operator :] [variable-2 $button-base]"),e("include","[qualifier .bar]","  [def @include] [tag border-radius][operator (][number 8][unit px][operator )]"),e("reference_parent","[qualifier .col]","  [property clear][operator :] [atom both]","  &[variable-3 :after]","    [property content][operator :] [string '']","    [property clear][operator :] [atom both]"),e("reference_parent_with_spaces","[tag section]","  [property border-left][operator :]  [number 20][unit px] [atom transparent] [atom solid] ","  &[qualifier .section3]","    [qualifier .title]","      [property color][operator :] [keyword white] ","    [qualifier .vermas]","      [property display][operator :] [atom none]"),e("font_face","[def @font-face]","  [property font-family][operator :] [string 'icomoon']","  [property src][operator :] [atom url][operator (][string fonts/icomoon.ttf][operator )]")}();