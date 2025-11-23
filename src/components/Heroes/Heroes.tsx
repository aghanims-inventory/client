import { useEffect } from "react"
import ApiClient from "../../utils/ApiClient";

function Heroes() {
    useEffect(() => {
        const apiClient = new ApiClient();

        const fetchHeroes = async () => {
            const heroes = await apiClient.Get("v1/heroes");
            
            console.log(heroes);
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
