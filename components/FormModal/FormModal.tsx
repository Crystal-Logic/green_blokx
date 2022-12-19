import React, { useRef, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
  Box,
  FormControl,
  Input,
  Text,
  Select,
  Flex,
  useColorMode,
} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import emailjs from '@emailjs/browser';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import countryData from './countries.json';

export const FormModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { colorMode } = useColorMode();
  const [success, showSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const focusRef = useRef(null);

  const handleSubmit = (e: any) => {
    if (success) {
      onClose();
      e.preventDefault();
      showSuccess(false);
      return;
    }

    if (email && name && country) {
      e.preventDefault();

      emailjs.send('service_ccs0h9f', 'template_lnyppx8', { name, email, country }, '7yDIJacuZxYO3bjCB').then(
        (response: any) => {
          console.log('SUCCESS!', response.status, response.text);
          showSuccess(true);
        },
        (error: any) => {
          console.log('FAILED...', error);
        },
      );
    }
  };

  const renderSuccess = () => (
    <Flex flexDirection="column" alignItems="center">
      <Text maxW="288px" textAlign="center" mb="45px">
        Your request has been successfully submitted and our staff will contact you soon.
      </Text>
      <Flex
        mb="45px"
        alignItems="center"
        justifyContent="center"
        background="rgba(58, 174, 5, 0.1)"
        borderRadius="full"
        width="172px"
        height="172px"
      >
        <Icon fontSize="96px" color="#3AAE05" as={CheckIcon} />
      </Flex>
    </Flex>
  );

  const inputColor = colorMode === 'dark' ? 'brand.white' : 'brand.dark';

  const renderForm = () => (
    <Box px={{ base: '50px', sm: '100px' }}>
      <FormControl>
        <Input
          required
          ref={focusRef}
          placeholder="Email"
          type="email"
          onChange={(event) => setEmail(event.currentTarget.value)}
          color={inputColor}
          borderColor={inputColor}
        />
      </FormControl>
      <FormControl mt={8}>
        <Input
          required
          placeholder="Name"
          type="text"
          onChange={(event) => setName(event.currentTarget.value)}
          color={inputColor}
          borderColor={inputColor}
        />
      </FormControl>
      <FormControl mt={8} mb={16}>
        <Select
          required
          placeholder="County of residential"
          onChange={(event) => setCountry(event.currentTarget.value)}
          color={inputColor}
          borderColor={inputColor}
        >
          {countryData.map(({ name, code }) => (
            <option key={code} value={name}>
              {name}
            </option>
          ))}
        </Select>
      </FormControl>
    </Box>
  );

  return (
    <Modal isCentered initialFocusRef={focusRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent position="relative" flexDir="row" display="flex" maxW="calc(85vw)">
        <Button onClick={onClose} padding={2} top={4} right={6} position="absolute" variant="ghost">
          <Icon fontSize="20px" color={{ base: 'brand.green', lg: 'brand.white' }} as={CloseIcon} />
        </Button>
        <Flex py="100px" flex={1} flexDirection={'column'}>
          <Text
            mb="80px"
            color="brand.green"
            fontSize={{ base: '26px', sm: '52px' }}
            lineHeight="40px"
            fontWeight="500"
            alignItems="center"
            justifyContent="center"
            display="flex"
          >
            {success ? 'Thank you' : 'Contact us'}
          </Text>
          <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
            <>
              {success ? renderSuccess() : renderForm()}
              <Button
                variant="outlineGreen"
                size={{ base: 'sm', lg: 'lg' }}
                mr={{ base: '50px', sm: '100px' }}
                type="submit"
              >
                {success ? 'Close' : 'Contact us'}
              </Button>
            </>
          </form>
        </Flex>
        <Flex
          display={{ base: 'none', lg: 'flex' }}
          flex={1}
          // bg={`url(/images/contact_us_modal.webp)`}
          // backgroundRepeat="no-repeat"
          // backgroundSize="cover"
        />
      </ModalContent>
    </Modal>
  );
};
