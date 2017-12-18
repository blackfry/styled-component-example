import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Container, Image, LogoBanner, Logo, TitleText, Text } from './composite'

describe('Test suite for App', () => {
  it('Container snapshot', () => {
    const component = renderer.create(
      <Container />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Image snapshot', () => {
    const component = renderer.create(
      <Image />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  
  it('LogoBanner snapshot', () => {
    const component = renderer.create(
      <LogoBanner />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  
  it('Logo snapshot', () => {
    const component = renderer.create(
      <Logo />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  
  it('TitleText snapshot', () => {
    const component = renderer.create(
      <TitleText />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  
  it('Text snapshot', () => {
    const component = renderer.create(
      <Text />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})