export interface Revenue {
    year: string;
    monthly_totals: Array<month>;
}

export interface month {
    month: string;
    amount: number;
}