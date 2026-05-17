 
function loadVehicles() {

    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

              if (this.readyState == 4 && this.status == 200) {
        const data = JSON.parse(this.response);
        document.getElementById("cars").innerHTML = '<option value="'+data.marque+'">'+data.marque+'</option>';
        
      }
    };
        xhttp.open("GET", "index.json", true);
        xhttp.send();
}

function loadModels() {

    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

              if (this.readyState == 4 && this.status == 200) {
        const data = JSON.parse(this.response);
        if (data.marque == "Peugeot" ) {

            document.getElementById("toto").innerHTML = '<option value="'+data.model+'">'+data.model+'</option>';
        }

      }
    };
        xhttp.open("GET", "index.json", true);
        xhttp.send();
}

