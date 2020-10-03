import React from 'react';
import {render} from '@testing-library/react';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import NavBar from './NavBar';
import ReactDOM from 'react-dom';


test("renders without crashing", () => {
    const root = document.createElement("div");
    ReactDOM.render(<Forecast />, root)
})

test("renders without crashing", () => {
    const root = document.createElement("div");
    ReactDOM.render(<CurrentWeather />, root)
})

test("renders without crashing", () => {
    const root = document.createElement("div");
    ReactDOM.render(<NavBar.WrappedComponent />, root)
})

test('renders the correct content', () => {
    const {getByLabelText} = render(<CurrentWeather />);
    getByLabelText("Search...");
})

test('renders the correct content', () => {
    const {getByLabelText} = render(<Forecast />);
    getByLabelText("Search...")
})

test('renders button correctly', () => {
    const {getByTestId, getByText} = render(<NavBar.WrappedComponent />);
    getByTestId("button")
    getByText("Current Weather")
})

test('renders button correctly', () => {
    const {getByTestId, getByText} = render(<NavBar.WrappedComponent />);
    getByTestId("buttons")
    getByText("Daily Forecast")
})