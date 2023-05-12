import { useEffect, useState } from "react";

function useNetwork() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  const updateNetwork = () => {
    setIsOnline(window.navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("offline", updateNetwork);

    window.addEventListener("online", updateNetwork);

    return () => {
      window.removeEventListener("offline", updateNetwork);

      window.removeEventListener("online", updateNetwork);
    };
  });

  return isOnline;
}

export default useNetwork;
