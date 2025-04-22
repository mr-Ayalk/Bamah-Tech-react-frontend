
import styles, { layout } from "../style";
import Button from "./Button";
import team from "../assets/image.png"
const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
       Our Specialized Team <br className="sm:block hidden" />Waiting For you
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      We specialize in developing web applications, mobile apps, and a variety of software products utilizing the latest frameworks and technologies. Our focus is on delivering solutions that are clear, secure, and well-organized to meet your needs effectively.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={team} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
