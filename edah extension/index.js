let savedLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const tabBtn = document.getElementById("save-btn")
const delBtn = document.getElementById("del-btn")
const storedLeads = JSON.parse(localStorage.getItem("savedLeads"))

if (storedLeads) {
    savedLeads = storedLeads
    render(savedLeads)   
}

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        savedLeads.push(tabs[0].url)
    localStorage.setItem("savedLeads", JSON.stringify(savedLeads))
    render(savedLeads)
    } )
    
})

function render(leads) {
    let listItems = ""
    
    for(let i = 0; i < leads.length; i++) {
        listItems += `<li> 
                          <a target = '_blank' href = '${leads[i]}'> ${leads[i]}</a>
                        </li>`   
   }
   ulEl.innerHTML = listItems
   
}

delBtn.addEventListener (("dblclick"), function(){
    savedLeads = []
    localStorage.clear()
    render(savedLeads)
})

inputBtn.addEventListener (("click"), function() {
    savedLeads.push(inputEl.value)
    inputEl.value = null
    localStorage.setItem("savedLeads",JSON.stringify(savedLeads))
    
    render(savedLeads)
})
