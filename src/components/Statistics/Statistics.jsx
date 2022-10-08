import { Component } from 'react'
import styles from './Statistics.module.scss'

const {stat,stat__good,stat__neutral,stat__bad} = styles


export class Statistics extends Component {
    render() {
        const {good, neutral, bad, total, percentage} = this.props;
        return (
            <section className={stat}>
            <div>
            <p>Good: <span className={stat__good}>{good}</span></p>
            <p>Neutral: <span className={stat__neutral}>{neutral}</span></p>
            <p>Bad: <span className={stat__bad}>{bad}</span></p>
            <p>Total: {total}</p>
            <p>Positive feedback: {percentage}%</p>
            </div>
            </section>)
            }
}