import { Box, useDisclosure, keyframes } from '@chakra-ui/react';

import { Main } from 'components/Main';
import { Manufacture } from 'components/Manufacture/Manufacture';
import { Team } from 'components/Team';
import { Partners } from 'components/Partners';
import { CubeGif } from 'components/CubeGif/CubeGif';
import { TokenBlock } from 'components/TokenBlock/TokenBlock';
import { Product } from 'components/Product/Product';
import { Subscribe } from 'components/Subscribe/Subscribe';

const spin = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg)}
`;

const IndexPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Main onOpenModal={onOpen} />
      <Manufacture />
      <TokenBlock />
      <Product />
      <Team />
      <Subscribe />
      <Partners />
      {/* Test animation */}
      <Box position={'fixed'} w={'full'} top={0}>
        <Box animation={`${spin} 20s infinite`} position={'absolute'} left={'85%'} top={'130px'}>
          <CubeGif w={40} h={40} />
        </Box>
      </Box>
    </Box>
  );
};

export default IndexPage;
