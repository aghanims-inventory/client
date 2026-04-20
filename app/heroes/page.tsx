'use client';

import { useQueryHeroesQuery } from "@/core/api/heroes.service";
import { QueryHeroesResponse } from "@/types/heroes";

export default function Home() {
  const { data, isLoading, error } = useQueryHeroesQuery();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error loading heroes</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Heroes Page</h1>
      
      <ul className="list-disc pl-5">
        {data?.data?.map((hero: QueryHeroesResponse) => (
          <li key={hero.id}>{hero.displayName}</li>
        ))}
      </ul>
    </div>
  );
}
