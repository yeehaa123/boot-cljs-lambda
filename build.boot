(set-env!
 :resource-paths #{"src"}
 :dependencies '[[adzerk/boot-cljs            "1.7.228-1"      :scope "test"]
                 [adzerk/boot-cljs-repl       "0.3.0"          :scope "test"]
                 [adzerk/boot-reload          "0.4.5"          :scope "test"]
                 [crisptrutski/boot-cljs-test "0.2.2-SNAPSHOT" :scope "test"]
                 [org.clojure/clojure         "1.7.0"]
                 [org.clojure/clojurescript   "1.7.228"]
                 [com.cemerick/piggieback     "0.2.1"          :scope "test"]
                 [weasel                      "0.7.0"          :scope "test"]
                 [org.clojure/tools.nrepl     "0.2.12"         :scope "test"]])

(require
  '[adzerk.boot-cljs      :refer [cljs]]
  '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
  '[adzerk.boot-reload    :refer [reload]]
  '[crisptrutski.boot-cljs-test  :refer [test-cljs]])

(deftask auto-test []
  (merge-env! :resource-paths #{"test"})
  (comp (watch)
        (speak)
        (test-cljs)))

(deftask dev []
  (comp (watch)
        (speak)
        (reload :on-jsload 'app.core/main)
        (cljs-repl)
        (cljs :compiler-options {:target :nodejs}
              :optimizations :none)))

(deftask build []
  (cljs :compiler-options {:target :nodejs}
        :optimizations :none))
