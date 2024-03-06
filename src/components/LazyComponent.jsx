import { useState } from "react";
import { delayComp } from "../utils";
import LazylyLoaded from "./LazylyLoaded";

const LazyComponent = () => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={showPreview}
          onChange={(e) => setShowPreview(e.target.checked)}
        />
        Show preview
      </label>

      {showPreview ? <LazylyLoaded /> : null}
    </div>
  );
};

export default LazyComponent;
