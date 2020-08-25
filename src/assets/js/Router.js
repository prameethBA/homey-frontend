const Router = (name, routes) => {
    return { name: name, routes: routes }
}

const routerInit = Router('routerInit', [
    { path: '/', name: 'home' },
    { path: '/login', name: 'login' },
    { path: '/signup', name: 'signup' },
    { path: '/reset-password', name: 'reset-password' }
])

if (window.location.pathname === '/login') {
    dispatchEvent(new Event('login-form'))
}
