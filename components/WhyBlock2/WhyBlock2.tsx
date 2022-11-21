import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';

export const WhyBlock2 = () => (
  <Box minH={'100vh'} id="tech">
    <Flex h={600}>
      <Box flex="1">
        <Box w={'full'} borderBottom={'3px solid'} borderColor={'brand.green'}>
          <Heading as="h2" fontSize="32px" lineHeight="40px" fontWeight="800" pl={205} pt={75}>
            <Text as={'span'} color="brand.green">
              The Future{' '}
            </Text>
            of Sustainable Construction
          </Heading>
        </Box>
        <Text textAlign={'justify'} fontSize="18px" lineHeight="23px" fontWeight="500" pl={205} pt={'56px'} pr={43}>
          You care about the environment and so do we so we make products that reflect that ethos. The recyclability of
          all materials, components, and systems has gained an increased international emphasis with the introduction of
          carbon credits and net zero building standards in recent years.
          <br />
          <br />
          At GreenBlox, we're building sustainable panels but will also be introducing an ECO line made specifically
          from soy beans. With the emergence of natural fibers as alternatives to synthetic, we're looking to build some
          of the most eco friendly and resilient building products the planet has ever seen.
        </Text>
      </Box>
      <Box bg="brand.green" w={690}></Box>
    </Flex>
    <Image src="/images/why_block2.png" width={'full'} alt="why blockchain" />
  </Box>
);
