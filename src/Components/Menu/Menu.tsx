import React from "react";
import {SeznamEkip} from "../SeznamEkip";

interface menuProps {
    teamName: string
}

export const Menu: React.FC<menuProps> = ({teamName}) => {
    return(
      <div>
          <h1>{teamName}</h1>
          <SeznamEkip/>
      </div>
    );
}