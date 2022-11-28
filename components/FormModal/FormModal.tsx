import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  Select,
  Flex,
} from '@chakra-ui/react';
import React from 'react';

export const ContactUsModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button
        onClick={onOpen}
        variant="outline"
        color="brand.green"
        colorScheme={'brand.green'}
        borderRadius="none"
        borderWidth="2px 2px 2px 0px"
        h={'135px'}
        minW={'815px'}
        fontSize="32px"
        lineHeight="40px"
        fontWeight="500"
        position={'relative'}
        _hover={{
          color: 'brand.red',
          colorScheme: 'brand.red',
          bg: 'transparent',
        }}
      >
        <Text as={'span'} position={'absolute'} right={'85px'}>
          Contact us
        </Text>
      </Button>
      <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} size={'full'}>
        <ModalOverlay />
        <ModalContent h={'full'}>
          <Flex h={'full'}>
            <Box h={'full'} w={'50%'}>
              <ModalHeader color="brand.green" fontSize="52px" lineHeight="40px" fontWeight="500">
                Contact us
              </ModalHeader>

              <ModalBody pb={3}>
                <FormControl>
                  <Input ref={initialRef} placeholder="Email" />
                </FormControl>

                <FormControl mt={4}>
                  <Input placeholder="Name" />
                </FormControl>

                <FormControl mt={4}>
                  <Select placeholder="County of residential">
                    <option value="option1">USA</option>
                    <option value="option2">Canada</option>
                    <option value="option3">Mexico</option>
                  </Select>
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button
                  onClick={onClose}
                  variant="outline"
                  color="brand.green"
                  colorScheme={'brand.green'}
                  borderRadius="none"
                  borderWidth="2px 2px 2px 0px"
                  h={'135px'}
                  minW={'815px'}
                  fontSize="32px"
                  lineHeight="40px"
                  fontWeight="500"
                  position={'relative'}
                  _hover={{
                    color: 'brand.red',
                    colorScheme: 'brand.red',
                    bg: 'transparent',
                  }}
                >
                  <Text as={'span'} position={'absolute'} right={'85px'}>
                    Contact us
                  </Text>
                </Button>
              </ModalFooter>
            </Box>
            <Box h={'full'} w={'50%'} bg={` url(/images/contact_us_modal.png)`}
                 backgroundRepeat="no-repeat" backgroundSize="cover"></Box>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};
