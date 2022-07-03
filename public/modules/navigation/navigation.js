// This module exports functions 
import { routerInstance } from './routes.js';
import { renderCurrentPage } from './renderer.js';
import { root } from '../global-variables/interface-elements.js';

function navigateForward(event) {

    // pick the value from our custom attribute, for us to use as a reference for filtering our router instance array
    let route = event.target.attributes[0].value;

    // compare the custom attribute from the button (router-link) to the name values from our router-instance
    let routeInfo = routerInstance.routes.filter(r => r.path === route)[0] // generates an array with all elements that pass the test (here will only have one element)

    if (!routeInfo) {
        window.history.pushState({}, '', 'error')
        root.innerHTML = `This route is not Defined`
    } else {
        window.history.pushState({ name: routeInfo.name }, '', routeInfo.path)
        renderCurrentPage(routeInfo.name);
    }

    // custom event that signals the page change (but is not being use for our logic, we are using the popstate event)
    const pageChange = new CustomEvent('page-change', {
        detail: routeInfo.path
    })
    // dispatches the event signal to the refereed listener
    root.dispatchEvent(pageChange);
}

function navigateBackward(event) {

    // get current path from the tab url (string)
    const newPath = window.location.pathname;

    // get all available routes from our router (in an array)
    const routes = routerInstance.routes;

    // compares each available route path to the new path ending with the route object that has a equal path
    let currentPage = routes.filter(route => route.path === newPath)[0];

    // render the page for the new route
    renderCurrentPage(currentPage.name);

    // custom event that signals the page change (but is not being use for our logic)
    const pageChange = new CustomEvent('page-change', {
        detail: currentPage.path
    })
    // dispatches the event signal to the refereed listener
    root.dispatchEvent(pageChange);

}

export { navigateForward, navigateBackward };