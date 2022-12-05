import { Box, Heading, Text, Flex, Image, Hide, useColorModeValue } from '@chakra-ui/react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const images = [
  {
    src: '/images/why_block/1-5.svg',
    srcMin: '/images/why_block/1-5min.svg',
    alt: '1-5',
  },
  {
    src: '/images/why_block/2-5.svg',
    srcMin: '/images/why_block/2-5min.svg',
    alt: '2-5',
  },
  {
    src: '/images/why_block/3-5.svg',
    srcMin: '/images/why_block/3-5min.svg',
    alt: '3-5',
  },
  {
    src: '/images/why_block/4-5.svg',
    srcMin: '/images/why_block/4-5min.svg',
    alt: '4-5',
  },
  {
    src: '/images/why_block/5-5.svg',
    srcMin: '/images/why_block/5-5min.svg',
    alt: '5-5',
  },
];

export const WhyBlock = () => {
  const arrowImg = useColorModeValue('/images/arrows.svg', '/images/arrows_white.svg');

  return (
    <Box id="why_blockchain" mb={20}>
      <Flex h={{ base: '60px', md: '80px' }} bg="brand.green" justifyContent={'center'} alignItems={'center'}>
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
        pl={{ base: 5, xl: 52 }}
        pr={{ base: 5, xl: 44 }}
        pb={{ base: 3, md: 0 }}
      >
        <Text
          w={{ base: 'full', md: '50%' }}
          fontSize={{ base: '14px', md: '18px' }}
          lineHeight={{ base: '18px', md: '23px' }}
          fontWeight="500"
          mr={{ base: 0, md: 7 }}
        >
          Blockchain is a term for a distributed ledger system that uses encryption to maintain integrity.
          <br />
          <br />
          We aim to create a transparent database from source of raw materials right up to logistics and transportation,
          automising the process and later creating an on chain payment solution for GreenBLOKX products through our
          platform.
        </Text>
        <Hide below="sm">
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
        w={{ base: 'full' }}
        mt={{ md: '52px' }}
        pl={{ base: 0, xl: 52 }}
        direction={{ base: 'column-reverse', md: 'row' }}
        overflow={'hidden'}
        position={{ base: 'unset', xl: 'relative' }}
      >
        <Flex
          className="wb-pagination"
          position={{ base: 'unset', xl: 'absolute' }}
          left={{ base: 'unset', lg: '0', xl: '200px !important' }}
          zIndex={20}
          h={'full'}
          w={{ lg: '90px' }}
          direction={{ base: 'row', md: 'column' }}
          justifyContent={'space-between'}
          fontFamily={'Montserrat'}
          textAlign={{ base: 'center', md: 'end' }}
          pt={{ base: '10px', md: 0 }}
          pl={{ md: 5 }}
          sx={{
            '.swiper-pagination-bullet': {
              width: '100%',
              height: '80px',
              opacity: 'unset',
              background: 'transparent',
              fontWeight: '300',
              fontSize: { base: '18px', md: '32px' },
              lineHeight: { base: '22px', md: '39px' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: { base: 'center', md: 'unset' },
              cursor: 'url(/images/cursor_pointer-green.png) 16 16, auto',
            },
            '.swiper-pagination-bullet:before': {
              content: '""',
              background: `url(${arrowImg})`,
              backgroundRepeat: 'no-repeat',
              width: { base: '16px', md: '26px' },
              height: { base: '13px', md: '23px' },
              display: 'block',
              mr: 1,
            },
            '.swiper-pagination-bullet-active': {
              height: '80px',
              color: 'brand.green',
              fontWeight: '500',
              fontSize: { base: '32px', md: '60px' },
              lineHeight: { base: '39px', md: '73px' },
            },
            '.swiper-pagination-bullet-active:before': {
              content: '""',
              display: 'none',
            },
          }}
        ></Flex>
        <Box flex={'1'} w={{ base: 'full' }} h={'full'}>
          <Swiper
            modules={[Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{
              el: '.wb-pagination',
              clickable: true,
              renderBullet: (index, className) => {
                return '<div class="' + className + '">' + '0' + (index + 1) + '</div>';
              },
            }}
          >
            {images.map(({ src, srcMin, alt }) => (
              <SwiperSlide
                key={src}
                style={{ display: 'flex', justifyContent: 'center', height: 'auto', alignItems: 'center' }}
              >
                <>
                  <Hide below="sm">
                    <Image
                      src={src}
                      w={'full'}
                      h={{ base: '360px', md: '431px' }}
                      pl={{ base: 0, md: '22px' }}
                      alt={alt}
                      objectFit={'contain'}
                      align={'bottom'}
                    />
                  </Hide>
                  <Hide above="md">
                    <Image src={srcMin} pl={{ base: 0, md: '22px' }} alt={alt} objectFit={'contain'} align={'bottom'} />
                  </Hide>
                </>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Flex>
      <Hide above="md">
        <Flex
          w={'full'}
          pt={{ base: 5, md: '68px' }}
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
