import { Box, useDisclosure } from '@chakra-ui/react';

import { Main } from 'components/Main';
import { Manufacture } from 'components/Manufacture/Manufacture';
import { Team } from 'components/Team';
import { Partners } from 'components/Partners';
import { TokenBlock } from 'components/TokenBlock/TokenBlock';
import { Product } from 'components/Product/Product';
import { Subscribe } from 'components/Subscribe/Subscribe';
import { FutureBlock } from 'components/FutureBlock/FutureBlock';
import { FormModal } from 'components/FormModal/FormModal';

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
      <FutureBlock />
      <FormModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default IndexPage;
