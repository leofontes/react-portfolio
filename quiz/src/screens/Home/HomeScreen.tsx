import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import CardView from '../../components/basic/CardView'
import Container from '../../components/basic/Container'

export default function () {
  return (
    <Container>
      <CardView propStyles={styles.card}>

      </CardView>
    </Container>
  )
}

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    maxWidth: 400,
    padding: 16,
  }
})
