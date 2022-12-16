import { useRef } from 'react';
import { Box, Heading, Flex, Image, Hide, Button, useColorMode } from '@chakra-ui/react';
import { Swiper as SwiperType, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CubeGif } from 'components/CubeGif/CubeGif';

import { TeamSlide } from './TeamSlide';

const teamInfo = [
  {
    name: 'Daniel Pal',
    position: 'Chairman <wbr />| Co-Founder',
    linkdIn: 'https://www.linkedin.com/in/daniel-pal-19025a252/',
    photo: '/images/team/daniel_pal.png',
    description:
      'Daniel is a construction and tech entrepreneur with over 10+ Years of industrial, commercial and residential development as an acting CEO and Operations Officer. Daniel is a technology investor and Co-founded Moonboots Venture Capital where they successfully funded over 150+ Web3 start-ups and achieved an AUM of $100M in 2021. Dan excels in systems engineering and brings years of organizational experience, business structuring, and technology optimization.',
  },
  {
    name: 'Florin Tudor',
    position: 'Chief Executive Officer <wbr />| Co-Founder',
    linkdIn: 'https://www.linkedin.com/in/Florin-Tudor-a5969a121/',
    photo: '/images/team/florin_tudor.jpeg',
    description:
      "Florin holds a Master's Degree in Chemistry from the West University of Timișoara with 10+ years of experience in Flexible and Rigid PU Foam synthesis and processing, industrialization, and commercialization. Florin led growth in the revenue-leading sandwich panel manufacturer in Romania. He spent 3 years in Dubai in lead roles such as CTO, CBDO, and CQO for companies producing over 50M+ Revenue and employing 250+ Employees. Florin is an expert in the chemical composition of sandwich panels and product Q/A.",
  },
  {
    name: 'Vlad Arama',
    position: 'Chief Sales Officer <wbr />| Co-Founder',
    linkdIn: 'https://www.linkedin.com/in/vlad-alexandru-aram%C4%83-758794151/',
    photo: '/images/team/vlad_arama.jpeg',
    description:
      'Vlad Arama completed Thermal Installations studies in France. From 2009-2015 he was the CEO of a company he founded in the field of metallurgy (repairs and modernization of elevators) Working with some of the leading companies such as Kone & Schindler. At present he operates and owns a sandwich panel Re-distribution warehouse. Vlad has built a large network of sales associates and preferential partnerships with the largest construction companies in Romania and abroad in Europe. Vlad has worked in sales in the industry for many years and will lead the consumer-facing sales division.',
  },
  {
    name: 'Matt Haynes',
    position: 'Chief Blockchain Officer <wbr />| Co-Founder',
    linkdIn: 'https://www.linkedin.com/in/matthaynesblockchain/',
    photo: '/images/team/matt_haynes.jpg',
    description:
      'Matt Haynes is a serial web entrepreneur with a marketing and operations background. He also comes with significant experience in construction management systems and occupational health and safety providing him with an ideal hybrid of skill sets for this kind of startup. Matt, in addition to Dan, was also a Co-Founder at MoonBoots Capital and has worked in the structural organization for early-stage startups, equities, and Web3 venture capital. He brings a wealth of knowledge in operations, blockchain, and fundraising.',
  },
];

export const Team = () => {
  const swiperRef = useRef<SwiperType>();
  const { colorMode } = useColorMode();

  return (
    <Box id="team" minH={{ base: '600px', md: '450px', lg: '780px' }} pt={'53px'} pb={20}>
      <Box h={'full'} w={'full'} position={'relative'} pr={{ base: 5, lg: 24 }} zIndex={10}>
        <Flex justifyContent={{ base: 'start', md: 'end' }} mb={{ base: 7, lg: 10 }} pl={{ base: 10, lg: 'unset' }}>
          <Heading
            as="h2"
            fontSize={{ base: '28px', md: '50px' }}
            lineHeight={{ base: '35px', md: '62px' }}
            fontWeight="600"
          >
            Team
          </Heading>
        </Flex>

        <Flex position={{ base: 'relative', md: 'unset' }}>
          <Flex
            w={{ base: '71px', lg: '140px' }}
            alignItems={'end'}
            position={{ base: 'absolute', md: 'unset' }}
            top={'204px'}
          >
            <Box
              h={{ base: '66px', lg: '106px' }}
              w={{ base: '71px', lg: '140px' }}
              position={'relative'}
              bg="brand.green"
              zIndex={10}
            >
              <Image
                src="/images/logo_white.png"
                alt="logo white"
                position={'absolute'}
                left={{ lg: '6px' }}
                top={{ base: '5px', lg: '8px' }}
                h={{ base: '55px', lg: '88px' }}
                w={'auto'}
                objectFit={'cover'}
              />
            </Box>
          </Flex>

          {/* Slider frame */}

          <Box flex={'1'} pl={{ base: 0, xl: 5 }} position={'relative'} minW={0}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              pagination={{
                el: '.team-pagination',
              }}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {teamInfo.map(({ name, position, linkdIn, photo, description }) => (
                <SwiperSlide key={photo}>
                  <TeamSlide {...{ name, position, linkdIn, photo, description }} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* slide control bar */}
            <Flex
              h={'40px'}
              w={{ base: '150px', lg: '240px' }}
              justifyContent={'space-between'}
              alignItems={'center'}
              position={'absolute'}
              top={{ md: '300px', lg: '50px', xl: '145px' }}
              left={{ base: 'calc(50% - 75px)', lg: '470px', xl: '570px' }}
              zIndex={15}
            >
              <Hide below="lg">
                <Box
                  as="button"
                  onClick={() => swiperRef.current?.slidePrev()}
                  h={'40px'}
                  w={'40px'}
                  border="1px solid transparent"
                  position={'relative'}
                  _hover={{ borderColor: 'brand.green' }}
                  className={'custom_pointer-cursor'}
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
                    className={'custom_pointer-cursor'}
                  ></Box>
                </Box>
              </Hide>
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
              <Hide below="lg">
                <Box
                  as="button"
                  onClick={() => swiperRef.current?.slideNext()}
                  h={'40px'}
                  w={'40px'}
                  border="1px solid transparent"
                  position={'relative'}
                  _hover={{ borderColor: 'brand.green' }}
                  className={'custom_pointer-cursor'}
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
                    className={'custom_pointer-cursor'}
                  ></Box>
                </Box>
              </Hide>
            </Flex>
          </Box>
          {/* Slider frame end */}

          <CubeGif
            position={'absolute'}
            w={40}
            h={40}
            top={'-30px'}
            left={'40px'}
            display={{ base: 'none', lg: 'block' }}
          />
          <CubeGif position={'absolute'} w={32} h={32} bottom={'-20px'} left={'55%'} transform={'rotate(13.25deg)'} />
        </Flex>

        <Hide below="lg">
          <Flex mt={12} ml={'160px'}>
            <Button
              bg={'brand.green'}
              color={'white'}
              py={6}
              px={5}
              fontSize={{ base: '20px', md: '25px' }}
              lineHeight={{ base: '25px', md: '22px' }}
              fontWeight="400"
              h={'80px'}
              borderRadius={'12px'}
              _hover={{
                color: colorMode === 'dark' ? 'white' : 'brand.dark',
                bg: 'initial',
              }}
            >
              Contact us
            </Button>
          </Flex>
        </Hide>
      </Box>
    </Box>
  );
};
