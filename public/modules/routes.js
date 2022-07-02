
//router instance
function Router (name, routes) {
    return {
        name,
        routes
    }
};

//create the route instance - an object with our rout names and the values we'll render to the url path
let routerInstance = Router('routerInstance', [{
        path: "/",
        name: "Root"
    },
    {
        path: '/about',
        name: "About"
    },
    {
        path: '/contact',
        name: "Contact"
    }
])

export {routerInstance};