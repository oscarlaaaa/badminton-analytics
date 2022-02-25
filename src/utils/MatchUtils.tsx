import { Match, Set, Tournament } from "../types/DataTypes";

export const fetchMatches = async (uid: string): Promise<Match[]> => {
  return fetch(
    `https://api.badminton-api.com/match/player?player_id=${uid}&limit=500`
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
    `https://api.badminton-api.com/match?player_id=${playerid}&` 
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

export const fetchTournament = async (uid: string): Promise<Tournament> => {
  return fetch(
    `https://api.badminton-api.com/tournament?tournament_id=${uid}`
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

export const composeScores = (sets: Set[]): string[] => {
  const points: string[] = [];
  for(let set of sets) {
    points.push(`${set.winnerScore} - ${set.loserScore}`);
  }
  return points;
}

export const composeDurations = (sets: Set[]): number => {
  let duration: number = 0;
  for(let set of sets) {
    duration += set.duration;
  }
  return duration;
}