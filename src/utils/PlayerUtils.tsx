import { TopPlayer, Player, HeadToHeadRecord } from "../types/DataTypes";

const SEARCH_LIMIT = 6;

export const fetchSuggestions = async (text: string): Promise<Player[]> => {
  text.replace(" ", "%20");
  return fetch(
    `https://api.badminton-api.com/player/search?name=${text}&limit=${SEARCH_LIMIT}`
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
        return Promise.resolve(result.data);
      },
      (error) => {
        console.log(error);
        return Promise.reject(error);
      }
    );
};

export const fetchPlayer = async (uid: string): Promise<Player> => {
  return fetch(`https://api.badminton-api.com/player?player_id=${uid}`)
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
        return Promise.resolve(result.data);
      },
      (error) => {
        console.log(error);
        return Promise.reject(error);
      }
    );
};
const MAX_LIMIT: number = 25;

export const fetchTopPlayers = async (event: string, limit: number): Promise<TopPlayer[]> => {
  if (limit > MAX_LIMIT) {
    return Promise.reject("Max limit is 25.");
  }

  return fetch(`https://api.badminton-api.com/player/top?event=${event}&limit=${limit}`)
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
        return Promise.resolve(result.data);
      },
      (error) => {
        console.log(error);
        return Promise.reject(error);
      }
    );
};

export const fetchHeadToHeadRecord = async (playerId: string, wins: boolean, descending: boolean, limit: number): Promise<HeadToHeadRecord[]> => {
  return fetch(`https://api.badminton-api.com/player/records?player_id=${playerId}&sort_wins=${wins}&desc=${descending}&limit=${limit}`)
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
        return Promise.resolve(result.data);
      }
    );
}
