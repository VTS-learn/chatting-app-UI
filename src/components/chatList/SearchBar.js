import React from 'react';
import styled from "styled-components";

const Input = styled.div `
    background: #FFFFFF;
    box-shadow: 0px 2px 22px 4px rgba(0, 0, 0, 0.13);
    border-radius: 10px;
    margin: 20px 10px;
    overflow: hidden;

    & input{
        padding: 15px 10px;
        display:block;
        width:100%;
        border: none;
    }
`

const SearchBar = ( props ) => {
    return (
        <Input>
            <input placeholder="Search name" onChange={props.onChangeFun}/>
        </Input>
    )
}

export default SearchBar
