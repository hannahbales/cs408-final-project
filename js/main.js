// INDEX.html
document.addEventListener("DOMContentLoaded", () => {
    const recentEntryContainer = document.getElementById("recent-entry-container");
  
    // Fetch the most recent journal entry from the API
    const fetchMostRecentEntry = async () => {
      try {
        const response = await fetch("https://AWS-placeholder"); // UPDATE once aws done
  
        if (response.ok) {
          const entry = await response.json();
          if (entry && entry.date && entry.content) {
            recentEntryContainer.innerHTML = `
              <p><strong>Date:</strong> ${entry.date}</p>
              <p>${entry.content}</p>
            `;
          } else {
            showNoEntriesMessage();
          }
        } else {
          throw new Error("Failed to fetch the most recent entry");
        }
      } catch (error) {
        console.error("Error fetching the most recent entry:", error);
        showNoEntriesMessage();
      }
    };
  
    // Display a message if no entries exist
    const showNoEntriesMessage = () => {
      recentEntryContainer.innerHTML = `
        <p>You have not made any entries yet.</p>
        <a href="journal.html" class="button">MAKE AN ENTRY</a>
      `;
    };
  
    // Initialize the recent entry section
    fetchMostRecentEntry();
});