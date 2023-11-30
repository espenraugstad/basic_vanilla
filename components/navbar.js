class NavBar extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        console.log("Connected");
        /* Style */
        const styleSheet = new CSSStyleSheet();
        styleSheet.replaceSync(`
        nav{
            width: 100%
        } 
        ul {
            width: 100%; 
            list-style: none; 
            display: flex; 
            justify-content: flex-end;
        } 
        li {
            margin: 0 1rem;
            font-size: 1.10rem;
        }
        a {
            text-decoration: none;
            color: black;
        }
        a:hover{
            text-decoration: underline;
        }
        
        `);

        /* Shadow DOM */
        const shadowRoot = this.attachShadow({mode: "open"});
        shadowRoot.adoptedStyleSheets = [styleSheet];
        const nav = document.createElement("nav");
        nav.setAttribute("part", "nav-bar");
        nav.innerHTML = `
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="examples.html">Examples</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
        `
        shadowRoot.appendChild(nav);

    }
}

customElements.define("nav-bar", NavBar);