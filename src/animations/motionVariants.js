// Page transition animations
export const pageTransition = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.4 }
    }
};

// Section reveal (fade up)
export const revealUp = {
    hidden: {
        opacity: 0,
        y: 40
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.43, 0.13, 0.23, 0.96]
        }
    }
};

// Stagger children animations
export const stagger = {
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};

// Stagger item
export const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    }
};

// Hover lift effect
export const hoverLift = {
    rest: { y: 0, scale: 1 },
    hover: {
        y: -6,
        scale: 1.03,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 20
        }
    }
};

// Magnetic button effect (use with motion state)
export const magneticButton = {
    rest: { x: 0, y: 0 },
    hover: (custom) => ({
        x: custom.x || 0,
        y: custom.y || 0,
        transition: {
            type: "spring",
            stiffness: 150,
            damping: 15,
            mass: 0.1
        }
    })
};

// Text reveal animation
export const textReveal = {
    hidden: {
        opacity: 0,
        y: 50,
        skewY: 10
    },
    visible: {
        opacity: 1,
        y: 0,
        skewY: 0,
        transition: {
            duration: 0.8,
            ease: [0.43, 0.13, 0.23, 0.96]
        }
    }
};

// Scale in animation
export const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.43, 0.13, 0.23, 0.96]
        }
    }
};

// Slide in from left
export const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.43, 0.13, 0.23, 0.96]
        }
    }
};

// Slide in from right
export const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.43, 0.13, 0.23, 0.96]
        }
    }
};

// Fade in animation
export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6 }
    }
};
