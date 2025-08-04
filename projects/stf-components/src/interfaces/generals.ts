export interface ItemSelect {
  key: string,
  value: string,
}

export interface IMonth {
  id: string,
  name: string,
}

export interface DiaCalendario {
  number: number;
  isFromCurrentMonth: boolean;
}

export interface SemanaCalendario {
  dias: (DiaCalendario | null)[];
}
