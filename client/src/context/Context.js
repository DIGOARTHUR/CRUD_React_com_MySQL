import { createContext, useState } from "react";

export const NameContext = createContext({});

export const NameProvider = (props) => {

    //Aqui será declarado todo tipo de dado que será compartilhado 
    //entre os componentes
    //Exemplos:

    // 1. Variárvel de Estado
    const [cont, setCont] = useState(0);

    //2. Objeto 
    const user = {
        name: 'Contador'
    }

    return (
                                       //Dados repassados 
        <NameContext.Provider value={{ user, cont, setCont }}>
            {props.children} {/*Possibilita o uso de outras Tags inseridas dentro da tag, aqui denominada, NameProvider*/}
        </NameContext.Provider>
    )
}