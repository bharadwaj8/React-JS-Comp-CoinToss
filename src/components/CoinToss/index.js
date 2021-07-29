import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {count: 0, isHead: 1, headCount: 0}

  coinToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)
    this.setState(prevState => ({count: prevState.count + 1}))
    if (tossResult === 0) {
      this.setState(prevState => ({headCount: prevState.headCount + 1}))
      this.setState({isHead: 1})
    } else {
      this.setState({isHead: 0})
    }
  }

  render() {
    const {count, isHead, headCount} = this.state

    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="sub-heading">Heads (or) Tails</p>
          <img
            src={
              isHead
                ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
            }
            className="image"
            alt="toss result"
          />
          <button className="button" type="button" onClick={this.coinToss}>
            Toss Coin
          </button>
          <div className="result">
            <p className="item">Total: {count}</p>
            <p className="item">Heads: {headCount}</p>
            <p className="item">Tails: {count - headCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
