// Function to find the desired element based on data attributes
function logElementWithPattern() {
    let finalUrl = "";

    // Get all elements with data-class attribute
    const elementsWithClass = document.querySelectorAll("[data-class]");

    // Loop through the elements
    for (const element of elementsWithClass) {
        // Check if data-class attribute matches the pattern '23*'
        if (element.getAttribute("data-class").match(/^23/)) {
            // Find a child element with data-tag attribute matching '*93'
            const elementWithTag = element.querySelector('[data-tag$="93"]');

            if (elementWithTag) {
                // Find a child element with data-id attribute matching '*21*'
                const elementWithId = elementWithTag.querySelector('[data-id*="21"]');

                if (elementWithId) {
                    // Find a child element with with the 'i' tag
                    const iTagElement = elementWithId.querySelector("i");
                    finalUrl += iTagElement.getAttribute("value");
                }
            }
        }
    }

    console.log(finalUrl);
}

// Call the function
logElementWithPattern();
