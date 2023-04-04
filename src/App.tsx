import React, {PropsWithChildren, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Menu} from "./Components";
import {Telo} from "./Components";
import {Noga} from "./Components";
import {ekipeSeznam} from "./Components/SeznamEkip";

const filmiSeznam = ["film1", "film2"];

const SeznamFilmov = ({filmi}: {filmi: string[]}) => {
    return (
        <div>
            <ul>
                {filmi.map((film:string, index:number) => (
                    <li key={index}>
                        {film}
                    </li>
                ))}
            </ul>
        </div>
    );
}

interface DodajFilmProps {
    onDodaj: (film: string) => void;
}

const DodajFilm = (props: DodajFilmProps) => {
    const [film, setFilm] = useState('');
    const handleClickAddFilm = () => {
        props.onDodaj(film);
        setFilm('')
    }
    return (
        <div>
            <input
                type="text"
                value={film}
                onChange={(e) => setFilm(e.target.value)}
            />
            {film}
            <button onClick={handleClickAddFilm}>dodaj</button>
        </div>
    );
}

export function ParentFilmi(): JSX.Element {
    const [filmi, setFilmi] = useState(filmiSeznam);

    const handleOnFilmDodaj = (film: string) => {
        setFilmi((prev) => [...prev, film]);
    };

    return (
      <div>
          <SeznamFilmov filmi={filmi}/>
          <DodajFilm onDodaj={handleOnFilmDodaj}/>
      </div>
    );
}

function App() {
    return (
        <div>
            {/*<ParentFilmi/>*/}
            <Menu teamName={"MAJKA F.C."}/>
            <Telo/>
            <Noga izpis={"MIHAJLOOOOOOOOOOOOOOO!!!!! NOGA"}/>

        </div>
    );
}

export default App;
