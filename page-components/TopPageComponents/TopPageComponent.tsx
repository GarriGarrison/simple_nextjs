import { TopPageComponentProps } from './TopPageComponents.props'

export const TopPageComponent = ({firstCategory, page, products}: TopPageComponentProps): JSX.Element => {
 return (
  <>
    {products && products.length}
  </>
 )
}
