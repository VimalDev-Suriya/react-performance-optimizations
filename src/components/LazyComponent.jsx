import { Suspense, lazy, useState } from "react";
import { delayComp } from "../utils";
// import LazylyLoaded from "./LazylyLoaded";

const LazylyLoaded = lazy(() => import("./LazylyLoaded"));

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

      {showPreview ? (
        <Suspense fallback={<div>Loading</div>}>
          <LazylyLoaded />
        </Suspense>
      ) : null}
    </div>
  );
};

export default LazyComponent;
