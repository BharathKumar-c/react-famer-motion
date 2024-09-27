import {motion} from 'framer-motion';
import {useState} from 'react';

const Box1 = () => {
  const [isAnimate, setIsAnimate] = useState(false);

  return (
    <div className="box-container">
      <motion.div
        className="box"
        animate={{
          x: isAnimate ? '65vw' : 0,
          opacity: isAnimate ? 1 : 0.5,
          rotate: isAnimate ? 360 : 0,
        }}
        initial={{
          opacity: 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 60,
          duration: 3,
        }}
        onClick={() => setIsAnimate(!isAnimate)}
      />
    </div>
  );
};

export default Box1;
