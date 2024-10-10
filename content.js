// Helper function to click buttons with specific text content or classes
function clickButtonWithText(text) {
  const buttons = document.querySelectorAll('button, a');
  buttons.forEach(button => {
    if (button.innerText.includes(text)) {
      button.click();
    }
  });
}

// YouTube 'Skip Ad' button handler
function skipYouTubeAds() {
  const skipButton = document.querySelector('.ytp-ad-skip-button');
  if (skipButton) {
    skipButton.click();
  }
}

// ChatGPT 'Continue generating' button handler
function continueGeneratingChatGPT() {
  const continueButton = document.querySelector('button[aria-label="Continue generating"]');
  if (continueButton) {
    continueButton.click();
  }
}

// General function to skip annoying buttons
function skipInterruptingButtons() {
  clickButtonWithText('Skip');
  clickButtonWithText('Continue');
  clickButtonWithText('Close');
  clickButtonWithText('X');
}

// Run functions periodically
setInterval(() => {
  skipYouTubeAds();
  continueGeneratingChatGPT();  // Now handles the ChatGPT "Continue generating" button
  skipInterruptingButtons();
}, 1000);  // Adjust interval based on desired frequency
