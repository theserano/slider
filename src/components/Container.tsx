import './container.css';
import { motion } from "framer-motion";


interface ContainerProps {
    header: string;
    text: string;
    image: string;
}

const Container = ({ header, text, image}: ContainerProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1.01 }}
            exit={{ opacity: 0, scale: 0.2 }}
            transition={{ duration: 2 }}
            className="container"
        >
            <div className={`container_image}`}>
                <img src={image} alt="image" />
            </div>

            <div className="container_box">
                <div className={`container_header`}>{header}</div>
                <div className={`container_text`}><span>* </span>{text}</div>
            </div>
        </motion.div>
    );
}

export default Container;
