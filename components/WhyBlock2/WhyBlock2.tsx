import { Box, Flex, Heading, Text, Image, Hide, useColorModeValue } from '@chakra-ui/react';

export const WhyBlock2 = () => {
  const activeBorderColor = useColorModeValue('white', 'brand.dark');

  return (
    <Box>
      <Flex direction={{ base: 'column', md: 'row' }}>
        <Box flex="1">
          <Box w={{ base: '60%', md: 'full' }} borderBottom={'3px solid'} borderColor={'brand.green'}>
            <Heading
              as="h2"
              fontSize={{ base: '25px', md: '32px' }}
              lineHeight={{ base: '31px', md: '39px' }}
              fontWeight={{ base: '500', md: '800' }}
              pl={{ base: 5, md: 10, xl: 52 }}
              pt={{ base: 0, lg: 16 }}
            >
              <Text as={'span'} color="brand.green">
                The Future{' '}
              </Text>
              of Sustainable Construction
            </Heading>
          </Box>
          <Text
            fontSize={{ base: '14px', md: '18px' }}
            lineHeight={{ base: '18px', md: '23px' }}
            fontWeight="500"
            pl={{ base: 5, md: 10, xl: 52 }}
            pt={{ base: 5, md: '56px' }}
            pr={{ base: 5, md: '43px' }}
            pb={{ base: '30px', md: 0 }}
          >
            You care about the environment and so do we so we make products that reflect that ethos.
            <Hide above="md">
              <br />
              <br />
            </Hide>
            The recyclability of all materials, components, and systems has gained an increased international emphasis
            with the introduction of carbon credits and net zero building standards in recent years.
            <Hide below="md">
              <br />
              <br />
              At GreenBlox, we're building sustainable panels but will also be introducing an ECO line made specifically
              from soy beans. With the emergence of natural fibers as alternatives to synthetic, we're looking to build
              some of the most eco friendly and resilient building products the planet has ever seen.
            </Hide>
          </Text>
        </Box>
        <Box bg="brand.green" w={{ base: 'full', md: '50%' }} pt={{ base: 0 }}>
          <Flex justifyContent={'center'} color="white" my={10}>
            <Image src="/images/logo_white.png" alt="logo white" h={{ base: '77px', md: '103px' }} />
          </Flex>
          <Box w={'full'}>
            <Text
              fontSize={{ base: '14px', md: '18px' }}
              lineHeight={{ base: '18px', md: '23px' }}
              fontWeight="500"
              px={{ base: '18px', md: '82px' }}
              pb={{ base: '25px', md: '32px' }}
              pt={{ base: '30px', md: 0 }}
              color="white"
            >
              GreenBlokx Sandwich Panels are{' '}
              <Text as={'span'} fontWeight="900">
                100% recyclable.
              </Text>
              <br />
              <br />
              We are able to re use the sheet metal separate the foam compound and bring it back to its liquid state to
              create a new and environmentally friendly zero waste product. Sandwich panels allow builders and
              architects to design more energy-efficient buildings by combining various construction methodologies into
              a single step making buildings not only more energy efficient, but faster, more affordable, and easier to
              assemble.
              <br />
              <br />
              Sustainability and performance should not be a tradeoff as it relates to renewable construction.
            </Text>
            {/* <Hide above="md"> */}
            <Box h={0} w={'full'} borderBottom={'3px solid '} borderColor={activeBorderColor} mb={16}></Box>
            {/* </Hide> */}
          </Box>
        </Box>
        <Hide above="md">
          <Text
            fontSize={{ base: '14px', md: '18px' }}
            lineHeight={{ base: '18px', md: '23px' }}
            fontWeight="500"
            pl={{ base: '20px', md: '205px' }}
            pt={{ base: '40px', md: '56px' }}
            pr={{ base: '20px', md: '43px' }}
            pb={{ base: '30px', md: 0 }}
          >
            At GreenBlox, we're building sustainable panels but will also be introducing an ECO line made specifically
            from soy beans. With the emergence of natural fibers as alternatives to synthetic, we're looking to build
            some of the most eco friendly and resilient building products the planet has ever seen.
          </Text>
        </Hide>
      </Flex>
      <Image src="/images/why_block2.webp" width={'full'} maxH={{ base: 700 }} objectFit="cover" alt="why blockchain" />
    </Box>
  );
};
