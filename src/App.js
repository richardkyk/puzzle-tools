import { useState } from "react";
import PickOneSkipN from "./components/PickOneSkipN";
import CaesarShift from "./components/CaesarShift";
import StringManipulation from "./components/StringManipulation";
import Statistics from "./components/Statistics";

function App() {
  const [string, setString] = useState("");

  return (
    <>
      <div className="mt-5 d-flex justify-content-center align-items-center">
        <textarea
          rows="3"
          type="textarea"
          className="w-50 form-control"
          onChange={(e) => setString(e.target.value)}
        />
      </div>
      <div className="pt-5 d-flex">
        <div className="w-50">
          <Statistics string={string} />
        </div>
        <div className="w-50">
          <StringManipulation string={string} />
        </div>
        <div className="w-50">
          <PickOneSkipN string={string} />
        </div>
        <div className="w-50">
          <CaesarShift string={string} />
        </div>
      </div>
    </>
  );
}

export default App;
