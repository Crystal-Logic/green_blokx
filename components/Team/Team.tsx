import { useRef } from 'react';
import { Box, Heading, Text, Flex, Image, Button, Link } from '@chakra-ui/react';
import { Swiper as SwiperType, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

export const Team = () => {
  const swiperRef = useRef<SwiperType>();

  return (
    <Box id="team" minH={'1110px'} pt={'53px'} mb={'93px'}>
      <Box h={'full'} w={'full'} position={'relative'}>
        <Flex h={'100px'} w={'full'} pl={'205px'} position={'absolute'} zIndex={10}>
          <Flex flex={'1'} alignItems={'center'}>
            <Box h={'0px'} w={'full'} borderBottom={'3px solid'} borderColor={'brand.green'}></Box>
          </Flex>
          <Flex w={'290px'} bg="brand.green" alignItems={'center'} pl={'43px'}>
            <Heading as="h2" fontSize="32px" lineHeight="40px" fontWeight="500">
              Team
            </Heading>
          </Flex>
        </Flex>

        {/* Slider frame */}

        <Box h={'630px'} w={'full'} pl={'205px'} position={'absolute'} top={'76px'}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
              el: '.team-pagination',
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            <SwiperSlide>
              <Flex h={'630px'} w={'full'}>
                <Image
                  src="/images/team/daniel_pal.png"
                  alt="Daniel Pal"
                  h={'full'}
                  w={'520px'}
                  filter={'grayscale(1)'}
                  pointerEvents={'none'}
                />
                <Box flex={'1'} pl={'42px'}>
                  <Text
                    mt={'350px'}
                    fontSize="32px"
                    lineHeight="40px"
                    fontWeight="700"
                    display={'flex'}
                    alignItems={'center'}
                  >
                    Daniel Pal{' '}
                    <Link href={'https://www.linkedin.com/'} isExternal>
                      <Image src="/images/linkedin_logo.png" alt="linkedin logo" h={'30px'} w={'30px'} ml={'10px'} />
                    </Link>
                  </Text>
                  <Text fontSize="24px" lineHeight="30px" fontWeight="500" color={'brand.green'} pt={'21px'}>
                    Chief Executive Officer
                  </Text>
                  <Text fontSize="18px" lineHeight="23px" fontWeight="400" pt={'35px'}>
                    Florin holds a Master's Degree in Chemistry from the West University of Timișoara with 10+ years of
                    experience in Flexible and Rigid PU Foam synthesis and processing...{' '}
                    <Text as={'span'} color={'brand.red'}>
                      read more
                    </Text>
                  </Text>
                </Box>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex h={'630px'} w={'full'}>
                <Image
                  src="/images/team/matt_haynes.png"
                  alt="Matt Haynes"
                  h={'full'}
                  w={'520px'}
                  filter={'grayscale(1)'}
                />
                <Box flex={'1'} pl={'42px'}>
                  <Text
                    mt={'350px'}
                    fontSize="32px"
                    lineHeight="40px"
                    fontWeight="700"
                    display={'flex'}
                    alignItems={'center'}
                  >
                    Matt Haynes{' '}
                    <Link href={'https://www.linkedin.com/'} isExternal>
                      <Image src="/images/linkedin_logo.png" alt="linkedin logo" h={'30px'} w={'30px'} ml={'10px'} />
                    </Link>
                  </Text>
                  <Text fontSize="24px" lineHeight="30px" fontWeight="500" color={'brand.green'} pt={'21px'}>
                    Chief Executive Officer
                  </Text>
                  <Text fontSize="18px" lineHeight="23px" fontWeight="400" pt={'35px'}>
                    Florin holds a Master's Degree in Chemistry from the West University of Timișoara with 10+ years of
                    experience in Flexible and Rigid PU Foam synthesis and processing...{' '}
                    <Text as={'span'} color={'brand.red'}>
                      read more
                    </Text>
                  </Text>
                </Box>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex h={'630px'} w={'full'}>
                <Image
                  src="/images/team/john_sears.png"
                  alt="John Sears"
                  h={'full'}
                  w={'520px'}
                  filter={'grayscale(1)'}
                  objectFit="cover"
                />
                <Box flex={'1'} pl={'42px'}>
                  <Text
                    mt={'350px'}
                    fontSize="32px"
                    lineHeight="40px"
                    fontWeight="700"
                    display={'flex'}
                    alignItems={'center'}
                  >
                    John Sears{' '}
                    <Link href={'https://www.linkedin.com/'} isExternal>
                      <Image src="/images/linkedin_logo.png" alt="linkedin logo" h={'30px'} w={'30px'} ml={'10px'} />
                    </Link>
                  </Text>
                  <Text fontSize="24px" lineHeight="30px" fontWeight="500" color={'brand.green'} pt={'21px'}>
                    Chief Executive Officer
                  </Text>
                  <Text fontSize="18px" lineHeight="23px" fontWeight="400" pt={'35px'}>
                    Florin holds a Master's Degree in Chemistry from the West University of Timișoara with 10+ years of
                    experience in Flexible and Rigid PU Foam synthesis and processing...{' '}
                    <Text as={'span'} color={'brand.red'}>
                      read more
                    </Text>
                  </Text>
                </Box>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex h={'630px'} w={'full'}>
                <Image
                  src="/images/team/florin_tudor.png"
                  alt="Florin Tudor"
                  h={'full'}
                  w={'520px'}
                  filter={'grayscale(1)'}
                />
                <Box flex={'1'} pl={'42px'}>
                  <Text
                    mt={'350px'}
                    fontSize="32px"
                    lineHeight="40px"
                    fontWeight="700"
                    display={'flex'}
                    alignItems={'center'}
                  >
                    Florin Tudor{' '}
                    <Link href={'https://www.linkedin.com/'} isExternal>
                      <Image src="/images/linkedin_logo.png" alt="linkedin logo" h={'30px'} w={'30px'} ml={'10px'} />
                    </Link>
                  </Text>
                  <Text fontSize="24px" lineHeight="30px" fontWeight="500" color={'brand.green'} pt={'21px'}>
                    Chief Executive Officer
                  </Text>
                  <Text fontSize="18px" lineHeight="23px" fontWeight="400" pt={'35px'}>
                    Florin holds a Master's Degree in Chemistry from the West University of Timișoara with 10+ years of
                    experience in Flexible and Rigid PU Foam synthesis and processing...{' '}
                    <Text as={'span'} color={'brand.red'}>
                      read more
                    </Text>
                  </Text>
                </Box>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex h={'630px'} w={'full'}>
                <Image
                  src="/images/team/vlad_arama.png"
                  alt="Vlad Arama"
                  h={'full'}
                  w={'520px'}
                  filter={'grayscale(1)'}
                />
                <Box flex={'1'} pl={'42px'}>
                  <Text
                    mt={'350px'}
                    fontSize="32px"
                    lineHeight="40px"
                    fontWeight="700"
                    display={'flex'}
                    alignItems={'center'}
                  >
                    Vlad Arama{' '}
                    <Link href={'https://www.linkedin.com/'} isExternal>
                      <Image src="/images/linkedin_logo.png" alt="linkedin logo" h={'30px'} w={'30px'} ml={'10px'} />
                    </Link>
                  </Text>
                  <Text fontSize="24px" lineHeight="30px" fontWeight="500" color={'brand.green'} pt={'21px'}>
                    Chief Executive Officer
                  </Text>
                  <Text fontSize="18px" lineHeight="23px" fontWeight="400" pt={'35px'}>
                    Florin holds a Master's Degree in Chemistry from the West University of Timișoara with 10+ years of
                    experience in Flexible and Rigid PU Foam synthesis and processing...{' '}
                    <Text as={'span'} color={'brand.red'}>
                      read more
                    </Text>
                  </Text>
                </Box>
              </Flex>
            </SwiperSlide>
          </Swiper>
          <Flex
            h={'40px'}
            w={'240px'}
            justifyContent={'space-between'}
            alignItems={'center'}
            position={'absolute'}
            top={'145px'}
            left={'770px'}
            zIndex={15}
          >
            <Box
              as="button"
              onClick={() => swiperRef.current?.slidePrev()}
              h={'40px'}
              w={'40px'}
              border="1px solid transparent"
              position={'relative'}
              _hover={{ borderColor: 'brand.green' }}
            >
              <Box
                position={'absolute'}
                h={'15px'}
                w={'15px'}
                top={'12px'}
                left={'14px'}
                borderColor={'brand.green'}
                borderWidth={'2px 2px 0 0'}
                sx={{ transform: 'rotate(-135deg)' }}
              ></Box>
            </Box>
            <Box
              className="team-pagination"
              flex={'1'}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              mx={'20px'}
              sx={{
                '.swiper-pagination-bullet': {
                  width: '15px',
                  height: '15px',
                  background: 'rgba(58, 174, 5, 0.1)',
                  opacity: 'unset',
                },
                '.swiper-pagination-bullet-active': {
                  width: '20px',
                  height: '20px',
                  background: 'rgba(210, 87, 87, 0.81)',
                },
              }}
            ></Box>
            <Box
              as="button"
              onClick={() => swiperRef.current?.slideNext()}
              h={'40px'}
              w={'40px'}
              border="1px solid transparent"
              position={'relative'}
              _hover={{ borderColor: 'brand.green' }}
            >
              <Box
                position={'absolute'}
                h={'15px'}
                w={'15px'}
                top={'12px'}
                right={'14px'}
                borderColor={'brand.green'}
                borderWidth={'0 0 2px 2px'}
                sx={{ transform: 'rotate(-135deg)' }}
              ></Box>
            </Box>
          </Flex>
        </Box>

        {/* Slider frame end  */}

        <Flex h={'106px'} w={'full'} position={'absolute'} top={'600px'}>
          <Flex w={'160px'} bg="brand.green">
            <Image
              src="/images/logo_white.png"
              alt="logo white"
              position={'absolute'}
              left={'10px'}
              top={'8px'}
              h={'88px'}
            />
          </Flex>
          <Flex w={'580px'}></Flex>
          <Flex flex={'1'}>
            <Box h={'full'} w={'full'} borderBottom={'3px solid'} borderColor={'brand.green'}></Box>
          </Flex>
        </Flex>
        <Box position={'absolute'} top={'800px'}>
          <Button
            variant="outline"
            color="brand.green"
            colorScheme={'brand.green'}
            borderRadius="none"
            borderWidth="2px 2px 2px 0px"
            h={'135px'}
            minW={'815px'}
            fontSize="32px"
            lineHeight="40px"
            fontWeight="500"
            position={'relative'}
            _hover={{
              color: 'brand.red',
              colorScheme: 'brand.red',
              bg: 'transparent',
            }}
          >
            <Text as={'span'} position={'absolute'} right={'85px'}>
              Contact us
            </Text>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
