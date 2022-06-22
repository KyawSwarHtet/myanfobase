import Latestbar from "../../components/catepagerightbar/Latestbar";
import Tecmain from "../../components/catepagerightbar/Tecmain";
import "./tecnology.css";

export default function Tecnology() {
  return (
    <>
        <div className="tecbody container">
          <Tecmain />
          <Latestbar />
        </div>
    </>
  );
}
