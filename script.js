// HOME BAKED - ENQUIRY FORM VALIDATION

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {

enquiryForm.addEventListener("submit", function(event) {

    // Stop the form from submitting immediately
    
    event.preventDefault();

    // Get the information entered by the customer
    
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const enquiryType = document.getElementById("enquiryType").value;
    const message = document.getElementById("message").value.trim();

    // Find the feedback paragraph

    const feedback = document.getElementById("enquiryFeedback");

    // Check whether required fields are completed
    
    if (!fullName || !email || !enquiryType || !message) {

        feedback.textContent = "Please complete all required fields.";
        return;
    }

    // Check whether the email address is valid
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        feedback.textContent = "Please enter a valid email address.";
        return;
    }

    // Prepare the enquiry details 
    
    const subject = encodeURIComponent("Home Baked - Customer Enquiry");

    const body = encodeURIComponent(
        "Customer Name: " + fullName +
        "\nEmail Address: " + email +
        "\nPhone Number: " + phone +
        "\nEnquiry Type: " + enquiryType +
        "\n\nEnquiry Details:\n" + message
    );

    // Display confirmation before opening the email application
    
    feedback.textContent = "Your enquiry has been prepared. Please send it using your email application.";

    // Open the customer's email application
    
    window.location.href =
        "mailto:homebaked.durban@gmail.com?subject=" + subject + "&body=" + body;

}
)
;


}

//               CONTACT FORM VALIDATION

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        // Stop the form from submitting immediately
        
        event.preventDefault();

        // Collect customer information
        
        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const messageType = document.getElementById("messageType").value;
        const message = document.getElementById("contactMessage").value.trim();

        // Find the feedback paragraph
        
        const feedback = document.getElementById("contactFeedback");

        // Clear previous feedback
        
        feedback.textContent = "";

        // Check required fields
        
        if (!name || !email || !messageType || !message) {

            feedback.textContent = "Please complete all required fields.";
            return;
        }

        // Validate email address
        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            feedback.textContent = "Please enter a valid email address.";
            return;
        }

        // Prepare email subject
        
        const subject = encodeURIComponent("Home Baked - " + messageType);

        // Prepare email body
        
        const body = encodeURIComponent(
            "Customer Name: " + name +
            "\nEmail Address: " + email +
            "\nMessage Type: " + messageType +
            "\n\nCustomer Message:\n" + message
        );

        // Display confirmation
        
        feedback.textContent =
            "Your message has been prepared. Please send it using your email application.";

        // Open the customer's email application
        
        window.location.href =
            "mailto:homebaked.durban@gmail.com?subject=" +
            subject + "&body=" + body;

}
)
;

}

//                     PRODUCT SEARCH AND FILTER

const productSearch = document.getElementById("productSearch");
const categoryFilter = document.getElementById("categoryFilter");

if (productSearch && categoryFilter) {

    // Find all product sections
    
    const productSections = document.querySelectorAll(".product-section");

    const productFeedback = document.getElementById("productFeedback");

    // Search and filter products
    
    function filterProducts() {

        const searchValue = productSearch.value.toLowerCase().trim();
        const selectedCategory = categoryFilter.value;

        let visibleProducts = 0;

        productSections.forEach(function(section) {

            const heading = section.querySelector("h2");

            const category = heading.textContent.toLowerCase();

            const products = section.querySelectorAll(".product-card");

            let visibleInSection = 0;

            products.forEach(function(product) {

                const productName = product.querySelector("h3").textContent.toLowerCase();

                const productDescription = product.querySelector("p").textContent.toLowerCase();

                const matchesSearch =
                    productName.includes(searchValue) ||
                    productDescription.includes(searchValue);

                const matchesCategory =
                    selectedCategory === "all" ||
                    category.includes(selectedCategory);

                if (matchesSearch && matchesCategory) {

                    product.style.display = "";
                    visibleInSection++;
                    visibleProducts++;

                } else {

                    product.style.display = "none";

                }

            });

            // Hide categories without matching products
            
            section.style.display = visibleInSection > 0 ? "" : "none";

        });

        // Display search results
        
        if (visibleProducts === 0) {

            productFeedback.textContent = "Sorry, no matching products were found.";

        } else {

            productFeedback.textContent =
                visibleProducts + " product(s) found.";

        }

    }

    // Search when the customer types
    
    productSearch.addEventListener("input", filterProducts);

    // Filter when the customer selects a category
    
    categoryFilter.addEventListener("change", filterProducts);

}

//                          IMAGE GALLERY LIGHTBOX

const galleryImages = document.querySelectorAll(".product-card img");

if (galleryImages.length > 0) {

    // Create the lightbox container
    
    const lightbox = document.createElement("div");

    lightbox.id = "imageLightbox";
    lightbox.className = "lightbox";

    lightbox.innerHTML = `
        <button class="lightbox-close" aria-label="Close image">&times;</button>
        <img class="lightbox-image" src="" alt="">
        <p class="lightbox-caption"></p>
    `;

    document.body.appendChild(lightbox);

    const lightboxImage = lightbox.querySelector(".lightbox-image");
    const lightboxCaption = lightbox.querySelector(".lightbox-caption");
    const closeButton = lightbox.querySelector(".lightbox-close");

    // Open the lightbox when an image is clicked
    
    galleryImages.forEach(function(image) {

        image.style.cursor = "pointer";

        image.addEventListener("click", function() {

            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;

            lightboxCaption.textContent = image.alt;

            lightbox.classList.add("active");

    }
    )
    ;

    }
    )
    ;

    // Close the lightbox
    
    function closeLightbox() {

        lightbox.classList.remove("active");

        lightboxImage.src = "";

    }

    closeButton.addEventListener("click", closeLightbox);

    // Close when clicking outside the image
    
    lightbox.addEventListener("click", function(event) {

        if (event.target === lightbox) {

            closeLightbox();

        }

    });

    // Close when Escape is pressed
    
    document.addEventListener("keydown", function(event) {

        if (event.key === "Escape") {

            closeLightbox();

        }

}
)
;

}

//                          FAQ ACCORDION

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function(question) {
    question.addEventListener("click", function() {

        const faqItem = question.parentElement;

        faqItem.classList.toggle("active");

    }
    )
    ;
    
}
)
;