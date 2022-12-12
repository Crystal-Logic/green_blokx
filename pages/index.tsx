import { Box, useDisclosure } from '@chakra-ui/react';

import { Main } from 'components/Main';
// import { Construction } from 'components/Construction';
// import { Advantages } from 'components/Advantages';
// import { Technology } from 'components/Technology';
// import { WhyBlock } from 'components/WhyBlock';
// import { WhyBlock2 } from 'components/WhyBlock2';
import { Team } from 'components/Team';
import { Partners } from 'components/Partners';
// import { ContactUsBlock } from 'components/ContactUsBlock/ContactUsBlock';
// import { FormModal } from 'components/FormModal/FormModal';

const IndexPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Main onOpenModal={onOpen} />
      {/* <Construction /> */}
      {/* <Advantages /> */}
      {/* <Technology /> */}
      {/* <ContactUsBlock title="Find out more" onOpenModal={onOpen} /> */}
      {/* <WhyBlock /> */}
      {/* <WhyBlock2 /> */}
      <Team />
      {/* <ContactUsBlock title="Contact Us" onOpenModal={onOpen} /> */}
      <Partners />
      {/* <FormModal isOpen={isOpen} onClose={onClose} /> */}
    </Box>
  );
};

export default IndexPage;
