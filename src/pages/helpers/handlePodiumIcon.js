import bronzeMedal from "../../assets/bronze-medal.png";
import silverMedal from "../../assets/silver-medal.png";
import goldMedal from "../../assets/gold-medal.png";

const handlePodiumIcon = (place) => {
  switch (place) {
    case 0:
      return goldMedal;
    case 1:
      return silverMedal;
    case 2:
      return bronzeMedal;
    default:
      return "error";
  }
};

export default handlePodiumIcon