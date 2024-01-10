document.addEventListener('DOMContentLoaded', function() {
    const text = "FRONT-END WEB DEVELOPER";
    const typingTextElement = document.getElementById('typing-text');
    let index = 0;

    function type() {
        typingTextElement.innerHTML = text.slice(0, index);
        index++;

        if (index > text.length) {
            index = 0;
        }
    }

    setInterval(type, 150); // Adjust the interval for typing speed
});
