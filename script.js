function showTab(tabId) {
    // Hide all tab content
    var tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(function(content) {
        content.style.display = 'none';
    });

    // Show the selected tab content
    var selectedTab = document.getElementById(tabId);
    selectedTab.style.display = 'block';
}

// Show the first tab by default
document.addEventListener('DOMContentLoaded', function() {
    showTab('about-me');
});

// Toggle the menu visibility and expand the navbar
function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    var navbar = document.querySelector('.navbar');
    var content = document.querySelector('.content');
    
    // Toggle the visibility of links
    navLinks.classList.toggle('show');
    
    // Expand or collapse the navbar
    navbar.classList.toggle('expanded');
    
    // Adjust content margin
    content.classList.toggle('expanded');
}
function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Create a new gallery item with the uploaded image
            const newGalleryItem = document.createElement('div');
            newGalleryItem.classList.add('gallery-item');
            newGalleryItem.innerHTML = `<img src="${e.target.result}" alt="New Gallery Image">`;

            // Append the new item to the gallery
            document.querySelector('.gallery').appendChild(newGalleryItem);
        };
        reader.readAsDataURL(file); // Convert the image to a base64 URL
    }
}


/*var swiper = new Swiper(".gallery-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
   
    breakpoints:{
        280:{
            slidesPerView: 1,
            spaceBetween: 5,
        },
        320 :{
            slidesPerView: 2,
            spaceBetween: 10,
        },
        510:{
            slidesPerView: 2,
            spaceBetween: 5,
        },
        758:{
            slidesPerView: 3,
            spaceBetween: 10,
        },
        900:{
            slidesPerView: 4,
            spaceBetween: -600,
        }
        
    }
    
});*/

document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1, // Number of slides visible at once (adjust this as needed)
        spaceBetween: 20, // Space between slides
        loop: true, // Optional: Enable loop mode
        pagination: {
            el: '.swiper-pagination',
            clickable: true, // Allow clicking on pagination bullets
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
});
