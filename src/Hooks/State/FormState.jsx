import { useState } from "react";

function FormState() {
  const [radius, setRadius] = useState(1);

  const areaCircle = (radius) => {
    return radius * radius * 3.142;
  };

  const updateRadiusVal = (e) => {
    // console.log(e);
    //console.log(e.target.value);
    setRadius(e.target.value);
  };

  return (
    <div>
      <div>
        <p>
          <label>Circle Value</label>
        </p>
        <p>
          <input type="number" value={radius} onChange={updateRadiusVal} />
        </p>
      </div>
      <div>
        For a circle with radius <b>{radius}</b> Area is{" "}
        <b>{areaCircle(radius)}</b>
      </div>
    </div>
  );
}

export default FormState;
