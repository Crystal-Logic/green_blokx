import React from 'react';
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
import emailjs from '@emailjs/browser';

export const ContactUsModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [country, setCountry] = React.useState('');

  const handleSubmit = () => {
    // TODO: replace keys
    emailjs.send('service_ccs0h9f', 'template_lnyppx8', { name, email, country }, '7yDIJacuZxYO3bjCB').then(
      (response: any) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (error: any) => {
        console.log('FAILED...', error);
      },
    );
    onClose();
  };

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
        h={{ base: '82px', md: '135px' }}
        minW={{ base: '324px', md: '815px' }}
        fontSize={{ base: '18px', md: '32px' }}
        lineHeight={{ base: '22px', md: '40px' }}
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
        <ModalContent maxW="calc(85vw)" minH="calc(85vh)" mt={'20px'}>
          <Flex h={'full'}>
            <Flex h={'auto'} w={'50%'} flexDirection={'column'}>
              <ModalHeader
                color="brand.green"
                fontSize="52px"
                lineHeight="40px"
                fontWeight="500"
                alignItems="center"
                justifyContent="center"
                display="flex"
                mt={'50px'}
                mb={'50px'}
              >
                Contact us
              </ModalHeader>
              <ModalBody pb={3}>
                <FormControl isRequired>
                  <Input
                    ref={initialRef}
                    placeholder="Email"
                    type="email"
                    onChange={(event) => setEmail(event.currentTarget.value)}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <Input placeholder="Name" type="text" onChange={(event) => setName(event.currentTarget.value)} />
                </FormControl>

                <FormControl mt={4}>
                  <Select
                    placeholder="County of residential"
                    onChange={(event) => setCountry(event.currentTarget.value)}
                  >
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="Mexico">Mexico</option>
                  </Select>
                </FormControl>
              </ModalBody>

              <ModalFooter h={'full'} display={'flex'} justifyContent={'flex-start'} p={0}>
                <Button
                  onClick={handleSubmit}
                  variant="outline"
                  color="brand.green"
                  colorScheme={'brand.green'}
                  borderRadius="none"
                  borderWidth="2px 2px 2px 0px"
                  h={'135px'}
                  // minW={'815px'}
                  w={'70%'}
                  fontSize="32px"
                  lineHeight="40px"
                  fontWeight="500"
                  // position={'absolute'}
                  // bottom={'10vh'}
                  _hover={{
                    color: 'brand.red',
                    colorScheme: 'brand.red',
                    bg: 'transparent',
                  }}
                  type="submit"
                >
                  <Text as={'span'} position={'absolute'} right={'85px'}>
                    Contact us
                  </Text>
                </Button>
              </ModalFooter>
            </Flex>
            <Box
              minH="calc(85vh)"
              w={'50%'}
              bg={`url(/images/contact_us_modal.png)`}
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
            ></Box>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};
