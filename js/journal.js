// JOURNAL.html

document.getElementById("submit-journal").addEventListener("click", async () => {
    const date = document.getElementById("journal-date").value;
    const entry = document.getElementById("journal-text").value;
    const photoInput = document.getElementById("journal-photo");
    const timestamp = Date.now();
    const type = document.getElementById("entry-type");
  
    if (!date || !entry) {
      alert("Please select a date and provide a journal entry.");
      console.warn("Validation failed: Missing date or text"); 
      return;
    }
  
    const photos = [];
    if (photoInput.files.length > 0) {
      for (const file of photoInput.files) {
        photos.push({
          name: file.name,
          type: file.type,
          size: file.size,
        });
      }
    } else {
      console.log("No photos uploaded");
    }
  
    const journalData = {
      date,
      entry,
      photos,
      timestamp,
      type: "Journal Entry",
    };
  
    try {
        // Send data to the API
        const apiEndpoint = "https://8e8xac7l1a.execute-api.us-east-2.amazonaws.com/journal";
        const fetchResponse = await fetch(apiEndpoint, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(journalData),
        });
  
      if (fetchResponse.ok) {
        alert("Journal entry submitted successfully!");
        console.log("Journal entry submitted:", journalData); // Log successful submission
        document.getElementById("journal-date").value = "";
        document.getElementById("journal-text").value = "";
        photoInput.value = "";
      } else {
        console.error("API call failed:", response); // Log error response
        throw new Error("Failed to submit journal entry.");
      }
    } catch (error) {
      console.error("Error occurred while submitting journal entry:", error);
      alert("An error occurred while submitting your journal entry.");
    }
  });
  