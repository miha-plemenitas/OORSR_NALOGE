import React from "react";
interface infoProps {
    stIgralcev: number;
}
export const Info: React.FC<infoProps> = ({stIgralcev}) => {
    if (stIgralcev >= 11){
        return <div> OK </div>
    }
    else {
        return null;
    }
}