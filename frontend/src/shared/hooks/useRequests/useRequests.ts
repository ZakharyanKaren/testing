import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

import { IResponse } from "@/shared/types";

type UseRequestsReturn<D extends object> = [IResponse<D> | undefined, boolean];

export const useRequests = <D extends object>(
  request: () => Promise<AxiosResponse<IResponse<D>, any>>
): UseRequestsReturn<D> => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<IResponse<D> | undefined>(undefined);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const result = await request();
        setData(result.data);
      } catch (error) {
        // Error Logic
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [request]);

  return [data, isLoading];
};

export const useSingleRequest = <D extends object>(
  request: () => Promise<AxiosResponse<D>>
): [D | undefined, boolean] => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<D | undefined>(undefined);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const result = await request();
        setData(result.data);
      } catch (error) {
        // Error Logic
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [request]);

  return [data, isLoading];
};
