import React, { FunctionComponent } from 'react'
import { LayoutProps } from './Layout.props'
import styles from './P.module.css'
import cn from 'classnames'
import { Header } from './Header/Header'
import { Sidebar } from './Sidebar/Sidebar'
import { Footer } from './Footer/Footer'

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        {children}
      </div>
      <Footer />
    </>
  )
}

/* HOC (компонент высшего порядка) */
export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    )
  }
}
