import React from 'react'
import Navbar from '../Navbar'
import { Box, Image, Text } from "@chakra-ui/react";
import Carousel from "framer-motion-carousel";
const Men = () => {
  return (
    <div width="100%">
      <Navbar />
      <Box width="100%" h="40px" bg="yellow">
        <Text color="white" m="auto" textAlign="center">
          Lingerie And Nigntwear from 299
        </Text>
      </Box>
      <Carousel>
        <Image
          width="550px "
          height="580px"
          className="logo"
          src="https://www.499rupees.com/images/store/img_1526970690.jpg"
          alt="logo"
        />
        <Image
          width="550px "
          height="580px"
          className="logo"
          src="https://www.499rupees.com/images/store/img_1526970690.jpg"
          alt="logo"
        />
        <Image
          width="550px "
          height="580px"
          className="logo"
          src="https://www.499rupees.com/images/store/img_1526970690.jpg"
          alt="logo"
        />
        <Image
          width="550px "
          height="580px"
          className="logo"
          src="https://www.499rupees.com/images/store/img_1526970690.jpg"
          alt="logo"
        />
        <Image
          width="550px "
          height="580px"
          className="logo"
          src="https://www.499rupees.com/images/store/img_1526970690.jpg"
          alt="logo"
        />
        <Image
          width="550px "
          height="580px"
          className="logo"
          src="https://www.499rupees.com/images/store/img_1526970690.jpg"
          alt="logo"
        />
      </Carousel>
    </div>
  );
}

export default Men