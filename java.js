const btn = document.getElementById("btn");
const loading = document.getElementById("loading");
const card = document.getElementById("card");
const activity = document.getElementById("activity");
const type = document.getElementById("type");
const participants = document.getElementById("participants");

// Fetch on page load
fetchActivity();

btn.addEventListener("click", fetchActivity);

function fetchActivity() {
    loading.textContent = "Loading...";
    card.style.display = "none";

    fetch("https://jsonplaceholder.typicode.com/comments")
        .then((res) => {
            return res.json();    // must return json()
        })
        .then((data) => {
            console.log(data);

            activity.textContent = data.activity;
            type.textContent = data.type;
            participants.textContent = data.participants;

            loading.textContent = "";
            card.style.display = "block";
        })
        .catch((error) => {
            loading.textContent = "❌ Something went wrong. Try again.";
            console.error(error);
        });
}


