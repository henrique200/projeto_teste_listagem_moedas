import styled from "styled-components/native";
import {Platform, TextInput} from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";

export const ContainerInput = styled.View`
    padding: ${Platform.OS === 'android' ? 25 + 'px' && 32 + 'px' : 35 + 'px' && 32 + 'px'};
`;

export const Input = styled(TextInput)`
    width: 100%;
    padding: 16px 18px;
    font-family: ${({theme}) => theme.fonts.regular};

    font-size: ${RFValue(14)}px;

    color: ${({theme}) => theme.colors.text};

    border-bottom-width: 1px;
    border-bottom-color: ${({theme}) => theme.colors.light};
    margin-bottom: 8px;
`;


