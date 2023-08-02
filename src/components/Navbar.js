import InfoDialog from "./InfoDialog";
import LanguageSelection from "./LanguageSelection";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <InfoDialog />
        {/* <button className="infoBtn" >
          i
        </button> */}
        <div>
          <LanguageSelection />
          <button className="speakerBtn">Mus</button>
        </div>
      </div>
    </>
  );
}
