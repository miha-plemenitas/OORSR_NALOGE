import React, { useState } from "react";
import { Outlet } from 'react-router-dom';
import { IgralecProps } from '../Igralec';

interface DodajIgralcaProps {
    onDodaj: (igralec: IgralecProps) => void
}

export const DodajIgralca = (props: DodajIgralcaProps) => {
    const [igralec, setIgralec] = useState<IgralecProps>({
        ime: '',
        starost: 0,
        stDresa: 0,
        pozicija: '',
        poskodovan: false
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setIgralec({ ...igralec, [name]: value });
    };

    const handleClickAddIgralec = () => {
        props.onDodaj(igralec);
        setIgralec({
            ime: '',
            starost: 0,
            stDresa: 0,
            pozicija: '',
            poskodovan: false
        });
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Ime"
                name="ime"
                value={igralec.ime}
                onChange={handleInputChange}
            />
            <input
                type="number"
                placeholder="Starost"
                name="starost"
                value={igralec.starost}
                onChange={handleInputChange}
            />
            <input
                type="number"
                placeholder="Št. dresa"
                name="stDresa"
                value={igralec.stDresa}
                onChange={handleInputChange}
            />
            <input
                type="text"
                placeholder="Pozicija"
                name="pozicija"
                value={igralec.pozicija}
                onChange={handleInputChange}
            />
            <input
                type="checkbox"
                name="poskodovan"
                checked={igralec.poskodovan}
                onChange={handleInputChange}
            />
            <label htmlFor="poskodovan">Poškodovan</label>
            <button onClick={handleClickAddIgralec}>dodaj</button>
        </div>
    );
};
