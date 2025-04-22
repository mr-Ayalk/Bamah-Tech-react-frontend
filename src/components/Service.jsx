import { apple,  google } from "../assets";
import styles, { layout } from "../style";
import heroo from "../assets/Adobe Express - file.png"
// import google from "../assets/images.jpg"
const Service = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={heroo} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Website ,Mobile App and <br className="sm:block hidden" />Software product development
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      We specialize in developing web applications, mobile apps, and a variety of software products utilizing the latest frameworks and technologies. Our focus is on delivering solutions that are clear, secure, and well-organized to meet your needs effectively.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
);

export default Service;
