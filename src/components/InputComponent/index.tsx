import React from "react";

import { ContainerInput, Input } from "./styles";

import {Props} from './types'

export function InputComponent({titleInput, ...rest}: Props) {
    return (
        <ContainerInput>
            <Input
                placeholder={titleInput}
                {...rest}
            />
        </ContainerInput>


    );
}