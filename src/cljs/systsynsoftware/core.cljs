(ns systsynsoftware.core
  (:require [reagent.core :as r]
            [clojure.string :as s]))

(enable-console-print!)

(defonce vowels-raw (r/atom ""))

(defonce gp-assoc {"a" ["a" "e"]
                   "b" ["b" "bh"]
                   "c" ["c" "ch"]
                   "d" ["d"]
                   "e" ["e" "é"]
                   "f" ["f"]
                   "g" ["b"]
                   "h" ["b"]
                   })

(defonce gp-target (r/atom {}))

(def words ["ami" "bonjour" "voilà"])

(defonce words-syllabuses (r/atom {"ami" [] "bonjour" [] "voilà" []}))

(defn input-vowels []
  [:input
   {:type "text"
    :value @vowels-raw
    :on-change #(reset! vowels-raw (-> % .-target .-value))}])

(defn set-graphemes []
  [:div
   [:h2 "Enter vowels (or consonants)"]
   [:table
    [:tr
     [:td [input-vowels]]
     [:td [:button.success @vowels-raw]]]]])

(defn set-gp-matching []
  [:div
   [:h2 "G-P matching"]
   [:table
     [:thead
      [:tr
       [:td [:button.warning "Grapheme"]]
       [:td [:button.warning "Phoneme alternatives"]]
       [:td [:button.warning "Selected"]]]]
    [:tbody
     (for [x (filter #(not (re-matches #" " %)) @vowels-raw)]
       ^{:key x}
       [:tr
        [:td x]
        [:td (pr-str (get gp-assoc x))]
        [:td [:input {:type "text"
                      :defaultvalue (get @gp-target x)
                      :on-change #(swap! gp-target assoc x (-> % .-target .-value))}]]])]]])

(defn split-word []
  [:table
   [:thead
    [:tr
     [:td [:button "Word"]]
     [:td [:button "Comma-separated syllabuses"]]]]
   [:tbody
    (for [word words]
      [:tr
       [:td word]
       [:td
        [:input {:type "text"
                 :defaultvalue (pr-str (get @words-syllabuses word))
                 :on-change #(swap! words-syllabuses assoc word
                                    (s/split
                                     (-> % .-target .-value)
                                     #"\."))}]]])]])

(defn page []
  [:div
   [set-graphemes]
   [set-gp-matching]
   [:h2 "Set of pre-defined G-P alternatives"]
   (pr-str gp-assoc)
   [:h2 "Set G-P produced by the user"]
   (pr-str @gp-target)
   [:h2 "Please split words into CV constructs (syllabuses)"]
   [split-word]
   [:h2 "Set of CV constructs by the user"]
   (pr-str @words-syllabuses)])

(defn ^:export main []
  (r/render [page]
            (.getElementById js/document "app")))
