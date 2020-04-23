import React, {Component} from 'react';
import {StatusBar, Text, View, ScrollView} from 'react-native';
import styles from './App.style';
import LottieView from 'lottie-react-native';
import {observer, Provider} from "mobx-react";
import Store from '../src/store';
import SampleObserver from './SampleObserver';

@observer
class App extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {};

  constructor(props) {
      super(props);
      this.store = new Store();  
  }

  componentDidMount() {
      this.store.setMedaID(1220732935);
      //this.store.setMedaID(this.props.medaId);
  }

  render() {
    console.log("Hey there");
    return (
      <Provider store={this.store}>
        <View>
        <ScrollView contentContainerStyle={styles.appWrapper}>
          <StatusBar backgroundColor={"#000000"}/>

          <LottieView source={require('./assets/car')} autoPlay loop style={{height: 200}}/>

          <Text style={styles.appWelcomeText}>
            እንሂድ
          </Text>

          <SampleObserver/>
          
        </ScrollView>
      </View>
      </Provider>
    );
  }
}

export default App;
