// GRATITUDE.html
document.getElementById("submit-gratitude").addEventListener("click", async () => {
    const date = document.getElementById("gratitude-date").value;
    const response = document.getElementById("gratitude-response").value;
    const timestamp = Date.now(); // Add a timestamp

    if (!date || !response) {
        alert("Please select a date and write your response.");
        return;
    }

    // Prepare the data to send
    const gratitudeData = {
        date, 
        timestamp, 
        response,
    };

    try {
        // Send data to the API
        const apiEndpoint = "https://8e8xac7l1a.execute-api.us-east-2.amazonaws.com/journal"; 
        const fetchResponse = await fetch(apiEndpoint, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(gratitudeData),
        });

        if (fetchResponse.ok) {
            alert("Gratitude response submitted successfully!");
            document.getElementById("gratitude-date").value = "";
            document.getElementById("gratitude-response").value = "";
        } else {
            throw new Error("Failed to submit gratitude response.");
        }
    } catch (error) {
        console.error("Error submitting gratitude response:", error);
        alert("An error occurred while submitting your gratitude response.");
    }
});
