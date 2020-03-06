import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import CardView from '../../components/basic/CardView'
import Container from '../../components/basic/Container'
import Colors from "../../utils/colors"
import Button from "../../components/basic/Button"

export default function () {
  const onBeginPress = () => {

  }

  return (
    <Container propStyles={styles.container}>
      <CardView propStyles={styles.card}>
        <h2 className={css(styles.welcomeLabel)}>Welcome to the Trivia Challenge!</h2>
        <div className={css(styles.separator)} />
        <h3 className={css(styles.descLabel)}>You will be presented with 10 True or False questions.</h3>

        <h2 className={css(styles.challengeLabel)}>Can you score 100%?</h2>

        <Button onClick={onBeginPress} propStyles={styles.beginButton}>
          <p className={css(styles.beginButtonLabel)}>BEGIN</p>
        </Button>
      </CardView>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  card: {
    maxWidth: 400,
    paddingTop: 32,
    paddingBottom: 32,
  },
  separator: {
    backgroundColor: Colors.yellowLime,
    height: 2,
    width: '100%'
  },

  welcomeLabel: {
    color: Colors.blueAqua,
    marginLeft: 32,
    marginRight: 32,
    textAlign: 'center'
  },
  descLabel: {
    color: Colors.pink,
    marginLeft: 32,
    marginRight: 32,
    textAlign: 'center'
  },
  challengeLabel: {
    color: Colors.yellowLime,
    marginLeft: 32,
    marginRight: 32,
    textAlign: 'center'
  },

  beginButton: {
    backgroundColor: Colors.whiteIce,
    borderRadius: 8,
    marginLeft: 32,
    marginRight: 32,
    ':hover': {
      cursor: 'pointer',
      opacity: 0.8
    }
  },
  beginButtonLabel: {
    color: Colors.pink,
    fontWeight: 700,
    fontSize: 20
  }
})
