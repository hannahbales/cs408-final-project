document.addEventListener("DOMContentLoaded", () => {
    const recentEntryContainer = document.getElementById("recent-entry-container");

    // Fetch the most recent journal entry from API
    const fetchMostRecentEntry = async () => {
        try {
            const response = await fetch("https://8e8xac7l1a.execute-api.us-east-2.amazonaws.com/journal"); 

            if (response.ok) {
                const entries = await response.json();

                // Ensure entries are sorted by date (latest entry first)
                const sortedEntries = entries.sort((a, b) => new Date(b.date) - new Date(a.date));

                // Get the most recent entry
                const recentEntry = sortedEntries[0];

                if (recentEntry) {
                    recentEntryContainer.innerHTML = `
                        <p><strong>Date:</strong> ${formatDate(recentEntry.date)}</p>
                        <p><strong>Journal:</strong> ${recentEntry.entry}</p>
                        <a href="journal.html" class="button">MAKE AN ENTRY</a>
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

    // Format the date to be more user-friendly
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString(); 
    };

    // Initialize the recent entry section
    fetchMostRecentEntry();
});
