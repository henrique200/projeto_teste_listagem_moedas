import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const ContainerButton = styled.TouchableOpacity`
   
`;

export const ContainerIconAndName = styled.View`
    flex-direction: row;
    
    padding: 21px 32px;
    align-items: center;
`;

export const IconCoins = styled.Image``;

export const NameCoins = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.text};
    
    padding-left: 12px;
`;

export const ContainerInfoCoins = styled.View`
    flex-direction: row;

    padding: 8px 32px;
    justify-content: space-between;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(12)}px;
`;

export const Value = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${RFValue(14)}px;
`;

export const Separator = styled.View`
    border-bottom-width: 1px;
    border-color: ${({theme}) => theme.colors.light};

    margin: 18px 32px;
`;