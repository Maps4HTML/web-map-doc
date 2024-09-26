!function(){var e=CodeMirror.getMode({indentUnit:2},"text/x-scss");function r(r){test.mode(r,e,Array.prototype.slice.call(arguments,1),"scss")}r("url_with_quotation","[tag foo] { [property background]:[variable&callee url]([string test.jpg]) }"),r("url_with_double_quotes",'[tag foo] { [property background]:[variable&callee url]([string "test.jpg"]) }'),r("url_with_single_quotes","[tag foo] { [property background]:[variable&callee url]([string 'test.jpg']) }"),r("string",'[def @import] [string "compass/css3"]'),r("important_keyword","[tag foo] { [property background]:[variable&callee url]([string 'test.jpg']) [keyword !important] }"),r("variable","[variable-2 $blue]:[atom #333]"),r("variable_as_attribute","[tag foo] { [property color]:[variable-2 $blue] }"),r("numbers","[tag foo] { [property padding]:[number 10px] [number 10] [number 10em] [number 8in] }"),r("number_percentage","[tag foo] { [property width]:[number 80%] }"),r("selector","[builtin #hello][qualifier .world]{}"),r("singleline_comment","[comment // this is a comment]"),r("multiline_comment","[comment /*foobar*/]"),r("attribute_with_hyphen","[tag foo] { [property font-size]:[number 10px] }"),r("string_after_attribute",'[tag foo] { [property content]:[string "::"] }'),r("directives","[def @include] [qualifier .mixin]"),r("basic_structure","[tag p] { [property background]:[keyword red]; }"),r("nested_structure","[tag p] { [tag a] { [property color]:[keyword red]; } }"),r("mixin","[def @mixin] [tag table-base] {}"),r("number_without_semicolon","[tag p] {[property width]:[number 12]}","[tag a] {[property color]:[keyword red];}"),r("atom_in_nested_block","[tag p] { [tag a] { [property color]:[atom #000]; } }"),r("interpolation_in_property","[tag foo] { #{[variable-2 $hello]}:[number 2]; }"),r("interpolation_in_selector","[tag foo]#{[variable-2 $hello]} { [property color]:[atom #000]; }"),r("interpolation_error","[tag foo]#{[variable foo]} { [property color]:[atom #000]; }"),r("divide_operator","[tag foo] { [property width]:[number 4] [operator /] [number 2] }"),r("nested_structure_with_id_selector","[tag p] { [builtin #hello] { [property color]:[keyword red]; } }"),r("indent_mixin","[def @mixin] [tag container] (","  [variable-2 $a]: [number 10],","  [variable-2 $b]: [number 10])","{}"),r("indent_nested","[tag foo] {","  [tag bar] {","  }","}"),r("indent_parentheses","[tag foo] {","  [property color]: [variable&callee darken]([variable-2 $blue],","    [number 9%]);","}"),r("indent_vardef","[variable-2 $name]:","  [string 'val'];","[tag tag] {","  [tag inner] {","    [property margin]: [number 3px];","  }","}")}();