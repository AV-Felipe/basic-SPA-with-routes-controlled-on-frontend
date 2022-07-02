import {routerInstance} from './modules/routes.js';

// get root div for rendering
let root = document.getElementById('app');


// get current path
// let currentPath = window.location.pathname;

// if (currentPath === '/') {
//     root.innerHTML = 'You are on Home page'
// } else {
//     // check if route exist in the router instance 
//     let route = routerInstance.routes.filter(r => r.path === currentPath)[0];
//     if (route) {
//         root.innerHTML = `You are on the ${route.name} path`
//     } else {
//         root.innerHTML = `This route is not defined`
//     }
// }

// get links defined on page

//console. log(document.querySelectorAll('[router-link]')) // returns a node list
let definedRoutes = Array.from(document.querySelectorAll('[router-link]'));
console.log(definedRoutes) //return an array with the elements

// add event listener to each button
definedRoutes.forEach(route => {
    route.addEventListener('click', navigate, false)
})

function navigate(e) {

    // pick the value from our custom attribute, for us to use as a reference for filtering our router instance array
    let route = e.target.attributes[0].value;

    // compare the custom attribute from the button (router-link) to the name values from our router-instance
    let routeInfo = routerInstance.routes.filter(r => r.path === route)[0] // generates an array with all elements that pass the test (here will only have one element)

    if (!routeInfo) {
        window.history.pushState({}, '', 'error')
        root.innerHTML = `This route is not Defined`
    } else {
        window.history.pushState({}, '', routeInfo.path)
        root.innerHTML = `You are on the ${routeInfo.name} path`
    }
}
