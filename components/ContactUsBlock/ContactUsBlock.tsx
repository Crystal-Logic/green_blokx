import React from 'react';
import { Box, Button } from '@chakra-ui/react';

export const ContactUsBlock = ({ onOpenModal, title }: { onOpenModal: () => void; title: string }) => (
  <Box pt={12} pb={20}>
    <Button
      variant="outlineGreen"
      size={{ base: 'sm', lg: 'lg' }}
      width={{ base: '85%', lg: '57%' }}
      onClick={onOpenModal}
    >
      {title}
    </Button>
  </Box>
);
