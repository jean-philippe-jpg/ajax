import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "Pages/home.html", []),
    new Route("/galerie", "La Galerie", "Pages/galerie.html", [], "js/galerie.js"),
    new Route("/signin", "Se connecter", "Pages/auth/signin.html", ["disconnected"], "js/auth/signin.js"),
    new Route("/signup", "Inscription", "Pages/auth/signup.html", ["disconnected"] ,"js/auth/signup.js"),
    new Route("/account", "Mon compte", "Pages/auth/account.html", ["client", "admin"]),
    new Route("/editPassword", "Nouveau mot de passe", "Pages/auth/editPassword.html", ["client", "admin"]),
    new Route("/reservation", "Reservation", "Pages/reservations/reservations.html", ["client"]),
    new Route("/reserver", "Reserver", "Pages/reservations/reserver.html",  ["client"]),
    
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";