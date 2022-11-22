import { Box } from '@chakra-ui/react';

import { Main } from '../components/Main';
import { Construction } from '../components/Construction';
import { Advantages } from '../components/Advantages';
import { Technology } from '../components/Technology';
import { WhyBlock } from '../components/WhyBlock';
import { WhyBlock2 } from '../components/WhyBlock2';
import { Team } from '../components/Team';

const IndexPage = () => {
  return (
    <Box>
      <Main />
      <Construction />
      <Advantages />
      <Technology />
      <WhyBlock />
      <WhyBlock2 />
      <Team />
    </Box>
  );
};

export default IndexPage;
