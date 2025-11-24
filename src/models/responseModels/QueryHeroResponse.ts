export default interface QueryHeroResponse {
    id: number;
    name: string;
    displayName: string;
    iconUrl: string | null;
    imageUrl: string | null;
    attributeId: number;
    attackTypeId: number;
    formattedAttribute: string;
    formattedAttackType: string;
}