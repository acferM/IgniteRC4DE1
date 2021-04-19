import { Box, Divider, Flex, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination} from 'swiper';

import { Header } from "../components/Header";
import { IconList } from "../components/IconList";
import { SliderItem } from "../components/SliderItem";

SwiperCore.use([Navigation, Pagination]);

export default function Home() {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false
  })

  return (
    <Flex flexDir="column" align="center" pb={['6', '2.5rem']}>
      <Header />
      <Image w="100%" src={isMobile ? 'banner-mobile.svg' : 'banner.svg'} alt="5 continentes, infinitas possibilidades"/>

      <IconList />

      <Divider mt={['9', '20']} w={['60px', '90px']} h="2px" bg="gray.700" />

      <Heading mt={['6', '3.25rem']} textAlign="center" fontSize={['1.25rem', '2.25rem']}>
        Vamos nessa? <br/>
        Então escolha seu continente
      </Heading>

      <Box w={["100%", "77.5rem"]} mt={['5', '3.25rem']}>
        <Swiper
          navigation
          pagination={{ clickable: true }}
          slidesPerView={1}
        >
          <SwiperSlide>
            <SliderItem image="europe" title="Europa" description="O continente mais antigo"/>
          </SwiperSlide>

          <SwiperSlide>
            <SliderItem image="asia" title="Ásia" description="O continente tech"/>
          </SwiperSlide>

          <SwiperSlide>
            <SliderItem image="africa" title="Africa" description="O continente negro"/>
          </SwiperSlide>

          <SwiperSlide>
          <SliderItem image="oceania" title="Oceania" description="O continente exótico"/>
          </SwiperSlide>

          <SwiperSlide>
            <SliderItem image="north-america" title="America do norte" description="O continente pop"/>
          </SwiperSlide>

          <SwiperSlide>
            <SliderItem image="south-america" title="America do sul" description="O continente natural"/>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Flex>
  )
}
