import React from "react";

export interface IgralecProps{
    ime: string;
    starost: number;
    stDresa: number;
    pozicija: string;
    poskodovan: boolean;
}

export const Igralec: React.FC<IgralecProps> = ({ime, starost, stDresa, pozicija, poskodovan}) => {
    return(
        <div>
            <p>IME: {ime}</p>
            <p>STROST: {starost}</p>
            <p>ST DRESA: {stDresa}</p>
            <p>POZICIJA: {pozicija}</p>
            <p>POSKODOVAN: {poskodovan}</p>
        </div>
    );
}