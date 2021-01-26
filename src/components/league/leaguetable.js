import React, { Component } from "react"
import styled from 'styled-components'

const mainUrl = "https://swintonsplapi.azurewebsites.net/api/"

export default class LeagueTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teams: [],
      loading: false,
      split: [mainUrl] + "teams",
    }
  }

  async loadData() {
    const teamsurl = mainUrl + "teams"
    const teams_response = await fetch(teamsurl)
      .then(response => response.json())
      .then(items => this.setState({ teams: items }))
    const teams_string = JSON.stringify(teams_response)
    this.setState({ spilt: teams_string })
  }

  async componentDidMount() {
    this.loadData()
  }

  render() {
    return (
      <div>
        <h1>Premier League Table</h1>
        <table className="standings">
          <tbody>
            <tr className="table-head">
              <td className="team-position">Pos</td>
              <td className="team-name">Team</td>
              <td title="Matches played">MP</td>
              <td title="Goals for">GF</td>
              <td title="Goals against">GA</td>
              <td title="Goals difference">GD</td>
              <td title="Team points">Pts</td>
            </tr>
            {this.state.teams.map((i, idx) => (
              <tr key={i}>
                <td className="team-position">{idx + 1}</td>

                <td className="team-name">
                  <div className="crest">
                    <img src={i.logoUrl} alt={i.teamName} />
                  </div>
                  <span>{i.teamName}</span>
                </td>
                <td>{i.played}</td>
                <td>{i.goalsFor}</td>
                <td>{i.goalsAgainst}</td>
                <td>{i.goalDifference}</td>
                <td>{i.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}


const Table = styled.table`
  margin: 0 auto;
  border-collapse: collapse;
  background-color: #fff;
  color: #000;
  text-align: center;
  width: 100%;

  tr:last-child {
    border: none;
  }

  td {
    width: 35px;
  }
`
const TableContents = styled.tbody`
  font-size: 14px;
  line-height: 20px;
`
const TableHead = styled.tr`
  border-bottom: 1px solid #dedede;
  line-height: 2.3em;
  background-color: #ebebe6;
`
const Position = styled.td`
  font-weight: bold;
`
const Club = styled.td``
const MatchesPlayed = styled.td``
const TeamWins = styled.td`
  @media only screen and (max-width: 900px) {
    display: none;
  }
`
const TeamDraws = styled.td`
  @media only screen and (max-width: 900px) {
    display: none;
  }
`
const TeamLoses = styled.td`
  @media only screen and (max-width: 900px) {
    display: none;
  }
`
const TeamGoalsFor = styled.td`
  @media only screen and (max-width: 900px) {
    display: none;
  }
`
const TeamGoalsAgainst = styled.td`
  @media only screen and (max-width: 900px) {
    display: none;
  }
`
const TeamGoalsDifference = styled.td``
const TeamPoints = styled.td`
  font-weight: bold;
`
const TableRow = styled.tr`
  td {
    height: 50px;
  }
`
const TeamName = styled.td`
  font-weight: bold;
`
const TeamText = styled.span``
const TeamWrapper = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
`
const Crest = styled.div``
const CrestImage = styled.img``
const Points = styled.td`
  font-weight: bold;
`
const Postion = styled.td``

const Played = styled.td``
const Wins = styled.td`
  @media only screen and (max-width: 900px) {
    display: none;
  }
`
const Draws = styled.td`
  @media only screen and (max-width: 900px) {
    display: none;
  }
`
const Losses = styled.td`
  @media only screen and (max-width: 900px) {
    display: none;
  }
`
const GoalsFor = styled.td`
  @media only screen and (max-width: 900px) {
    display: none;
  }
`
const GoalsAgainst = styled.td`
  @media only screen and (max-width: 900px) {
    display: none;
  }
`
const GoalsDifference = styled.td``
