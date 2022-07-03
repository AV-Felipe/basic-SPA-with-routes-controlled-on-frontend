import { root, aboutPage, contactPage, homePage } from '../global-variables/interface-elements.js';
import { globalStateVariables } from '../global-variables/state-variables.js';

function renderCurrentPage(pageId) {
    const newPageElement = document.getElementById(pageId);
    const currentPageElement = document.getElementById(globalStateVariables.currentPageId);

    // changes the global value of the current page id
    globalStateVariables.setPageId(pageId);

    // changes the visibility of the current page
    currentPageElement.style.display = 'none';
    newPageElement.style.display = 'block';


}

export { renderCurrentPage };