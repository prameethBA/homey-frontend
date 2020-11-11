export default class Router {
    constructor() {
        // this.preRoutes = [
        //     '/', '/login', '/signup', '/reset-password', '/add-new-property', '/profile', '/settings'
        // ]
        this.routes = []
    }

    get(uri, callback) {

        // ensure that the parameters are not empty
        if (!uri || !callback) throw new Error('uri or callback must be given')

        // ensure that the parameters have the correct types
        if (typeof uri !== 'string')
            throw new TypeError('typeof uri must be a string')
        if (typeof callback !== 'function')
            throw new TypeError('typeof callback must be a function')

        // throw an error if the route uri already exists to avoid confilicting routes
        // this.routes.forEach(route => {
        //     if (route.uri === uri)
        //         throw new Error(`the uri ${route.uri} already exists`)
        // })

        // Step 5 - add route to the array of routes
        const route = {
            uri, // in javascript, this is the same as uri: uri, callback: callback, avoids repition
            callback
        }
        this.routes.push(route)

        // If route defined then no need to compare all of the routes; imediately call the init() method
        // if (this.preRoutes.includes(uri)) {
        //     this.init()
        //         // this.routes = []
        // }
    }

    getRoute() { }

    init() {
        this.routerFound = false
        this.routes.some(route => {
            let regEx = new RegExp(`^${route.uri}$`) // i'll explain this conversion to regular expression below
            let regEx2 = new RegExp(`^${route.uri}\/\w*`) // i'll explain this conversion to regular expression below
            let path = window.location.pathname

            if (path.match(regEx)) {
                // our route logic is true, return the corresponding callback
                let req = { path } // i'll also explain this code below
                this.routerFound = true
                return route.callback.call(this, req)
            } else if(path.match(regEx2)) {
                let req = { path } // i'll also explain this code below
                this.routerFound = true
                return route.callback.call(this, req)
            } 
            else this.routerFound =false
        })
        if(!this.routerFound) dispatchEvent(new CustomEvent("customError", { detail: { err: '404' } }))
    }
}
