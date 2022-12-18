import React from 'react';
import {
  Text,
  Button,
  Stack,
  Box,
  useColorModeValue,
  Link,
  Collapse,
  useBoolean,
  useColorMode,
} from '@chakra-ui/react';

const menuItems = [
  {
    title: 'Documentation',
    subTitles: [
      { name: 'Business Plan', href: 'https://docsend.com/view/sd9mvfdtsfk86set/d/cgfsb5kjfmhpsk5s' },
      { name: 'Token Paper', href: 'https://docsend.com/view/sd9mvfdtsfk86set/d/cyac3tdffprzb6gu' },
      { name: 'Pitch Deck', href: 'https://docsend.com/view/sd9mvfdtsfk86set/d/g2sk2hj33xkbqckg' },
      { name: 'Projected Financial Plan', href: 'https://docsend.com/view/sd9mvfdtsfk86set/d/budpizthk828ivfx' },
    ],
  },
  {
    title: 'About us',
    subTitles: [{ name: 'Team', href: '/#team', isExternal: false }],
  },
  {
    title: 'Community',
    subTitles: [
      { name: 'Twitter', href: 'https://twitter.com/greenblokx' },
      { name: 'Medium', href: 'https://medium.com/@greenblokx' },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/company/greenblokx/' },
      { name: 'Press Release', href: 'https://medium.com/@greenblokx' },
    ],
  },
  {
    title: 'Contact us',
    subTitles: [],
  },
];

const NavGroup = ({ group, isDrawerActive }: any) => {
  const [subNavIsOpened, setSubNavIsOpened] = useBoolean();
  const mobileBgColor = useColorModeValue('white', 'brand.dark');

  const hoverStackStyles = group.subTitles.length
    ? { marginRight: '20px', backgroundColor: isDrawerActive ? mobileBgColor : 'rgba(57, 57, 57, 0.3);' }
    : { color: 'brand.green' };

  return (
    <Box
      key={group.title}
      _hover={{
        ...hoverStackStyles,
        '.nav_title': {
          borderColor: group.subTitles.length ? 'brand.green' : 'transparent',
        },
      }}
      w="fit-content"
      minW="150px"
      pos="relative"
      p="0px 30px 10px 10px"
      transitionDuration="500ms"
      onMouseEnter={setSubNavIsOpened.on}
      onMouseLeave={setSubNavIsOpened.off}
    >
      <Text
        className="nav_title custom_pointer-cursor"
        fontSize="18px"
        lineHeight="22px"
        pos="relative"
        borderBottom="2px solid"
        borderColor={'transparent'}
        py={'10px'}
      >
        {group.title}
      </Text>

      <Collapse in={subNavIsOpened}>
        <Box
          pos="absolute"
          left={0}
          zIndex={20}
          width={'100%'}
          sx={hoverStackStyles}
          p="0px 30px 10px 10px"
          mt={{ base: '10px' }}
        >
          {group.subTitles.map(({ name, href, isExternal = true }: any, idx: number) => (
            <Link key={name} isExternal={isExternal} href={href}>
              <Text
                fontSize="18px"
                lineHeight="22px"
                pt={{ base: '30px', lg: idx ? '14px' : '4px' }}
                className={'custom_pointer-cursor'}
              >
                {name}
              </Text>
            </Link>
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};

export const Navigation = ({ isDrawerActive }: { isDrawerActive: boolean }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Stack direction={isDrawerActive ? 'column' : 'row'} spacing={isDrawerActive ? '60px' : '20px'}>
        {menuItems.map((item) => {
          return <NavGroup key={item.title} group={item} isDrawerActive={isDrawerActive} />;
        })}
      </Stack>

      <Link isExternal href={'https://docsend.com/view/s/sd9mvfdtsfk86set'} _hover={{ textDecoration: 'none' }}>
        <Button
          bg="brand.green"
          color="white"
          py="15px"
          px="20px"
          fontSize="16px"
          lineHeight="20px"
          fontWeight="400"
          borderRadius="12px"
          h="50px"
          mt={isDrawerActive ? '60px' : '0'}
          _hover={{
            color: colorMode === 'dark' ? 'white' : 'brand.dark',
            bg: 'initial',
          }}
        >
          Read docs
        </Button>
      </Link>
    </>
  );
};
