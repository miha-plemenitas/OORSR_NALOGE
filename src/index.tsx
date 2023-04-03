import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
    useParams,
} from 'react-router-dom';
import { ekipe, EkipaProps } from './Components/SeznamEkip';
import {Igralec} from "./Components/Igralec";
import {Info} from "./Components/Info";
import {Opozorilo} from "./Components/Opozorilo";

const Ekipa = () => {
    const { ekipaId } = useParams();

    //@ts-ignore
    const ekipa: EkipaProps = ekipe.find((e) => e.id === parseInt(ekipaId));

    return (
        <div>
            <h2>IME EKIPE: {ekipa.ime}</h2>
            <h2>LETO USTANOVITVE: {ekipa.letoUstanovitve}</h2>
            <h2>DIREKTOR: {ekipa.direktor}</h2>
            <h2>TRENER: {ekipa.trener}</h2>
            <ul>
                {ekipa.igralci.map((igralec) => (
                    <li key={igralec.ime}>
                        <Igralec
                            ime={igralec.ime}
                            starost={igralec.starost}
                            stDresa={igralec.stDresa}
                            pozicija={igralec.pozicija}
                            poskodovan={igralec.poskodovan}
                        />
                    </li>
                ))}
            </ul>
            <Info stIgralcev={ekipa.igralci.length}/>
            <Opozorilo stIgralcev={ekipa.igralci.length}/>
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/ekipa/:ekipaId',
                element: <Ekipa />,
            },
        ],
    },
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
