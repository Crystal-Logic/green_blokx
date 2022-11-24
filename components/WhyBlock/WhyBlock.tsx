import { Box, Heading, Text, Flex, Image, SimpleGrid } from '@chakra-ui/react';

export const WhyBlock = () => {
  return (
    <Box id="why_blockchain" minH={'100vh'} mb={'107px'}>
      <Flex h={'87px'} bg="brand.green" justifyContent={'center'} alignItems={'center'}>
        <Heading as="h2" fontSize="32px" lineHeight="40px" fontWeight="500" color={'white'}>
          Why Blockchain?
        </Heading>
      </Flex>

      <SimpleGrid columns={2} spacing={2} w={'full'} pt={'68px'} pl={'225px'} pr={'182px'}>
        <Text fontSize="18px" lineHeight="23px" fontWeight="500">
          Blockchain is a term for a distributed ledger system that uses encryption to maintain integrity.
          <br />
          <br />
          We aim to create a transparent database from source of raw materials right up to logistics and transportation,
          automising the process and later creating an on chain payment solution for GreenBLOKX products through our
          platform.
        </Text>
        <Text fontSize="18px" lineHeight="23px" fontWeight="500">
          By using blockchain and automation we can prevent human clerical errors, avoid data loss due to malicious
          actors, create more effective tracking systems, and auditable records for token holders, customers, and
          suppliers.
          <br />
          <br />
          Our revenue shares are also represented by tokens (digital fractions).
        </Text>
      </SimpleGrid>

      <Flex h={'431px'} pt={'52px'} pl={'225px'} pr={'182px'}>
        <Box flex={'1'}></Box>
        <Image src="/images/video_placeholder.png" w={'942px'} h={'431px'} pl={'22px'} alt="construction video" />
      </Flex>
    </Box>
  );
};
