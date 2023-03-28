import styles from '../styles';

const NewFeatures = ({ imgUrl }) => (
  <div>
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
    >
      <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
  </div>
);
export default NewFeatures;
