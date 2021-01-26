import React, { Component } from "react"
import styled from "styled-components"
import "./Table.css"

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
      <Table>
        <TableContents>
          <TableHead>
            <Position>Pos</Position>
            <Club>Team Name</Club>
            <MatchesPlayed>Matches Played</MatchesPlayed>
            <TeamGoalsFor>Goals For</TeamGoalsFor>
            <TeamGoalsAgainst>Goals Against</TeamGoalsAgainst>
            <TeamGoalsDifference>Goal Diffrence</TeamGoalsDifference>
            <TeamPoints>Points</TeamPoints>
          </TableHead>
          {this.state.teams.map((i, idx) => (
            <TableRow>
              <Postion>{idx + 1}</Postion>
              <TeamName>
                <TeamWrapper>
                  <CrestImage src={i.logoUrl} alt={i.teamName} />
                  <TeamText>{i.teamName}</TeamText>
                </TeamWrapper>
              </TeamName>
              <GoalsFor>{i.goalsFor}</GoalsFor>
              <GoalsAgainst>{i.goalsAgainst}</GoalsAgainst>
              <GoalsDifference>{i.goalDifference}</GoalsDifference>
              <Played>{i.played}</Played>
              <Points>{i.points}</Points>
            </TableRow>
          ))}
        </TableContents>
      </Table>
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
const CrestImage = styled.img`
  margin-right: 8px;
`
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
