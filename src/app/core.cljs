(ns app.core
  (:require [cljs.nodejs :as nodejs]))

(nodejs/enable-util-print!)

(def yaml (nodejs/require "js-yaml"))

(defn handler [event context]
  (.succeed context (.safeDump yaml (clj->js event))))
