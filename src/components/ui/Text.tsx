import React from 'react';
import {StyleSheet, Text as TextRN, TextStyle} from 'react-native';

interface Props {
  style?: TextStyle;
}

const Text: React.FC<Props> = ({children, style, ...rest}) => {
  return (
    <TextRN style={{...styles.text, ...style}} {...rest}>
      {children}
    </TextRN>
  );
};

export default Text;

const styles = StyleSheet.create({
  text: {
    color: '#212121',
  },
});
