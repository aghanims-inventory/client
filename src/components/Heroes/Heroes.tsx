import { useEffect, useState } from "react"
import ApiClient from "../../utils/ApiClient";
import AppConstants from "../../utils/AppConstants";
import type QueryHeroResponse from "../../models/responseModels/QueryHeroResponse";
import type GetHeroPageFilterResponse from "../../models/responseModels/GetHeroPageFilterResponse";
import "./Heroes.css";

const apiClient = new ApiClient();

function Heroes() {
    const [filters, setFilters] = useState<GetHeroPageFilterResponse | null>(null);
    const [heroes, setHeroes] = useState<QueryHeroResponse[]>([]);

    async function getPageFilters(): Promise<void> {
        const filters = await apiClient.get<GetHeroPageFilterResponse>("v1/heroes/filters");

        setFilters(filters?.data);
    }

    async function getHeroes(): Promise<void> {
        const heroes = await apiClient.get<QueryHeroResponse[]>("v1/heroes");

        setHeroes(heroes?.data || []);
    }

    useEffect(() => {
        document.title = `Heroes - ${AppConstants.PROJECT_NAME}`;

        const fetchInitialData = async () => {
            await Promise.all([
                getPageFilters(),
                getHeroes()
            ]);
        };

        fetchInitialData();
    }, [])

  return (
    <>
        <div className="component">
            Heroes Page

            <div>
                {
                    filters?.attributeTypes?.map(element => (
                        <div key={element.id}>
                            {element.name}
                        </div>
                    ))
                }
            </div>

            <div>
                {
                    filters?.attackTypes?.map(element => (
                        <div key={element.id}>
                            {element.name}
                        </div>
                    ))
                }
            </div>

            <div>
                {
                    filters?.statTypes?.map(element => (
                        <div key={element.id}>
                            {element.name}
                        </div>
                    ))
                }
            </div>

            {/* <div>
                {
                    heroes.map(element => (
                        <div key={element.id}>
                            {element.displayName} - {element.formattedAttribute} - {element.formattedAttackType}
                        </div>
                    ))
                }
            </div> */}

            --

            <div>
                {
                    filters?.attributeTypes?.map(element => (
                        <div key={element.id} className="attributes">
                            {element.name}

                            <div className="heroes">
                                {
                                    heroes.filter(hero => hero.attributeId === element.id).map(filteredHero => (
                                        <div key={filteredHero.id}>
                                            {filteredHero.displayName}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
            
        </div>
    </>
  )
}

export default Heroes
