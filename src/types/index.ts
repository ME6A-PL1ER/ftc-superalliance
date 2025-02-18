export interface User {
    id: number;
    username: string;
    password: string;
}

export interface Team {
    id: number;
    name: string;
    members: string[];
    stats: Record<string, any>;
}

export interface PitFormData {
    teamId: number;
    data: Record<string, any>;
}

export interface ReconFormData {
    teamId: number;
    data: Record<string, any>;
}

export interface FormElement {
    id: string;
    title: string;
    type: string;
    options?: string[];
}