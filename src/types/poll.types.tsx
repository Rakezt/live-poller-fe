export interface PollOption {
  text: string;
}

export interface PollData {
  question: string;
  options: PollOption[];
  createdBy?: string;
  createdAt?: string;
}

export interface Option {
  text: string;
  votes: number;
}
export interface Poll {
  _id: string;
  question: string;
  options: Option[];
  createdBy?: string;
}

export interface PollsState {
  all: Poll[];
  current?: Poll;
}

export interface VoteUpdatePayload {
  pollId: string;
  optionId: number;
  votes?: number;
}

export interface CreateUserPayload {
  name: string;
  role: UserRole;
  pollId?: string;
}

export enum UserRole {
  HOST = 'host',
  ATTENDEE = 'attendee',
}
