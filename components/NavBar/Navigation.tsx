import React, { useState } from 'react';
import { Text, Button, Stack, Box, useColorModeValue, Link, Collapse, useBoolean } from '@chakra-ui/react';

const menuItems = [
  {
    title: 'Documentation',
    subTitles: ['Business Plan', 'Token Paper', 'Pitch Deck', 'Projected Financial Plan'],
  },
  {
    title: 'About us',
    subTitles: ['Team'],
  },
  {
    title: 'Community',
    subTitles: ['Twitter', 'Medium', 'LinkedIn', 'Press Release'],
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
    ? {
        backgroundColor: isDrawerActive ? mobileBgColor : 'rgba(57, 57, 57, 0.3);',
        padding: '0px 30px 10px 10px',
      }
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
      pos="relative"
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
        <Box pos="absolute" left={0} width={'100%'} sx={hoverStackStyles} zIndex={20}>
          {group.subTitles.map((sub: any) => (
            <Link key={sub} isExternal href={'https://docsend.com/view/s/sd9mvfdtsfk86set'}>
              <Text
                fontSize="18px"
                lineHeight="22px"
                mt={{ base: '30px', lg: '14px' }}
                className={'custom_pointer-cursor'}
              >
                {sub}
              </Text>
            </Link>
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};

export const Navigation = ({ isDrawerActive }: { isDrawerActive: boolean }) => {
  return (
    <>
      <Stack direction={isDrawerActive ? 'column' : 'row'} spacing={isDrawerActive ? '60px' : '50px'}>
        {menuItems.map((item) => {
          return <NavGroup key={item.title} group={item} isDrawerActive />;
        })}
      </Stack>

      <Link isExternal href={'https://docsend.com/view/s/sd9mvfdtsfk86set'}>
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
        >
          Read docs
        </Button>
      </Link>
    </>
  );
};
