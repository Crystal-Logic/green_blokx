import { Box, keyframes } from '@chakra-ui/react';
import { CubeGif } from 'components/CubeGif/CubeGif';

const float1 = keyframes`
  0% {transform: translate(0, 0)}
  100% {transform: translate(300%, -300%)}
`;

const float2 = keyframes`
  0% {transform: translate(0, 0)}
  100% {transform: translate(200%, 200%)}
`;

export const CubesBG = () => (
  <Box pos={'absolute'} top={0} bottom={0} right={0} left={0} overflowX={'hidden'}>
    <CubeGif w={'110px'} h={'110px'} position={'absolute'} left={'13%'} top={'30%'} transform="rotate(6.23deg)" />
    <CubeGif w={'110px'} h={'110px'} position={'absolute'} left={'5%'} top={'33%'} transform="rotate(6.23deg)" />
    <CubeGif w={'130px'} h={'130px'} position={'absolute'} left={'13%'} top={'40%'} transform="rotate(5.08deg)" />
    <CubeGif
      w={'250px'}
      h={'250px'}
      position={'absolute'}
      left={'20%'}
      top={'35%'}
      transform="rotate(-5.28deg)"
      animation={`${float2} 20s infinite linear alternate`}
    />
    <CubeGif
      w={'150px'}
      h={'150px'}
      position={'absolute'}
      left={'35%'}
      top={'40%'}
      transform="rotate(3.2deg)"
      animation={`${float1} 20s infinite linear alternate`}
    />
    <CubeGif w={'250px'} h={'250px'} position={'absolute'} left={'4%'} top={'51%'} transform="rotate(5.08deg)" />
    <CubeGif w={'110px'} h={'110px'} position={'absolute'} left={'44%'} top={'90%'} transform="rotate(-1deg)" />

    {/* right part */}
    <CubeGif w={'200px'} h={'200px'} position={'absolute'} left={'75%'} top={'12%'} transform="rotate(9deg)" />
    <CubeGif w={'110px'} h={'110px'} position={'absolute'} left={'83%'} top={'24%'} transform="rotate(6.23deg)" />
    <CubeGif w={'110px'} h={'110px'} position={'absolute'} left={'76%'} top={'32%'} transform="rotate(6.23deg)" />
    <CubeGif w={'80px'} h={'80px'} position={'absolute'} left={'86%'} top={'54%'} transform="rotate(-1deg)" />
  </Box>
);
