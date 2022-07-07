import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";

import {Props} from './types';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
`;

export const ListCoins = styled(
    FlatList as new (props: FlatListProps<Props>) => FlatList<Props>
    
).attrs({
    showsVerticalScrollIndicator: false
})`
    flex: 1;
`;

export const Separator = styled.View`
    border-bottom-width: 1px;
    border-color: ${({theme}) => theme.colors.light};

`;