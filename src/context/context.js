import { createContext, useContext } from "react";

export const Context=createContext({

    successRate:[],
    IVFSuccessRateCalculator:(successRateValue)=>{}

})

export const ContextProvider=Context.Provider;

export const useHook=()=>{

    return useContext(Context)

}