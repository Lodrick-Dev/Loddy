// src/Components/KeyboardSafeView.tsx
import React from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ViewStyle,
} from 'react-native';

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
};

const KeyboardSafeView = ({ children, style }: Props) => {
  return (
    <KeyboardAvoidingView
      style={[{ flex: 1 }, style]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {children}
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default KeyboardSafeView;
