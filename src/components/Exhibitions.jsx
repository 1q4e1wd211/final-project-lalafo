import React from 'react'
import Card from './Card'

const Exhibitions = (props) => {

  const [exhibitions, setExhibitions] = React.useState([
      {
        title: 'Турбо Ишак',
        img: 'https://frankfurt.apollo.olxcdn.com/v1/files/kxvuefwq5ypm-KZ/image;s=200x0;q=50',
        nav: 'Транспорт',
        description: 'Турбо ишак в спячем положений 1000км\с в бодром 5000км\с наелся пловом 10000км\с',
        price: 100000,
        id: 1,
      },
      {
        title: 'Садовый шланг',
        img: 'https://img5.lalafo.com/i/posters/original/e5/9b/b6/9e7419700701ad614ff88ab581.jpeg',
        nav: 'Дом и Сад',
        description: 'поливать свой сад афигенно',
        price: 500,
        id: 2,
     },
     {
        title: 'Масажерная кресло',
        img: 'https://cdnn21.img.ria.ru/images/149308/58/1493085820_0:285:5472:3363_600x0_80_0_0_1b97795b33f255ba26f32fd1caad2bf6.jpg',
        nav: 'Электроника',
        description: 'электрический масажер хватит на всю оставшуюся жизнь',
        price: 1000,
        id: 3,
      },
      {
        title: 'Авто запчасти на мерседес бенз, w208, clk, год выпуска 2001, объём',
        img: 'https://img5.lalafo.com/i/posters/original_webp/45/e1/1d/95f84416b12e073eddd6e94260.webp',
        nav: 'Электроника',
        description: 'цена договорная',
        price: 0,
        id: 4,
      },
      
  ])

  const filteredExhibitions = exhibitions.filter((item) => {
    const price = item.price;
    const from = props.from ? +props.from : Number.NEGATIVE_INFINITY;
    const up = props.up ? +props.up : Number.POSITIVE_INFINITY;

    return price >= from && price <= up;
  });

  return (
    <div className='mx-[150px] bg-slate-200 flex flex-wrap'>
        {filteredExhibitions.map(item => (
          <Card
            title={item.title}
            img={item.img}
            nav={item.nav}
            price={item.price}
            description={item.description}
          />      
        ))}
    </div>
  )
}

export default Exhibitions