// types.ts

import { StyleSheet } from 'react-native';

export interface AppTheme {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  error: string;
  placeholder: string;
}

export interface AuthState {
  email: string;
  password: string;
  loading: boolean;
  error: string;
}

export interface AuthActions {
  type: string;
  payload?: any;
}

export interface User {
  email: string;
  password: string;
  id: string;
  name: string;
}

export interface AuthContextValue {
  state: AuthState;
  actions: AuthActions;
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: 16,
    borderRadius: 4,
  },
  error: {
    color: 'red',
    marginBottom: 16,
  },
});