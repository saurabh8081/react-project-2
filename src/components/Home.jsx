import { Box, Container, Heading, Stack, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { Carousel, Thumbs } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          Services{' '}
        </Heading>
        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image
            src={img5}
            alt="Myimg"
            h={('40', '400')}
            filter={'hue-rotate(-130deg)'}
          />
          <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4', '16']} textAlign={'center'}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur harum earum, sed facere in ab obcaecati quaerat velit
            deserunt assumenda voluptas explicabo dolores deleniti eveniet non
            tempore perspiciatis placeat, ad aliquid nesciunt minus, dolor
            laborum nisi rerum? Inventore eum magnam hic nihil quod nam adipisci
            pariatur eveniet, aut iure? Quis facere vel, suscipit neque,
            exercitationem eveniet dicta at reprehenderit consequatur laboriosam
            incidunt nisi perferendis possimus corrupti error, aut odio. Tempore
            dignissimos dolorem cum perferendis sed corrupti, consectetur unde
            nesciunt fuga quidem vero, nam repellat quis, voluptates voluptas
            alias officiis quibusdam? Corrupti in labore ipsa amet, quae odio
            debitis velit eos!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w={'full'} h={'100vh'}>
      <img src={img1} alt="MyImage" />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img2} alt="MyImage" />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming is Future
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <img src={img3} alt="MyImage" />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <img src={img4} alt="MyImage" />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Night Life is Cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
