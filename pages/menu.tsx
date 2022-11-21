import { Center, Text, Grid, GridItem, Image, VStack, Box } from '@chakra-ui/react';
import Link from 'next/link';

const Menu = () => {
  return (
    <Grid h="100vh" templateRows="repeat(3, 1fr)" templateColumns="repeat(15, 1fr)" gap={0}>
      <GridItem colSpan={1} rowSpan={3} w={100}>
        {/* <Box> */}
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
                lineHeight: '25px',
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
            <Link href={'/'}>
              <Center
                as={'button'}
                width={35}
                height={35}
                backgroundImage={'/images/green_button2.png'}
                backgroundSize="cover"
                _hover={{
                  backgroundImage: '/images/red_button2.png',
                }}
              />
            </Link>
          </GridItem>
        </Grid>
        {/* </Box> */}
      </GridItem>

      <GridItem
        colSpan={14}
        rowSpan={3}
        backgroundImage={'/images/backgroundMenu.png'}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Grid h="full" templateRows="repeat(4, 1fr)" templateColumns="repeat(5, 1fr)" gap={0}>
          {/* <Box> */}
          <GridItem colSpan={2} rowSpan={1} display="flex" ml={'10px'}>
            <Text pt={'50px'} pl={'10px'} fontSize="30px" color="black" fontWeight="500">
              GreenBLOKX
            </Text>
          </GridItem>

          <GridItem colSpan={3} rowSpan={4} />

          <GridItem colSpan={2} rowSpan={2} ml={'10px'}>
            <VStack alignItems="baseline" ml={'70px'} align="center" spacing="25">
              <Link href={'/'}>
                <Text
                  fontSize="32px"
                  fontWeight="500"
                  lineHeight={'40px'}
                  color="black"
                  display="flex"
                  _hover={{ color: 'rgba(58, 174, 5, 1)' }}
                >
                  Home
                </Text>
              </Link>

              <Link href={'/#about_us'}>
                <Text
                  lineHeight={'40px'}
                  fontSize="32px"
                  fontWeight="500"
                  color="black"
                  display="flex"
                  _hover={{ color: 'rgba(58, 174, 5, 1)' }}
                >
                  About Us
                </Text>
              </Link>

              <Link href={'/'}>
                <Text
                  fontSize="32px"
                  lineHeight={'40px'}
                  fontWeight="500"
                  color="black"
                  display="flex"
                  _hover={{ color: 'rgba(58, 174, 5, 1)' }}
                >
                  Projects
                </Text>
              </Link>

              <Link href={'/'}>
                <Text
                  fontSize="32px"
                  lineHeight={'40px'}
                  fontWeight="500"
                  color="black"
                  display="flex"
                  _hover={{ color: 'rgba(58, 174, 5, 1)' }}
                >
                  Investors
                </Text>
              </Link>

              <Link href={'/'}>
                <Text
                  fontSize="32px"
                  lineHeight={'40px'}
                  fontWeight="500"
                  color="black"
                  display="flex"
                  _hover={{ color: 'rgba(58, 174, 5, 1)' }}
                >
                  Our team
                </Text>
              </Link>

              <Link href={'/'}>
                <Text
                  fontSize="32px"
                  lineHeight={'40px'}
                  fontWeight="500"
                  color="black"
                  display="flex"
                  _hover={{ color: 'rgba(58, 174, 5, 1)' }}
                >
                  Road map
                </Text>
              </Link>
            </VStack>
          </GridItem>
          <GridItem colSpan={2} rowSpan={1} ml={'10px'}></GridItem>
          {/* </Box> */}
        </Grid>
      </GridItem>
    </Grid>
  );
};
export default Menu;
