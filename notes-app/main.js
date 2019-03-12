const notes = [{
  title:"my next trip",
  body:"I would like to go to Estonia"
},{
  title:"my next food",
  body:"I would like to eat pizza"  
},{
    title:"my next tv show",
    body:"I would like to watch The Office"  
  
}]

// const p = document.querySelector("p")
// p.remove()

const newParagraph = document.createElement("p")

newParagraph.textContent = "This is a new element from JS"

document.querySelector("body").appendChild(newParagraph)