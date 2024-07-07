import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import {
    Card,
    CardContent,
} from "@/components/ui/card";

const Projects = () => {
    return (
        <div className="self-center w-full px-20">
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6">
                      <span className="text-4xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}

          </CarouselContent>
          <CarouselPrevious />
            <CarouselNext />

        </Carousel>
        </div>

    );


}

export default Projects;