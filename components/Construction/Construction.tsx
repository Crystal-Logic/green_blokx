import { Box, Heading, Text, Image, Hide } from '@chakra-ui/react';

export const Construction = () => (
  <Box id="about_us">
    <Box w={'full'} pl={['20px', null, null, '205px']} pt={['62px', null, '88px']}>
      <Heading
        as="h2"
        fontSize={{ base: '25px', md: '32px' }}
        lineHeight={{ base: '31px', md: '40px' }}
        fontWeight="800"
        pb={['21px', null, '41px']}
      >
        Intelligent{' '}
        <Hide above="md">
          <br />
        </Hide>
        Construction Design{' '}
        <Hide above="xl">
          <br />
        </Hide>
        for a{' '}
        <Text as={'span'} color="brand.green">
          Greener Future
        </Text>
      </Heading>
      <Text
        fontSize={{ base: '14px', md: '22px' }}
        lineHeight={{ base: '18px', md: '28px' }}
        fontWeight="500"
        pb={['21px', null, '41px']}
      >
        Tokenized{' '}
        <Text as={'span'} color="brand.green">
          Eco Panel
        </Text>{' '}
        Manufacturing
      </Text>
    </Box>
    <Image
      src="/images/video_placeholder.webp"
      w={'full'}
      h={{ base: '235px', md: '625px' }}
      alt="construction video"
    />
  </Box>
);
