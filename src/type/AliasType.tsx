type AliasType = {
	key: number;
  districtCode: string;
  alias: string;
  created: {date:string, time:string, createdUser: string};
  edited: {date:string, time:string};
  actions: string[];
}

export type { AliasType }