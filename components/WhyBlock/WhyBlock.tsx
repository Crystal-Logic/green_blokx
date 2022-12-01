import { Box, Heading, Text, Flex, Image, SimpleGrid, Hide } from '@chakra-ui/react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const images = [
  {
    src: '/images/video_placeholder.png',
    alt: 'construction video',
  },
  {
    src: 'https://picsum.photos/900/400?random=1',
    alt: 'random 1',
  },
  {
    src: 'https://picsum.photos/900/400?random=2',
    alt: 'random 2',
  },
  {
    src: 'https://picsum.photos/900/400?random=3',
    alt: 'random 3',
  },
  {
    src: 'https://picsum.photos/900/400?random=4',
    alt: 'random 4',
  },
];

export const WhyBlock = () => {
  return (
    <Box id="why_blockchain" mb={'107px'}>
      <Flex h={{ base: '60px', md: '87px' }} bg="brand.green" justifyContent={'center'} alignItems={'center'}>
        <Heading
          as="h2"
          fontSize={{ base: '25px', md: '32px' }}
          lineHeight={{ base: '31px', md: '40px' }}
          fontWeight="500"
          color={'white'}
        >
          Why Blockchain?
        </Heading>
      </Flex>

      <Flex
        w={'full'}
        pt={{ base: '32px', md: '68px' }}
        pl={{ base: '20px', md: '225px' }}
        pr={{ base: '20px', md: '182px' }}
        pb={{ base: '42px', md: 0 }}
      >
        <Text
          w={{ base: 'full', md: '50%' }}
          fontSize={{ base: '14px', md: '18px' }}
          lineHeight={{ base: '18px', md: '23px' }}
          fontWeight="500"
        >
          Blockchain is a term for a distributed ledger system that uses encryption to maintain integrity.
          <br />
          <br />
          We aim to create a transparent database from source of raw materials right up to logistics and transportation,
          automising the process and later creating an on chain payment solution for GreenBLOKX products through our
          platform.
        </Text>
        <Hide below="md">
          <Text w={'50%'} fontSize="18px" lineHeight="23px" fontWeight="500">
            By using blockchain and automation we can prevent human clerical errors, avoid data loss due to malicious
            actors, create more effective tracking systems, and auditable records for token holders, customers, and
            suppliers.
            <br />
            <br />
            Our revenue shares are also represented by tokens (digital fractions).
          </Text>
        </Hide>
      </Flex>

      <Flex
        h={{ base: '370px', md: '431px' }}
        w={'full'}
        mt={'52px'}
        pl={{ base: 0, md: '225px' }}
        pr={{ base: 0, md: '182px' }}
        direction={{ base: 'column-reverse', md: 'row' }}
      >
        <Flex
          className="wb-pagination"
          h={'full'}
          w={'full'}
          flex={'1'}
          direction={{ base: 'row', md: 'column' }}
          justifyContent={'space-between'}
          fontFamily={'Montserrat'}
          textAlign={{ base: 'center', md: 'end' }}
          pt={{ base: '10px', md: 0 }}
          sx={{
            '.swiper-pagination-bullet': {
              width: '100%',
              height: '40px',
              opacity: 'unset',
              background: 'transparent',
              fontWeight: '300',
              fontSize: { base: '18px', md: '32px' },
              lineHeight: { base: '22px', md: '39px' },
            },
            '.swiper-pagination-bullet-active': {
              height: '80px',
              color: 'brand.green',
              fontWeight: '500',
              fontSize: { base: '32px', md: '60px' },
              lineHeight: { base: '39px', md: '73px' },
            },
          }}
        ></Flex>
        <Box w={{ base: 'full', md: '942px' }} h={'full'}>
          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
              el: '.wb-pagination',
              clickable: true,
              renderBullet: (index, className) => {
                return '<div class="' + className + '">' + '0' + (index + 1) + '</div>';
              },
            }}
          >
            {images.map(({ src, alt }) => (
              <SwiperSlide key={src}>
                <Image
                  src={src}
                  w={'full'}
                  h={{ base: '360px', md: '431px' }}
                  pl={{ base: 0, md: '22px' }}
                  alt={alt}
                  objectFit={'cover'}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Flex>
      <Hide above="md">
        <Flex
          w={'full'}
          pt={{ base: 0, md: '68px' }}
          pl={{ base: '20px', md: '225px' }}
          pr={{ base: '20px', md: '182px' }}
          pb={{ base: '42px', md: 0 }}
        >
          <Text
            w={{ base: 'full', md: '50%' }}
            fontSize={{ base: '14px', md: '18px' }}
            lineHeight={{ base: '18px', md: '23px' }}
            fontWeight="500"
          >
            By using blockchain and automation we can prevent human clerical errors, avoid data loss due to malicious
            actors, create more effective tracking systems, and auditable records for token holders, customers, and
            suppliers.
            <br />
            <br />
            Our revenue shares are also represented by tokens (digital fractions).
          </Text>
        </Flex>
      </Hide>
    </Box>
  );
};
