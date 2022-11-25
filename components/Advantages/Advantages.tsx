import { Box, Heading, Text, Image, Flex } from '@chakra-ui/react';

export const Advantages = () => (
  <Box minH={'100vh'}>
    <Flex h={567} my={'94px'}>
      <Box flex="1" pl={205}>
        <Heading as="h2" fontSize="40px" lineHeight="50px" fontWeight="500" mb={'52px'}>
          <Text as={'span'} color="brand.green">
            Our{' '}
          </Text>
          Advantages
        </Heading>

        <Flex>
          <Box w={84} h={84}>
            <Text
              sx={{'-webkit-text-stroke-width': '2px', '-webkit-text-fill-color': 'transparent'}}
              fontSize="64px"
              lineHeight="78px"
              fontWeight="500"
              color="brand.green"
              _hover={{
                color: 'brand.red',
              }}
            >
              1
            </Text>
          </Box>
          <Text flex="1" fontSize="24px" lineHeight="30px" fontWeight="500" alignSelf={'center'} pl={'12px'}>
            Compliant offering through a registered <br /> broker-dealer
          </Text>
        </Flex>
        <Flex>
          <Box w={84} h={84}>
            <Text
              sx={{'-webkit-text-stroke-width': '2px', '-webkit-text-fill-color': 'transparent'}}
              fontSize="64px"
              lineHeight="78px"
              fontWeight="500"
              color="brand.green"
              _hover={{
                color: 'brand.red',
              }}
            >
              2
            </Text>
          </Box>
          <Text flex="1" fontSize="24px" lineHeight="30px" fontWeight="500" alignSelf={'center'} pl={'12px'}>
            No need to lock/ stake them they provide passive <br /> stable cash flow based on company performance
          </Text>
        </Flex>
        <Flex>
          <Box w={84} h={84}>
            <Text
              sx={{'-webkit-text-stroke-width': '2px', '-webkit-text-fill-color': 'transparent'}}
              fontSize="64px"
              lineHeight="78px"
              fontWeight="500"
              color="brand.green"
              _hover={{
                color: 'brand.red',
              }}
            >
              3
            </Text>
          </Box>
          <Text flex="1" fontSize="24px" lineHeight="30px" fontWeight="500" alignSelf={'center'} pl={'12px'}>
            Transparent automated payments are <br /> easy to record
          </Text>
        </Flex>
        <Flex>
          <Box w={84} h={84}>
            <Text
              sx={{'-webkit-text-stroke-width': '2px', '-webkit-text-fill-color': 'transparent'}}
              fontSize="64px"
              lineHeight="78px"
              fontWeight="500"
              color="brand.green"
              _hover={{
                color: 'brand.red',
              }}
            >
              4
            </Text>
          </Box>
          <Text flex="1" fontSize="24px" lineHeight="30px" fontWeight="500" alignSelf={'center'} pl={'12px'}>
            Decentralized and available for self custody
          </Text>
        </Flex>
        <Flex>
          <Box w={84} h={86}>
            <Text
              sx={{'-webkit-text-stroke-width': '2px', '-webkit-text-fill-color': 'transparent'}}
              fontSize="64px"
              lineHeight="78px"
              fontWeight="500"
              color="brand.green"
              _hover={{
                color: 'brand.red',
              }}
            >
              5
            </Text>
          </Box>
          <Text flex="1" fontSize="24px" lineHeight="30px" fontWeight="500" alignSelf={'center'} pl={'12px'}>
            Does not affect company equity dilution and <br /> allows companies / projects to scale easily
          </Text>
        </Flex>
      </Box>
      <Box w={435}>
        <Image src="/images/advantages.png" alt="logo white" />
      </Box>
    </Flex>
  </Box>
);
