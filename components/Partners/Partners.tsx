import { Box, Heading, Flex, Image } from '@chakra-ui/react';

export const Partners = () => {
  return (
    <Box id="partners" minH={'100vh'}>
      <Flex h={'96px'}>
        <Box flex={'1'} bg="brand.green"></Box>
        <Flex w={'400px'} justifyContent="center" alignItems={'center'}>
          <Heading as="h2" fontSize="32px" lineHeight="40px" fontWeight="500">
            Partners
          </Heading>
        </Flex>
        <Box w={'150px'} bg="brand.green"></Box>
      </Flex>

      {/*  */}
      <Flex h={'100px'} mt={'51px'}>
        <Flex w={'446px'} h={'full'} alignItems={'center'}>
          <Box w={'full'} h={0} borderBottom={'2px solid'} borderColor={'white'}></Box>
          <Box w={'10px'} h={'10px'} bg={'white'} borderRadius={100}></Box>
        </Flex>
        <Flex alignItems={'center'}>
          <Image
            src={'/images/partners/inspira_wealth.png'}
            alt="inspira wealth logo"
            w={'249px'}
            h={'68px'}
            mx={'40px'}
          />
        </Flex>
        <Flex flex={'1'} h={'full'} alignItems={'center'}>
          <Box w={'10px'} h={'10px'} bg={'white'} borderRadius={100}></Box>
          <Box w={'full'} h={0} borderBottom={'2px solid'} borderColor={'white'}></Box>
        </Flex>
      </Flex>
    </Box>
  );
};
