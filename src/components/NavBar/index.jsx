import React from 'react';
import { Flex, Image } from '@chakra-ui/react';

import bits from "./BITS_Pilani_Logo.png";
import bits_text from "./Goa_Campus.png";


const NavBar = () => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            padding="1rem"
            backgroundColor="white"
            color="white"
            flexWrap="wrap"
            justifyContent={"center"}
        >
            <Flex  flexDir={"row"} >
        <Image src={bits} alt="BITS Pilani Logo" boxSize={{base:"3rem",md:"4rem",xl:"5rem"}} padding={{base:"1px",md:"1px",xl:"1px"}}/>
        <Image src={bits_text} alt="BITS Pilani Logo"  height={{base:"3rem",md:"4rem",xl:"5rem"}} padding={{base:"1px",md:"1px",xl:"1px"}}/>
            </Flex>
        </Flex>
    );
};

export default NavBar;
