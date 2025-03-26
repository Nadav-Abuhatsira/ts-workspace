import { describe, it, beforeEach } from 'mocha';
import assert from 'assert';
import { spy } from 'sinon';
import { Calculator } from './Calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    it('should add two numbers correctly', () => {
      assert.strictEqual(calculator.add(2, 3), 5);
    });

    it('should handle negative numbers', () => {
      assert.strictEqual(calculator.add(-2, 3), 1);
    });
  });

  describe('subtract', () => {
    it('should subtract two numbers correctly', () => {
      assert.strictEqual(calculator.subtract(5, 3), 2);
    });
  });

  describe('multiply', () => {
    it('should multiply two numbers correctly', () => {
      assert.strictEqual(calculator.multiply(4, 3), 12);
    });
  });

  describe('divide', () => {
    it('should divide two numbers correctly', () => {
      assert.strictEqual(calculator.divide(6, 2), 3);
    });

    it('should throw error when dividing by zero', () => {
      assert.throws(() => calculator.divide(6, 0), /Division by zero is not allowed/);
    });
  });

  // Example of using Sinon spy
  it('should track method calls', () => {
    const calculatorSpy = spy(calculator, 'add');

    calculator.add(2, 3);

    assert.strictEqual(calculatorSpy.calledOnce, true);
    assert.strictEqual(calculatorSpy.calledWith(2, 3), true);
  });
});
