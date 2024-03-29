import styles from "../style";
import { resumeicon, robothand, resume } from "../assets";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ml-16 ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Hello,<br className="sm:block hidden" />{" "}
            <span className="text-gradient">I'm Christian.</span>{" "}
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Computer Science student at UMass Amherst.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative flex-col items-center top-10`}>
        <a href={resume} target="_blank" rel="noopener noreferrer" style={{zIndex: 10}}>
          <div className="resume-card">
            <img src={resumeicon} alt="resume" />
          </div>
        </a>
        <img src={robothand} alt="robot" className="w-[100%] h-[100%] top-12 relative z-[5]" />



        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;