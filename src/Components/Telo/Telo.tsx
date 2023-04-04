import React, {useState} from "react";
import {Outlet} from 'react-router-dom';
import {DodajIgralca} from "./DodajIgralca";
import {EkipaProps, ekipeSeznam, igralci} from "../SeznamEkip";
import {IgralecProps} from "../Igralec";
import {Ekipa} from "../../index";

export function Telo(): JSX.Element {
/*    const [igralci, setIgralci] = useState<IgralecProps[]>(igralciSeznam);


    const handleOnIgralecDodaj = (igralec: IgralecProps) => {
        setIgralci((prev) => [...prev, igralec]);
    };*/

    return(
        <div>
            <Outlet />
{/*
            <DodajIgralca onDodaj={handleOnIgralecDodaj}/>
*/}
        </div>
    );
}