import React, {FunctionComponent} from 'react'
import { StyleSheet, css } from 'aphrodite'
import Colors from '../../utils/colors'

const Container: FunctionComponent = ({children}) => {
  return <div className={css(styles.container)}>{children}</div>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.whiteIce,
    flex: 1,
    height: '100%',
    padding: 0,
  }
})

export default Container
