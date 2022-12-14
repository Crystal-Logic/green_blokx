import React, { useState } from 'react';
import { Text, Button, Stack, Box, useColorModeValue } from '@chakra-ui/react';

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

export const Navigation = ({ isDrawerActive }: { isDrawerActive: boolean }) => {
  const [titleHoveredId, setTitleHoveredId] = useState<null | number>(null);

  return (
    <>
      <Stack direction={isDrawerActive ? 'column' : 'row'} spacing={isDrawerActive ? '60px' : '50px'}>
        {menuItems.map((item, index) => {
          const hoverStackStyles = item.subTitles.length
            ? { backgroundColor: 'rgba(57, 57, 57, 0.3);', padding: '10px 30px 10px 10px' }
            : { color: 'brand.green' };

          const hoverAfterStyles =
            item.subTitles.length && titleHoveredId === index
              ? {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  bottom: '-10px',
                  height: '1px',
                  width: '100%',
                  backgroundColor: 'brand.green',
                  zIndex: 2,
                }
              : {};

          return (
            <Box
              key={item.title}
              _hover={hoverStackStyles}
              w="fit-content"
              pos="relative"
              transitionDuration="300ms"
              onMouseEnter={() => setTitleHoveredId(index)}
              onMouseLeave={() => setTitleHoveredId(null)}
            >
              <Text fontSize="18px" lineHeight="22px" pos="relative" _after={hoverAfterStyles}>
                {item.title}
              </Text>

              <Box
                pos="absolute"
                left="0"
                top="42px"
                w="100%"
                sx={hoverStackStyles}
                zIndex="1"
                display={titleHoveredId === index ? 'block' : 'none'}
              >
                {item.subTitles.map((sub) => (
                  <Text fontSize="18px" lineHeight="22px" mt="14px">
                    {sub}
                  </Text>
                ))}
              </Box>
            </Box>
          );
        })}
      </Stack>

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
    </>
  );
};
