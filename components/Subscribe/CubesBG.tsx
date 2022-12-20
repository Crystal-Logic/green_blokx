import { Box, keyframes } from '@chakra-ui/react';
import { CubeGif } from 'components/CubeGif/CubeGif';

const float1 = keyframes`
  0% {transform: translate(0, 0)}
  100% {transform: translate(200%)}
`;

const float2 = keyframes`
  0% {transform: translate(0, 0)}
  100% {transform: translate(100%, 100%)}
`;

const float3 = keyframes`
  0% {transform: translate(0, 0)}
  100% {transform: translate(-200%, -200%)}
`;

export const CubesBG = () => (
  <Box pos={'absolute'} top={0} bottom={0} right={0} left={0} overflowX={'hidden'}>
    <CubeGif
      w={'130px'}
      h={'130px'}
      position={'absolute'}
      left={'18%'}
      top={'10%'}
      transform="rotate(-16.71deg)"
      animation={`${float1} 20s infinite linear alternate`}
    />
    <CubeGif
      w={'220px'}
      h={'220px'}
      position={'absolute'}
      left={'5%'}
      top={'38%'}
      transform="rotate(-16.71deg)"
      animation={`${float2} 20s infinite linear alternate`}
    />

    {/* right part */}
    <CubeGif w={'300px'} h={'300px'} position={'absolute'} left={'87%'} top={'0'} transform="rotate(-13.5deg)" />
    <CubeGif w={'220px'} h={'220px'} position={'absolute'} left={'63%'} top={'12%'} transform="rotate(3.47deg)" />
    <CubeGif w={'140px'} h={'140px'} position={'absolute'} left={'84%'} top={'32%'} transform="rotate(6.32deg)" />
    <CubeGif
      w={'180px'}
      h={'180px'}
      position={'absolute'}
      left={'70%'}
      top={'54%'}
      transform="rotate(13.25deg)"
      animation={`${float3} 20s infinite linear alternate`}
    />
  </Box>
);
