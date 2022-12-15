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

export const Navigation = ({ isDrawerActive }: { isDrawerActive: boolean }) => {
  const [titleHoveredId, setTitleHoveredId] = useState<null | number>(null);
  const mobileBgColor = useColorModeValue('white', 'brand.dark');
  const [subNavIsOpened, setSubNavIsOpened] = useBoolean();

  return (
    <>
      <Stack direction={isDrawerActive ? 'column' : 'row'} spacing={isDrawerActive ? '60px' : '50px'}>
        {menuItems.map((item, index) => {
          const hoverStackStyles = item.subTitles.length
            ? {
                backgroundColor: isDrawerActive ? mobileBgColor : 'rgba(57, 57, 57, 0.3);',
                // backgroundColor: 'green',
                padding: '0px 30px 10px 10px',
              }
            : { color: 'brand.green' };

          // const hoverAfterStyles =
          //   item.subTitles.length && titleHoveredId === index
          //     ? {
          //         content: '""',
          //         display: 'block',
          //         position: 'absolute',
          //         bottom: '-10px',
          //         height: '1px',
          //         width: '100%',
          //         backgroundColor: 'brand.green',
          //         zIndex: 2,
          //       }
          //     : {};

          return (
            <Box
              key={item.title}
              _hover={{
                ...hoverStackStyles,
                '.nav_title': {
                  borderBottom: '2px solid',
                  borderColor: 'brand.green',
                  // content: '""',
                  // display: 'block',
                  // position: 'absolute',
                  // bottom: '-10px',
                  // height: '1px',
                  // width: '100%',
                  // backgroundColor: 'brand.green',
                  // zIndex: 2,
                },
              }}
              w="fit-content"
              // h={'auto'}
              pos="relative"
              // transitionDuration="300ms"
              // onMouseEnter={() => {
              //   setTitleHoveredId(index);
              //   setSubNavIsOpened.on;
              // }}
              // onMouseLeave={() => {
              //   setTitleHoveredId(null);
              //   setSubNavIsOpened.off;
              // }}
              onMouseEnter={setSubNavIsOpened.on}
              onMouseLeave={setSubNavIsOpened.off}
            >
              <Text
                className="nav_title"
                fontSize="18px"
                lineHeight="22px"
                pos="relative"
                pt={'10px'}
                // _hover={hoverAfterStyles}
                // _after={hoverAfterStyles}
              >
                {item.title}
              </Text>

              <Collapse in={subNavIsOpened}>
                <Box
                  pos="absolute"
                  // left="0"
                  // bottom={'0'}
                  // top="42px"
                  // w="100%"
                  width={'auto'}
                  // h={'max-content'}
                  // _hover={hoverStackStyles}
                  sx={hoverStackStyles}
                  zIndex="1"
                  // minH={'400px'}
                  // display={titleHoveredId === index ? 'block' : 'none'}
                >
                  {item.subTitles.map((sub) => (
                    <Link key={sub} isExternal href={'https://docsend.com/view/s/sd9mvfdtsfk86set'}>
                      <Text fontSize="18px" lineHeight="22px" mt={{ base: '30px', lg: '14px' }}>
                        {sub}
                      </Text>
                    </Link>
                  ))}
                </Box>
              </Collapse>
            </Box>
          );
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
