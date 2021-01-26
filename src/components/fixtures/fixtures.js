import React, { Component } from "react"
import "./Table.css"

var gameweek = 19
var mainUrl = "https://swintonsplapi.azurewebsites.net/api/fixtures/?gameweek="
var stringUrl = mainUrl + gameweek
export default class GameweekFixtures extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fixtures: [],
      loading: false,
    }
  }

  async loadData() {
    const teams_response = await fetch(stringUrl)
      .then(response => response.json())
      .then(items => this.setState({ fixtures: items }))
  }

  async componentDidMount() {
    this.loadData()
  }

  render() {
    return (
      <div>
        <h1>Gameweek Fixtures</h1>
        <table className="standings">
          <tbody>
            <tr className="table-head">
              <td className="team-position">Home Team</td>
              <td>Score </td>
              <td className="team-name">Away Team</td>
            </tr>
            {this.state.fixtures.map((i, idx) => (
              <tr key={i}>
                <td className="team-name">
                  <div className="crest">
                    <img src={i.homeLogo} alt={i.homeTeamName} />
                  </div>
                  <span>{i.homeTeamName}</span>
                </td>
                <td>
                  {i.htgoals} : {i.atgoals}
                </td>
                <td>
                  <div className="crest">
                    <img src={i.awayLogo} alt={i.awayTeamName} />
                  </div>
                  <span>{i.awayTeamName}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
