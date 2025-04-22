import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import heromain from "../assets/heromail.png"
const Hero = () => {
  return (
    <section id="home" className={` flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
   

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Innovative <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Solution For</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Brighter Tommorrow.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        At Bamah Tech and Engineering Solutions, our mission is to elevate the standards of technology and engineering through innovative design and exceptional service. We are committed to delivering top-tier solutions in electrical machine maintenance, software development, and digital design. 
        </p>
      </div>

      <div className={`flex-1 flex-col ${styles.flexCenter} md:my-0 my-10 relative`}>
      {/* <div className="flex-1 text-5xl mt-0  pt-0  font-poppins font-semibold ">Bamah Engineering</div>
      <div className="flex-1 text-5xl mt-0  pt-0  font-poppins font-semibold "> Solution</div> */}
        <img src={heromain} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
