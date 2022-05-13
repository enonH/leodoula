
// // fetch("./nav.html")
// //     .then(res => res.text())
// //     .then(text => {
// //         let oldelement = document.querySelector("script#nav-script");
// //         let newelement = document.createElement("div");
// //         newelement.innerHTML = text;
// //         oldelement.parentNode.replaceChild(newelement, oldelement);
// //     })

// let nav = document.getElementById("header");
// let result = "";

// fetch("./nav.html")
//     .then(res => res.text())
//     .then(text => {
        
//         result += `
//         <nav class="nav">
//             <ul class="nav-list">
//             <li class="nav-item">
//                 <a href="./index.html" class="nav-link">Hem</a>
//             </li>
//             <li class="nav-item">
//                 <a href="./doulapaket.html" class="nav-link">Doulapaketet</a>
//             </li>
//             <li class="nav-item">
//                 <a href="#education" class="nav-link">Mina utbildningar</a>
//             </li>
//             <li class="nav-item">
//                 <a href="./om.html" class="nav-link">Om</a>
//             </li>
//             </ul>
//         </nav>
//         `
//         nav.innerHTML = result;
//     })