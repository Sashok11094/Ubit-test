// const { getHealthStatus } = require('../healthStatus.test.js') 
import { getHealthStatus } from '../healthStatus.js';

describe('getHealthStatus', () => {
  test('должен возвращать "healthy", когда здоровье больше 50', () => {
    const character = { name: 'Маг', health: 90 };
    expect(getHealthStatus(character)).toBe('healthy');
  })

    test('должен возвращать "healthy", когда здоровье больше 50', () => {
    const character = { name: 'Маг', health: 100 };
    expect(getHealthStatus(character)).toBe('healthy');
  })

    test('должен возвращать "healthy", когда здоровье больше 50', () => {
    const character = { name: 'Маг', health: 51 };
    expect(getHealthStatus(character)).toBe('healthy');
  })

    test('должен возвращать "wounded", когда здоровье равно 50', () => {
    const character = { name: 'Маг', health: 50 };
    expect(getHealthStatus(character)).toBe('wounded');
  })

  test('должен возвращать "wounded", когда здоровье больше 15 но не больше 50', () => {
    const character = { name: 'Маг', health: 30 };
    expect(getHealthStatus(character)).toBe('wounded');
  })

  test('должен возвращать "wounded", когда здоровье больше или равно 15, но не больше 50', () => {
    const character = { name: 'Маг', health: 15 };
    expect(getHealthStatus(character)).toBe('wounded');
  })

  test('должен возвращать "critical", когда здоровье меньше 15', () => {
    const character = { name: 'Маг', health: 14 };
    expect(getHealthStatus(character)).toBe('critical');
  })

  test('должен возвращать "critical", когда здоровье меньше 15', () => {
    const character = { name: 'Маг', health: 10 };
    expect(getHealthStatus(character)).toBe('critical');
  })

    test('должен возвращать "critical", когда здоровье меньше 15', () => {
    const character = { name: 'Маг', health: 1 };
    expect(getHealthStatus(character)).toBe('critical');
  })
  
})

