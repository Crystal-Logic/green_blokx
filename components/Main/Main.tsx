import { Switch, Center, Flex, Grid, GridItem, Image, Select, Text, useColorMode, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export const Main = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Grid minH="100vh" templateRows="repeat(3, 1fr)" templateColumns="repeat(15, 1fr)" gap={0}>
      <GridItem colSpan={1} rowSpan={3} w={100}>
        <Grid h="100%" w={100} templateRows="repeat(3, 1fr)" templateColumns="repeat(1, 1fr)" gap={0}>
          <GridItem colSpan={1} rowSpan={1}>
            <Center pt={'30px'} pr={'5px'} pl={'5px'}>
              <Image src="/images/logo.png" width={'80px'} height={'92px'} alt="logo" />
            </Center>
          </GridItem>
          <GridItem colSpan={1} rowSpan={1} alignItems="center" justifyContent="center" display="flex" w="inherit">
            <Text
              sx={{
                transform: 'rotate(271deg)',
                lineHeight: '25px',
                whiteSpace: 'nowrap',
              }}
              fontWeight="400"
              fontSize="20px"
              _hover={{
                color: 'brand.red',
              }}
            >
              Contact us
            </Text>
          </GridItem>
          <GridItem colSpan={1} rowSpan={1} alignItems="center" justifyContent="center" display="flex">
            <Link href={'/menu'}>
              <Center
                as={'button'}
                width={35}
                height={35}
                backgroundImage={'/images/green_button1.png'}
                backgroundSize="cover"
                _hover={{
                  backgroundImage: '/images/red_button.png',
                }}
              />
            </Link>
          </GridItem>
        </Grid>
      </GridItem>

      <GridItem
        bg={`linear-gradient(0deg, rgba(43, 43, 43, 0.75), rgba(43, 43, 43, 0.75)), url(/images/background.png)`}
        colSpan={14}
        rowSpan={3}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Grid h="100%" templateRows="repeat(3, 1fr)" templateColumns="repeat(3, 1fr)" gap={0}>
          <GridItem colSpan={1} rowSpan={1} display="flex"></GridItem>

          <GridItem colSpan={1} rowSpan={1} pt={'50px'} justifyContent={'center'}></GridItem>
          <GridItem colSpan={1} rowSpan={1} display="flex" pt={'50px'} justifyContent={'center'}>
            <VStack mr={30}>
              <Switch onChange={toggleColorMode} isChecked={colorMode === 'dark'} size="lg" />
              <Text fontSize="14px" lineHeight="25px" fontWeight="700" color={'white'}>
                {colorMode === 'dark' ? 'Light' : 'Dark'} mode
              </Text>
            </VStack>
            {/* <Select size="xs" w={'60px'}>
              <option value="EN" selected>
                EN
              </option>
              <option value="RO">RO</option>
            </Select> */}
          </GridItem>

          <GridItem colSpan={3} rowSpan={1}>
            <Flex>
              <Text
                fontSize="54px"
                color="white"
                justifyContent="bottom"
                alignItems="bottom"
                display="flex"
                pl={'105px'}
                fontWeight="500"
              >
                The World`s first tokenized <br /> ECO factory
              </Text>
            </Flex>
            <Text
              fontSize="25px"
              justifyContent="bottom"
              alignItems="bottom"
              display="flex"
              pl={'105px'}
              color="white"
              fontWeight="900"
            >
              BY&nbsp;
              <Text as={'span'} color="brand.green" fontWeight="900">
                GREENBLOKX
              </Text>
            </Text>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};
