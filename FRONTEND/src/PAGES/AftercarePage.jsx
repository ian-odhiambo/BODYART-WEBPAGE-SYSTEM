import PiercingsAgregation from "../COMPONENTS/AfterCare subfolder/Aftercare Aggregation/PiercingsAgregation";
import TattoAgregation from "../COMPONENTS/AfterCare subfolder/Aftercare Aggregation/TattoAgregation";
import AfterCareMain from "../COMPONENTS/AfterCareMain";

const AftercarePage = ({ type }) => {

  if (!type) {
    return <AfterCareMain />;
  }

  if (type === 'tattoo') {
    return <TattoAgregation />;
  }

  if (type === 'piercing') {
    return <PiercingsAgregation />;
  }

  return <AfterCareMain />;
};

export default AftercarePage;
