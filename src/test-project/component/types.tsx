export interface teamCardType {
  id?:number;
  name:string;
  image:string;
  description:string;
  campaigns_count:number;
  leads_count:number;
  is_favorited:boolean;
  is_archived:boolean;
  created_at?:string
}

type Person = {
  id:number | undefined;
  name:string | undefined;
  avatar:string | undefined;
}

export interface currentUser extends Person {
  notifications_count:number | undefined;
}

export interface activityInterface {
  id?:number;
  person:Person,
  action:string,
  target:string;
  created_at?:string;
}

export type mock_data_interface = {
  teams:teamCardType[];
  activities:activityInterface[];
  current_user:currentUser;
}