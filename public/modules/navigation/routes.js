
let routerInstance = generateRouter('routerInstance');

// generates an router instance based on values from custom attribute 'router-link'
function generateRouter(routerName) {

    const navItems = Array.from(document.querySelectorAll('[router-link]'));
    const anchorsList = navItems.map(element => element.getAttribute('router-link')); //MAP: iterates over all array elements RETURNING a value for each iteration (the final result will be a new array), cannot be exited with a break statement

    const routesArray = generateRoutes(anchorsList);

    return { name: routerName, routes: routesArray };


};

// generates array of route objects for generateRouter consumption
function generateRoutes(routesStringArray) {
    const plainRoutes = routesStringArray;

    const returnValue = [];

    plainRoutes.forEach(element => {
        if (element !== '/') {
            returnValue.push({ path: element, name: element.split('/')[1] })
        } else {
            returnValue.push({ path: element, name: 'home' })
        }
    }); // FOREACH: execute given steps for every element in an array, does NOT RETURN any value, cannot be exited with a break statement

    return returnValue;
};

export { routerInstance };