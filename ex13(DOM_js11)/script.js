console.log("Hello world...")
// script.js:1 Hello world...
// document.body
// document.body.childNode
// undefined
// document.body.childNodes
// NodeList(5) [text, div.container, text, script, text]
// document.body.childNodes[0]
// #text
// document.body.childNodes[1]
// document.body.childNodes[1].childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
// let cont=document.body.childNodes[1]
// undefined
// cont
// cont.first
// undefined
// cont.firstChild
// #text
// cont.lastChild
// #text
// cont.firstElementChild
// cont.lasttElementChild
// undefined
// cont.lastElementChild
// cont.lastElementChild.style.color="green"
// 'green'
// cont.lastElementChild.style.backgroundColor="black"
// 'black'
// cont.lastElementChild.style.border="2 px solid red"
// ﻿
// Hello world...
// document.body.firstElementChild
// <div class=​"container">​…​</div>​
// document.body.firstElementChild.childNodes
// NodeList(13) [text, comment, text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
// document.body.firstElementChild.children
// HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]
// Hello world...
// document.body.children
// HTMLCollection(3) [div.container, table, script]
// document.body.children[1]
// <table>​…​</table>​
// document.body.children[1].rows
// HTMLCollection(2) [tr, tr]
// document.body.children[1]
// <table>​…​</table>​
// document.body.children[1].border="2px solid black"