import { useState } from "react";

import KitchenContext from "./KitchenContext";

export   function kitchenProvider({ children }) {

  const [kitchenMenuStatus, setkitchenMenuStatus] = useState(false);

  const toggleKitchenMenu = (status) => {
    setkitchenMenuStatus(status);
  };

  const kitchenContextValue  = {
    toggleKitchenMenu,
    kitchenMenuStatus,
  };

  return (
    <KitchenContext.Provider value={kitchenContextValue }>
      {children}
    </KitchenContext.Provider>
  );
} 
