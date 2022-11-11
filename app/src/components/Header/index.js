import { Image } from 'react-native'

import styles from './styles'

import Logo from '../../../assets/logo.png'

export default function () {
  return (
    <Image style={styles.logo} source={Logo} />
  )
}