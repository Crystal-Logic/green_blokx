import React, { useState } from 'react';
import { Box, Heading, Text, Flex, Image, SimpleGrid, useColorModeValue, Hide, Button } from '@chakra-ui/react';

type StepProps = {
  text: string;
  isActive: boolean;
  onSelect: () => void;
};

const Step = ({ text, isActive, onSelect }: StepProps) => {
  const activeColor = useColorModeValue('brand.dark', 'white');

  return (
    <Box borderRight={'1px solid'} borderColor={'brand.green'} h={'13px'} position="relative">
      <Button
        onClick={onSelect}
        isActive={isActive}
        fontSize={{ base: '12px', md: '18px' }}
        lineHeight={{ base: '15px', md: '23px' }}
        fontWeight="400"
        color="brand.green"
        position={'absolute'}
        top={15}
        right={{ base: '-40px', md: '-50px' }}
        background="transparent"
        _hover={{
          color: 'brand.red',
          fontSize: { base: '15px', md: '32px' },
          lineHeight: { base: '18px', md: '40px' },
          fontWeight: '500',
          right: { base: '-40px', md: '-70px' },
        }}
        _active={{
          color: activeColor,
          fontSize: { base: '15px', md: '32px' },
          lineHeight: { base: '18px', md: '40px' },
          fontWeight: '500',
          right: { base: '-40px', md: '-70px' },
        }}
      >
        {' '}
        {text}
      </Button>
    </Box>
  );
};

const getStepCard = (step: string): JSX.Element => {
  const cards: any = {
    '1': () => (
      <Box
        w={'full'}
        minH={{ base: '280px', md: '280px', xl: '550px' }}
        mb={{ base: '10px', md: '26px' }}
        bgImage={{ base: "url('/images/tech/step1_mob.svg')", md: "url('/images/tech/step1.svg')" }}
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
        backgroundPosition="right"
      >
        <Hide below="sm">
          <Text
            fontSize={{ base: '14px', lg: '18px' }}
            lineHeight={{ base: '18px', lg: '23px' }}
            fontWeight="600"
            pl={{ base: 5, xl: 52 }}
            pt={{ base: 5, xl: 20 }}
            maxW={{ md: '270px', xl: '580px' }}
          >
            Our intention is to be the largest supplier of sandwich panels in all of Europe and we won't stop there.
            <br />
            <br />
            We have the industry knowledge, business development, sales pipelines, and competitive advantage to create a
            company to weather any storm while suiting the needs of the growing demand for Sustainable development
            products
          </Text>
        </Hide>
      </Box>
    ),
    '2': () => (
      <Box
        w={'full'}
        minH={{ base: '300px', xl: '550px' }}
        mb={{ base: '10px', md: '26px' }}
        mr={10}
        bgImage={{ base: "url('/images/tech/step2_mob.svg')", md: "url('/images/tech/step2.svg')" }}
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
        backgroundPosition={{ base: 'right', lg: 'bottom 0px right 100px' }}
      >
        <Hide below="lg">
          <Text
            fontSize={{ base: '14px', lg: '18px' }}
            lineHeight={{ base: '18px', lg: '23px' }}
            fontWeight="600"
            pl={{ base: 5, xl: 52 }}
            pt={{ base: 5, xl: 20 }}
            maxW={{ md: '290px', xl: '580px' }}
          >
            Eco Sandwich Panels are created with natural plant fibers such as soybean but carry all of the traditional
            benefits of typical sandwich panels.
            <br />
            <br /> As the world moves towards carbon credits and sustainable construction, the recyclability and
            renewability of the materials we use remains a high priority.
          </Text>
        </Hide>
      </Box>
    ),
    '3': () => (
      <Box
        w={'full'}
        minH={{ base: '300px', xl: '550px' }}
        mb={{ base: '10px', md: '26px' }}
        bgImage={{ base: "url('/images/tech/step3_mob.svg')", md: "url('/images/tech/step3.svg')" }}
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
        backgroundPosition="right"
      >
        <Hide below="lg">
          <Text
            fontSize={{ base: '14px', lg: '18px' }}
            lineHeight={{ base: '18px', lg: '23px' }}
            fontWeight="600"
            pl={{ base: 5, xl: 52 }}
            pt={{ base: 5, xl: 20 }}
            maxW={{ md: '290px', xl: '631px' }}
          >
            Our unique token model will provide a high yield return paid on a quarterly basis in FIAT or Stable Coins
            such as USDT/USDC.
            <br />
            <br />
            You can buy, sell, and trade with liquidity on demand. There are no locking periods, staking or vesting
            requirements.
            <br />
            <br />
            Our revenue forecasts a breakeven on investment in Year 3 with gross revenue share paid out quarterly.
          </Text>
        </Hide>
      </Box>
    ),
  };
  return cards[step]();
};

export const Technology = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <Box id="technology">
      <Flex h={{ base: '60px', lg: '80px' }}>
        <Box flex={'1'} bg="brand.green"></Box>
        <Flex w={{ base: '200px', lg: '400px' }} justifyContent="center" alignItems={'center'}>
          <Heading
            as="h2"
            fontSize={{ base: '25px', lg: '32px' }}
            lineHeight={{ base: '31px', lg: '40px' }}
            fontWeight="500"
          >
            Technology
          </Heading>
        </Flex>
        <Box w={{ base: '15px', lg: '150px' }} bg="brand.green"></Box>
      </Flex>

      <Text
        fontSize={{ base: '14px', lg: '18px' }}
        lineHeight={{ base: '18px', lg: '23px' }}
        fontWeight="600"
        pl={{ base: 5, xl: 52 }}
        pr={{ base: 5, xl: '272px' }}
        pt={12}
      >
        We are building the{' '}
        <Text as={'span'} color="brand.green">
          first tokenized factory
        </Text>{' '}
        using blockchain and a fractionalized revenue share.
        <Hide above="xl">
          <br />
          <br />
        </Hide>
        Unlike traditional blockchain funding models, our token is directly tied to our gross revenue through a
        compliant Reg D 506c security offering.
      </Text>

      {getStepCard(activeStep.toString())}

      <Flex h={{ base: 12, lg: 24 }} borderTop={'1px solid'} borderColor={'brand.green'}>
        <SimpleGrid columns={4} spacing={0} w={'full'}>
          <Step text="Step 1" isActive={activeStep === 1} onSelect={() => setActiveStep(1)} />
          <Step text="Step 2" isActive={activeStep === 2} onSelect={() => setActiveStep(2)} />
          <Step text="Step 3" isActive={activeStep === 3} onSelect={() => setActiveStep(3)} />
        </SimpleGrid>
      </Flex>
    </Box>
  );
};
