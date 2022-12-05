import { useState } from 'react';
import { Text, Flex, Image, Link, Hide } from '@chakra-ui/react';

type SlideInfo = {
  name: string;
  position: string;
  linkdIn: string;
  photo: string;
  description: string;
};

export const TeamSlide = ({ name, position, linkdIn, photo, description }: SlideInfo) => {
  const [isShowAll, setIsShowAll] = useState(false);

  return (
    <Flex w={'full'} direction={{ base: 'column', md: 'row' }}>
      <Image
        src={photo}
        alt={name}
        maxW={{ base: '220px', lg: '520px' }}
        maxH={{ base: '270px', lg: '630px' }}
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
            <Image
              src="/images/linkedin_logo.png"
              alt="linkedin logo"
              h={'30px'}
              w={'30px'}
              ml={'10px'}
              className={'custom_pointer-cursor'}
            />
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
          <Text
            color={'brand.red'}
            mb={isShowAll ? 3 : 14}
            onClick={() => setIsShowAll(!isShowAll)}
            className={'custom_pointer-cursor'}
          >
            {isShowAll ? 'read less' : 'read more'}
          </Text>
        </Hide>
      </Flex>
    </Flex>
  );
};
