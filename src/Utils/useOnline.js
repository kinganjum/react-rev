import { useEffect, useState } from "react";

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(()=>{
        const handleOnline = () => {
            setIsOnline(true);
          };
        const handleOffline = () => {
            setIsOnline(false);
        }

        window.addEventListener("online", handleOnline)
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online",handleOnline);
            window.removeEventListener("offline",handleOffline);
        }

    },[]);

    return isOnline; //returns true false whethere user is online or not
}
export default useOnline;