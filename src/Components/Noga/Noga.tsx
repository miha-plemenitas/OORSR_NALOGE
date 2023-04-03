import React from "react";

interface nogaProps {
    izpis: string;
}

export const Noga: React.FC<nogaProps> = ({izpis}) => {
    return(
        <div>
            <p>{izpis}</p>
        </div>
    );
}