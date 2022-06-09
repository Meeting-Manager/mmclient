import { MeetingParticipant } from "./meeting-participant.models";
import { Participant } from "./participant.models";

export class Meeting {
  id: number;
  dateTime: Date;
  protocol: string;
  meetingName: string;
  meetingUsers: MeetingParticipant[];
  constructor(id: number,
    dateTime: Date,
    protocol: string,
    meetingName: string) {
    this.meetingUsers = [new MeetingParticipant()];
    this.id = id;
    this.dateTime = dateTime;
    this.protocol = protocol;
    this.meetingName = meetingName;

  }
}
