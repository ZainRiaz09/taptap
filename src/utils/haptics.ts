// Check if the device supports haptic feedback
const hasHaptics = 'vibrate' in navigator;

// Different vibration patterns
const PATTERNS = {
  tap: [10], // Light tap
  levelUp: [50, 30, 50], // Stronger pattern for level up
};

export const hapticFeedback = {
  // Test if haptics are supported
  isSupported: () => hasHaptics,

  // Light tap feedback
  tap: () => {
    if (hasHaptics) {
      try {
        navigator.vibrate(PATTERNS.tap);
      } catch (error) {
        console.debug('Haptic feedback failed:', error);
      }
    }
  },

  // Stronger feedback for level up
  levelUp: () => {
    if (hasHaptics) {
      try {
        navigator.vibrate(PATTERNS.levelUp);
      } catch (error) {
        console.debug('Haptic feedback failed:', error);
      }
    }
  },

  // Stop any ongoing vibration
  stop: () => {
    if (hasHaptics) {
      try {
        navigator.vibrate(0);
      } catch (error) {
        console.debug('Failed to stop haptic feedback:', error);
      }
    }
  },
};
