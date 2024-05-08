import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div className="justify-center items-center flex flex-col">
      <div className="max-w-[1366px] h-full m-auto flex flex-col md:flex-row-reverse gap-10">
        <div className="h-full top-0 right-0 md:w-1/2 mt-10">
          <img
            src="./hero.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <motion.div
          className="w-full md:w-1/2 h-full flex flex-col justify-center gap-10 lg:mt-40 md:mt-20"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants} className="text-7xl text-gray-700">
            Welcome to sheAura!!
          </motion.h2>
          <motion.p variants={textVariants} className="text-xl text-gray-500">
            Polycystic Ovary Syndrome (PCOS) is a common hormonal disorder among
            women.
          </motion.p>
          <motion.p variants={textVariants} className="text-xl text-gray-500">
            We have developed this app to help women with polycystic ovary
            syndrome (PCOS) find information of the highest quality from leading
            experts in this field. It has been designed with women and for women
            with polycystic ovary syndrome.
          </motion.p>
          <motion.p variants={textVariants} className="text-xl text-gray-500">
            Having PCOS is a journey of learning about the condition, of
            understanding how it impacts your life and of what you can do to
            manage this. We are providing trustworthy information to learn about
            the condition and support you to find the healthiest possible
            lifestyle for you.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
