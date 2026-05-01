const site = "https://dog.ceo/api/breed";

let breedInput = document.getElementById("breedInput");
let loadBtn = document.getElementById("loadBtn");
let result = document.getElementById("result");
let errorPane = document.getElementById("error");
let errorMessage = document.getElementById("error-message");

loadBtn.addEventListener("click", () => {

    let breed = breedInput.value.toLowerCase().trim();

    let url = breed 
        ? `${site}/${breed}/images/random`
        : "https://dog.ceo/api/breeds/image/random";

    fetch(url)
        .then(async response => {

            let data = await response.json();

            if (data.status === "success") {
                errorPane.hidden = true;

                result.innerHTML = `
                    <h3>${breed ? breed : "Random Dog"}</h3>
                    <img src="${data.message}" width="300">
                `;
            } else {
                throw new Error("Breed not found");
            }

        })
        .catch(reason => {

            errorPane.hidden = false;
            errorMessage.innerHTML = "Invalid breed or failed request";

            result.innerHTML = "";
            console.error(reason);
        });

});