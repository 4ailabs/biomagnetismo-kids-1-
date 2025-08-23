export interface ShockData {
  id: number;
  shock: string;
  description: string;
  conflict: string;
  pairs: string;
  benefits: string;
}

export interface KeyPointData {
  point: string;
  resonance: string;
  benefit: string;
}

export interface ConditionData {
    id: number;
    name: string;
    description: string;
    causes: string;
    pairs: string[];
}

export interface PostnatalShockData {
  id: number;
  name: string;
  examples: string[];
  physiologicalImpact: string;
  energeticImpact: string;
  pairs: string[];
}

export interface PathologyData {
    pathology: string;
    pairs: string;
    benefits: string;
}

export interface Module2ConflictData {
  id: number;
  conflict: string;
  description: string;
  ageRange: string;
  sensations: string;
  pairs: string;
  benefits: string;
}
