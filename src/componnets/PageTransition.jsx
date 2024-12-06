import { motion } from "framer-motion";

const opacityAnimation = {
    initial: {
        opacity: 0,

    },
    animate: {
        opacity: 1,

    },
    exit: {
        opacity: 0,

    },
};


const rotateAnimation = {
    initial: {
        rotateY: 90,

    },
    animate: {
        rotateY: 0,

    },
    exit: {
        rotateY: -90,

    },
};

const zoominAnimation = {
    initial: {

        scale: 0.7,
        opacity: 1,

    },
    animate: {
        scale: 1,
        opacity: 1,

    },
    exit: {
        scale: 0.7,
        opacity: 0,

    },
    transition:{  damping: 1, stiffness: 300 }
};


const widthAnimation = {
    initial: {
        width: 0,
    },
    animate: {
        width: "100%",

    },
    exit: {
        width: "100%",
        x: window.innerWidth,

    },
};

const PageTransition = ({ children }) => {
    return (
        <motion.div
            // transition={{
            //     type: 'spring',
            //     stiffness: 300, 
            //     duration: 1,    
            //     ease: 'easeInOut'
            // }}

            variants={zoominAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
