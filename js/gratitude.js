// GRATITUDE.html

// Array of quotes
const quotes = [
    "The best way to predict the future is to create it. – Peter Drucker",
    "Happiness is not something ready-made. It comes from your own actions. – Dalai Lama",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
    "Act as if what you do makes a difference. It does. – William James",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    "Believe you can and you’re halfway there. – Theodore Roosevelt",
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "It always seems impossible until it’s done. – Nelson Mandela",
    "Your time is limited, don’t waste it living someone else’s life. – Steve Jobs",
    "Do one thing every day that scares you. – Eleanor Roosevelt",
    "Dream big and dare to fail. – Norman Vaughan",
    "Success is walking from failure to failure with no loss of enthusiasm. – Winston Churchill",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    "If you want to lift yourself up, lift up someone else. – Booker T. Washington",
    "In the middle of every difficulty lies opportunity. – Albert Einstein",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
    "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. – Roy T. Bennett",
    "A journey of a thousand miles begins with a single step. – Lao Tzu",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Fall seven times and stand up eight. – Japanese Proverb",
    "The secret of getting ahead is getting started. – Mark Twain",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar",
    "Be yourself; everyone else is already taken. – Oscar Wilde",
    "Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman"
];

// Array of gratitude prompts
const prompts = [
    "What are three things you’re grateful for today?",
    "Who is someone in your life you deeply appreciate, and why?",
    "Describe a moment from today that brought you joy.",
    "What is a challenge you’ve overcome, and how has it shaped you?",
    "Name a place that makes you feel peaceful or happy.",
    "What is a skill or talent you’re proud to have?",
    "Write about a favorite memory that still makes you smile.",
    "What is something beautiful you noticed today?",
    "How has someone shown kindness to you recently?",
    "What do you appreciate about your home or living space?",
    "Write about a book, movie, or song that inspires you.",
    "What’s something simple that makes your daily life better?",
    "Reflect on a time when a stranger made your day better.",
    "What do you love most about your favorite season?",
    "Describe a meal or treat that you’re grateful for enjoying.",
    "What is a lesson you’ve learned recently that you’re thankful for?",
    "Who is someone you can always rely on, and why?",
    "What is a technology or tool you’re glad to have in your life?",
    "Write about a time you helped someone and felt good about it.",
    "What’s something you love about yourself?",
    "What’s a recent purchase or gift you’re grateful for?",
    "Think about a time you laughed until you cried—what happened?",
    "What are three things in nature that you’re thankful for?",
    "Write about a childhood memory you cherish.",
    "What’s an experience or trip you’re glad you had?",
    "Name an everyday convenience you’re grateful for.",
    "What’s something unexpected that turned out to be a blessing?",
    "How has a pet or animal brought joy to your life?",
    "What are you most thankful for about your current job or studies?",
    "Who do you want to thank today, and what would you say to them?"
];

// Function to calculate a dynamic index based on a date
function getDynamicIndexFromDate(date, length) {
    const selectedDate = new Date(date);
    const dayOfYear = Math.floor((selectedDate - new Date(selectedDate.getFullYear(), 0, 0)) / 86400000);
    return dayOfYear % length; // Cycle through the array
}

// Function to update the quote and prompt based on the selected date
function updateDynamicContent(selectedDate) {
    if (!selectedDate) {
        // Display default message if no date is selected
        document.getElementById("quote").innerText = "Please enter the date to see today's quote.";
        document.getElementById("gratitude-prompt").innerText = "Please enter the date to see today's gratitude prompt.";
        return;
    }

    const quoteIndex = getDynamicIndexFromDate(selectedDate, quotes.length);
    const promptIndex = getDynamicIndexFromDate(selectedDate, prompts.length);

    document.getElementById("quote").innerText = quotes[quoteIndex];
    document.getElementById("gratitude-prompt").innerText = prompts[promptIndex];
}

// Add an event listener to update the content when the date changes
document.getElementById("gratitude-date").addEventListener("change", (event) => {
    updateDynamicContent(event.target.value);
});

// Initialize with default text if no date is selected
document.addEventListener("DOMContentLoaded", () => {
    const initialDate = document.getElementById("gratitude-date").value;
    updateDynamicContent(initialDate);
});

// Submit button functionality remains unchanged
document.getElementById("submit-gratitude").addEventListener("click", async () => {
    const date = document.getElementById("gratitude-date").value;
    const response = document.getElementById("gratitude-response").value;
    const timestamp = Date.now(); // Add a timestamp
    const type = document.getElementById("entry-type");

    if (!date || !response) {
        alert("Please select a date and write your response.");
        return;
    }

    // Prepare the data to send
    const gratitudeData = {
        date,
        timestamp,
        response,
        type: "Gratitude Response",
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
            document.getElementById("quote").innerText = "Select a date";
            document.getElementById("gratitude-prompt").innerText = "Select a date";
        } else {
            throw new Error("Failed to submit gratitude response.");
        }
    } catch (error) {
        console.error("Error submitting gratitude response:", error);
        alert("An error occurred while submitting your gratitude response.");
    }
});
