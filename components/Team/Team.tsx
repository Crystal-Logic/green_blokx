import { useRef, useState } from 'react';
import { Box, Heading, Text, Flex, Image, Link, Button, Hide } from '@chakra-ui/react';
import { Swiper as SwiperType, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const teamInfo = [
  {
    name: 'Daniel Pal',
    position: 'Chairman',
    linkdIn: 'https://www.linkedin.com/in/daniel-pal-19025a252/',
    photo: '/images/team/daniel_pal.png',
    description:
      'Daniel is a construction and tech entrepreneur with over 10+ Years of industrial, commercial and residential development as an acting CEO and Operations Officer. Daniel is a technology investor and Co-founded Moonboots Venture Capital where they successfully funded over 150+ Web3 start-ups and achieved an AUM of $100M in 2021. Dan excels in systems engineering and brings years of organizational experience, business structuring, and technology optimization.',
  },
  {
    name: 'Matt Haynes',
    position: 'Chief Blockchain Operations Officer',
    linkdIn: 'https://www.linkedin.com/in/matthaynesblockchain/',
    photo: '/images/team/matt_haynes.png',
    description:
      'Matt Haynes is a serial web entrepreneur with a marketing and operations background. He also comes with significant experience in construction management systems and occupational health and safety providing him with an ideal hybrid of skill sets for this kind of startup. Matt, in addition to Dan, was also a Co-Founder at MoonBoots Capital and has worked in the structural organization for early-stage startups, equities, and Web3 venture capital. He brings a wealth of knowledge in operations, blockchain, and fundraising.',
  },
  {
    name: 'Florin Tudor',
    position: 'Chief Executive Officer',
    linkdIn: 'https://www.linkedin.com/in/Florin-Tudor-a5969a121/',
    photo: '/images/team/florin_tudor.png',
    description:
      "Florin holds a Master's Degree in Chemistry from the West University of Timișoara with 10+ years of experience in Flexible and Rigid PU Foam synthesis and processing, industrialization, and commercialization. Florin led growth in the revenue-leading sandwich panel manufacturer in Romania. He spent 3 years in Dubai in lead roles such as CTO, CBDO, and CQO for companies producing over 50M+ Revenue and employing 250+ Employees. Florin is an expert in the chemical composition of sandwich panels and product Q/A.",
  },
  {
    name: 'Vlad Arama',
    position: 'Chief Sales Officer',
    linkdIn: 'https://www.linkedin.com/in/vlad-alexandru-aram%C4%83-758794151/',
    photo: '/images/team/vlad_arama.png',
    description:
      'Vlad Arama completed Thermal Installations studies in France. From 2009-2015 he was the CEO of a company he founded in the field of metallurgy (repairs and modernization of elevators) Working with some of the leading companies such as Kone & Schindler. At present he operates and owns a sandwich panel Re-distribution warehouse. Vlad has built a large network of sales associates and preferential partnerships with the largest construction companies in Romania and abroad in Europe. Vlad has worked in sales in the industry for many years and will lead the consumer-facing sales division.',
  },
];

export const Team = () => {
  const swiperRef = useRef<SwiperType>();
  const [isShowAll, setIsShowAll] = useState(false);

  return (
    <Box id="team" minH={{ base: '600px', md: '450px', lg: '780px' }} pt={'53px'}>
      <Box h={'full'} w={'full'} position={'relative'}>
        <Flex h={{ base: '45px', lg: '100px' }} w={'full'} pl={{ base: 5, lg: 52 }} position={'absolute'} zIndex={10}>
          <Flex flex={'1'} alignItems={'center'}>
            <Box h={'0px'} w={'full'} borderBottom={'3px solid'} borderColor={'brand.green'}></Box>
          </Flex>
          <Flex
            w={{ base: '133px', lg: '290px' }}
            bg="brand.green"
            alignItems={'center'}
            pl={{ lg: '43px' }}
            justifyContent={{ base: 'center', lg: 'unset' }}
          >
            <Heading
              as="h2"
              fontSize={{ base: '25px', md: '32px' }}
              lineHeight={{ base: '31px', md: '40px' }}
              fontWeight="500"
              color={'white'}
            >
              Team
            </Heading>
          </Flex>
        </Flex>

        {/* Slider frame */}

        <Box
          // h={'630px'}
          w={'full'}
          pl={{ base: 0, xl: 52 }}
          position={'absolute'}
          top={{ base: '60px', lg: '76px' }}
        >
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
            {teamInfo.map(({ name, position, linkdIn, photo, description }) => (
              <SwiperSlide key={photo}>
                <Flex w={'full'} direction={{ base: 'column', md: 'row' }}>
                  <Image
                    src={photo}
                    alt={name}
                    h={'full'}
                    maxW={{ base: '220px', lg: '520px' }}
                    filter={'grayscale(1)'}
                    ml={{ base: 10, lg: 'unset' }}
                  />
                  <Flex
                    flex={'1'}
                    direction={'column'}
                    justifyContent={'flex-end'}
                    pl={{ base: 5, lg: '42px' }}
                    pr={4}
                    mt={{ base: 6, lg: 'unset' }}
                  >
                    <Text
                      fontSize={{ base: '28px', md: '32px' }}
                      lineHeight={{ base: '35px', md: '40px' }}
                      fontWeight="700"
                      display={'flex'}
                      alignItems={'center'}
                    >
                      {name}
                      <Link href={linkdIn} isExternal>
                        <Image src="/images/linkedin_logo.png" alt="linkedin logo" h={'30px'} w={'30px'} ml={'10px'} />
                      </Link>
                    </Text>
                    <Text
                      fontSize={{ base: '18px', md: '24px' }}
                      lineHeight={{ base: '23px', md: '30px' }}
                      fontWeight="500"
                      color={'brand.green'}
                      pt={{ lg: 5 }}
                    >
                      {position}
                    </Text>
                    <Text
                      noOfLines={isShowAll ? 100 : 4}
                      fontSize={{ base: '14px', md: '18px' }}
                      lineHeight={{ base: '18px', md: '23px' }}
                      fontWeight="400"
                      pt={{ base: 5, lg: '35px' }}
                    >
                      {description}
                    </Text>
                    <Hide below="lg">
                      <Text color={'brand.red'} mb={isShowAll ? 3 : 14} onClick={() => setIsShowAll(!isShowAll)}>
                        {isShowAll ? 'read less' : 'read more'}
                      </Text>
                    </Hide>
                  </Flex>
                </Flex>
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
            top={{ md: '300px', lg: isShowAll ? '50px' : '145px', xl: '145px' }}
            left={{ base: 'calc(50% - 75px)', lg: '590px', xl: '770px' }}
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
            </Hide>
          </Flex>
        </Box>

        {/* Slider frame end */}

        <Flex
          h={{ base: '66px', lg: '106px' }}
          w={{ base: '71px', lg: '160px' }}
          position={'absolute'}
          top={{ base: '267px', lg: '600px' }}
          bg="brand.green"
          zIndex={10}
        >
          <Image
            src="/images/logo_white.png"
            alt="logo white"
            position={'absolute'}
            left={{ lg: '10px' }}
            top={{ base: '5px', lg: '8px' }}
            h={{ base: '55px', lg: '88px' }}
            w={'auto'}
            objectFit={'cover'}
          />
        </Flex>
        <Flex
          w={'full'}
          position={'absolute'}
          top={{ lg: '703px' }}
          right={0}
          zIndex={10}
          display={{ base: 'none', lg: 'flex' }}
        >
          <Flex w={{ base: 6, md: '580px', xl: '740px' }}></Flex>
          <Flex flex={'1'}>
            <Box h={''} w={'full'} alignSelf={'flex-end'} borderBottom={'3px solid'} borderColor={'brand.green'}></Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
