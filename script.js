// This function sends a message to your Gemini AI API
async function sendMessage(message) {
  try {
    const res = await fetch("/api/ai", { // Calls your serverless function
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }) // Send the user's message
    });

    const data = await res.json(); // Get the AI response
    return data.reply; // Return the AI reply
  } catch (error) {
    console.error("Error:", error);
    return "Sorry, something went wrong!";
  }
}

// Example function to test AI with a button
async function testAI() {
  const reply = await sendMessage("Hello Gemini"); // You can replace the text
  alert(reply); // Show AI reply in a popup
}