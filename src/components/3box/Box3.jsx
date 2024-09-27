import {motion} from 'framer-motion';

const Box3 = () => {
  const boxVariant = {
    hidden: {
      x: '-50vw',
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const listVariant = {
    hidden: {
      x: '-10vw',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="box-container">
      <motion.div
        className="box"
        variants={boxVariant}
        initial="hidden"
        animate="visible">
        {Array.from({length: 3}).map((_, index) => (
          <motion.li key={index} className="boxItem" variants={listVariant} />
        ))}
      </motion.div>
    </div>
  );
};

export default Box3;
