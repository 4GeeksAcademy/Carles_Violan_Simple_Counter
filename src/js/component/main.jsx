import React from "react";

import Header from "./header";
import MyCustomFooter from "./footer";

import Contador from "./contador"


export const Main = () => {


    return  (
        <>
            <Header />
            <section>           
                <Contador />
            </section>
            <MyCustomFooter />
        </>
);
       
};