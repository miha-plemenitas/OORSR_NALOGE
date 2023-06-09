import {IgralecProps} from "../Igralec";
export {SeznamEkip} from "./SeznamEkip";

export interface EkipaProps {
    id: number;
    ime: string;
    letoUstanovitve: number;
    direktor: string;
    trener: string;
    igralci: IgralecProps[];
}

export const igralci: IgralecProps[] = ([
    {
        ime: "Kepa Arrizabalaga",
        starost: 24,
        stDresa: 10,
        pozicija: "Napadalec",
        poskodovan: false,
    },
    {
        ime: "Thiago Silva",
        starost: 28,
        stDresa: 5,
        pozicija: "Vezist",
        poskodovan: true,
    },
    {
        ime: "Reece James",
        starost: 30,
        stDresa: 2,
        pozicija: "Branilec",
        poskodovan: false,
    },
]);



export const ekipeSeznam: EkipaProps[] = [
    {
        id: 1,
        ime: "EKIPA1",
        letoUstanovitve: 1111,
        direktor: "MITKO ENKA",
        trener: "BORO ENKA",
        igralci: igralci,
    },
    {
        id: 2,
        ime: "EKIPA2",
        letoUstanovitve: 2222,
        direktor: "MITKO DVOJKA",
        trener: "BORO DVOJKA",
        igralci: igralci,
    },
    {
        id: 3,
        ime: "EKIPA3",
        letoUstanovitve: 3333,
        direktor: "MITKO TROJKA",
        trener: "BORO TROJKA",
        igralci: igralci,
    },
];


