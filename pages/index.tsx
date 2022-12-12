import { Box, useDisclosure, Image, keyframes } from '@chakra-ui/react';

import { Main } from 'components/Main';
import { Team } from 'components/Team';
import { Partners } from 'components/Partners';

const spin = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg)}
`;

const IndexPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Main onOpenModal={onOpen} />
      <Team />
      <Partners />
      <Box position={'fixed'} w={'full'}>
        <Box animation={`${spin} 20s infinite`} position={'absolute'} left={'45%'} top={'530px'}>
          <Image src="/images/dark-1-2.gif" w={40} h={40} />
        </Box>
      </Box>
    </Box>
  );
};

export default IndexPage;
