
// Sample text for "Try A Sample" button
const sampleText =
  "This is a sample text to demonstrate the humanization process.";

// Event listener for "Try A Sample" button
document.getElementById("sampleButton").addEventListener("click", () => {
  document.getElementById("textInput").value = sampleText;
});

// Event listener for "Paste Text" button
document
  .getElementById("pasteButton")
  .addEventListener("click", async () => {
    const text = await navigator.clipboard.readText();
    document.getElementById("textInput").value = text;
  });

// Event listener for "Bypass AI" button
document.getElementById("bypassButton").addEventListener("click", () => {
  let text = document.getElementById("textInput").value;
  let jumbledText = text
    .split(" ")
    .sort(() => Math.random() - 0.5)
    .join(" ");
  document.getElementById("outputDisplay").innerText = jumbledText;
});

// Event listener for "Copy Output" button
document
  .getElementById("copyOutputButton")
  .addEventListener("click", () => {
    const outputText = document.getElementById("outputDisplay").innerText;
    navigator.clipboard.writeText(outputText);
    alert("Output copied to clipboard!");
  });

// Event listener for "Send" button in contact form
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  // Here you would normally send the form data to the server
  alert("Form Submitted!");
  document.getElementById("contactForm").reset();
});
