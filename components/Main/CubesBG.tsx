import { Box, keyframes } from '@chakra-ui/react';
import { CubeGif } from 'components/CubeGif/CubeGif';

const spin = keyframes`
  from {transform: rotate(0deg)}
  to {transform: rotate(360deg)}
`;

const float1 = keyframes`
  0% {transform: translate(0, 0)}
  100% {transform: translate(-300%, -300%)}
`;

const float2 = keyframes`
  0% {transform: translate(0, 0)}
  100% {transform: translate(-300%, 300%)}
`;

export const CubesBG = ({ display }: any) => (
  <Box pos={'absolute'} top={0} bottom={0} right={0} left={0} overflowX={'hidden'} display={display ? 'block' : 'none'}>
    <CubeGif w={'140px'} h={'140px'} position={'absolute'} left={'13%'} top={'10%'} transform="rotate(-15.89deg)" />
    <CubeGif w={'60px'} h={'60px'} position={'absolute'} left={'40px'} top={'135px'} transform="rotate(20.59deg)" />
    <CubeGif w={'100px'} h={'100px'} position={'absolute'} left={'50px'} top={'190px'} transform="rotate(-11.93deg)" />
    <CubeGif w={'120px'} h={'120px'} position={'absolute'} left={'80px'} top={'40%'} transform="rotate(21.31deg)" />
    <CubeGif w={'60px'} h={'60px'} position={'absolute'} left={'140px'} top={'72%'} transform="rotate(-11.66deg)" />
    <CubeGif w={'60px'} h={'60px'} position={'absolute'} left={'300px'} top={'68%'} transform="rotate(-17.84deg)" />
    <CubeGif w={'150px'} h={'150px'} position={'absolute'} left={'400px'} top={'72%'} transform="rotate(2.85deg)" />
    {/* right part */}
    <CubeGif w={'80px'} h={'80px'} position={'absolute'} left={'68%'} top={'8%'} transform="rotate(25.88deg)" />
    <CubeGif w={'60px'} h={'60px'} position={'absolute'} left={'77%'} top={'16%'} transform="rotate(8.41deg)" />
    <CubeGif w={'70px'} h={'70px'} position={'absolute'} left={'82%'} top={'26%'} transform="rotate(8.41deg)" />
    <CubeGif w={'150px'} h={'150px'} position={'absolute'} left={'87%'} top={'18%'} transform="rotate(8.63deg)" />
    <CubeGif
      w={'180px'}
      h={'180px'}
      position={'absolute'}
      left={'70%'}
      top={'30%'}
      transform="rotate(1.08deg)"
      animation={`${float2} 20s infinite linear alternate`}
    />
    <CubeGif w={'70px'} h={'70px'} position={'absolute'} left={'92%'} top={'42%'} transform="rotate(8.41deg)" />
    <CubeGif w={'130px'} h={'130px'} position={'absolute'} left={'84%'} top={'50%'} transform="rotate(158.3deg)" />
    <CubeGif w={'100px'} h={'100px'} position={'absolute'} left={'72%'} top={'60%'} transform="rotate(8.41deg)" />
    <CubeGif w={'100px'} h={'100px'} position={'absolute'} left={'91%'} top={'65%'} transform="rotate(-11.93deg)" />
    <CubeGif w={'100px'} h={'100px'} position={'absolute'} left={'60%'} top={'80%'} transform="rotate(-5.03deg)" />
    <CubeGif
      w={'180px'}
      h={'180px'}
      position={'absolute'}
      left={'74%'}
      top={'74%'}
      transform="rotate(-10.59deg)"
      animation={`${float1} 20s infinite linear alternate`}
    />
  </Box>
);
