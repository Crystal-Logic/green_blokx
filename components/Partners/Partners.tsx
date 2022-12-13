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
import { CubeGif } from 'components/CubeGif/CubeGif';

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
        <Text className={'custom_pointer-cursor'}>
          {websiteName} <ExternalLinkIcon w={'21px'} h={'21px'} mx="2px" className={'custom_pointer-cursor'} />
        </Text>
      </Link>
    </PopoverContent>
  );
};

export const Partners = () => {
  const gridColor = useColorModeValue('brand.dark', 'white');
  const { colorMode } = useColorMode();

  return (
    <Box id="partners" pb={{ base: '50px', lg: '100px' }} position={'relative'}>
      <Flex pl={{ base: 10, lg: 44 }} position={'relative'} zIndex={10}>
        <Heading
          as="h2"
          fontSize={{ base: '28px', md: '50px' }}
          lineHeight={{ base: '35px', md: '62px' }}
          fontWeight="600"
        >
          Partners
        </Heading>
      </Flex>

      {/* Logos grid */}
      <Flex w={'full'} h={'full'} direction={'column'}>
        <Flex h={'100px'} mt={{ base: '27px', lg: '51px' }} order={{ base: 1, lg: 'unset' }}>
          <Flex w={{ base: '57px', lg: '25%' }} h={'full'} alignItems={'center'}>
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
                  className={'custom_pointer-cursor'}
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
                  className={'custom_pointer-cursor'}
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
                  className={'custom_pointer-cursor'}
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
      </Flex>
      {/* Logos grid end*/}
      <CubeGif
        position={'absolute'}
        w={{ base: 16, lg: 32 }}
        h={{ base: 16, lg: 32 }}
        top={{ base: '20px', lg: '-30px' }}
        left={{ base: '-23px', lg: '-33px' }}
        transform={'rotate(13.25deg)'}
      />
    </Box>
  );
};
