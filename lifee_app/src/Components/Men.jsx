import React from 'react'
import Navbar from '../Navbar'
import { Box, Button, Divider, Flex, HStack, Image, Input, Text, VStack } from "@chakra-ui/react";
import Carousel from "framer-motion-carousel";
const Men = () => {
  return (
    <div width="100%">
      <Navbar />
      <Box pt={2} width="100%" h="40px" bg="#faa619" mb={10}  >
        <Text color="white" m="auto" textAlign="center">
          Lingerie And Nigntwear from 299
        </Text>
      </Box>
      <Carousel>
        <Image
          // width="550px "
          // height="580px"
          className="logo"
          src={require("../Images/crausel1.png")}
          alt="logo"
        />
        <Image
          // width="550px "
          // height="580px"
          className="logo"
          src={require("../Images/crausel2.png")}
          alt="logo"
        />
        <Image
          className="logo"
          src={require("../Images/crausel3.png")}
          alt="logo"
        />
        <Image
          className="logo"
          src={require("../Images/crausel4.png")}
          alt="logo"
        />
        <Image
          className="logo"
          src={require("../Images/crausel5.png")}
          alt="logo"
        />
      </Carousel>
      <Image w="100%" src={require("../Images/11deal.png")} alt="11deal" />
      <Image
        w="90%"
        m="auto"
        py={7}
        src={
          "https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-12modblock-oneBythree-A-Men-09Nov2022.gif"
        }
        alt="11deal"
      />
      <Image
        w="90%"
        m="auto"
        py={7}
        src={require("../Images/value_pic.png")}
        alt="value"
      />
      <Image
        w="90%"
        m="auto"
        py={7}
        src={require("../Images/winter.png")}
        alt="value"
      />
      <Image
        w="90%"
        m="auto"
        py={7}
        src={require("../Images/big.png")}
        alt="value"
      />
      <Image
        w="90%"
        m="auto"
        py={10}
        src={
          "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-13modblock-oneBythree-A-menstripbanner-07Nov2022A.png"
        }
        alt="value"
      />
      <Image
        w="90%"
        m="auto"
        py={10}
        src={
          "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-men-9modblock-StripBanner2-D-07Nov2022.jpg"
        }
        alt="value"
      />
      <Image
        w="90%"
        m="auto"
        py={10}
        src={
          "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-men-8modblock-oneBythree-D-10Nov2022.jpg"
        }
        alt="value"
      />
      <VStack w="90%" m="auto" py={10}>
        <Text fontSize="4xl">Top Trending Brands</Text>
        <Image w="100%" src={require("../Images/trend.png")} alt="trend" />
      </VStack>
      <VStack w="90%" m="auto" py={10}>
        <Text fontSize="4xl">Flash Sale for Today</Text>
        <Image
          w="100%"
          src={
            "https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-modularblock7-oneBythree-A-Men-04Nov2022.jpg"
          }
          alt="trend"
        />
      </VStack>
      <VStack w="90%" m="auto" py={10}>
        <Text fontSize="4xl">Top Picks</Text>
        <Image w="100%" src={require("../Images/pick.png")} alt="trend" />
      </VStack>
      <VStack w="90%" m="auto" py={10}>
        <Text fontSize="4xl">Winter Trends</Text>
        <Image
          w="100%"
          src={require("../Images/winter_trend.png")}
          alt="trend"
        />
      </VStack>
      <VStack w="90%" m="auto" py={10}>
        <Text textAlign="left" fontSize="4xl">
          Most Loved Styles
        </Text>
        <Image w="100%" src={require("../Images/most.png")} alt="trend" />
      </VStack>
      <VStack w="90%" m="auto" py={10}>
        <Text textAlign="left" fontSize="4xl">
          Highlights of the Day
        </Text>
        <Flex w="90%" m="auto" py={10}>
          <Image
            w="35%"
            p={3}
            src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-4modularblock-1-oneBythree-24June2022.jpg"
            alt="ok"
          />
          <Image
            w="35%"
            p={3}
            src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-4modularblock-2-oneBythree-19July2022.jpg"
            alt="ok"
          />
          <Image
            p={3}
            w="35%"
            src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-4modularblock-3-oneBythree-24June2022.gif"
            alt="ok"
          />
        </Flex>
        <Text fontSize="4xl">Trendsetters</Text>
        <Flex w="90%" m="auto" pt={5} pb={10}>
          <Image
            w="35%"
            p={3}
            src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-2modularblock-1-oneBythree-07Oct2022.jpg"
            alt="ok"
          />
          <Image
            w="35%"
            p={3}
            src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-2modularblock-2-oneBythree-16Sep2022.jpg"
            alt="ok"
          />
          <Image
            p={3}
            w="35%"
            src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-2modularblock-3-oneBythree-16Sep2022.jpg"
            alt="ok"
          />
        </Flex>
        <Text fontSize="4xl">Active Wardrobe</Text>
        <Flex w="90%" m="auto" pt={5} pb={10}>
          <Image
            w="35%"
            p={3}
            src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-15modularblock-1-oneBythree-16Sep2022.jpg"
            alt="ok"
          />
          <Image
            w="35%"
            p={3}
            src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-15modularblock-2-oneBythree-16Sep2022.jpg"
            alt="ok"
          />
          <Image
            p={3}
            w="35%"
            src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-15modularblock-3-oneBythree-16Sep2022.jpg"
            alt="ok"
          />
        </Flex>
        <Text fontSize="4xl">Most loved brands</Text>
        <Flex w="90%" m="auto" pt={5} pb={10}>
          <Image
            w="50%"
            src="https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-5modularblock-oneBytwo1C-Men-14July2022.jpg"
            alt="ok"
          />
          <Image
            w="50%"
            src="https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-5modularblock-oneBytwo1D-Men-14July2022.jpg"
            alt="ok"
          />
        </Flex>
        <Text fontSize="4xl">Essentials For You</Text>
        <Flex w="90%" m="auto" pt={5} pb={10}>
          <Image
            w="50%"
            src="https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-10modularblock-oneBythree-A-Men-12Sept2022.jpg"
            alt="ok"
          />
          <Image
            w="50%"
            src="https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-10modularblock-oneBythree-B-Men-06Mar2022.jpg"
            alt="ok"
          />
        </Flex>
        <Text fontSize="4xl">Trending Watches</Text>
        <Flex w="90%" m="auto" pt={5} pb={10}>
          <Image w="50%" src={require("../Images/w1.png")} alt="ok" />
          <Image w="50%" src={require("../Images/w2.png")} alt="ok" />
          <Image w="50%" src={require("../Images/w3.png")} alt="ok" />
          <Image w="50%" src={require("../Images/w4.png")} alt="ok" />
        </Flex>
        <Button px={20} colorScheme="yellow" variant="outline">
          SEE ALL
        </Button>
        <Divider pt={5} />
        <Text pt={5} fontSize="4xl">
          Shop By Department
        </Text>
        <Flex w="90%" m="auto" pt={5} pb={10}>
          <Image
            w="35%"
            src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-MEN-6modularblock-oneBythree-A-Men-04March2022A.jpg"
            alt="ok"
          />
          <Image
            w="35%"
            src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-MEN-6modularblock-oneBythree-B-Men-04March2022A.jpg"
            alt="ok"
          />
          <Image
            w="35%"
            src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-MEN-6modularblock-oneBythree-C-Men-04March2022A.jpg"
            alt="ok"
          />
        </Flex>
        <Divider />
        <HStack>
          <VStack pr={20}>
            <Text fontSize="xl" as="bold" textAlign="start">
              Subscribe to our awesome emails.
            </Text>
            <Text color="gray">
              Get our latest offers and news straight in your inbox.
            </Text>
            <Flex>
              <Input
                px={10}
                placeholder="Please enter an email address"
                size="lg"
              />
              <Button colorScheme="teal" variant="solid">
                Subscribe
              </Button>
            </Flex>
          </VStack>
          <Image pl={25} src={require("../Images/play.png")} alt="play" />
        </HStack>
      </VStack>
      <Divider pb={10} />
      <Flex pt={10} w="90%" m="auto" justifyContent="space-between">
        <VStack>
          <Text as="b">Women</Text>
          <Text>Tops</Text>
          <Text>Ethnicwear</Text>
          <Text>Bottoms</Text>
          <Text>Dresses & Jumpsuits</Text>
          <Text>Winterwear</Text>
          <Text>Lingerie</Text>
          <Text>Nightwear</Text>
        </VStack>
        <VStack>
          <Text as="b">Men</Text>
          <Text>Tops</Text>
          <Text>Bottoms</Text>
          <Text>Ethnicwear</Text>
          <Text>Winterwear</Text>
          <Text>Sportswear</Text>
          <Text>Innerwear</Text>
          <Text>Grooming</Text>
          <Text>Watches</Text>
          <Text>Sunglasses</Text>
        </VStack>
        <VStack>
          <Text as="b">Kids</Text>
          <Text>Girls Clothing</Text>
          <Text>Boys Clothing</Text>
          <Text>Infants Girls</Text>
          <Text>Infants Boys</Text>
          <Text>Winterwear</Text>
          <Text>Add ons</Text>
          <Text>The Teen Shop</Text>
        </VStack>
        <VStack>
          <Text as="b">Shoes & Beauty</Text>
          <Text>Women</Text>
          <Text>Men</Text>
          <Text>Boys</Text>
          <Text>Girls</Text>
          <Text>Women Accessories</Text>
          <Text>Men Accessories</Text>
          <Text>Essential</Text>
        </VStack>
        <VStack>
          <Text as="b">Beauty</Text>
          <Text>Makeup Eyes</Text>
          <Text>Makeup Face</Text>
          <Text>Makeup Lips</Text>
          <Text>Makeup Nails</Text>
          <Text>Perfumes</Text>
        </VStack>
      </Flex>
      <Image w='100%' src={require('../Images/last.png')}  alt='ok'  />
    </div>
  );
}

export default Men