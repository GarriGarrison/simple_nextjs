import { ReactNode } from 'react'

export interface HeaderTagProps {
  children: ReactNode
  tag: 'h1' | 'h2' | 'h3'
}
