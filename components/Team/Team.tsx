import { Box, Heading, Text, Flex, Image, Button } from '@chakra-ui/react';

export const Team = () => {
  return (
    <Box id="team" minH={'1110px'} pt={'53px'} mb={'93px'}>
      <Box h={'full'} w={'full'} position={'relative'}>
        <Flex h={'100px'} w={'full'} pl={'205px'} position={'absolute'} zIndex={10}>
          <Flex flex={'1'} alignItems={'center'}>
            <Box h={'0px'} w={'full'} borderBottom={'3px solid'} borderColor={'brand.green'}></Box>
          </Flex>
          <Flex w={'290px'} bg="brand.green" alignItems={'center'} pl={'43px'}>
            <Heading as="h2" fontSize="32px" lineHeight="40px" fontWeight="500">
              Team
            </Heading>
          </Flex>
        </Flex>

        {/* Slider frame */}

        <Flex h={'630px'} w={'full'} pl={'205px'} position={'absolute'} top={'76px'}>
          <Image src="/images/team/daniel_pal.png" h={'full'} w={'520px'} filter={'grayscale(1)'} />
          <Box flex={'1'} pl={'42px'}>
            <Text mt={'350px'} fontSize="32px" lineHeight="40px" fontWeight="700">
              Daniel Pal
            </Text>
            <Text fontSize="24px" lineHeight="30px" fontWeight="500" color={'brand.green'} pt={'21px'}>
              Chief Executive Officer
            </Text>
            <Text fontSize="18px" lineHeight="23px" fontWeight="400" pt={'35px'}>
              Florin holds a Master's Degree in Chemistry from the West University of Timișoara with 10+ years of
              experience in Flexible and Rigid PU Foam synthesis and processing...{' '}
              <Text as={'span'} color={'brand.red'}>
                read more
              </Text>
            </Text>
          </Box>
        </Flex>

        {/* Slider frame end  */}

        <Flex h={'106px'} w={'full'} position={'absolute'} top={'600px'}>
          <Flex w={'160px'} bg="brand.green">
            <Image
              src="/images/logo_white.png"
              alt="logo white"
              position={'absolute'}
              left={'10px'}
              top={'8px'}
              h={'88px'}
            />
          </Flex>
          <Flex w={'580px'}></Flex>
          <Flex flex={'1'}>
            <Box h={'full'} w={'full'} borderBottom={'3px solid'} borderColor={'brand.green'}></Box>
          </Flex>
        </Flex>
        <Box position={'absolute'} top={'800px'}>
          <Button
            variant="outline"
            color="brand.green"
            colorScheme={'brand.green'}
            borderRadius="none"
            borderWidth="2px 2px 2px 0px"
            h={'135px'}
            minW={'815px'}
            fontSize="32px"
            lineHeight="40px"
            fontWeight="500"
            position={'relative'}
            _hover={{
              color: 'brand.red',
              colorScheme: 'brand.red',
              bg: 'transparent',
            }}
          >
            <Text as={'span'} position={'absolute'} right={'85px'}>
              Contact us
            </Text>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
