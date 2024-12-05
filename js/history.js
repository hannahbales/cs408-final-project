// HISTORY.html

// Select necessary elements
const entryTypeFilter = document.getElementById("entry-type");
const dateRangeFilter = document.getElementById("date-range");
const customDateRange = document.getElementById("custom-date-range");
const startDateInput = document.getElementById("start-date");
const endDateInput = document.getElementById("end-date");
const applyFiltersButton = document.getElementById("apply-filters");
const historyEntries = document.getElementById("history-entries");

// Show/hide custom date range inputs based on filter selection
dateRangeFilter.addEventListener("change", () => {
  if (dateRangeFilter.value === "custom") {
    customDateRange.style.display = "block";
  } else {
    customDateRange.style.display = "none";
  }
});

// Fetch all history entries from the API
async function fetchEntries() {
  try {
    const response = await fetch("https://8e8xac7l1a.execute-api.us-east-2.amazonaws.com/journal");
    if (!response.ok) {
      throw new Error(`Error fetching entries: ${response.statusText}`);
    }
    const entries = await response.json();
    return entries;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Apply filters to the entries
function applyFilters(entries) {
  const type = entryTypeFilter.value;
  const dateRange = dateRangeFilter.value;
  const startDate = startDateInput.value ? new Date(startDateInput.value) : null;
  const endDate = endDateInput.value ? new Date(endDateInput.value) : null;

  return entries.filter((entry) => {
    let matchesType = true;
    let matchesDate = true;

    // Filter by type
    if (type !== "all") {
      matchesType = entry.type === type;
    }

    // Filter by date
    if (dateRange === "today") {
      const today = new Date().toISOString().split("T")[0];
      matchesDate = entry.date === today;
    } else if (dateRange === "last-7-days") {
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      matchesDate = new Date(entry.date) >= sevenDaysAgo;
    } else if (dateRange === "this-month") {
      const now = new Date();
      const firstOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      matchesDate = new Date(entry.date) >= firstOfMonth;
    } else if (dateRange === "custom" && startDate && endDate) {
      const entryDate = new Date(entry.date);
      matchesDate = entryDate >= startDate && entryDate <= endDate;
    }

    return matchesType && matchesDate;
  });
}

// Render entries into the DOM
function renderEntries(entries) {
  historyEntries.innerHTML = ""; // Clear previous entries

  if (entries.length === 0) {
    historyEntries.innerHTML = "<p>No entries match your filters.</p>";
    return;
  }

  entries.forEach((entry) => {
    const entryElement = document.createElement("div");
    entryElement.classList.add("history-entry");

    entryElement.innerHTML = `
      <h2>${entry.date}</h2>  <!-- Apply formatDate function -->
      <p><strong>Type:</strong> ${entry.type || "Unknown"}</p>
      ${entry.mood ? `<p><strong>Mood:</strong> ${entry.mood}</p>` : ""}
      ${entry.entry ? `<p><strong>Entry:</strong> ${entry.entry}</p>` : ""}
      ${entry.response ? `<p><strong>Response:</strong> ${entry.response}</p>` : ""}
      ${entry.photos && entry.photos.length
        ? `<p><strong>Photos:</strong> ${entry.photos.join(", ")}</p>`
        : ""}
      <button class="delete-entry" data-timestamp="${entry.timestamp}">Delete</button>
    `;

    // Attach the delete button event listener to the entry
    entryElement.querySelector('.delete-entry').addEventListener('click', () => {
        const timestamp = entryElement.querySelector('.delete-entry').getAttribute('data-timestamp');
        deleteEntry(entry.date, timestamp); // Pass the date and timestamp to deleteEntry
      });
  
    historyEntries.appendChild(entryElement);
  });
}

// Delete entry
async function deleteEntry(date, timestamp) {
  try {
    console.log(`Sending DELETE request for entry with timestamp: ${timestamp}`);

    const response = await fetch(`https://8e8xac7l1a.execute-api.us-east-2.amazonaws.com/journal/${date}/${timestamp}`, {
      method: 'DELETE',
    });

    console.log(`Response status: ${response.status}`);

    if (!response.ok) {
      throw new Error(`Error deleting entry: ${response.statusText}`);
    }

    // Re-fetch and render entries after deletion
    const allEntries = await fetchEntries();  // Re-fetch the latest entries
    const filteredEntries = applyFilters(allEntries);  // Apply current filters
    renderEntries(filteredEntries);  // Re-render the entries

    alert('Entry deleted successfully!');
  } catch (error) {
    console.error('Delete error:', error);
    alert('Failed to delete the entry');
  }
}

// Fetch and display entries when filters are applied
applyFiltersButton.addEventListener("click", async () => {
  const allEntries = await fetchEntries();
  const filteredEntries = applyFilters(allEntries);
  renderEntries(filteredEntries);
});

// Fetch and display all entries
(async () => {
  const allEntries = await fetchEntries();
  renderEntries(allEntries);
})();
