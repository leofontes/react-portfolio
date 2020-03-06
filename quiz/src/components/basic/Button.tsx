import React, { FunctionComponent } from 'react'
import {StyleDeclarationValue, StyleSheet, css} from "aphrodite"

interface Props {
  propStyles?: StyleDeclarationValue
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void

}

const Button: FunctionComponent<Props> = ({propStyles, children, onClick}) => (
  <div onClick={onClick} className={css(styles.container, propStyles)}>
    {children}
  </div>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  }
})


export default Button
