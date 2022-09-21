import { GetStaticProps } from 'next'
import React, { useEffect, useState } from 'react'
import { HeaderTag, Button, P, Tag, Rating } from '../components'
import { withLayout } from '../layout/Layout'
import axios from 'axios'
import { MenuItem } from '../interfaces/menu.inferface'

function Home({menu}: HomeProps) {
  const [counter, setCounter] = useState<number>(0)

  const [rating, setRating] = useState<number>(4)

  useEffect(() => {
    console.log('Counter' + counter)

    return function cleanup() {
      console.log('Unmount')
    }
  })

  useEffect(() => {
    console.log('Mounted')

    /* Не увим размонтирование т.к. это главная страничка */
    return function cleanup() {
      console.log('Unmount')
    }
  }, [])

  return (
    <>
      <HeaderTag tag="h1">Тест</HeaderTag>
      <HeaderTag tag="h2">{counter}</HeaderTag>
      <Button
        appearance="primary"
        className="123456"
        arrow="right"
        onClick={() => setCounter((x) => x + 1)}
      >
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка
      </Button>
      <P size="l">Большой</P>
      <P>Средний</P>
      <P size="s">Малый</P>

      <Tag size="s">Ghost</Tag>
      <Tag size="m" color="red">
        Red
      </Tag>
      <Tag size="s" color="green">
        Green
      </Tag>
      <Tag size="s" color="primary">
        Primary
      </Tag>

      <Rating rating={4} isEditable setRating={setRating} />
      {/* <ul>{menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}</ul> */}
    </>
  )
}
export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
      firstCategory
    }
  )
  return {
    props: {
      menu,
      firstCategory,
    },
  }
}

interface HomeProps extends Record<string, unknown>{
  menu: MenuItem[]
  firstCategory: number
}
