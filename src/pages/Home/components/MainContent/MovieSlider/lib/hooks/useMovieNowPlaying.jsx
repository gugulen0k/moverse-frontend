import { useQuery } from "@tanstack/react-query";

import { MOVIE, NOW_PLAYING } from "@/shared/lib/constants";
import movieServices from '@/shared/lib/api/movie'

export const useMovieNowPlaying = () => {
  return useQuery({
    queryFn: () => {
      return movieServices.nowPlaying()
    },
    queryKey: [MOVIE, NOW_PLAYING],
    onSuccess: () => {
      console.log("got it")
    },
    onError: () => {
      console.log("failed")
    }
  })
}
