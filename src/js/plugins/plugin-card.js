export let config = {
    selector: ".card"
}

export function init(cards_input){
    cards_input.forEach((card) => {
        let card_button = document.createElement("button")
        card_button.classList.add("button")
        card_button.innerHTML = "Link to Page"

        card.append(card_button)

        card_button.addEventListener("click", (e) => {
            console.log(card)
        })
    })
}

init(document.querySelectorAll(config.selector))