import React, { FunctionComponent } from 'react'
import { StyleSheet, css, StyleDeclarationValue } from 'aphrodite'
import Colors from '../../utils/colors'

interface Props {
  propStyles?: StyleDeclarationValue
}

const CardView: FunctionComponent<Props> = ({ children, propStyles }) => (
  <div className={css(styles.card, propStyles)}>{children}</div>
)

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.black,
    borderRadius: 8,
  },
})

export default CardView
