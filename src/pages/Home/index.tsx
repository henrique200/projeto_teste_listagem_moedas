import React, { useEffect, useState } from "react";

import { 
    Container,
    ListCoins,
 } from "./styles";

import { InputComponent } from "../../components/InputComponent";
import { CardCoins } from "../../components/CardCoins";
import GetListCoinsService from "../../services/GetListCoins";

export function Home() {
    const [data, setData] = useState([]);

    async function LoadApi(){
        const loadedList = await GetListCoinsService();
        setData(loadedList)
        return loadedList;
    }

    function SearchNameCoins(c: string){
        let arr = data;
        setData(arr.filter((d: any) => d.symbol.includes(c)));
    }

    useEffect(() => {
        LoadApi();   
        console.log('o que esta vindo aqui ', data);
    }, [])

    return (
        <Container>
            <InputComponent
                titleInput="Pesquise o Nome da Moeda"
                onChangeText={(c) => SearchNameCoins(c)}
                autoCapitalize={"none"}
            />

            <ListCoins
                data={data}
                keyExtractor={item => String(item.firstId) + Math.floor(Math.random()* new Date().getTime())}
                renderItem={({item}) => <CardCoins data={item}/>}

            />
        </Container>
    );
}