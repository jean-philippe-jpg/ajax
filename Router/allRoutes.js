import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "Pages/home.html"),
    new Route("/galerie", "La Galerie", "Pages/galerie.html"),
    new Route("/signin", "Se connecter", "Pages/auth/signin.html"),
    new Route("/signup", "Inscription", "Pages/auth/signup.html"),
    new Route("/account", "Mon compte", "Pages/auth/account.html"),
    new Route("/editPassword", "Nouveau mot de passe", "Pages/auth/editPassword.html"),
    
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";