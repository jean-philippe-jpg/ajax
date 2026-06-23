
const galerie = document.getElementById('allImages');


let titre = '<img src=x  onerror="window.location.replace( \'https://google.com\')" />';

let image = '../images/chef cuisto.jpg';
let monImage = getImage(titre,  image)

galerie.innerHTML = monImage;


function getImage(titre, image){

    titre = sanitizeHtml(titre);
    image = sanitizeHtml(image);

    return ` <div class="col p-3">
        <div class="image-card text-white">
        <img src="${image}" alt="image"/>
        <p class=" titre-image">${titre}</p>
        <div class="action-images-buttons" data-show="admin">
             <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#editPhotoModal"><i class="bi bi-pen"></i></button>
            <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#deletePhotoModal"><i class="bi bi-trash"></i></button>
        </div>
    </div>
   </div>`;

}