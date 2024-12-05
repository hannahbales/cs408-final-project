// MOOD.html
document.getElementById("submit-mood").addEventListener("click", async () => {
    const date = document.getElementById("mood-date").value; // Date input
    const mood = document.getElementById("mood").value; // Mood selector
    const notes = document.getElementById("mood-notes").value; // Additional notes
    const type = document.getElementById("entry-type");

    if (!date || !mood) {
        alert("Please select a date and mood."); // Validate inputs
        return;
    }

    const moodData = {
        date, 
        mood,
        notes: notes || "No additional notes provided.", // Default if notes are empty
        timestamp: Date.now(), // Current timestamp in milliseconds
        type: "Mood Log",
    };

    try {
        // Send data to the API
        const response = await fetch("https://8e8xac7l1a.execute-api.us-east-2.amazonaws.com/journal", { 
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(moodData) 
        });

        if (response.ok) {
            alert("Mood entry submitted successfully!");
            document.getElementById("mood-date").value = "";
            document.getElementById("mood").value = "";
            document.getElementById("mood-notes").value = "";
        } else {
            throw new Error("Failed to submit mood entry.");
        }
    } catch (error) {
        console.error("Error submitting mood entry:", error);
        alert("An error occurred while submitting your mood entry.");
    }
});