import { Box, Heading, Flex, Image, useColorModeValue } from '@chakra-ui/react';

export const Partners = () => {
  const gridColor = useColorModeValue('brand.green', 'white');

  return (
    <Box id="partners" pb={'100px'}>
      <Flex h={'96px'}>
        <Box flex={'1'} bg="brand.green"></Box>
        <Flex w={'400px'} justifyContent="center" alignItems={'center'}>
          <Heading as="h2" fontSize="32px" lineHeight="40px" fontWeight="500">
            Partners
          </Heading>
        </Flex>
        <Box w={'150px'} bg="brand.green"></Box>
      </Flex>

      {/* Logos grid */}
      <Flex h={'100px'} mt={'51px'}>
        <Flex w={'306px'} h={'full'} alignItems={'center'}>
          <Box flex={'1'} h={0} borderBottom={'2px solid'} borderColor={gridColor}></Box>
          <Box w={'10px'} h={'10px'} bg={gridColor} borderRadius={100}></Box>
        </Flex>
        <Flex alignItems={'center'}>
          <Image
            src={'/images/partners/inspira_wealth_logo.png'}
            alt="inspira wealth logo"
            w={'249px'}
            h={'68px'}
            mx={'40px'}
          />
        </Flex>
        <Flex flex={'1'} h={'full'} alignItems={'center'}>
          <Box w={'10px'} h={'10px'} bg={gridColor} borderRadius={100}></Box>
          <Box flex={'1'} h={0} borderBottom={'2px solid'} borderColor={gridColor}></Box>
        </Flex>
      </Flex>

      <Flex h={'100px'}>
        <Flex flex={'1'} h={'full'} alignItems={'center'}>
          <Box flex={'1'} h={0} borderBottom={'2px solid'} borderColor={gridColor}></Box>
          <Box w={'10px'} h={'10px'} bg={gridColor} borderRadius={100}></Box>
        </Flex>
        <Flex alignItems={'center'}>
          <Image src={'/images/partners/aurora_logo.png'} alt="aurora logo" w={'135px'} h={'90px'} mx={'40px'} />
        </Flex>
        <Flex w={'546px'} h={'full'} alignItems={'center'}>
          <Box w={'10px'} h={'10px'} bg={gridColor} borderRadius={100}></Box>
          <Box flex={'1'} h={0} borderBottom={'2px solid'} borderColor={gridColor}></Box>
        </Flex>
      </Flex>

      <Flex h={'100px'}>
        <Flex flex={'1'} h={'full'} alignItems={'center'}>
          <Box flex={'1'} h={0} borderBottom={'2px solid'} borderColor={gridColor}></Box>
          <Box w={'10px'} h={'10px'} bg={gridColor} borderRadius={100}></Box>
        </Flex>
        <Flex alignItems={'center'}>
          <Image src={'/images/partners/moonboots_logo.png'} alt="moonboots logo" w={'260px'} h={'45px'} mx={'40px'} />
        </Flex>
        <Flex w={'20px'} h={'full'} alignItems={'center'}>
          <Box w={'10px'} h={'10px'} bg={gridColor} borderRadius={100}></Box>
          <Box flex={'1'} h={0} borderBottom={'2px solid'} borderColor={gridColor}></Box>
        </Flex>
      </Flex>

      <Flex h={'100px'}>
        <Flex w={'254px'} h={'full'} alignItems={'center'}>
          <Box flex={'1'} h={0} borderBottom={'2px solid'} borderColor={gridColor}></Box>
          <Box w={'10px'} h={'10px'} bg={gridColor} borderRadius={100}></Box>
        </Flex>
        <Flex alignItems={'center'}>
          <Image src={'/images/partners/near_logo.png'} alt="near logo" w={'215px'} h={'84px'} mx={'40px'} />
        </Flex>
        <Flex flex={'1'} h={'full'} alignItems={'center'}>
          <Box w={'10px'} h={'10px'} bg={gridColor} borderRadius={100}></Box>
          <Box flex={'1'} h={0} borderBottom={'2px solid'} borderColor={gridColor}></Box>
        </Flex>
      </Flex>
    </Box>
  );
};
