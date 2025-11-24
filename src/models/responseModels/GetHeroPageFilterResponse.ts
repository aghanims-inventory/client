type HeroPageFilterType = {
    id: number;
    name: string;
};

type GetHeroPageFilterAttributeResponse = HeroPageFilterType;
type GetHeroPageFilterAttackTypeResponse = HeroPageFilterType;
type GetHeroPageFilterStatTypeResponse = HeroPageFilterType;

export default interface GetHeroPageFilterResponse {
    attributeTypes: GetHeroPageFilterAttributeResponse[];
    attackTypes: GetHeroPageFilterAttackTypeResponse[];
    statTypes: GetHeroPageFilterStatTypeResponse[];
}