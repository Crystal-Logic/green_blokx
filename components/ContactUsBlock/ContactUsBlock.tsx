import React from 'react';
import { Box, Button } from '@chakra-ui/react';

export const ContactUsBlock = ({ onOpenModal, title }: { onOpenModal: () => void; title: string }) => (
  <Box pt={20} pb={20}>
    <Button
      flexDirection="column"
      alignItems="flex-end"
      onClick={onOpenModal}
      px={{ base: '16px', sm: '85px' }}
      variant="outline"
      color="brand.green"
      colorScheme="brand.green"
      borderRadius="none"
      borderWidth="2px 2px 2px 0px"
      h="135px"
      width="57%"
      minWidth="300px"
      fontSize="32px"
      lineHeight="40px"
      fontWeight="500"
      marginRight="36px"
      _hover={{
        color: 'brand.red',
        colorScheme: 'brand.red',
        bg: 'transparent',
      }}
    >
      {title}
    </Button>
  </Box>
);
