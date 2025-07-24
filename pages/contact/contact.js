import {cursorMove,Menu } from "../../utils.js"

const cursor = document.querySelector('.cursor')
const main = document.querySelector('.main')
const hamburger = document.querySelector('.hamburger')
const bottomNav = document.querySelector('.bottom-nav')
// init()

cursorMove(main,cursor)

Menu(hamburger,bottomNav)