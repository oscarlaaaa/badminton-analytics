export interface Player {
  name: string;
  event: string;
  country: string | null;
  id: string | null;
  playHand: string | null;
  birthDate: string | null;
  height: number | null;
  imgLink: string | null;
}

export interface Match {
  startDate: string | null;
  winnerId: string;
  loserId: string;
  tournamentId: string;
  duration: number | null;
  winnerPoints: number | null;
  loserPoints: number | null;
  setCount: number | null;
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

export interface HeadToHeadRecord {
  opponent: string;
  wins: number;
  losses: number;
}
