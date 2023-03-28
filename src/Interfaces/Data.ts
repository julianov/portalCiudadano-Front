/// RESPONSE
export interface IResponse{
  status: boolean;
  code: number | null;
  message: string;
  response: any | null;
}

/// FORMS
export interface IFormState {
  loading: boolean;
  error: string;
  finish: boolean;
  changing: boolean;
}

/// TOKENS
export interface IToken{
  token: string;
  expiration: Date | null;
}

/// User Data
export interface IUserData{
  id: number;
  cuil: string;
  prs_id: string;
  email: string;
  name: string;
  last_name: string;
  created_at: Date | null;
  updated_at: Date | null;
  email_verified_at: Date | null;
  deleted_at: Date | null;
}

/// User Contact
export interface IUserContact{
  ID: number;
  USER_ID: number;
  BIRTHDAY: Date | null;
  CELLPHONE_NUMBER: string;
  DEPARTMENT_ID: number;
  LOCALITY_ID: number;
  ADDRESS_STREET: string;
  ADDRESS_NUMBER: string;
  APARTMENT: string;
  CREATED_AT: Date | null;
  UPDATED_AT: Date | null;
  CELLPHONE_NUMBER_VERIFIED_AT: Date | null;
  DELETED_AT: Date | null;
}

/// User Roles
export interface IUserRol{
  type: string;
  level:number;
  message: string;
}

/// Locations
export interface ILocation{
  ID: number;
  NOMBRE: string;
  DEP_ID: number;
  DEPARTAMENTO: string;
  PRV_ID: number;
  PROVINCIA: string;
  PAI_ID: number;
  PAIS: string;
}