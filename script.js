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