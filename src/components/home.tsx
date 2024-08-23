import { createMemoryHistory } from "history";
import React, { useEffect } from "react";
export const Home = ({ onNavigation }: { onNavigation?: Function }) => {
  const history = createMemoryHistory();
  onNavigation && onNavigation();
  console.log(1231);
  useEffect(() => {
    console.log(history.location);

    history.listen((location) => {
      console.log(123);
      onNavigation && onNavigation();
    });
  }, [history.location.pathname]);
  return <>Home</>;
};
