import '@/@core/style/globalStyle.scss'

// style for toast
import 'react-toastify/dist/ReactToastify.min.css'
// alice-carousel
import 'react-alice-carousel/lib/scss/alice-carousel.scss'

import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const RootLayout = ({ children }: Props) => children

export default RootLayout
