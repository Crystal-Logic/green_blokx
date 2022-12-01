import {
  Box,
  Heading,
  Flex,
  Image,
  useColorModeValue,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Link,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const LinkCard = ({ href }: any) => {
  const popoverColor = useColorModeValue('white', 'brand.dark');

  return (
    <PopoverContent
      border={'1px solid'}
      borderColor={'brand.green'}
      borderRadius={'none'}
      w={'290px'}
      h={'130px'}
      bg={popoverColor}
      p={'30px'}
    >
      <Text fontSize="20px" lineHeight="25px" fontWeight="500">
        Company
      </Text>
      <Link
        href={href}
        fontSize="20px"
        lineHeight="25px"
        fontWeight="500"
        color={'brand.red'}
        textDecorationLine="underline"
        mt={'18px'}
        isExternal
      >
        Go to the website <ExternalLinkIcon w={'21px'} h={'21px'} mx="2px" />
      </Link>
    </PopoverContent>
  );
};

export const Partners = () => {
  const gridColor = useColorModeValue('brand.green', 'white');

  return (
    <Box id="partners" pb={'100px'} overflow={'hidden'}>
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
          <Popover trigger="hover" placement="auto">
            <PopoverTrigger>
              <Image
                src={'/images/partners/inspira_wealth_logo.png'}
                alt="inspira wealth logo"
                w={'249px'}
                h={'68px'}
                mx={'40px'}
              />
            </PopoverTrigger>
            <LinkCard href={'https://www.inspirawealth.com/'} />
          </Popover>
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
          <Popover trigger="hover" placement="auto">
            <PopoverTrigger>
              <Image src={'/images/partners/aurora_logo.png'} alt="aurora logo" w={'135px'} h={'90px'} mx={'40px'} />
            </PopoverTrigger>
            <LinkCard href={'https://www.inspirawealth.com/'} />
          </Popover>
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
          <Popover trigger="hover" placement="auto">
            <PopoverTrigger>
              <Image
                src={'/images/partners/moonboots_logo.png'}
                alt="moonboots logo"
                w={'260px'}
                h={'45px'}
                mx={'40px'}
              />
            </PopoverTrigger>
            <LinkCard href={'https://www.inspirawealth.com/'} />
          </Popover>
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
          <Popover trigger="hover" placement="auto">
            <PopoverTrigger>
              <Image src={'/images/partners/near_logo.png'} alt="near logo" w={'215px'} h={'84px'} mx={'40px'} />
            </PopoverTrigger>
            <LinkCard href={'https://near.org/'} />
          </Popover>
        </Flex>
        <Flex flex={'1'} h={'full'} alignItems={'center'}>
          <Box w={'10px'} h={'10px'} bg={gridColor} borderRadius={100}></Box>
          <Box flex={'1'} h={0} borderBottom={'2px solid'} borderColor={gridColor}></Box>
        </Flex>
      </Flex>
    </Box>
  );
};
