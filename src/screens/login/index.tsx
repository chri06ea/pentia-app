import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ErrorMessageDialog from './../../components/ErrorMessageDialog';
import useAuth from '../../hooks/useAuth';

export default function LoginScreen() {
  const auth = useAuth();
  const [errors, setErrors] = useState<string[] | null>(null);
  const handleFacebookAuth = () => {
    auth.authWithFacebook();
  };
  const handleGoogleAuth = () => {
    auth
      .authWithGoogle()
      .then()
      .catch(error => {
        console.log(error);
        setErrors([error]);
      });
  };
  const handleAnonymousAuth = () => {
    auth.authAnonymously();
  };
  if (errors) {
    return <ErrorMessageDialog errors={errors} setErrors={setErrors} />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Velkommen!</Text>
        <Text>Log ind for at få adgang til chatten</Text>
      </View>
      <View style={styles.middle}>
        <Image
          style={styles.pentia_logo}
          source={require('./../../../assets/logo_pentia_white_highres.png')}
        />
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          style={{...styles.login_button}}
          onPress={handleAnonymousAuth}>
          <Text style={styles.guest_login_text}>Log ind som gæst</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.login_button, ...styles.facebook_login_button}}
          onPress={handleFacebookAuth}>
          <Text style={styles.facebook_login_text}>Log ind med facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.login_button, ...styles.google_login_button}}
          onPress={handleGoogleAuth}>
          <Text style={styles.google_login_text}>Log ind med google</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: '600',
  },
  subtitle: {},
  container: {
    flexDirection: 'column',
    flex: 1,
  },
  top: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  login_button: {
    width: '80%',
    borderRadius: 15,
    borderWidth: 1,
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pentia_logo: {
    flex: 1,
    aspectRatio: 1,
  },
  facebook_login_button: {
    backgroundColor: 'blue',
  },
  facebook_login_text: {
    color: 'white',
  },
  google_login_button: {
    backgroundColor: 'white',
  },
  google_login_text: {
    color: 'black',
  },
  guest_login_text: {
    color: 'black',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
