const burger = document.querySelector('.burger');
    const sideMenu = document.querySelector('.side-menu');
    const overlay = document.querySelector('.overlay');

    burger.addEventListener('click', () => {
        sideMenu.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', () => {
        sideMenu.classList.remove('active');
        overlay.classList.remove('active');
    });



document.querySelectorAll('.wine-card').forEach(card => {
    card.addEventListener('click', () => {
        // Open modal with wine details
    });
});

// Script to dynamically update the wine info section
document.addEventListener("DOMContentLoaded", function () {
    const wineInfoDiv = document.getElementById("wine-details");

    // Sample data for each wine (replace this with actual data)
    const wineData = {
        wine1: {
            title: "Wine 1",
            description: "This is the description and technical sheet of Wine 1.",
            image: "https://via.placeholder.com/300x200" // Placeholder for wine image
        },
        wine2: {
            title: "Wine 2",
            description: "This is the description and technical sheet of Wine 2.",
            image: "https://via.placeholder.com/300x200"
        },
        wine3: {
            title: "Wine 3",
            description: "This is the description and technical sheet of Wine 3.",
            image: "https://via.placeholder.com/300x200"
        }
        // Add more wines here...
    };

    // Function to update the wine info div
    function updateWineInfo(wineKey) {
        const wine = wineData[wineKey];
        if (wine) {
            wineInfoDiv.innerHTML = `
                <h3>${wine.title}</h3>
                <img src="${wine.image}" alt="${wine.title}" style="width:300px; height:200px; margin-bottom:20px;">
                <p>${wine.description}</p>
            `;
        }
    }

    // Add click event listeners to all 'More Info' buttons
    const cards = document.querySelectorAll(".wine-card-button");
    cards.forEach(button => {
        button.addEventListener("click", function () {
            const wineKey = this.closest(".wine-card").getAttribute("data-wine");
            updateWineInfo(wineKey);
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const wineCardsContainer = document.querySelector(".wine-cards-container");
    const leftArrow = document.getElementById("left-arrow");
    const rightArrow = document.getElementById("right-arrow");
    const wineInfoDiv = document.getElementById("wine-info");
    const wineDetails = document.getElementById("wine-details");

    leftArrow.addEventListener("click", () => {
        wineCardsContainer.scrollBy({
            top: 0,
            left: -400,
            behavior: "smooth",
        });
    });

    rightArrow.addEventListener("click", () => {
        wineCardsContainer.scrollBy({
            top: 0,
            left: 400,
            behavior: "smooth",
        });
    });

    // Event listener for each wine card button (More Info)
    document.querySelectorAll('.card-button').forEach(button => {
        button.addEventListener('click', function () {
            const wineTitle = this.closest('.card').querySelector('.text-title').innerText;

            // Update wine info section with details (you can replace this with actual data)
            wineDetails.innerHTML = `
                <h3>${wineTitle}</h3>
                <p>Here is the technical sheet and details for ${wineTitle}.</p>
                <img src="https://via.placeholder.com/150" alt="${wineTitle} Image" />
            `;

            // Smooth scroll to wine info div
            wineInfoDiv.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        });
    });
});
