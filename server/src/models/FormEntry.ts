export interface FormEntry {
    id: number;
    formType: 'pit' | 'tracker';
    data: Record<string, any>;
    createdAt: Date;
    updatedAt: Date;
}