export type GetHeroResponse = {
    id: number;
    name: string;
    displayName: string;
    complexity: number;
    iconUrl?: string | null;
    imageUrl?: string | null;
    attributeId: number;
    attackTypeId: number;
    formattedAttribute: string;
    formattedAttackType: string;
};

export type QueryHeroesResponse = {
    id: number;
    name: string;
    displayName: string;
    iconUrl?: string | null;
    imageUrl?: string | null;
    attributeId: number;
    attackTypeId: number;
    formattedAttribute: string;
    formattedAttackType: string;
};
