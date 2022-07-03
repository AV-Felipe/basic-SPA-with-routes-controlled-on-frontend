import { navigateForward, navigateBackward } from './modules/navigation/index.js';
import { root } from './modules/global-variables/interface-elements.js';

/* EVENT LISTENERS */
window.addEventListener('popstate', navigateBackward)

// get links defined on page
let definedRoutes = Array.from(document.querySelectorAll('[router-link]'));
// add event listener to each button
definedRoutes.forEach(route => {
    route.addEventListener('click', navigateForward)
})


// receives custom event from navigation and log 
root.addEventListener('page-change', (e) => console.log(e.detail));


