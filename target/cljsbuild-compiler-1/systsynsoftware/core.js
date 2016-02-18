// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('systsynsoftware.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_();
if(typeof systsynsoftware.core.vowels_raw !== 'undefined'){
} else {
systsynsoftware.core.vowels_raw = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
if(typeof systsynsoftware.core.gp_assoc !== 'undefined'){
} else {
systsynsoftware.core.gp_assoc = new cljs.core.PersistentArrayMap(null, 8, ["a",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","e"], null),"b",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b","bh"], null),"c",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["c","ch"], null),"d",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d"], null),"e",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","\u00E9"], null),"f",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["f"], null),"g",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b"], null),"h",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b"], null)], null);
}
if(typeof systsynsoftware.core.gp_target !== 'undefined'){
} else {
systsynsoftware.core.gp_target = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
systsynsoftware.core.words = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ami","bonjour","voil\u00E0"], null);
if(typeof systsynsoftware.core.words_syllabuses !== 'undefined'){
} else {
systsynsoftware.core.words_syllabuses = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, ["ami",cljs.core.PersistentVector.EMPTY,"bonjour",cljs.core.PersistentVector.EMPTY,"voil\u00E0",cljs.core.PersistentVector.EMPTY], null));
}
systsynsoftware.core.input_vowels = (function systsynsoftware$core$input_vowels(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(systsynsoftware.core.vowels_raw) : cljs.core.deref.call(null,systsynsoftware.core.vowels_raw)),cljs.core.cst$kw$on_DASH_change,(function (p1__10789_SHARP_){
var G__10792 = systsynsoftware.core.vowels_raw;
var G__10793 = p1__10789_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10792,G__10793) : cljs.core.reset_BANG_.call(null,G__10792,G__10793));
})], null)], null);
});
systsynsoftware.core.set_graphemes = (function systsynsoftware$core$set_graphemes(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Enter vowels (or consonants)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [systsynsoftware.core.input_vowels], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$success,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(systsynsoftware.core.vowels_raw) : cljs.core.deref.call(null,systsynsoftware.core.vowels_raw))], null)], null)], null)], null)], null);
});
systsynsoftware.core.set_gp_matching = (function systsynsoftware$core$set_gp_matching(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"G-P matching"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$warning,"Grapheme"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$warning,"Phoneme alternatives"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$warning,"Selected"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,(function (){var iter__5440__auto__ = (function systsynsoftware$core$set_gp_matching_$_iter__10802(s__10803){
return (new cljs.core.LazySeq(null,(function (){
var s__10803__$1 = s__10803;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__10803__$1);
if(temp__4425__auto__){
var s__10803__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10803__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__10803__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__10805 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__10804 = (0);
while(true){
if((i__10804 < size__5439__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__10804);
cljs.core.chunk_append(b__10805,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,x], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.get.cljs$core$IFn$_invoke$arity$2(systsynsoftware.core.gp_assoc,x)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$defaultvalue,cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(systsynsoftware.core.gp_target) : cljs.core.deref.call(null,systsynsoftware.core.gp_target)),x),cljs.core.cst$kw$on_DASH_change,((function (i__10804,x,c__5438__auto__,size__5439__auto__,b__10805,s__10803__$2,temp__4425__auto__){
return (function (p1__10795_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(systsynsoftware.core.gp_target,cljs.core.assoc,x,p1__10795_SHARP_.target.value);
});})(i__10804,x,c__5438__auto__,size__5439__auto__,b__10805,s__10803__$2,temp__4425__auto__))
], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,x], null)));

var G__10808 = (i__10804 + (1));
i__10804 = G__10808;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10805),systsynsoftware$core$set_gp_matching_$_iter__10802(cljs.core.chunk_rest(s__10803__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10805),null);
}
} else {
var x = cljs.core.first(s__10803__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,x], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.get.cljs$core$IFn$_invoke$arity$2(systsynsoftware.core.gp_assoc,x)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$defaultvalue,cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(systsynsoftware.core.gp_target) : cljs.core.deref.call(null,systsynsoftware.core.gp_target)),x),cljs.core.cst$kw$on_DASH_change,((function (x,s__10803__$2,temp__4425__auto__){
return (function (p1__10795_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(systsynsoftware.core.gp_target,cljs.core.assoc,x,p1__10795_SHARP_.target.value);
});})(x,s__10803__$2,temp__4425__auto__))
], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,x], null)),systsynsoftware$core$set_gp_matching_$_iter__10802(cljs.core.rest(s__10803__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (iter__5440__auto__){
return (function (p1__10794_SHARP_){
return cljs.core.not(cljs.core.re_matches(/ /,p1__10794_SHARP_));
});})(iter__5440__auto__))
,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(systsynsoftware.core.vowels_raw) : cljs.core.deref.call(null,systsynsoftware.core.vowels_raw))));
})()], null)], null)], null);
});
systsynsoftware.core.split_word = (function systsynsoftware$core$split_word(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,"Word"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,"Comma-separated syllabuses"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,(function (){var iter__5440__auto__ = (function systsynsoftware$core$split_word_$_iter__10816(s__10817){
return (new cljs.core.LazySeq(null,(function (){
var s__10817__$1 = s__10817;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__10817__$1);
if(temp__4425__auto__){
var s__10817__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10817__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__10817__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__10819 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__10818 = (0);
while(true){
if((i__10818 < size__5439__auto__)){
var word = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__10818);
cljs.core.chunk_append(b__10819,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,word], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$defaultvalue,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(systsynsoftware.core.words_syllabuses) : cljs.core.deref.call(null,systsynsoftware.core.words_syllabuses)),word)], 0)),cljs.core.cst$kw$on_DASH_change,((function (i__10818,word,c__5438__auto__,size__5439__auto__,b__10819,s__10817__$2,temp__4425__auto__){
return (function (p1__10809_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(systsynsoftware.core.words_syllabuses,cljs.core.assoc,word,clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__10809_SHARP_.target.value,/\./));
});})(i__10818,word,c__5438__auto__,size__5439__auto__,b__10819,s__10817__$2,temp__4425__auto__))
], null)], null)], null)], null));

var G__10822 = (i__10818 + (1));
i__10818 = G__10822;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10819),systsynsoftware$core$split_word_$_iter__10816(cljs.core.chunk_rest(s__10817__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10819),null);
}
} else {
var word = cljs.core.first(s__10817__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,word], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$defaultvalue,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(systsynsoftware.core.words_syllabuses) : cljs.core.deref.call(null,systsynsoftware.core.words_syllabuses)),word)], 0)),cljs.core.cst$kw$on_DASH_change,((function (word,s__10817__$2,temp__4425__auto__){
return (function (p1__10809_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(systsynsoftware.core.words_syllabuses,cljs.core.assoc,word,clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__10809_SHARP_.target.value,/\./));
});})(word,s__10817__$2,temp__4425__auto__))
], null)], null)], null)], null),systsynsoftware$core$split_word_$_iter__10816(cljs.core.rest(s__10817__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__(systsynsoftware.core.words);
})()], null)], null);
});
systsynsoftware.core.page = (function systsynsoftware$core$page(){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [systsynsoftware.core.set_graphemes], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [systsynsoftware.core.set_gp_matching], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Set of pre-defined G-P alternatives"], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([systsynsoftware.core.gp_assoc], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Set G-P produced by the user"], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(systsynsoftware.core.gp_target) : cljs.core.deref.call(null,systsynsoftware.core.gp_target))], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Please split words into CV constructs (syllabuses)"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [systsynsoftware.core.split_word], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Set of CV constructs by the user"], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(systsynsoftware.core.words_syllabuses) : cljs.core.deref.call(null,systsynsoftware.core.words_syllabuses))], 0))], null);
});
systsynsoftware.core.main = (function systsynsoftware$core$main(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [systsynsoftware.core.page], null),document.getElementById("app"));
});
goog.exportSymbol('systsynsoftware.core.main', systsynsoftware.core.main);
