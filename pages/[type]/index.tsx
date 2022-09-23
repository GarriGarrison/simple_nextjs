import React from 'react'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import axios from 'axios'
import { withLayout } from '../../layout/Layout'
import { MenuItem } from '../../interfaces/menu.inferface'
import { ParsedUrlQuery } from 'node:querystring'
import { firstLevelMenu } from '../../helpers/helpers'

function Type({ firstCategory }: TypeProps) {
  return <>Type: {firstCategory}</>
}

export default withLayout(Type)

export const getStaticProps: GetStaticProps<TypeProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  // const firstCategory = 0
  if (!params) {
    return {
      notFound: true,
    }
  }

  const firstCategoryItem = firstLevelMenu.find((m) => m.route === params.type)

  if (!firstCategoryItem) {
    return {
      notFound: true,
    }
  }

  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    {
      firstCategory: firstCategoryItem.id,
    }
  )
  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
    },
  }
}

interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: number
}
