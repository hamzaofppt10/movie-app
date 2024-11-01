import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea ,ScrollBar } from "@/components/ui/scroll-area"
import { useAuth } from '../../contexts/authContext/authContext'

const SingleTv = ({movie}) => {
  const {mode} = useAuth()
  return (
    <div className={mode}>
        <Link to={`/tv/${movie.id}`} key={movie.id} >
                <Card className="flex flex-col bg-secondary text-foreground">
                  <CardHeader>
                    <CardTitle className="line-clamp-1 text-lg font-bold">{movie.title || movie.name}</CardTitle>
                    <CardDescription>Released: {new Date(movie.release_date || movie.first_air_date).toLocaleDateString()}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="aspect-[2/3] relative mb-4">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={`${movie.title} poster`}
                        className="object-cover rounded-md w-full h-full"
                      />
                    </div>
                    <Badge className="mb-2 bg-yellow-400 text-black">{movie.vote_average && movie.vote_average.toFixed(2)/2}</Badge>
                    
                    <ScrollArea className="h-24">
                      <p className="text-sm text-muted-foreground">{movie.overview}</p>
                      <ScrollBar orientation="vertical" className='bg-background rounded ' size={1} />

                    </ScrollArea>
                  </CardContent>
                </Card>
              </Link>
    </div>
  )
}

export default SingleTv