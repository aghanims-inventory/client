import { useEffect } from "react"
import ApiClient from "../../utils/ApiClient";
import type QueryHeroResponse from "../../models/responseModels/QueryHeroResponse";

function Heroes() {
    useEffect(() => {
        const apiClient = new ApiClient();

        const fetchHeroes = async () => {
            const heroes = await apiClient.get<QueryHeroResponse[]>("v1/heroes");
            
            console.log(heroes);

            // console.log(heroes?.data?.[0]?.name);
        };

        fetchHeroes();
    }, [])

  return (
    <>
        <div className="component">
            Heroes Page
        </div>
    </>
  )
}

export default Heroes
