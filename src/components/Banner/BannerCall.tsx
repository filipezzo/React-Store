import Button from "../Button/Button";
import jbl from "../../assets/ubl-2.png";
function BannerCall() {
  return (
    <div className="max-w-7xl mx-auto p-6 rounded-md bg-blue-400 flex justify-between items-center relative my-32 h-[280px] ">
      <div>
        <h4>20% OFF</h4>
        <h2 className="text-6xl font-bold my-4">FINE SMILE</h2>
        <p>1 dez to 1 jan</p>
      </div>
      <img src={jbl} alt="img of an headset" className="w-96 " />
      <div>
        <h2>UBL STREET </h2>
        <h1 className="text-6xl font-bold my-4 uppercase">Black Friday</h1>
        <Button>Shop Now</Button>
      </div>
    </div>
  );
}

export default BannerCall;
