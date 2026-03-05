import { useEffect } from "react";
import { useParams } from "react-router";
import AppConstants from "../../utils/AppConstants";
import { useGetHeroByIdQuery } from "../../store/api/heroesApi";

function Hero() {
    const { id } = useParams<{ id: string }>();

    const heroId = id ? parseInt(id, 10) : NaN;
    const shouldSkip = !id || Number.isNaN(heroId) || heroId <= 0;
    
    const { data: hero, isLoading } = useGetHeroByIdQuery(heroId, { skip: shouldSkip });

    useEffect(() => {
        if (hero) {
            document.title = `${hero.displayName} - ${AppConstants.PROJECT_NAME}`;
        } else {
            document.title = `Hero - ${AppConstants.PROJECT_NAME}`;
        }
    }, [hero])

    if (isLoading) return <div>Loading...</div>;

    if (!hero) return <div>Hero not found</div>;

    return (
        <div className="hero">
            <h1>
                {hero.displayName}
            </h1>
        </div>
    );
}

export default Hero;