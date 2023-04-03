import React from "react";
interface opozoriloProps {
    stIgralcev: number;
}
export const Opozorilo: React.FC<opozoriloProps> = ({stIgralcev}) => {
    if (stIgralcev < 11){
        return <div> PREMALO IGRAČA! BRATE! </div>
    }
    else {
        return null;
    }
}