import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  Dimensions,
} from 'react-native'
import Dash from 'react-native-dash'

const imgElgio = {uri: 'https://www.vivaolinux.com.br/publico/elgio.png'}
const imgFabio = {uri: 'https://www.vivaolinux.com.br/publico/fabio.png'}
const largura = Dimensions.get('window').width
let intervalo 

export default class CorridaDosNerds extends Component {

  state = {
    elgioRun: 5,
    fabioRun: 5,
    status: 'CORRIDA DOS NERDS!'
  }

  corrandom(range) {
    return Math.floor(Math.random() * range) + 1
  }
  run() {

    let elgioRun = this.state.elgioRun
    let fabioRun = this.state.fabioRun
    let maior = (elgioRun>fabioRun) ? elgioRun : fabioRun

    if (maior<(largura-70)) {
      this.setState({elgioRun: elgioRun + this.corrandom(10)})
      this.setState({fabioRun: fabioRun + this.corrandom(12)})
    } else {
      let status = (elgioRun>fabioRun) ? 'Elgio é o vencedor! :(' : 'Fábio é o vencedor! :)'
      this.setState({status})
      clearInterval(intervalo)
    }

  }

  iniciar() {

    this.setState({elgioRun: 5})
    this.setState({fabioRun: 5})
    this.setState({status: ''})

    intervalo = setInterval( () => this.run(), 100 )
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={[styles.grama, {
          justifyContent: 'flex-end',
          alignItems: 'center'
        }]}>
          <Text style={styles.status}>{this.state.status}</Text>
        </View>

        <View style={styles.avenida}>

          <Image source={imgElgio} 
            style={[styles.cabeca, {
              left: this.state.elgioRun
            }]}
          />

          <Dash style={styles.linha}
            dashGap={10}
            dashLength={20}
            dashThickness={5}
            dashColor="white"
          />

          <Image source={imgFabio} 
            style={[styles.cabeca, {
              left: this.state.fabioRun
            }]}
          />

        </View>

        <View style={styles.grama}>
          <Button title="Iniciar" 
            onPress={ () => this.iniciar() } />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  grama: {
    flex: 1,
    backgroundColor: 'green'
  },
  avenida: {
    flex: 1,
    backgroundColor: 'grey',
    borderTopWidth: 10,
    borderTopColor: '#393939',
    borderBottomWidth: 10,
    borderBottomColor: '#393939',
    justifyContent: 'center',

  },
  linha: {
    marginTop: 10,
    marginBottom: 10
  },
  cabeca: {
    width: 60,
    height: 80
  },
  status: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  }
})