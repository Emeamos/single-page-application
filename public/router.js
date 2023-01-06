const routes = [
    {
        path: '/',
        data: `
        <p> Welcome to Star War Page</p>
        `
    },
    {
        path: '/about',
        data: `
            <p> This page contains all the star war data of people </p>
            `
    }
];
const root = document.getElementById('root');

const router = (event) => {
    event.preventDefault();
    history.pushState({}, 'newUrl', event.target.href);
    let route = routes.find(route => route.path == window.location.pathname);
    root.innerHTML= route.data;
    navLink();
}
window.addEventListener('popstate', function (){
    let data = routes.find(route => route.path == window.location.pathname);
    root.innerHTML = data.data;
})

window.addEventListener('DOMContentLoaded', function(){
    let route = routes.find(route => route.path == window.location.pathname);
    root.innerHTML = route.data;
    navLink();
})

const links = document.querySelectorAll('nav ul li a');

const navLink = () => {
    links.forEach(link => {
        if (link.ref === window.location.href){
            link.classList.add ('active');
        } else {
            link.classList.remove('active');
        }
        
            
    })
}