import {motion} from 'framer-motion';

const Box2 = () => {
  return (
    <div className="box-container">
      <motion.div
        className="box"
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        drag
        dragConstraints={{
          left: 4,
          right: 20,
          top: 4,
          bottom: 4,
        }}
      />
    </div>
  );
};

export default Box2;
