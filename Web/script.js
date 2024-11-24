function countWords() {
    // Get the text from the textarea
    const text = document.getElementById('textInput').value;
    
    // Split the text by spaces and filter out empty entries
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    
    // Update the word count display
    document.getElementById('wordCount').textContent = words.length;
}