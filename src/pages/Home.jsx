import React, { lazy, Suspense, useEffect, useState } from "react";
import Loader from "../utils/Loader";
const components = ["About", "Timeline", "Skills", "Projects", "Contact"];
const Home = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setPageLoaded(true);
      }, 4000);
    };
    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
  return (
    pageLoaded && (
      <>
        {components.map((component, index) => {
          const Component = lazy(() =>
            import(`../components/Home/${component}.jsx`)
          );
          return (
            <Suspense fallback={<Loader />} key={index}>
              <Component />
            </Suspense>
          );
        })}
      </>
    )
  );
};

export default Home;
