// Compiled by ClojureScript 1.7.228 {}
goog.provide('systsynsoftware.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof systsynsoftware.core.vowels_raw !== 'undefined'){
} else {
systsynsoftware.core.vowels_raw = reagent.core.atom.call(null,"");
}
if(typeof systsynsoftware.core.gp_assoc !== 'undefined'){
} else {
systsynsoftware.core.gp_assoc = new cljs.core.PersistentArrayMap(null, 8, ["a",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","e"], null),"b",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b","bh"], null),"c",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["c","ch"], null),"d",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d"], null),"e",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","\u00E9"], null),"f",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["f"], null),"g",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b"], null),"h",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b"], null)], null);
}
if(typeof systsynsoftware.core.gp_target !== 'undefined'){
} else {
systsynsoftware.core.gp_target = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
systsynsoftware.core.words = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ami","bonjour","voil\u00E0"], null);
if(typeof systsynsoftware.core.words_syllabuses !== 'undefined'){
} else {
systsynsoftware.core.words_syllabuses = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, ["ami",cljs.core.PersistentVector.EMPTY,"bonjour",cljs.core.PersistentVector.EMPTY,"voil\u00E0",cljs.core.PersistentVector.EMPTY], null));
}
systsynsoftware.core.input_vowels = (function systsynsoftware$core$input_vowels(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,systsynsoftware.core.vowels_raw),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__7715_SHARP_){
return cljs.core.reset_BANG_.call(null,systsynsoftware.core.vowels_raw,p1__7715_SHARP_.target.value);
})], null)], null);
});
systsynsoftware.core.set_graphemes = (function systsynsoftware$core$set_graphemes(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Enter vowels (or consonants)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [systsynsoftware.core.input_vowels], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.success","button.success",692159507),cljs.core.deref.call(null,systsynsoftware.core.vowels_raw)], null)], null)], null)], null)], null);
});
systsynsoftware.core.set_gp_matching = (function systsynsoftware$core$set_gp_matching(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"G-P matching"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.warning","button.warning",-1812425145),"Grapheme"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.warning","button.warning",-1812425145),"Phoneme alternatives"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.warning","button.warning",-1812425145),"Selected"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__6911__auto__ = (function systsynsoftware$core$set_gp_matching_$_iter__7722(s__7723){
return (new cljs.core.LazySeq(null,(function (){
var s__7723__$1 = s__7723;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__7723__$1);
if(temp__4425__auto__){
var s__7723__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7723__$2)){
var c__6909__auto__ = cljs.core.chunk_first.call(null,s__7723__$2);
var size__6910__auto__ = cljs.core.count.call(null,c__6909__auto__);
var b__7725 = cljs.core.chunk_buffer.call(null,size__6910__auto__);
if((function (){var i__7724 = (0);
while(true){
if((i__7724 < size__6910__auto__)){
var x = cljs.core._nth.call(null,c__6909__auto__,i__7724);
cljs.core.chunk_append.call(null,b__7725,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),x], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.call(null,cljs.core.get.call(null,systsynsoftware.core.gp_assoc,x))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"defaultvalue","defaultvalue",2082955319),cljs.core.get.call(null,cljs.core.deref.call(null,systsynsoftware.core.gp_target),x),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__7724,x,c__6909__auto__,size__6910__auto__,b__7725,s__7723__$2,temp__4425__auto__){
return (function (p1__7717_SHARP_){
return cljs.core.swap_BANG_.call(null,systsynsoftware.core.gp_target,cljs.core.assoc,x,p1__7717_SHARP_.target.value);
});})(i__7724,x,c__6909__auto__,size__6910__auto__,b__7725,s__7723__$2,temp__4425__auto__))
], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)));

var G__7726 = (i__7724 + (1));
i__7724 = G__7726;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7725),systsynsoftware$core$set_gp_matching_$_iter__7722.call(null,cljs.core.chunk_rest.call(null,s__7723__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7725),null);
}
} else {
var x = cljs.core.first.call(null,s__7723__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),x], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.call(null,cljs.core.get.call(null,systsynsoftware.core.gp_assoc,x))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"defaultvalue","defaultvalue",2082955319),cljs.core.get.call(null,cljs.core.deref.call(null,systsynsoftware.core.gp_target),x),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (x,s__7723__$2,temp__4425__auto__){
return (function (p1__7717_SHARP_){
return cljs.core.swap_BANG_.call(null,systsynsoftware.core.gp_target,cljs.core.assoc,x,p1__7717_SHARP_.target.value);
});})(x,s__7723__$2,temp__4425__auto__))
], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)),systsynsoftware$core$set_gp_matching_$_iter__7722.call(null,cljs.core.rest.call(null,s__7723__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6911__auto__.call(null,cljs.core.filter.call(null,((function (iter__6911__auto__){
return (function (p1__7716_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/ /,p1__7716_SHARP_));
});})(iter__6911__auto__))
,cljs.core.deref.call(null,systsynsoftware.core.vowels_raw)));
})()], null)], null)], null);
});
systsynsoftware.core.split_word = (function systsynsoftware$core$split_word(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"Word"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"Dot-separated syllabuses"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__6911__auto__ = (function systsynsoftware$core$split_word_$_iter__7732(s__7733){
return (new cljs.core.LazySeq(null,(function (){
var s__7733__$1 = s__7733;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__7733__$1);
if(temp__4425__auto__){
var s__7733__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7733__$2)){
var c__6909__auto__ = cljs.core.chunk_first.call(null,s__7733__$2);
var size__6910__auto__ = cljs.core.count.call(null,c__6909__auto__);
var b__7735 = cljs.core.chunk_buffer.call(null,size__6910__auto__);
if((function (){var i__7734 = (0);
while(true){
if((i__7734 < size__6910__auto__)){
var word = cljs.core._nth.call(null,c__6909__auto__,i__7734);
cljs.core.chunk_append.call(null,b__7735,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),word], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"defaultvalue","defaultvalue",2082955319),cljs.core.pr_str.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,systsynsoftware.core.words_syllabuses),word)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__7734,word,c__6909__auto__,size__6910__auto__,b__7735,s__7733__$2,temp__4425__auto__){
return (function (p1__7727_SHARP_){
return cljs.core.swap_BANG_.call(null,systsynsoftware.core.words_syllabuses,cljs.core.assoc,word,clojure.string.split.call(null,p1__7727_SHARP_.target.value,/\./));
});})(i__7734,word,c__6909__auto__,size__6910__auto__,b__7735,s__7733__$2,temp__4425__auto__))
], null)], null)], null)], null));

var G__7736 = (i__7734 + (1));
i__7734 = G__7736;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7735),systsynsoftware$core$split_word_$_iter__7732.call(null,cljs.core.chunk_rest.call(null,s__7733__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7735),null);
}
} else {
var word = cljs.core.first.call(null,s__7733__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),word], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"defaultvalue","defaultvalue",2082955319),cljs.core.pr_str.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,systsynsoftware.core.words_syllabuses),word)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (word,s__7733__$2,temp__4425__auto__){
return (function (p1__7727_SHARP_){
return cljs.core.swap_BANG_.call(null,systsynsoftware.core.words_syllabuses,cljs.core.assoc,word,clojure.string.split.call(null,p1__7727_SHARP_.target.value,/\./));
});})(word,s__7733__$2,temp__4425__auto__))
], null)], null)], null)], null),systsynsoftware$core$split_word_$_iter__7732.call(null,cljs.core.rest.call(null,s__7733__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6911__auto__.call(null,systsynsoftware.core.words);
})()], null)], null);
});
systsynsoftware.core.page = (function systsynsoftware$core$page(){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [systsynsoftware.core.set_graphemes], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [systsynsoftware.core.set_gp_matching], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Set of pre-defined G-P alternatives"], null),cljs.core.pr_str.call(null,systsynsoftware.core.gp_assoc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Set G-P produced by the user"], null),cljs.core.pr_str.call(null,cljs.core.deref.call(null,systsynsoftware.core.gp_target)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Please split words into CV constructs (syllabuses)"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [systsynsoftware.core.split_word], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Set of CV constructs by the user"], null),cljs.core.pr_str.call(null,cljs.core.deref.call(null,systsynsoftware.core.words_syllabuses))], null);
});
systsynsoftware.core.main = (function systsynsoftware$core$main(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [systsynsoftware.core.page], null),document.getElementById("app"));
});
goog.exportSymbol('systsynsoftware.core.main', systsynsoftware.core.main);

//# sourceMappingURL=core.js.map?rel=1455806953018