const button = document.getElementById("dont-touch-button");
const hackingEffect = document.getElementById("hacking-effect");

// Function to keep the button away from the mouse cursor
document.addEventListener("mousemove", function(event) {
    // Get the button's position
    const rect = button.getBoundingClientRect();
    const buttonWidth = rect.width;
    const buttonHeight = rect.height;

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const buttonCenterX = rect.left + buttonWidth / 2;
    const buttonCenterY = rect.top + buttonHeight / 2;

    if (Math.abs(mouseX - buttonCenterX) < 50 && Math.abs(mouseY - buttonCenterY) < 50) {
        let offsetX = Math.random() * 100 - 50; 
        let offsetY = Math.random() * 100 - 50; 

        let newLeft = buttonCenterX + offsetX - buttonWidth / 2;
        let newTop = buttonCenterY + offsetY - buttonHeight / 2;

        if (newLeft < 0) newLeft = 0;
        else if (newLeft + buttonWidth > window.innerWidth) newLeft = window.innerWidth - buttonWidth;

        if (newTop < 0) newTop = 0;
        else if (newTop + buttonHeight > window.innerHeight) newTop = window.innerHeight - buttonHeight;

        button.style.position = 'absolute';
        button.style.left = newLeft + 'px';
        button.style.top = newTop + 'px';
    }
});

// Add click event to trigger hacking effect
button.addEventListener("click", function() {
    hackingEffect.classList.add("show");
    // You can add additional hacking animation or text here
});
