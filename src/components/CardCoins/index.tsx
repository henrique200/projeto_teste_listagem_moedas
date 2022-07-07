import React, { useEffect, useState } from "react";

import {
    Container,
    ContainerButton,
    IconCoins,
    NameCoins,
    ContainerIconAndName,
    ContainerInfoCoins,
    Title,
    Value,
    Separator,
} from "./styles";

import { Props } from './types';

export function CardCoins({ data }: Props) {
    const [showCardInfoComplete, setShowCardInfoComplete] = useState(false);
    return (
        <Container>

            <ContainerButton onPress={() => setShowCardInfoComplete(!showCardInfoComplete)}>
                <ContainerIconAndName>
                    <IconCoins
                        source={
                            data.symbol === 'BTCUSDT' 
                            ? require('../../assets/Icons/coinsymbol.png') 
                            : require('../../assets/Icons/coinsymbol.png')}
                    />
                    <NameCoins>{
                    data.symbol === 'BTCUSDT' 
                    ? 'BTC' 
                    : data.symbol}</NameCoins>
                </ContainerIconAndName>

                <ContainerInfoCoins>
                    <Title>Price</Title>
                    <Value>{data.lastPrice}</Value>
                </ContainerInfoCoins>

                <ContainerInfoCoins>
                    <Title>24h</Title>
                    <Value>{data.priceChangePercent}</Value>
                </ContainerInfoCoins>

                <ContainerInfoCoins>
                    <Title>7d</Title>
                    <Value>{data.priceChangePercent}</Value>
                </ContainerInfoCoins>

                <ContainerInfoCoins>
                    <Title>Marcketcap</Title>
                    <Value>{data.weightedAvgPrice}</Value>
                </ContainerInfoCoins>

                <Separator />
            </ContainerButton>

            {showCardInfoComplete &&
                <Container>
                    <ContainerInfoCoins>
                        <Title>Preço de abertura</Title>
                        <Value>{data.openPrice}</Value>
                    </ContainerInfoCoins>

                    <ContainerInfoCoins>
                        <Title>Preço de fechamento</Title>
                        <Value>{data.prevClosePrice}</Value>
                    </ContainerInfoCoins>

                    <ContainerInfoCoins>
                        <Title>Valor do volume</Title>
                        <Value>{data.quoteVolume}</Value>
                    </ContainerInfoCoins>

                    <ContainerInfoCoins>
                        <Title>Maior Preço</Title>
                        <Value>{data.highPrice}</Value>
                    </ContainerInfoCoins>

                    <ContainerInfoCoins>
                        <Title>Menor Preço</Title>
                        <Value>{data.lowPrice}</Value>
                    </ContainerInfoCoins>

                    <ContainerInfoCoins>
                        <Title>Volume</Title>
                        <Value>{data.volume}</Value>
                    </ContainerInfoCoins>

                    <Separator />
                </Container>
            }

        </Container>
    );
}