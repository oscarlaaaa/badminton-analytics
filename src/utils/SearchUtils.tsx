import { TopPlayer, Player } from "../types/DataTypes";

const SEARCH_LIMIT = 10;

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
        console.log(result);
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
        console.log(result);
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
        console.log(result);
        return Promise.resolve(result.data);
      },
      (error) => {
        console.log(error);
        return Promise.reject(error);
      }
    );
};
