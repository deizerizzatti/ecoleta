function populateUFs() {
  const ufselect = document.querySelector("select[name=uf]")
  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
    .then(res => res.json())
    .then(states => {
      for(const state of states) {
        ufselect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
      }  
    })
}

function getCities(event) {
  const citySeletc = document.querySelector("[name=city]")
  const stateInput = document.querySelector("[name=state]")

  const ufValue = event.target.value
    
  const indexOfSelectedState = event.target.selectedIndex
  stateInput.value = event.target.options[indexOfSelectedState].text

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios?orderBy=nome`

  citySeletc.innerHTML = "<option value>Selecione a Cidade</option>"
  citySeletc.disabled = true

  fetch(url)
    .then(res => res.json())
    .then(cities => {
      for(const city of cities) {
        citySeletc.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
      } 
      citySeletc.disabled = false  
    })
}

function handleSelectedItem(event) {
  const itemLi = event.target
  itemLi.classList.toggle("selected")

  const itemId = itemLi.dataset.id

  let alreadySelected = -1
  let selectedItems = [];

  const collectedItems = document.querySelector("input[name=items]")
  const valuesCollectedItems = collectedItems.value;

  selectedItems = valuesCollectedItems.split(',')
  alreadySelected = selectedItems.findIndex(item => {
    const exist = item == itemId
    return exist
  })

  if(alreadySelected == -1) {
    if(valuesCollectedItems == '') {
      collectedItems.value = itemId
    } else {
      collectedItems.value = `${valuesCollectedItems}, ${itemId}`
    } 
  } else {
    let newList = ''
    for( let i=0; i<selectedItems.length; i++) {
      if(selectedItems[i] != itemId) {
        if(newList == '') {
          newList = selectedItems[i]
        } else {
          newList = `${newList}, ${selectedItems[i]}`
        }
      } 
    }
    collectedItems.value = newList
  }
  
/*   if(valuesCollectedItems!='') {
    selectedItems = collectedItems.value.split(',')
    alreadySelected = selectedItems.findIndex(item => item == itemId)
  }

  if(alreadySelected >= 0) {
    const filteredItems = selectedItems.filter(item => {
      const itemIsDifferent = item != itemId
      return itemIsDifferent
    })
    selectedItems = filteredItems
  } else {
    selectedItems.push(itemId)
  }

  collectedItems.value = selectedItems.join(',') */
}

function initial() {
  populateUFs()

  document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)  

  const itemsToCollect = document.querySelectorAll(".items-grid li")

  for(const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
  }
}

initial();

