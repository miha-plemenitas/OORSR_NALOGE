import React from "react";
import {Link} from "react-router-dom";
import {ekipeSeznam} from "./index";

export type {EkipaProps} from "./index";

export const SeznamEkip = () => {
    return (
        <div style={{ border: '1px solid red' }}>
            <div>
                {ekipeSeznam.map((e) => (
                    <Link key={e.id} to={`/ekipa/${e.id}`}>
                        {e.ime} |{' '}
                    </Link>
                ))}
            </div>
        </div>
    );
};
