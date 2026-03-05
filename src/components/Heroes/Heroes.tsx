import { useEffect } from "react"
import AppConstants from "../../utils/AppConstants";
import { useGetPageFiltersQuery, useQueryHeroesQuery } from "../../store/api/heroesApi";
import "./Heroes.css";
import { Link } from "react-router";

function Heroes() {
    const { data: filters } = useGetPageFiltersQuery();
    const { data: heroes = [] } = useQueryHeroesQuery();

    useEffect(() => {
        document.title = `Heroes - ${AppConstants.PROJECT_NAME}`;
    }, [])

  return (
    <>
        <div className="component">
            <div className="title">
                Heroes
            </div>
            
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

                            <div className="hero-attribute-divider">
                                {element.name}
                            </div>

                            <div className="heroes">
                                {
                                    heroes.filter(hero => hero.attributeId === element.id).map(filteredHero => (
                                        <Link
                                                key={filteredHero.id}
                                                to={`/heroes/${filteredHero.id}`}
                                                className="hero-card"
                                                style={{
                                                    backgroundImage: `url(${filteredHero.imageUrl})`
                                                }}
                                            >
                                                <div className="hero-name">
                                                    {filteredHero.displayName}
                                                </div>
                                        </Link>
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
