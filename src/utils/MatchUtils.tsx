import { Match, Set } from "../types/DataTypes";

export const fetchMatches = async (uid: string): Promise<Match[]> => {
  return fetch(
    `https://badminton-api.com/match/player?player_id=${uid}&limit=500`
  )
    .then(
      (res) => {
        return res.json();
      },
      (err) => {
        console.log(err);
        return Promise.reject(err);
      }
    )
    .then(
      (result) => {
        console.log(result);
        return Promise.resolve(result.data);
      },
      (error) => {
        console.log(error);
        return Promise.reject(error);
      }
    );
};

export const fetchSets = async (playerid: string, opponentid: string, tournamentid: string): Promise<Set[]> => {
  return fetch(
    `https://badminton-api.com/match?player_id=${playerid}&` 
    + `opponent_id=${opponentid}&tournament_id=${tournamentid}`
  )
    .then(
      (res) => {
        return res.json();
      },
      (err) => {
        console.log(err);
        return Promise.reject(err);
      }
    )
    .then(
      (result) => {
        console.log(result);
        return Promise.resolve(result.data);
      },
      (error) => {
        console.log(error);
        return Promise.reject(error);
      }
    );
};