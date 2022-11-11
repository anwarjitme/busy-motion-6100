import { Flex, Image } from '@chakra-ui/react';
import React from 'react'
import { Link } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";


const Navbar = () => {
  return (
    
    <Flex backgroundColor='gray.100' width="100%" justifyContent='space-around' alignItems='center' >
      <Link to="/" className="navbar-logo">
        <Image width='150px ' height='80px'
        ml={10}
          className="logo"
          src="https://www.499rupees.com/images/store/img_1526970690.jpg"
          alt="logo"
        />
      </Link>
      <Link to="/">Women</Link>
      <Link to="/men">Men</Link>
      <Link to="/kid">Kid</Link>
      <Link to="/shoe">Shoes & Bags</Link>
      <Link to="/beauty">Beauty</Link>
      <InputGroup width={500}>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input type="tel" placeholder="What are You Looking For?" />
      </InputGroup>
      <Link to="/more">More</Link>
      <Link to="signup">SIgn Up/Sign In</Link>
      <Link to="/wish">
        <Image
          src="https://icons8.com/icon/rntHZLVPcFtp/loading-heart"
          alt="wish"
        />
      </Link>
      <Link to="cart">
        <Image src="https://icons8.com/icon/3117/shopping-bag" alt="cart" />
      </Link>
    </Flex>
  );
}

export default Navbar