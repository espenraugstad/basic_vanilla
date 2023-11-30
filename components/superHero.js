class SuperHero extends HTMLElement {
    constructor() {
        super();
        let template = document.getElementById("hero");
        let templateContent = template.content;
        const shadowRoot = this.attachShadow({mode: "open"});
        shadowRoot.appendChild(templateContent.cloneNode(true));
    }
        
}

customElements.define("super-hero", SuperHero);