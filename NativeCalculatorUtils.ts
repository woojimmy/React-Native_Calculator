import {NativeModules} from 'react-native';

export const executeCalculator = (
  action: 'plus' | 'minus' | 'multiply' | 'divide',
  numberA: number,
  numberB: number,
): Promise<number> => {
  return NativeModules.CalculatorModule.executeCalc(action, numberA, numberB);
};
