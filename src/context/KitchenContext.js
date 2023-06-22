import { createContext } from "react";

const KitchenContext = createContext({
    toggleKitchenMenu:()=>{},
    kitchenMenuStatus:false,
});

export default KitchenContext;
