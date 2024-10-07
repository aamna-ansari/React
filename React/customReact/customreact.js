// grip the root by DOM 

let mainContainer = document.querySelector("#root")


// customRender function


// Render 'a' tag
let reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Clicked me to visit Google 😉'
}

customRender(reactElement, mainContainer)