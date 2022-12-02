import { Box, Heading, Text, Image, Hide } from '@chakra-ui/react';

export const Construction = () => (
  <Box id="about_us">
    <Box w={'full'} pl={{ base: 5, lg: 205 }} pt={{ base: 12, lg: 24 }}>
      <Heading
        as="h2"
        fontSize={{ base: '25px', md: '32px' }}
        lineHeight={{ base: '31px', md: '40px' }}
        fontWeight="800"
        pb={{ base: 5, xl: 0 }}
        display={'flex'}
        w={'full'}
      >
        <Text as={'span'} w={{ base: 'full', xl: 'auto' }}>
          Intelligent{' '}
          <Hide above="md">
            <br />
          </Hide>
          Construction Design&nbsp;
        </Text>
        for a
        <Text
          as={'span'}
          color="brand.green"
          flex={'1'}
          ml={{ base: 2 }}
          borderBottom={'3px solid'}
          borderColor={'brand.green'}
        >
          Greener Future
        </Text>
      </Heading>
      <Text
        fontSize={{ base: '14px', md: '22px' }}
        lineHeight={{ base: '18px', md: '28px' }}
        fontWeight="500"
        pb={{ base: 10 }}
      >
        Tokenized{' '}
        <Text as={'span'} color="brand.green">
          Eco Panel
        </Text>{' '}
        Manufacturing
      </Text>
    </Box>
    <Image src="/images/video_placeholder.webp" w={'full'} maxH={{ base: 235, md: 625 }} alt="construction video" />
  </Box>
);
