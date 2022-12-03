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
  useColorMode,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const LinkCard = ({ href, name, websiteName }: any) => {
  const popoverColor = useColorModeValue('white', 'brand.dark');

  return (
    <PopoverContent
      border={'1px solid'}
      borderColor={'brand.green'}
      borderRadius={'none'}
      bg={popoverColor}
      p={{ base: 5, lg: '30px' }}
    >
      <Text fontSize={{ base: '14px', md: '20px' }} lineHeight={{ base: '18px', md: '25px' }} fontWeight="500">
        {name}
      </Text>
      <Link
        href={href}
        fontSize={{ base: '14px', md: '20px' }}
        lineHeight={{ base: '18px', md: '25px' }}
        fontWeight="500"
        color={'brand.red'}
        textDecorationLine="underline"
        mt={{ base: 3, md: '18px' }}
        isExternal
      >
        {websiteName} <ExternalLinkIcon w={'21px'} h={'21px'} mx="2px" />
      </Link>
    </PopoverContent>
  );
};

export const Partners = () => {
  const gridColor = useColorModeValue('brand.green', 'white');
  const { colorMode } = useColorMode();

  return (
    <Box id="partners" pb={{ base: '50px', lg: '100px' }} overflow={'hidden'}>
      <Flex h={{ base: '60px', lg: '96px' }}>
        <Box flex={'1'} bg="brand.green"></Box>
        <Flex w={{ base: '150px', lg: '400px' }} justifyContent="center" alignItems={'center'}>
          <Heading
            as="h2"
            fontSize={{ base: '25px', lg: '32px' }}
            lineHeight={{ base: '31px', lg: '40px' }}
            fontWeight="500"
          >
            Partners
          </Heading>
        </Flex>
        <Box w={{ base: 5, lg: '150px' }} bg="brand.green"></Box>
      </Flex>

      {/* Logos grid */}
      <Flex w={'full'} h={'full'} direction={'column'}>
        <Flex h={'100px'} mt={{ base: '27px', lg: '51px' }} order={{ base: 1, lg: 'unset' }}>
          <Flex w={{ base: '57px', lg: '306px' }} h={'full'} alignItems={'center'}>
            <Box flex={'1'} h={0} borderBottom={'2px solid'} borderColor={gridColor}></Box>
            <Box w={'10px'} h={'10px'} bg={gridColor} borderRadius={100}></Box>
          </Flex>
          <Flex alignItems={'center'}>
            <Popover trigger="hover" placement="auto">
              <PopoverTrigger>
                <Image
                  src={'/images/partners/inspira_logo.svg'}
                  alt="inspira wealth logo"
                  w={{ base: '135px', lg: '249px' }}
                  mx={{ base: 3, lg: '40px' }}
                />
              </PopoverTrigger>
              <LinkCard
                href={'https://www.inspirawealth.com/'}
                name={'Inspira Wealth'}
                websiteName={'www.inspirawealth.com'}
              />
            </Popover>
          </Flex>
          <Flex flex={'1'} h={'full'} alignItems={'center'}>
            <Box w={'10px'} h={'10px'} bg={gridColor} borderRadius={100}></Box>
            <Box flex={'1'} h={0} borderBottom={'2px solid'} borderColor={gridColor}></Box>
          </Flex>
        </Flex>

        <Flex h={'100px'} order={{ base: 3, lg: 'unset' }}>
          <Flex flex={'1'} h={'full'} alignItems={'center'}>
            <Box flex={'1'} h={0} borderBottom={'2px solid'} borderColor={gridColor}></Box>
            <Box w={'10px'} h={'10px'} bg={gridColor} borderRadius={100}></Box>
          </Flex>
          <Flex alignItems={'center'}>
            <Popover trigger="hover" placement="auto">
              <PopoverTrigger>
                <Image
                  src={colorMode === 'dark' ? '/images/partners/aurora_dark.png' : '/images/partners/aurora_logo.png'}
                  alt="aurora logo"
                  w={{ base: '90px', lg: '135px' }}
                  mx={{ base: 3, lg: '40px' }}
                />
              </PopoverTrigger>
              <LinkCard href={'https://aurora.ventures/'} name={'Aurora'} websiteName={'aurora.ventures'} />
            </Popover>
          </Flex>
          <Flex w={{ base: '39px', lg: '546px' }} h={'full'} alignItems={'center'}>
            <Box w={'10px'} h={'10px'} bg={gridColor} borderRadius={100}></Box>
            <Box flex={'1'} h={0} borderBottom={'2px solid'} borderColor={gridColor}></Box>
          </Flex>
        </Flex>

        <Flex h={'100px'} order={{ base: 4, lg: 'unset' }}>
          <Flex flex={'1'} h={'full'} alignItems={'center'}>
            <Box flex={'1'} h={0} borderBottom={'2px solid'} borderColor={gridColor}></Box>
            <Box w={'10px'} h={'10px'} bg={gridColor} borderRadius={100}></Box>
          </Flex>
          <Flex alignItems={'center'}>
            <Popover trigger="hover" placement="auto">
              <PopoverTrigger>
                <Image
                  src={
                    colorMode === 'dark' ? '/images/partners/moonboots_dark.png' : '/images/partners/moonboots_logo.png'
                  }
                  alt="moonboots logo"
                  w={{ base: '200px', lg: '290px' }}
                  mx={{ base: 3, lg: '40px' }}
                />
              </PopoverTrigger>
              <LinkCard href={'https://moonbootscapital.io/'} name={'Moonboots'} websiteName={'moonbootscapital.io'} />
            </Popover>
          </Flex>
          <Flex w={{ base: '114px', md: '200px', lg: '20px' }} h={'full'} alignItems={'center'}>
            <Box w={'10px'} h={'10px'} bg={gridColor} borderRadius={100}></Box>
            <Box flex={'1'} h={0} borderBottom={'2px solid'} borderColor={gridColor}></Box>
          </Flex>
        </Flex>

        <Flex h={'100px'} order={{ base: 2, lg: 'unset' }}>
          <Flex w={{ base: '28px', md: '200px', lg: '254px' }} h={'full'} alignItems={'center'}>
            <Box flex={'1'} h={0} borderBottom={'2px solid'} borderColor={gridColor}></Box>
            <Box w={'10px'} h={'10px'} bg={gridColor} borderRadius={100}></Box>
          </Flex>
          <Flex alignItems={'center'}>
            <Popover trigger="hover" placement="auto">
              <PopoverTrigger>
                <Image
                  src={'/images/partners/near_logo.png'}
                  alt="near logo"
                  w={{ base: '130px', lg: '215px' }}
                  mx={{ base: 3, lg: '40px' }}
                  bg={colorMode === 'dark' ? 'white' : 'transparent'}
                />
              </PopoverTrigger>
              <LinkCard href={'https://near.org/'} name={'Near'} websiteName={'near.org'} />
            </Popover>
          </Flex>
          <Flex flex={'1'} h={'full'} alignItems={'center'}>
            <Box w={'10px'} h={'10px'} bg={gridColor} borderRadius={100}></Box>
            <Box flex={'1'} h={0} borderBottom={'2px solid'} borderColor={gridColor}></Box>
          </Flex>
        </Flex>
      </Flex>
      {/* Logos grid end*/}
    </Box>
  );
};
