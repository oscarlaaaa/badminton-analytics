export interface Player {
  name: string;
  event: string;
  country: string | null;
  id: string | null;
  playHand: string | null;
  birthDate: string | null;
  height: number | null;
}

export interface Match {
  winnerId: string;
  loserId: string;
  tournamentId: string;
  duration: number | null;
}

export interface Set {
  winnerId: string;
  loserId: string;
  tournamentId: string;
  duration: number | null;
  round: 1;
  winnerScore: number | null;
  loserScore: number | null;
}

export interface Tournament {
  name: string;
  startDate: string;
  endDate: string;
  id: string;
}

export interface TopPlayer {
  winnerId: string;
  name: string;
  wins: number;
}