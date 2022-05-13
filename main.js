class NavBar extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <nav class="nav">
            <ul class="nav-list">
            <li class="nav-item-logo">
                <img src="./images/LeoLoga.png" alt="">
            </li>
            <li class="nav-item">
                <a href="./index.html" class="nav-link">Hem</a>
            </li>
            <li class="nav-item">
                <a href="./doulapaket.html" class="nav-link">Doulapaketet</a>
            </li>
            <li class="nav-item">
                <a href="./utbildning.html" class="nav-link">Mina utbildningar</a>
            </li>
            <li class="nav-item">
                <a href="./om.html" class="nav-link">Om</a>
            </li>
            </ul>
        </nav>
        `
    }
}

customElements.define("my-navbar", NavBar);


class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer>
            <div class="footer-info flex">
            <div>
                <h3>Tel: 20202020</h3>
                <h3>Mail: leontineMail</h3>
            </div>
            <div class="footer-img">
                <img src="./images/LeoLoga.png" alt="">
            </div>
            </div>
            <p class="text-center">© Doulan Leontine</p>
        </footer>
        `
    }
}

customElements.define("my-footer", MyFooter);