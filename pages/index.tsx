import { Box } from '@chakra-ui/react';

import { Main } from '../components/Main';
import { Construction } from '../components/Construction';
import { Advantages } from '../components/Advantages';
import { Technology } from '../components/Technology';
import { WhyBlock2 } from '../components/WhyBlock2';

const IndexPage = () => {
  return (
    <Box>
      <Main />
      <Construction />
      <Advantages />
      <Technology />
      <WhyBlock2 />
    </Box>
  );
};

export default IndexPage;
