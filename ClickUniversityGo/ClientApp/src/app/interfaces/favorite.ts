export interface Favorite {
  id: number;
  email: string;
  universityId: number;
};

export interface JoinedItem {
  id: number;
  email: string;
  universityId: number;
  universityName: string;
  website: string;
  state: string;
  costOnCampusInState: number;
  costOnCampusOutOfState: number;
  costOffCampusInState: number;
  costOffCampusOutOfState: number;
  percentAdmitted: number;
  undergradEnrollment: number;
  numAssociate: number;
  numBachelor: number;
  graduationRate: number;
  aCTComposite: number;
  sATReadWrite: number;
  sATMath: number;
  programEducation: number;
  programEngineering: number;
  programScience: number;
  programMath: number;
  programPhysicalScience: number;
  programBusiness: number;
};
