
// let currentPageId = 'home';
const globalStateVariables = {

    currentPageId: "home",

    setPageId: function (newPageId) {
        this.currentPageId = newPageId;
    }
}

export { globalStateVariables };