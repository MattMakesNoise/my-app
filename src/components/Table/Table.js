import React from "react";
import {Link} from "react-router-dom";
import "../css/Table.css";

const Table = (props) => {
    let table = props.standings[0];

    return (
        <div className="table">
            <div className="tableHead">
                {/* 1. Add a header for the table with data description */}
                <div className="position"><strong>Pos</strong></div>
                <div className="teamName"><strong>Team Name</strong></div>
                <div className="played"><strong>Played</strong></div>
                <div className="won"><strong>W</strong></div>
                <div className="drawn"><strong>D</strong></div>
                <div className="lost"><strong>L</strong></div>
                <div className="goalsFor"><strong>F</strong></div>
                <div className="goalsAgainst"><strong>A</strong></div>
                <div className="goalDifference"><strong>GD</strong></div>
                <div className="points"><strong>Pts</strong></div>
            </div>
            {/* 2. Loop through the data pulled from the array and output into each column */}
            {table.map((stand, i) => {
                return (
                    <Link to={`/teams/${stand.team.name}`} className="teamWrap">
                    {/* <div className="teamWrap"> */}
                        <div className="position">{(i+1)}</div>
                        <div className="teamName">{stand.team.name}</div>
                        <div className="played">{stand.all.played}</div>
                        <div className="won">{stand.all.win}</div>
                        <div className="drawn">{stand.all.draw}</div>
                        <div className="lost">{stand.all.lose}</div>
                        <div className="goalsFor">{stand.all.goals.for}</div>
                        <div className="goalsAgainst">{stand.all.goals.against}</div>
                        <div className="goalDifference">{stand.goalsDiff}</div>
                        <div className="points">{stand.points}</div>
                    {/* </div> */}
                    </Link>
                )
            })}
        </div>
    )
}

export default Table;