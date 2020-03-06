import React, {FunctionComponent} from 'react'
import {StyleSheet, css, StyleDeclarationValue} from 'aphrodite'
import Colors from '../../utils/colors'

interface Props {
  propStyles?: StyleDeclarationValue
}

const Container: FunctionComponent<Props> = ({children, propStyles}) => {
  return <div className={css(styles.container, propStyles)}>{children}</div>
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
