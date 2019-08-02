import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
)

const Statistic = ({ text, value }) => {
    if (text === 'positive') {
        return (
            <tr>
                <td>{text}</td>
                <td>{value}</td>
                <td>%</td>
            </tr>
        )
    }
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const Statistics = ({ good, neutral, bad }) => {
    if (good === 0 && neutral === 0 && bad === 0) {
        return (
            <div>
                No feedback given
            </div>
        )
    }

    const all = good + neutral + bad
    const average = (good - bad)/all
    const positive = good*100/all
    
    return (
        <table>
            <tbody>
                <Statistic text='good' value={good} />
                <Statistic text='neutral' value={neutral} />
                <Statistic text='bad' value={bad} />
                <Statistic text='all' value={all} />
                <Statistic text='average' value={average} />
                <Statistic text='positive' value={positive} />
            </tbody>
        </table>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGood = () => {
        setGood(good + 1)
    }
    
    const handleNeutral = () => {
        setNeutral(neutral + 1)
    }

    const handleBad = () => {
        setBad(bad + 1)
    }

    return (
        <div>
            <h2>give feedback</h2>
            <p></p>
            <Button handleClick={handleGood} text='good' />
            <Button handleClick={handleNeutral} text='neutral' />
            <Button handleClick={handleBad} text='bad' />
            <p></p>
            <h2>statistics</h2>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));