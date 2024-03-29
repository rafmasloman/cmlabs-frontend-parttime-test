import InggredientsApiService from '@/services/IngredientsServices';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const useGetFilterIngredients = (ingredientName?: string) => {
  const { query } = useRouter();

  const [ingredientFilter, setIngredientFilter] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await InggredientsApiService.GetIngredientsQueryByFilter(
          query.name as string,
        );
        setIngredientFilter(data);
      } catch (error) {}
    };

    fetchData();
  }, [query.name]);

  return { ingredientFilter };
};
