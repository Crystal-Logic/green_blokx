import { Switch, Center, Flex, Grid, GridItem, Image, Select, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export const Main = () => {
  return (
    <Grid minH="100vh" templateRows="repeat(3, 1fr)" templateColumns="repeat(15, 1fr)" gap={0}>
      <GridItem colSpan={1} rowSpan={3} bg="white" w={100}>
        <Grid h="100%" w={100} templateRows="repeat(3, 1fr)" templateColumns="repeat(1, 1fr)" gap={0}>
          <GridItem colSpan={1} rowSpan={1}>
            <Center pt={'30px'} pr={'5px'} pl={'5px'}>
              <Image src="/images/logo.png" width={80} height={92.41} alt="logo" />
            </Center>
          </GridItem>
          <GridItem colSpan={1} rowSpan={1} alignItems="center" justifyContent="center" display="flex" w="inherit">
            <Text
              sx={{
                transform: 'rotate(271deg)',
                'line-height': '25px',
                whiteSpace: 'nowrap',
              }}
              fontWeight="400"
              fontSize="20px"
              _hover={{
                color: 'red.700',
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
                backgroundImage={'/images/green_button.png'}
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
        bg={`linear-gradient(0deg, rgba(43, 43, 43, 0.8), rgba(43, 43, 43, 0.8)), url(/images/background.png)`}
        colSpan={14}
        rowSpan={3}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Grid h="100%" templateRows="repeat(3, 1fr)" templateColumns="repeat(3, 1fr)" gap={0}>
          <GridItem colSpan={1} rowSpan={1} display="flex"></GridItem>

          <GridItem colSpan={1} rowSpan={1} pt={'50px'} justifyContent={'center'}></GridItem>
          <GridItem colSpan={1} rowSpan={1} display="flex" pt={'50px'} justifyContent={'center'}>
            <Switch size="lg" mr={30} />
            <Select size="xs" w={'60px'}>
              <option value="EN" selected>
                EN
              </option>
              <option value="RO">RO</option>
            </Select>
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
              <Text color="brand.green" fontWeight="900">
                GREENBLOKX
              </Text>
            </Text>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};
