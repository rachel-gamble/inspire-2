import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {

  todos = null
  
    /** @type {import('./Models/Background').Background} */

    background = null

    quote = null

    weather = []

    // fahrenheit = true
    time = { hour: null, minute: null }
    brokenTime = false

}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
