export type SkillBase = {
    name: string;
    weight: number;
    priority: number;
    since: number;
}

export type EventBase = {
    subject: string;
    description?: string | string[];
}

export type Events = (EventBase & {
    place?: string;
    since: string;
    until: string;
    summary?: boolean })[];
